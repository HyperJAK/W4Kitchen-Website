import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function POST(req, res) {
  try {
    const bodyData = await req.json()
    console.log(bodyData)

    const {email, password} = bodyData

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
    const hashedDbKey = user.password

    console.log('Db pass: ' + hashedDbKey)

    // Check if the decrypted password matches the provided password
    if (hashedDbKey !== password) {
      return NextResponse.json({message: 'Invalid password'}, {status: 401})
    }

    return NextResponse.json(user, {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {message: `Internal Server Error ${error}`},
      {status: 500}
    )
  }
}
