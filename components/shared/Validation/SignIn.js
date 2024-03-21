import {useState} from 'react'
import Image from 'next/image'

const SignIn = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const button_style = {
    width: '100%',
    marginTop: '15px',
    borderRadius: '30px',
    height: '60px',
    color: 'white',
    backgroundColor: isHovered ? '#003049' : '#005f73', // Assuming DarkBlue and NormalBlue are defined elsewhere
  }

  return (
    <section className="min-h-screen overflow-auto bg-blue-300 bg-cover">
      <div className="container mx-auto flex h-full items-center justify-center py-5">
        <div className="w-full xl:w-10/12">
          <div className="flex flex-col rounded-xl bg-white p-4 xl:flex-row xl:p-8">
            <div className="hidden md:block md:w-1/2 lg:w-5/12">
              <Image
                src={''}
                alt="login form"
                className="rounded-l-xl"
                width={700}
                height={700}
              />
            </div>
            <div className="flex w-full items-center justify-center md:w-1/2 lg:w-7/12">
              <div className="w-full p-4 text-black md:p-8">
                <form>
                  <div className="mb-3 flex items-center pb-1">
                    <h1 className="mb-0 text-3xl font-bold">Sign In</h1>
                  </div>
                  <h5
                    className="mb-3 pb-3 font-normal"
                    style={{letterSpacing: '1px'}}>
                    Sign into your account
                  </h5>
                  <div className="form-outline mb-4"></div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="mb-2 w-full rounded-md border border-gray-300 p-3"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      className="mb-2 w-full rounded-md border border-gray-300 p-3"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4 pt-1">
                    <button
                      style={button_style}
                      className="rounded-md text-lg"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={() => {
                        /* Add your login functionality here */
                      }}>
                      Login
                    </button>
                  </div>
                  <a
                    href="/api/auth/login"
                    className="mb-4 block">
                    Login
                  </a>
                  <p
                    className="mb-5 pb-2"
                    style={{color: 'rgba(52, 52, 52, 0.8)'}}>
                    Don't have an account?{' '}
                    <a
                      href="#"
                      className="text-blue-600"
                      onClick={() => {
                        /* Add your register functionality here */
                      }}>
                      Register here
                    </a>
                  </p>
                  <a
                    href="#!"
                    className="text-sm text-gray-600">
                    Terms of use.
                  </a>
                  <a
                    href="#!"
                    className="ml-4 text-sm text-gray-600">
                    Privacy policy
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignIn
