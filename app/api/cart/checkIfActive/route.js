import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'select cart_id from carts where User_user_id = ? and status = 0 LIMIT 1;',
      [id]
    )
    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'Cart not found'}, {status: 404})
    }

    return NextResponse.json(data[0], {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {message: `Internal Server Error ${error}`},
      {status: 500}
    )
  }
}
