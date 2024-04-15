import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    //Found out the hard way that its important to create new objects using the already available objects in req
    //Meaning we cannot directly write: const id = req.url.searchParams.get('id')
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'SELECT * FROM recipe WHERE recipe_id = ?',
      [id]
    )
    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'Recipe not found'}, {status: 404})
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
