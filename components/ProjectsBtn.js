//next Image
import Image from 'next/image'

//next link
import Link from 'next/link'

//icon import
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = ({imageLink, redirectLink}) => {
  return (
    <div className={'z-50 mx-auto xl:mx-0'}>
      <Link
        href={redirectLink ? redirectLink : '/work'}
        className={
          'group relative flex h-[185px] w-[185px] items-center justify-center'
        }
        target={redirectLink ? '_blank' : ''}>
        <Image
          src={`/${imageLink}`}
          width={141}
          height={148}
          alt={''}
          className={
            'z-19 h-full max-h-[148px] w-full max-w-[141px] group-hover:animate-spin-slow'
          }
        />
        <HiArrowRight
          className={
            'absolute text-4xl transition-all duration-300 group-hover:text-5xl'
          }
        />
        <Image
          src={'/Ellipse-17.png'}
          width={141}
          height={148}
          alt={''}
          className={
            'group absolute h-full w-full animate-spin-slow group-hover:hidden'
          }
        />
        <Image
          src={'/Group-15.png'}
          width={141}
          height={148}
          alt={''}
          className={
            'group absolute z-20 hidden h-full w-full animate-spin-slow group-hover:flex'
          }
        />
      </Link>
    </div>
  )
}

export default ProjectsBtn
