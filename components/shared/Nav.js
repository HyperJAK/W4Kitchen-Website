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
import Logo from '@/components/shared/Logo'

const Nav = () => {
  const pathName = usePathname()

  return (
    <div className="navbar z-50 bg-base-100">
      <div className="navbar-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>

        <div className="bg-red dropdown z-50 flex xl:hidden">
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 flex w-52 gap-5 rounded-box p-2 shadow">
            <li>
              <Link
                href={'/'}
                className={`${pathName === '/' ? 'active link' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${pathName === '/recipes' ? 'active link' : ''}`}
                href="/recipes">
                Recipes
              </Link>
            </li>
            <li>
              <Link
                className={`${pathName === '/kitchenTips' ? 'active link' : ''}`}
                href="/kitchenTips">
                Kitchen Tips
              </Link>
            </li>
            <li>
              <Link
                className={`${pathName === '/shop' ? 'active link' : ''}`}
                href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`${pathName === '/news' ? 'active link' : ''}`}
                href="/news">
                News
              </Link>
            </li>
          </ul>
        </div>

        <Logo />
      </div>
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal flex gap-5 px-1">
          <li>
            <Link
              href={'/'}
              className={`${pathName === '/' ? 'active link' : ''}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === '/recipes' ? 'active link' : ''}`}
              href="/recipes">
              Recipes
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === '/kitchenTips' ? 'active link' : ''}`}
              href="/kitchenTips">
              Kitchen Tips
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === '/shop' ? 'active link' : ''}`}
              href="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName === '/news' ? 'active link' : ''}`}
              href="/news">
              News
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button className="btn btn-ghost">Newsletter</button>
            </li>
            <li>
              <button className="btn btn-ghost">SignIn</button>
            </li>
            <li>
              <details>
                <summary>Lang</summary>
                <ul className="p-2">
                  <li>
                    <button className="btn btn-ghost">Eng</button>
                  </li>
                  <li>
                    <button className="btn btn-ghost">Arabic</button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <button className="btn btn-circle btn-ghost">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge indicator-item badge-primary badge-xs"></span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Nav
