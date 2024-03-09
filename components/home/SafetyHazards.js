//font import
import {Rubik} from 'next/font/google'

//next link
import Link from 'next/link'

//components
import Socials from '../Socials'
import Image from 'next/image'
import Button from '@/components/shared/Button'

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

const SafetyHazards = () => {
  const handleButtonClick = (event) => {
    alert('hi')
  }

  return (
    <>
      {/*Main components parent*/}
      <div
        className={
          'relative z-50 flex w-full flex-row flex-nowrap items-center justify-center gap-60 bg-page pb-[120px] pl-40 pr-40 pt-[120px]'
        }>
        <div className={'relative z-20 items-start self-start'}>
          {/*Catchphrase*/}
          <p
            className={`${rubikBold.variable} text-center font-rubik text-[4rem] text-opposite`}>
            <span className={'text-secondary'}> Safety</span>
            <br></br> Hazards
          </p>
        </div>
        {/*Image div*/}
        <div className={'absolute left-0 top-20 z-10'}>
          <Image
            src={'/safetyHazard.png'}
            alt={'rabbit image'}
            width={500}
            height={500}
            className={'rounded-2xl'}
          />
        </div>
        {/*Main info div*/}
        <div className={'flex w-[50%] flex-col flex-wrap gap-5 text-[1.2rem]'}>
          <p className={'text-opposite'}>
            <span className={'text-secondary'}>1- </span>When it comes to food
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            safety, it's crucial to be mindful of potential hazards that can
            pose risks to our health.
            <br />
            <br />
            <span className={'text-secondary'}>2- </span>One major concern is
            cross-contamination, where raw meats can transfer harmful bacteria
            to other foods if not handled and stored properly.
            <br />
            <br />
            <span className={'text-secondary'}>3- </span>Ensuring proper cooking
            temperatures is another key aspect to eliminate the risk of
            foodborne illnesses. Additionally, practicing good hygiene during
            food preparation, such as washing hands thoroughly and keeping
            utensils and surfaces clean, goes a long way in preventing
            contamination. <br />
            <br />
          </p>
          <Link href={'/recipes'}>
            <Button
              style={
                'justify-center flex flex-row border-solid border-secondary border-2 bg-secondary p-10 hover:bg-page hover:cursor-pointer flex-row flex text-page rounded-2xl hover:text-opposite'
              }
              itemComponents={<p>Learn More</p>}
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SafetyHazards
