'use client'
//font import
import {Rubik} from 'next/font/google'

//components
import Image from 'next/image'
import {useState} from 'react'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import EmailTextfield from '@/components/shared/Validation/EmailTextfield'
import PasswordTextfield from '@/components/shared/Validation/PasswordTextfield'

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

const rubikSemiBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['600'],
})

const rubikRegular = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400'],
})

const ResidentialInformation = ({data}) => {
  const [address, setAddress] = useState(data ? data.address : '')
  const [city, setCity] = useState(data ? data.city : '')
  const [country, setCountry] = useState(data ? data.country : '')

  return (
    <>
      {/*User information component in profile page*/}
      <div className={'flex flex-col gap-6 bg-accent p-5'}>
        {/*Title of component*/}
        <p
          className={`${rubikRegular.variable} w-full rounded-full bg-secondary p-3 font-rubik text-[1.2rem]`}>
          Residential Information
        </p>
        {/*Fields*/}
        <div className={'flex w-full flex-row gap-10'}>
          {/*Address*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Address</p>
            <EmailTextfield
              props={{email: address, setEmail: setAddress, title: 'Address'}}
            />
          </div>
        </div>
        <div className={'flex flex-row gap-10'}>
          {/*City*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>City</p>
            <EmailTextfield
              props={{email: city, setEmail: setCity, title: 'City'}}
            />
          </div>

          {/*Country*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Country</p>
            <EmailTextfield
              props={{email: country, setEmail: setCountry, title: 'Country'}}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResidentialInformation
