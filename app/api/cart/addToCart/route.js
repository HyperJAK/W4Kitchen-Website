import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function POST(req, res) {
  try {
    const bodyData = await req.json()
    console.log(bodyData)

    const {Carts_cart_id, Carts_User_user_id, Products_product_id} = bodyData

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'INSERT INTO cart_items (Carts_cart_id, Carts_User_user_id, price, Products_product_id) VALUES (?, ?, ?, ?)',
      [Carts_cart_id, Carts_User_user_id, 100, Products_product_id]
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
