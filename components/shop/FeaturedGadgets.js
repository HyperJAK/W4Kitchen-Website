'use client'
//font import
import {Rubik} from 'next/font/google'

//This is just a demo of how the format of the json file should be returned
//in the API
/*const workSliderData = {
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
}*/

//components
import Socials from '../Socials'
import Image from 'next/image'
import {useEffect, useState} from 'react'
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

const FeaturedGadgets = () => {
  const [productName, setProductName] = useState('')
  const [products, setProducts] = useState([])

  const handleInputChange = (event) => {
    setRecipeName(event.target.value)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/shop/getFirst12`,
          {
            method: 'GET',
          }
        )

        const data = await response.json()

        setProducts(data)
      } catch (error) {}
    }
    fetchData()
  }, [])

  return (
    <div
      className={
        'relative z-50 flex w-full flex-col flex-wrap items-center justify-center gap-60 bg-page pb-[120px] pl-40 pr-40 pt-[120px] text-opposite'
      }>
      <div
        className={` mt-6 w-[90%] items-center rounded-full bg-secondary p-2 text-center text-white ${rubikBold.variable} font-rubik text-[2rem]`}>
        <p>Featured Gadgets</p>
      </div>

      {products && (
        <div className={'w-full min-w-[500px]'}>
          <Swiper
            spaceBetween={10}
            slidesPerGroup={4}
            slidesPerView={4}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation, Pagination]}
            className={'h-[400px]'}>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            {products.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="group relative flex h-max items-center justify-center overflow-hidden rounded-2xl bg-transparent">
                    <div className="relative flex flex-col items-center justify-center overflow-auto">
                      {/*Image*/}
                      <Image
                        src={product.picture}
                        width={200}
                        height={100}
                        alt={product.name}
                        className="z-20 rounded-xl transition-all duration-500 hover:translate-y-[10px] hover:border-2 hover:border-accent"
                      />
                      {/*products name*/}
                      <p
                        className={`${rubikBold.variable} text-center font-rubik text-[1.3rem] text-opposite`}>
                        {product.name}
                      </p>

                      {/*info*/}
                      <div className="flex flex-row flex-nowrap justify-center gap-x-2">
                        <div className="border-pinkish overflow-auto rounded-2xl border-2 bg-secondary p-1 font-rubik text-[0.4rem] text-white lg:mb-3 lg:text-[0.6rem]">
                          Rating: {product.rating}
                        </div>
                      </div>
                      <div className="border-pinkish overflow-auto rounded-2xl border-2 bg-opposite p-2 font-rubik text-[0.6rem] text-accent lg:mb-3 lg:text-[0.8rem]">
                        ${product.price}
                      </div>
                      <a
                        href={`/shop/products/${product.product_id}?id=${product.product_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:border-pinkish mb-10 mt-2 cursor-pointer rounded-2xl border-2 border-secondary bg-opacity-30 p-2 transition-all duration-300 hover:border-8">
                        View Product
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      )}
    </div>
  )
}

export default FeaturedGadgets
