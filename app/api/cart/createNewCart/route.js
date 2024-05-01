import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function POST(req, res) {
  try {
    const bodyData = await req.json()
    console.log(bodyData)

    const {User_user_id} = bodyData

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'INSERT INTO carts (status, User_user_id) VALUES (?, ?)',
      [0, User_user_id]
    )

    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'Cart not found'}, {status: 404})
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
