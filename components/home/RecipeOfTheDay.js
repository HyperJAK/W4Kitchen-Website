//font import
import {Rubik} from 'next/font/google'

//next link
import Link from 'next/link'

//components
import Socials from '../Socials'
import Image from 'next/image'

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

const RecipeOfTheDay = () => {
  return (
    <div className={'z-30 flex flex-col items-center'}>
      {/* Recipe tag */}
      <div></div>
      {/* Recipe details */}
      <div
        className={
          'm-auto flex h-[400px] min-h-[400px] w-full min-w-[20%] flex-col items-center justify-center gap-4 rounded-2xl bg-accent/80 p-5 align-middle'
        }>
        {/* Recipe title and save icon */}
        <div
          className={
            'flex w-full flex-row items-center justify-between gap-6 p-2'
          }>
          <h1
            className={`flex-2/3 text-end text-2xl ${rubikBold.variable} font-rubik`}>
            Recipe name
          </h1>
          <h2 className={'flex-1 text-right'}>00</h2>
        </div>
        {/* Recipe picture box */}
        <Image
          src={'/testFood.jpg'}
          alt={'recipe image'}
          width={300}
          height={100}
          className={'rounded-2xl border-2 border-solid border-accent'}
        />
        {/* Recipe description */}
        <p
          className={
            'h-max-[20%] h-[20%] w-full justify-center text-center align-middle'
          }>
          Hello there this is my recipe desc
        </p>
        {/* Recipe more details link */}
        <a className={'pb-2'}>Click here to view recipe details</a>
      </div>
    </div>
  )
}

export default RecipeOfTheDay
