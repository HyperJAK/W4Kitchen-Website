'use client'
import {useEffect, useState} from 'react'

export default function Profile({params}) {
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/profile?id=${params.id}`
        )

        const data = await response.json()

        setProfileData(data)
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
          {profileData
            ? profileData.map((data) => {
                return (
                  <div key={data.username}>
                    <p>Username: {data.username}</p>
                    <p>Email: {data.email}</p>
                  </div>
                )
              })
            : 'Nothing here'}
        </div>
      </main>
    </>
  )
}
