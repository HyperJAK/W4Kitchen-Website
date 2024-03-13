'use client'
//font import
import {Rubik} from 'next/font/google'

//components
import Image from 'next/image'
import {useState} from 'react'
import Button from '@/components/shared/Button'
import Link from 'next/link'

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

const CategoriesData = {
  categories: [
    {
      name: 'Diets',
      types: [
        {
          name: 'Gluton free',
        },
        {
          name: 'Daity free',
        },
        {
          name: 'Vegeterian',
        },
        {
          name: 'Vegan',
        },
      ],
    },
    {
      name: 'Cuisine',
      types: [
        {
          name: 'Italian',
        },
        {
          name: 'Mexican',
        },
        {
          name: 'Asian',
        },
        {
          name: 'Lebanese',
        },
      ],
    },
    {
      name: 'Meal Type',
      types: [
        {
          name: 'Breakfast',
        },
        {
          name: 'Lunch',
        },
        {
          name: 'Dinner',
        },
        {
          name: 'Snacks',
        },
      ],
    },
  ],
}

const MainTopIntroduction = () => {
  const [navToRecipeWithId, setNavToRecipeWithId] = useState('')

  const handleButtonClick = (event) => {
    setNavToRecipeWithId(event.target.key)
  }

  return (
    <>
      {/*Top Container with edit button and simple introduction text*/}
      <div
        className={
          'bg-profileMainImg relative z-50 flex w-full flex-col flex-wrap items-center justify-between gap-20 bg-cover bg-fixed bg-no-repeat pb-[50px] pl-40 pr-40 pt-[50px]'
        }></div>
    </>
  )
}

export default MainTopIntroduction
