import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import Nav from '@/components/shared/Nav'
import RecipeSearch from '@/components/home/RecipeSearch'
import Socials from '@/components/Socials'
import FeaturedRecipes from '@/components/home/FeaturedRecipes'
import InterestingInfo from '@/components/home/InterestingInfo'
import Quote from '@/components/home/Quote'
import AboutUsInfo from '@/components/home/AboutUsInfo'
import SafetyHazards from '@/components/home/SafetyHazards'

export default function Home() {
  return (
    <>
      <main
        className={
          'relative z-30 flex h-auto flex-col justify-center gap-y-[150px]'
        }>
        {/*All home page features*/}

        <RecipeSearch />
        <FeaturedRecipes />
        <InterestingInfo />
        <Quote />
        <AboutUsInfo />
        <SafetyHazards />
      </main>
    </>
  )
}
