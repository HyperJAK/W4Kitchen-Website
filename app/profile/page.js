'use client'
import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import Nav from '@/components/shared/Nav'
import MainTopIntroduction from '@/components/profile/MainTopIntroduction'
import {useEffect, useState} from 'react'

export default function Profile() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const uId = 1 // Example user ID, you can assign it dynamically
        const response = await fetch(
          `http://localhost:3000/api/profile?id=${uId}`
        ) // Pass the user ID as a query parameter
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div>
          {userData
            ? userData.map((data) => {
                return (
                  <div key={data.username}>
                    <p>Username: {data.username}</p>
                    <p>Email: {data.email}</p>
                  </div>
                )
              })
            : ''}
        </div>
      </main>
    </>
  )
}
