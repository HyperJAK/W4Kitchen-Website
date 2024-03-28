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
import TextTextfield from '@/components/shared/TextTextfield'

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

const AboutMe = ({data}) => {
  const [content, setContent] = useState(data ? data.description : '')

  return (
    <>
      {/*User information component in profile page*/}
      <div className={'flex flex-col gap-6 bg-accent p-5'}>
        {/*Title of component*/}
        <p
          className={`${rubikRegular.variable} w-full rounded-full bg-secondary p-3 font-rubik text-[1.2rem]`}>
          About Me
        </p>
        {/*Fields*/}
        <div className={'flex w-full flex-row gap-10'}>
          {/*About Me*/}
          <div className={'flex h-40 w-full flex-col gap-1'}>
            <p>About Me</p>
            <TextTextfield
              props={{
                text: content,
                setText: setContent,
                title: 'Description about me',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
