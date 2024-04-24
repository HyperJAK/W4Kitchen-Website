import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import Nav from '@/components/shared/Nav'
import ShopSearch from '@/components/shop/ShopSearch'
import FeaturedGadgets from '@/components/shop/FeaturedGadgets'

export default function Shop() {
  return (
    <>
      <main className="relative z-30 flex h-auto flex-col justify-center gap-y-[150px]">
        <ShopSearch />
        <FeaturedGadgets />
      </main>
    </>
  )
}
