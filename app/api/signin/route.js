import pool from '@/config/db'
import {NextResponse} from 'next/server'
import {DecryptPassword, EncryptPassword} from '@/config/Utilities'

export async function POST(req, res) {
  try {
    const bodyData = await req.json()
    console.log(bodyData)

    const {email, password} = bodyData

    // Decrypt the encrypted key, but for testing this isnt used since we are passing password unecrypted
    const decryptedKey = await DecryptPassword(password)

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'SELECT user_id, profilePic, email, password, username, registration_date  FROM user WHERE email = ?',
      [email]
    )
    await connection.release()

    //if no user found
    if (!data) {
      return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    const user = data[0]
    const encryptedDbKey = user.password

    // Decrypt the password from the database
    const decryptedDbKey = await DecryptPassword(encryptedDbKey)

    // Check if the decrypted password matches the provided password
    if (decryptedDbKey !== password) {
      return NextResponse.json({message: 'Invalid password'}, {status: 401})
    }

    return NextResponse.json(data, {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {message: `Internal Server Error ${error}`},
      {status: 500}
    )
  }
}
