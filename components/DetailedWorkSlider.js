// data
import Image from 'next/image'

const workSliderData = {
  slides: [
    {
      images: [
        {
          title: 'Portfolio Website',
          path: '/Projects Showcase/show1.jpeg',
          languages: ['Next.js', 'Tailwind CSS'],
          description:
            'A portfolio website made through Next.js framework with tailwind CSS library implementation for each of styling and animating.',
          link: 'https://github.com/HyperJAK/Portfolio',
        },
        {
          title: 'Trip Booking Website',
          path: '/Projects Showcase/show2.jpeg',
          languages: ['React.js', 'Node.js', 'MySQL'],
          description:
            'An end-to-end app that allows users to book flights and hotels through web. Developed a separate Node.js backend application using Node.js connected to MySQL database. Also Implemented a robust user management system to authenticate users.',
          link: 'https://github.com/HyperJAK/MobileDevFinalProj-reactjs.git',
        },
        {
          title: 'Trip Booking app',
          path: '/Projects Showcase/show3.jpeg',
          languages: ['React Native', 'Node.js', 'MySQL'],
          description:
            'An end-to-end app that allows users to book flights and hotels through mobile. Developed a separate Node.js backend application using Node.js connected to MySQL database. Also Implemented a robust user management system to authenticate users.',
          link: 'https://github.com/HyperJAK/MobileDevFinalProj-reactNative.git',
        },
        {
          title: 'Car Dealership',
          path: '/Projects Showcase/show4.jpeg',
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
          path: '/Projects Showcase/show5.jpeg',
          languages: ['React.js', 'Node.js', 'MySQL'],
          description:
            'Small website made for the purpose of implementing and testing security measures like: Authentication, Email otp, Database sensitive data encryption using AES 256 algorithm, Not robot verification, Duplicate Image detection by hash etc..',
          link: 'https://github.com/HyperJAK/CompSecFinalProj.git',
        },
        {
          title: 'Music Player',
          path: '/Projects Showcase/show6.jpeg',
          languages: ['C#'],
          description:
            'A music player that plays your local music using public C# library.',
          link: 'https://github.com/HyperJAK/Music-Player-CSharp.git',
        },
        {
          title: 'AI Rock Paper Scissors',
          path: '/Projects Showcase/show7.jpeg',
          languages: ['Python'],
          description:
            'A hand tracking AI app that recognizes the form of your hand, has the ability to detect two hands playing rock paper scissors and score the winner each.',
          link: 'https://github.com/PeekMe01/AIFingerCountingProject',
        },
        {
          title: 'Youtube Downloader',
          path: '/Projects Showcase/show8.jpeg',
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
          path: '/Projects Showcase/show9.jpeg',
          languages: ['Figma'],
          description:
            'A Figma design of a cooking website and mobile application.',
          link: 'https://www.figma.com/file/7Ki5oDpHGewYVtXTnNBfpy/UI%2FUX-Design-Project-Sketches?node-id=0-1&t=ox3GwJIeYkUgUGUw-0',
        },
      ],
    },
  ],
}

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react'

//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

//import required modules
import {FreeMode, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'

//icons
import {BsArrowRight} from 'react-icons/bs'
import {Roboto_Slab} from 'next/font/google'
import Link from 'next/link'

const roboto_slab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['400'],
})

import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const DetailedWorkSlider = () => {
  return (
    <motion.div
      variants={fadeIn('down', 0.6)}
      initial={'hidden'}
      animate={'show'}
      exit={'hidden'}
      className={'sm:h-[100%]'}>
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
        className={'sm:h-[100%]'}>
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
                            className={`mt-3 overflow-auto rounded-2xl border-2 border-pinkish bg-primary bg-opacity-30 p-2 lg:mb-3 ${roboto_slab.variable} font-robotoSlab text-[12px] lg:text-[14px]`}>
                            {language}
                          </div>
                        )
                      })}
                    </div>
                    <div
                      className={`p-6 ${roboto_slab.variable} m-15 text-center font-robotoSlab text-[11px] lg:text-[15px]`}>
                      {image.description}
                    </div>
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        'mb-10 rounded-2xl border-2 border-accent bg-opacity-30 p-2 transition-all duration-300 hover:border-8 hover:border-pinkish'
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
    </motion.div>
  )
}

export default DetailedWorkSlider
