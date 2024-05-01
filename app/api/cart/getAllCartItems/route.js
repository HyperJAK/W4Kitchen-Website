import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    console.log('Received request with id:', id)

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'SELECT p.* FROM products p, cart_items ci WHERE ci.Carts_cart_id = ? AND ci.Products_product_id = p.product_id;',
      [id]
    )
    await connection.release()

    console.log('Retrieved data:', data)

    if (!data || data.length === 0) {
      console.log('Cart not found')
      return NextResponse.json({message: 'Cart not found'}, {status: 404})
    }

    console.log('Returning data:', data)

    return NextResponse.json(data, {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {message: `Internal Server Error ${error}`},
      {status: 500}
    )
  }
}
