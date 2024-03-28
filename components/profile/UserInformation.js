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

const UserInformation = ({data}) => {
  const [username, setUsername] = useState(data.username)
  const [email, setEmail] = useState(data.email)
  const [password, setPassword] = useState(data.password)
  const [cPassword, setCPass] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleButtonClick = (event) => {
    setNavToRecipeWithId(event.target.key)
  }

  return (
    <>
      {/*User information component in profile page*/}
      <div className={'flex flex-col gap-6 bg-accent p-5'}>
        {/*Title of component*/}
        <p
          className={`${rubikRegular.variable} w-full rounded-full bg-secondary p-3 font-rubik text-[1.2rem]`}>
          User Information
        </p>
        {/*Fields*/}
        <div className={'flex w-full flex-row gap-10'}>
          {/*Username*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Username</p>
            <EmailTextfield
              props={{
                email: username,
                setEmail: setUsername,
                title: 'Username',
              }}
            />
          </div>

          {/*Email*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Email</p>
            <EmailTextfield props={{email: email, setEmail: setEmail}} />
          </div>
        </div>
        <div className={'flex flex-row gap-10'}>
          {/*Password*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Password</p>
            <PasswordTextfield
              props={{
                password: password,
                setPassword: setPassword,
                showPassword: showPassword,
              }}
            />
          </div>

          {/*Confirm Password*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Confirm password</p>
            <PasswordTextfield
              props={{
                password: cPassword,
                setPassword: setCPass,
                title: 'Confirm password',
                showPassword: showPassword,
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInformation
