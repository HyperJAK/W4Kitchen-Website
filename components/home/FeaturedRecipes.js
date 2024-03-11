'use client'
//font import
import {Rubik} from 'next/font/google'

//This is just a demo of how the format of the json file should be returned
//in the API
const workSliderData = {
  slides: [
    {
      recipes: [
        {
          id: 45,
          title: 'Lasagna souflet',
          stars: 3,

          path: '/strawberryCake.png',
          criteria: ['45 mins', 4, 'intermediate'],
          description:
            'This is the ultra deluxe recipe of the celestial realm made using the most exquisite ingredients and most love!',
        },
        {
          id: 45,
          title: 'Lasagna souflet',
          stars: 3,

          path: '/strawberryCake.png',
          criteria: ['45 mins', 4, 'intermediate'],
          description:
            'This is the ultra deluxe recipe of the celestial realm made using the most exquisite ingredients and most love!',
        },
        {
          id: 45,
          title: 'Lasagna souflet',
          stars: 3,

          path: '/strawberryCake.png',
          criteria: ['45 mins', 4, 'intermediate'],
          description:
            'This is the ultra deluxe recipe of the celestial realm made using the most exquisite ingredients and most love!',
        },
      ],
    },
  ],
}

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

const FeaturedRecipes = () => {
  const [recipeName, setRecipeName] = useState('')

  const handleInputChange = (event) => {
    setRecipeName(event.target.value)
  }

  return (
    <div
      className={
        'relative z-50 flex w-full flex-row flex-wrap items-center justify-center gap-60 bg-page pb-[120px] pl-40 pr-40 pt-[120px] text-opposite'
      }>
      <div className={'z-20 items-center self-center'}>
        {/*Catchphrase*/}
        <p
          className={`${rubikBold.variable} text-center font-rubik text-[4rem] text-opposite`}>
          Our<span className={'text-secondary'}> Top</span>
          <br></br> recipes just <br></br> for{' '}
          <span className={'text-secondary'}>You</span>
        </p>
      </div>

      {/*Image div*/}
      <div className={'absolute left-0 top-0 z-10'}>
        <Image
          src={'/ellipseGreen.png'}
          alt={'rabbit image'}
          width={500}
          height={500}
          className={'rounded-2xl'}
        />
      </div>

      <div className={'w-[50%]'}>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation, Pagination]}
          className={'h-[650px]'}>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          {workSliderData.slides.map((slide, index) => {
            return slide.recipes.map((recipe, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    className={
                      'group relative flex h-max items-center justify-center overflow-hidden rounded-2xl bg-transparent'
                    }>
                    <div
                      className={
                        'relative flex flex-col items-center justify-center overflow-auto '
                      }>
                      {/*Image*/}
                      <Image
                        src={recipe.path}
                        width={400}
                        height={100}
                        alt={''}
                        className={
                          'z-20 rounded-xl transition-all duration-500 hover:translate-y-[10px] hover:border-2 hover:border-accent'
                        }
                      />
                      {/*Languages*/}
                      <div
                        className={
                          'flex flex-row flex-nowrap justify-center gap-x-2'
                        }>
                        {recipe.criteria.map((language, index) => {
                          return (
                            <div
                              key={index}
                              className={`border-pinkish mt-3 overflow-auto rounded-2xl border-2 bg-primary bg-opacity-30 p-2 lg:mb-3 ${rubikRegular.variable} font-rubik text-[12px] lg:text-[14px]`}>
                              {language}
                            </div>
                          )
                        })}
                      </div>
                      <div
                        className={`p-6 ${rubikRegular.variable} m-15 text-center font-rubik text-[11px] lg:text-[15px]`}>
                        {recipe.description}
                      </div>
                      <a
                        href={recipe.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          'hover:border-pinkish mb-10 rounded-2xl border-2 border-secondary bg-opacity-30 p-2 transition-all duration-300 hover:cursor-pointer hover:border-8'
                        }>
                        View Recipe
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedRecipes
