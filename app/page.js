import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import Nav from '@/components/shared/Nav'
import RecipeOfTheDay from '@/components/home/RecipeOfTheDay'
import Socials from '@/components/Socials'

export default function Home() {
  return (
    <>
      <main className={'flex h-screen flex-col justify-center'}>
        <Image
          src={'/testFood.jpg'}
          alt={'featured recipe image'}
          layout={'fill'}
          className={'absolute z-10'}
        />
        {/*Featured recipe and socials sharing*/}
        <div className={'flex flex-row justify-evenly'}>
          <RecipeOfTheDay />
          <div className={'flex items-end'}>
            <Socials />
          </div>
        </div>
      </main>
    </>
  )
}
