//font imports
import {Sora} from 'next/font/google'

//font configs
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

//component imports
import Nav from './Nav'
import Logo from './Logo'

//main
const Layout = ({children}) => {
  return (
    <div
      className={`page h-screen w-screen bg-sitePng bg-cover bg-no-repeat text-white`}>
      {/*<TopLeftImg />*/}
      <Nav />
      {children}
    </div>
  )
}

export default Layout
