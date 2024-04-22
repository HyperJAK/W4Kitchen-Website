import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const searchString = searchParams.get('id')

    const queryValue = `%${searchString}%`

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'SELECT * FROM recipe WHERE name LIKE ?',
      [queryValue] // Pass query parameters as an array
    )
    await connection.release()

    if (!data) {
      return NextResponse.json(
        {message: 'Recipe suggestions not found'},
        {status: 404}
      )
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
