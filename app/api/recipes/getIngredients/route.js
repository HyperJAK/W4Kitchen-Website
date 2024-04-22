import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'select distinct i.*, rhe.* from ingredient i, recipe_has_ingredient rhe, recipe re where rhe.Recipe_recipe_id = ? and rhe.Ingredient_ingredient_id = i.ingredient_id;',
      [id]
    )
    await connection.release()

    if (!data) {
      return NextResponse.json(
        {message: 'Ingredients not found'},
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
