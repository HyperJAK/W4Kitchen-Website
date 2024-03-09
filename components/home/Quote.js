'use client'
//font import
import {Rubik} from 'next/font/google'

//components
import Socials from '../Socials'
import Image from 'next/image'
import {useState} from 'react'
import * as withClient from 'react'
//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//import required modules
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/swiper-bundle.css'

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

const Quote = () => {
  const [recipeName, setRecipeName] = useState('')

  const handleInputChange = (event) => {
    setRecipeName(event.target.value)
  }

  return (
    <>
      <div
        className={
          'relative z-50 flex w-full flex-row flex-wrap items-center justify-between bg-page pb-[120px] pl-40 pr-40 pt-[120px]'
        }>
        {/*Catchphrase and pic*/}
        <div className={'relative z-20 items-start self-start'}>
          {/*Catchphrase*/}
          <p
            className={`${rubikBold.variable} text-center font-rubik text-[4rem] text-opposite`}>
            <span className={'text-secondary'}> Quote</span> Of<br></br> the
            <span className={'text-secondary'}> Day</span>
          </p>
        </div>

        {/*Image div*/}
        <div className={'absolute left-0 top-40 z-10'}>
          <Image
            src={'/teacherBunny.png'}
            alt={'rabbit image'}
            width={500}
            height={500}
            className={'rounded-2xl'}
          />
        </div>

        {/*quote and author*/}
        <div
          className={
            'flex h-[280px] w-[50%] flex-col items-center justify-between self-center rounded-2xl border-2 border-solid border-primary p-10 text-opposite'
          }>
          {/*quote*/}
          <p className={'text-2xl'}>Where fire exists, cooks crisps</p>
          <p className={'text-2xl'}>
            By <span className={'text-secondary'}>JAK</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Quote
