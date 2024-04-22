import pool from '@/config/db'
import {NextResponse} from 'next/server'
import {forEach} from 'react-bootstrap/ElementChildren'

export async function GET(req, res) {
  try {
    //Found out the hard way that its important to create new objects using the already available objects in req
    //Meaning we cannot directly write: const id = req.url.searchParams.get('id')
    const url = new URL(req.url)
    const searchParams = new URLSearchParams(url.searchParams)
    const id = searchParams.get('id')

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'SELECT * FROM user WHERE user_id = ?',
      [id]
    )
    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    //Added this to fix problems with values that are null by default and giving them a default value
    const modifiedData = Object.fromEntries(
      Object.entries(data[0]).map(([key, value]) => [
        key,
        value === null ? 'Not filled' : value,
      ])
    )

    return NextResponse.json(modifiedData, {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {message: `Internal Server Error ${error}`},
      {status: 500}
    )
  }
}

export async function PUT(req, res) {
  try {
    const userData = await req.json()
    console.log(userData)

    let cardExp = null

    if (userData.card_expiration_date !== 'Not filled') {
      cardExp = userData.card_expiration_date
    }

    const connection = await pool.getConnection()
    const [data] = await connection.query(
      'UPDATE USER SET username = ?, email = ?, password = ?, address = ?, city = ?, country = ?, about_me = ?, card_number = ?, card_expiration_date = ?, card_cvv = ?, card_postal_code = ? WHERE user_id = ?',
      [
        userData.username,
        userData.email,
        userData.password,
        userData.address,
        userData.city,
        userData.country,
        userData.about_me,
        userData.card_number,
        cardExp,
        userData.card_cvv,
        userData.card_postal_code,
        userData.user_id,
      ]
    )
    await connection.release()

    if (!data) {
      return NextResponse.json({message: 'User not found'}, {status: 404})
    }

    console.log('Completed successfully the user update')
    return NextResponse.json({data}, {status: 200})
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {message: `Internal Server Error ${error}`},
      {status: 500}
    )
  }
}
