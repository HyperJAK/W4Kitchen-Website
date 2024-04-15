import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    const connection = await pool.getConnection()
    const [data] = await connection.query('SELECT * FROM recipe LIMIT 5')
    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'Recipe not found'}, {status: 404})
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
