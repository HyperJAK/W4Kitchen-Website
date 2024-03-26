import {useState} from 'react'

import {
  ValidEmail,
  ValidPassword,
  SignUpFunc,
  EncryptPassword,
  ValidUsername,
  HashPassword,
} from '@/config/Utilities'
import EmailButton from '@/components/shared/Validation/EmailButton'
import PasswordButton from '@/components/shared/Validation/PasswordButton'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import Title from '@/components/shared/Title'
import Image from 'next/image'
import {Rubik} from 'next/font/google'

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

const SignUp = ({setShowSignIn}) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPass] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSignup = async (e) => {
    e.preventDefault()

    if (
      ValidUsername(username) &&
      ValidEmail(email) &&
      ValidPassword(password) &&
      password === cPassword
    ) {
      console.log('Passed validation')
      try {
        console.log('Password (before hashing):', password)

        const hashedPass = await HashPassword({password})

        console.log('Password (after hashing): ' + hashedPass)

        try {
          // Assuming setUser and setCurrentScreen are defined elsewhere
          await SignUpFunc({email, password: hashedPass, username})
          console.log('Signup successful!') // Log success for debugging
        } catch (error) {
          // Handle specific errors (if possible)
          if (
            error.response &&
            error.response.data &&
            error.response.data.error
          ) {
            alert(error.response.data.error) // Display specific error message
          } else {
            alert('An unexpected error occurred. Please try again later.') // Generic error message
          }
          console.error('Signup failed:', error) // Log the entire error for debugging
        }
      } catch (error) {
        console.error('Error encrypting password:', error) // Log encryption error
        alert(
          'An unexpected error occurred during signup. Please try again later.'
        ) // Generic error message
      }
    } else {
      // Handle invalid form data (improve error messages as needed)
      alert('Please enter valid username, email, and password.')
    }
  }

  const handleRegistring = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className={
        'relative flex flex-col items-center justify-center gap-10 rounded-2xl border-2 border-secondary bg-page p-6 align-middle'
      }>
      <div className={'absolute bottom-0 right-0'}>
        <Image
          src={'/signup.png'}
          alt={'sign up'}
          width={200}
          height={200}
        />
      </div>

      {/*Title here*/}
      <div className={'flex flex-row self-center'}>
        <p
          className={`${rubikBold.variable} font-rubik text-[30px] text-opposite`}>
          <span className={'text-secondary'}>S</span>ign
          <span className={'text-secondary'}> u</span>p
        </p>
      </div>
      {/*Buttons and textfields here*/}
      <div className={'flex flex-col gap-4'}>
        {/*Username textfield here*/}
        <EmailButton
          props={{email: username, setEmail: setUsername, title: 'Username'}}
        />
        {/*Email + small info p under*/}
        <div className={'flex flex-col'}>
          <EmailButton props={{email: email, setEmail: setEmail}} />
          <p>You can use letters, numbers and periods</p>
        </div>
        {/*Password + confirm password + p info*/}
        <div className={'flex flex-col'}>
          <div className={'flex flex-row gap-2'}>
            <PasswordButton
              props={{
                password: password,
                setPassword: setPassword,
                showPassword: showPassword,
              }}
            />
            <PasswordButton
              props={{
                password: cPassword,
                setPassword: setCPass,
                title: 'Confirm password',
                showPassword: showPassword,
              }}
            />
          </div>
          <p>
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
        </div>
        {/*Show password checkbox*/}
        <div>
          <span className="mr-2">Show Password</span>
          <input
            type="checkbox"
            id="show-password"
            name="show-password"
            className="focus:ring-none h-4 w-4 rounded border border-gray-300 bg-white accent-blue-600 focus:ring-blue-500"
            checked={showPassword}
            onChange={handleShowPassword}
          />
        </div>
        {/*Sign up button*/}
        <Button
          style={
            'justify-center w-50 flex flex-row border-solid border-secondary border-2 bg-secondary p-4 hover:bg-accent hover:cursor-pointer flex-row flex text-page rounded-2xl hover:text-opposite'
          }
          itemComponents={<p>Sign Up</p>}
          handle={handleSignup}
        />
        {/*External logins and pic here*/}
        <Link href={'/api/auth/login'}>
          <Button
            style={
              'justify-center w-50 flex flex-row border-solid border-secondary border-2 bg-white p-4 hover:bg-secondary hover:cursor-pointer flex-row flex text-opposite rounded-2xl hover:text-accent'
            }
            itemComponents={
              <>
                <p>Icon</p> <p> External Registration</p>
              </>
            }
            handle={''}
          />
        </Link>

        {/*Sign ip button and text*/}
        <div
          className={'flex flex-row flex-wrap items-center justify-end gap-4'}>
          <p>Already have an account ?</p>
          <Button
            style={
              'justify-center w-50 flex flex-row border-solid border-secondary border-2 bg-opposite p-4 hover:bg-accent hover:cursor-pointer flex-row flex text-page rounded-2xl hover:text-opposite'
            }
            itemComponents={<p>Sign In</p>}
            handle={() => setShowSignIn(true)}
          />
        </div>
      </div>
    </div>
  )
}

export default SignUp
