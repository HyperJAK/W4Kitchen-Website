import pool from '/config/db'
import {NextResponse} from 'next/server'

export async function GET(req, res) {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection()

    // Replace with your actual query to fetch data
    const [data] = await connection.query('SELECT email FROM user')

    // Release the connection back to the pool
    await connection.release()

    return NextResponse.json(data, {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json({message: 'Failed to fetch data'})
  }
}
