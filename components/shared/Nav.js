'use client'
// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2'

// nav data
export const navData = [
  {name: 'home', path: '/', icon: <HiHome />},
  {name: 'about', path: '/about', icon: <HiUser />},
  {name: 'work', path: '/work', icon: <HiViewColumns />},
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
]

//Next.js linker
import Link from 'next/link'

//Next.js Router
import {usePathname} from 'next/navigation'
import Image from 'next/image'
import {Rubik} from 'next/font/google'
import Button from '@/components/shared/Button'
import {useState} from 'react'
import SignUp from '@/components/shared/Validation/SignUp'

const rubikRegular = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400'],
})

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

const Nav = () => {
  const pathName = usePathname()

  const [languageClicked, setLanguageClicked] = useState(false)
  const [profilePicClicked, setProfilePicClicked] = useState(false)
  const [id, setId] = useState(1)
  const [showAuth, setShowAuth] = useState(false)

  const handleSignInButtonClick = () => {
    setShowAuth(!showAuth)
    console.log('clicked')
    //handle other things when sign in clicked
  }

  const handleLanguageButtonClick = () => {
    setLanguageClicked(!languageClicked)
    console.log('clicked')
  }

  const handleProfileButtonClick = () => {
    setProfilePicClicked(!profilePicClicked)
  }

  const handleAccountClick = () => {
    /*handle account clicked*/
  }

  const handleDarkModeClick = () => {
    /*handle dark mode clicked*/
  }

  const handleContactUsClick = () => {
    /*handle contact us clicked*/
  }

  const handleAboutUsClick = () => {
    /*handle about us clicked*/
  }

  return (
    <>
      <div className={'z-50 flex flex-col'}>
        {/*Normal nav*/}
        <div
          className={
            ' my-auto flex h-auto w-full flex-row items-center justify-between bg-primary pl-4 pr-4'
          }>
          {/*Logo*/}
          <div>
            {/*<Image
            src={'/W4Kitchen.png'}
            alt={'website logo'}
            width={'213'}
            height={'43'}
          />*/}
            <p
              className={`${rubikBold.variable} font-rubik text-[30px] text-opposite`}>
              W<span className={'text-secondary'}>4</span>Kitchen
              <span className={'text-secondary'}>.</span>
            </p>
          </div>

          {/*IMP !!!!!!!!! change font to rubik same as design*/}
          {/*navigation options*/}
          <div
            className={`flex flex-row justify-center gap-x-10 transition-all ${rubikBold.variable} font-rubik text-[18px] text-opposite`}>
            <Link
              href={'/'}
              className={`${pathName === '/' ? 'border-b-4' : ''} transform border-b-secondary p-5 hover:translate-y-0.5 hover:cursor-pointer hover:border-b-4 hover:border-solid`}>
              Home
            </Link>

            <Link
              href={'/recipes'}
              className={`${pathName === '/recipes' ? 'border-b-4' : ''} transform border-b-secondary p-5 hover:translate-y-0.5 hover:cursor-pointer hover:border-b-4 hover:border-solid`}>
              Recipes
            </Link>

            <Link
              href={'/kitchenTips'}
              className={`${pathName === '/kitchenTips' ? 'border-b-4' : ''} transform border-b-secondary p-5 hover:translate-y-0.5 hover:cursor-pointer hover:border-b-4 hover:border-solid`}>
              Kitchen Tips
            </Link>

            <Link
              href={'/shop'}
              className={`${pathName === '/shop' ? 'border-b-4' : ''} transform border-b-secondary p-5 hover:translate-y-0.5 hover:cursor-pointer hover:border-b-4 hover:border-solid`}>
              Shop
            </Link>

            <Link
              href={'/news'}
              className={`${pathName === '/news' ? 'border-b-4' : ''} transform border-b-secondary p-5 hover:translate-y-0.5 hover:cursor-pointer hover:border-b-4 hover:border-solid`}>
              News
            </Link>
          </div>

          {/*buttons right*/}
          <div
            className={
              'my-auto flex flex-row items-center justify-center gap-x-5'
            }>
            {/*signin / logout button here*/}
            <Button
              itemComponents={<p>Sign In</p>}
              handle={handleSignInButtonClick}
            />
            {/*language chooser button here*/}
            <Button
              itemComponents={
                <>
                  <p>Eng</p>
                  <Image
                    src={'/icons/keyboard_arrow_down.png'}
                    alt={'arrow down'}
                    width={20}
                    height={20}
                  />
                </>
              }
              handle={handleLanguageButtonClick}
            />
            {/*Profile button here*/}
            <div
              className={'rounded-full bg-accent p-2'}
              onClick={handleProfileButtonClick}>
              <Image
                src={'/icons/person.png'}
                alt={'pfp pic'}
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>

        {/*drop down of profile click*/}
        <div
          className={`${profilePicClicked ? 'block' : 'hidden'} absolute right-0 top-16 mt-1 flex flex-row justify-end bg-transparent ${rubikSemiBold.variable} font-rubik`}>
          <div className={'flex w-full flex-col rounded-bl-2xl text-opposite'}>
            <Link
              href={`/profile?id=${id}`}
              as={`/profile/${id}`}
              onClick={handleProfileButtonClick}>
              <Button
                style={
                  'bg-accent/50 p-10 pr-40 hover:bg-secondary hover:cursor-pointer flex-row flex gap-2'
                }
                itemComponents={
                  <>
                    <p>Account</p>{' '}
                    <Image
                      src={'/icons/person.png'}
                      alt={'person image'}
                      width={20}
                      height={20}
                    />
                  </>
                }
              />
            </Link>

            <Button
              style={
                'bg-accent/50 p-10 pr-40 hover:bg-secondary hover:cursor-pointer flex-row flex gap-2'
              }
              itemComponents={
                <>
                  <p>Dark mode</p>{' '}
                  <Image
                    src={'/icons/person.png'}
                    alt={'person image'}
                    width={20}
                    height={20}
                  />
                </>
              }
              handle={handleDarkModeClick}
            />

            <Link
              href={'/contactUs'}
              onClick={handleProfileButtonClick}>
              <Button
                style={
                  'bg-accent/50 p-10 pr-40 hover:bg-secondary hover:cursor-pointer flex-row flex gap-2'
                }
                itemComponents={
                  <>
                    <p>Contact us</p>{' '}
                    <Image
                      src={'/icons/person.png'}
                      alt={'person image'}
                      width={20}
                      height={20}
                    />
                  </>
                }
                handle={handleContactUsClick}
              />
            </Link>

            <Link
              href={'/aboutUs'}
              onClick={handleProfileButtonClick}>
              <Button
                style={
                  'bg-accent/50 p-10 pr-40 hover:bg-secondary hover:cursor-pointer flex-row flex gap-2 rounded-bl-2xl'
                }
                itemComponents={
                  <>
                    <p>About us</p>{' '}
                    <Image
                      src={'/icons/person.png'}
                      alt={'person image'}
                      width={20}
                      height={20}
                    />
                  </>
                }
                handle={handleAboutUsClick}
              />
            </Link>
          </div>
        </div>
      </div>
      {showAuth ? <SignUp /> : ''}
    </>
  )
}

export default Nav
