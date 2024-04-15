import pool from '@/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'select distinct i.*, rhe.*, u.username, u.profilePic, u.email from review i, recipe_has_review rhe, recipe re, user u where rhe.Recipe_recipe_id = ? and rhe.Review_review_id = i.review_id and u.user_id = rhe.User_user_id;',
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
