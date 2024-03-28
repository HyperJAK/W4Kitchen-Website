'use client'
import {useEffect, useState} from 'react'
import {Rubik} from 'next/font/google'
import Button from '@/components/shared/Button'
import UserInformation from '@/components/profile/UserInformation'
import MainTopIntroduction from '@/components/profile/MainTopIntroduction'
import UserProfilePicDiv from '@/components/profile/UserProfilePicDiv'
import ResidentialInformation from '@/components/profile/ResidentialInformation'
import AboutMe from '@/components/profile/AboutMe'
import CreditCardInfo from '@/components/profile/CreditCardInfo'

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

const rubikRegular = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400'],
})

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
      <div>
        {profileData
          ? profileData.map((data) => {
              return (
                <div
                  className={`relative z-30 flex h-auto flex-col justify-center text-opposite ${rubikRegular.variable} font-rubik `}
                  key={data.id}>
                  {/*Div for picture and introductory text and button to edit*/}
                  <MainTopIntroduction data={data} />
                  {/*Div for info of user and his pfp*/}
                  <div className={'flex flex-col flex-wrap gap-20 lg:flex-row'}>
                    {/*Div for user info*/}
                    <div
                      className={
                        'ml-5 flex w-[50%] flex-col rounded-3xl lg:translate-y-[-5%]'
                      }>
                      {/*Title*/}
                      <p
                        className={`${rubikBold.variable} w-full rounded-tl-3xl rounded-tr-3xl bg-backupOppositeOfOpposite p-5 font-rubik text-[2rem] text-opposite`}>
                        Account Settings
                      </p>
                      {/*User Information*/}
                      <UserInformation data={data} />

                      {/*Residential info component*/}
                      <ResidentialInformation data={data} />

                      {/*About me info component*/}
                      <AboutMe data={data} />

                      {/*Credit card info component*/}
                      <CreditCardInfo data={data} />
                    </div>
                    {/*User pfp and other info*/}
                    <UserProfilePicDiv />
                  </div>
                </div>
              )
            })
          : 'Display a loading div here'}
      </div>
    </>
  )
}
