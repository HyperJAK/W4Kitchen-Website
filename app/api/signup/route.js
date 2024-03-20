import pool from '@/config/db'
import {NextResponse} from 'next/server'
import {DecryptPassword, EncryptPassword} from '@/config/Utilities'

export async function POST(req, res) {
  try {
    const bodyData = await req.json()
    console.log(bodyData)

    const {email, username, password} = bodyData

    //just for testing, later on remove it and encrypt directly after user enters password
    const encryptedKey = await EncryptPassword(password)

    // Now you can access email, password, and decryptedKey here and perform necessary operations

    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ')

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'INSERT INTO user (email, username, password, registration_date) VALUES (?, ?, ?, ?)',
      [email, username, encryptedKey, currentDate]
    )

    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'User not found'}, {status: 404})
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
