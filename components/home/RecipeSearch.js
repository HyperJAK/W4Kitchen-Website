'use client'
//font import
import {Rubik} from 'next/font/google'

//next link
import Link from 'next/link'

//components
import Socials from '../Socials'
import Image from 'next/image'
import {useState} from 'react'
import * as withClient from 'react'

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

const RecipeSearch = () => {
  const [recipeName, setRecipeName] = useState('')

  const handleInputChange = (event) => {
    setRecipeName(event.target.value)
  }

  return (
    <>
      {/*Main components parent*/}
      <div
        className={
          'z-50 flex w-full flex-row flex-wrap items-center justify-center gap-60 pl-40 pr-40'
        }>
        {/*Catchphrase and search textfield*/}
        <div className={'flex w-[775px] flex-col items-center justify-center'}>
          {/*Catchphrase*/}
          <p
            className={`${rubikBold.variable} text-center font-rubik text-[4rem] text-opposite`}>
            <span className={'text-secondary'}>Slogan</span> Here,
            <br></br> Stay with a <span className={'text-secondary'}>Beer</span>
          </p>
          {/*search textfield*/}
          <div
            className={
              'flex h-[60px] w-[80%] flex-row justify-between rounded-2xl border-white/40 bg-red-600'
            }>
            <input
              placeholder={'Search recipe'}
              type={'text'}
              onChange={handleInputChange}
              className={'textarea w-[90%] border-white/40'}></input>
            {/*buttons here*/}
            <div className={'flex flex-row'}>
              <Image
                src={'/icons/person.png'}
                alt={'edit icon'}
                width={30}
                height={30}
              />
              <Image
                src={'/icons/searchBtn.png'}
                alt={'search icon'}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>

        {/*picture*/}
        <div>
          <Image
            src={'/pot.png'}
            alt={'introductory pic'}
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  )
}

export default RecipeSearch
