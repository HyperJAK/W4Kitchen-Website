'use client'
import {useEffect, useState} from 'react'

import {
  ValidEmail,
  ValidPassword,
  SignUpFunc,
  EncryptPassword,
  ValidUsername,
  HashPassword,
  SignInFunc,
} from '@/config/Utilities'
import EmailTextfield from '@/components/shared/Validation/EmailTextfield'
import PasswordTextfield from '@/components/shared/Validation/PasswordTextfield'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import Title from '@/components/shared/Title'
import Image from 'next/image'
import {Rubik} from 'next/font/google'

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

const AuthRegister = () => {
  const handleAuthExternal = async (e) => {}

  return (
    <Link href={'/api/auth/login'}>
      <Button
        style={
          'justify-center w-50 flex flex-row border-solid border-secondary border-2 bg-white p-4 hover:bg-secondary hover:cursor-pointer flex-row flex text-opposite rounded-2xl hover:text-accent'
        }
        itemComponents={
          <>
            <p>Icon</p> <p> External Registration</p>
          </>
        }
        handle={handleAuthExternal}
      />
    </Link>
  )
}

export default AuthRegister
