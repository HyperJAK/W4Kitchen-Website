'use client'
//font import
import {Rubik} from 'next/font/google'

const workSliderData = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio Website',
          path: '/strawberryCake.png',
          languages: ['Next.js', 'Tailwind CSS'],
          description:
            'A portfolio website made through Next.js framework with tailwind CSS library implementation for each of styling and animating.',
          link: 'https://github.com/HyperJAK/Portfolio',
        },
        {
          title: 'Trip Booking Website',
          path: '/strawberryCake.png',
          languages: ['React.js', 'Node.js', 'MySQL'],
          description:
            'An end-to-end app that allows users to book flights and hotels through web. Developed a separate Node.js backend application using Node.js connected to MySQL database. Also Implemented a robust user management system to authenticate users.',
          link: 'https://github.com/HyperJAK/MobileDevFinalProj-reactjs.git',
        },
        {
          title: 'Trip Booking app',
          path: '/strawberryCake.png',
          languages: ['React Native', 'Node.js', 'MySQL'],
          description:
            'An end-to-end app that allows users to book flights and hotels through mobile. Developed a separate Node.js backend application using Node.js connected to MySQL database. Also Implemented a robust user management system to authenticate users.',
          link: 'https://github.com/HyperJAK/MobileDevFinalProj-reactNative.git',
        },
        {
          title: 'Car Dealership',
          path: '/strawberryCake.png',
          languages: ['JavaFX', 'MySQL'],
          description:
            'A car dealership UI application, connected to a local MySQL database. ',
          link: 'https://github.com/HyperJAK/CarDealership-Maven-Runnable.git',
        },
      ],
    },
    {
      images: [
        {
          title: 'Security Testing',
          path: '/strawberryCake.png',
          languages: ['React.js', 'Node.js', 'MySQL'],
          description:
            'Small website made for the purpose of implementing and testing security measures like: Authentication, Email otp, Database sensitive data encryption using AES 256 algorithm, Not robot verification, Duplicate Image detection by hash etc..',
          link: 'https://github.com/HyperJAK/CompSecFinalProj.git',
        },
        {
          title: 'Music Player',
          path: '/strawberryCake.png',
          languages: ['C#'],
          description:
            'A music player that plays your local music using public C# library.',
          link: 'https://github.com/HyperJAK/Music-Player-CSharp.git',
        },
        {
          title: 'AI Rock Paper Scissors',
          path: '/strawberryCake.png',
          languages: ['Python'],
          description:
            'A hand tracking AI app that recognizes the form of your hand, has the ability to detect two hands playing rock paper scissors and score the winner each.',
          link: 'https://github.com/PeekMe01/AIFingerCountingProject',
        },
        {
          title: 'Youtube Downloader',
          path: '/strawberryCake.png',
          languages: ['Python'],
          description:
            'A Python GUI app that uses a public library to download YouTube music, videos and playlists.',
          link: 'https://github.com/HyperJAK/Youtube-Downloader',
        },
      ],
    },
    {
      images: [
        {
          title: 'UX-UI W4Kitchen cooking',
          path: '/strawberryCake.png',
          languages: ['Figma'],
          description:
            'A Figma design of a cooking website and mobile application.',
          link: 'https://www.figma.com/file/7Ki5oDpHGewYVtXTnNBfpy/UI%2FUX-Design-Project-Sketches?node-id=0-1&t=ox3GwJIeYkUgUGUw-0',
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
        'z-50 flex w-full flex-row flex-wrap items-center justify-center sm:gap-20 xl:gap-60'
      }>
      <div className={'items-center self-center'}>
        {/*Catchphrase*/}
        <p
          className={`${rubikBold.variable} text-center font-rubik text-[4rem] text-opposite`}>
          Our<span className={'text-secondary'}> Top</span>
          <br></br> recipes just <br></br> for{' '}
          <span className={'text-secondary'}>You</span>
        </p>
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
          className={''}>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          {workSliderData.slides.map((slide, index) => {
            return slide.images.map((image, index) => {
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
                        src={image.path}
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
                        {image.languages.map((language, index) => {
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
                        {image.description}
                      </div>
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          'hover:border-pinkish mb-10 rounded-2xl border-2 border-accent bg-opacity-30 p-2 transition-all duration-300 hover:border-8'
                        }>
                        GitHub
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
