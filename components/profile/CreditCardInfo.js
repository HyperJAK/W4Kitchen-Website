'use client'
//font import
import {Rubik} from 'next/font/google'

//components
import Image from 'next/image'
import {useState} from 'react'
import Button from '@/components/shared/Button'
import Link from 'next/link'
import EmailTextfield from '@/components/shared/Validation/EmailTextfield'
import PasswordTextfield from '@/components/shared/Validation/PasswordTextfield'

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

const rubikRegular = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400'],
})

const CreditCardInfo = ({data}) => {
  const [cardNumber, setCardNumber] = useState(data ? data.cardNumber : '')
  const [expirationDate, setExpirationDate] = useState(
    data ? data.expirationDate : ''
  )
  const [cvv, setCvv] = useState(data ? data.cvv : '')
  const [postalCode, setPostalCode] = useState(data ? data.postalCode : '')

  return (
    <>
      {/*User information component in profile page*/}
      <div
        className={
          'flex flex-col gap-6 rounded-bl-3xl rounded-br-3xl bg-accent p-5'
        }>
        {/*Title of component*/}
        <p
          className={`${rubikRegular.variable} w-full rounded-full bg-secondary p-3 font-rubik text-[1.2rem]`}>
          Credit Card Info
        </p>
        {/*Fields*/}
        <div className={'flex w-full flex-row gap-10'}>
          {/*Card Number*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Card Number</p>
            <EmailTextfield
              props={{
                email: cardNumber,
                setEmail: setCardNumber,
                title: 'Card Number',
              }}
            />
          </div>
        </div>
        <div className={'flex flex-row gap-10'}>
          {/*Expiration Date*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Expiration Date</p>
            <EmailTextfield
              props={{
                email: expirationDate,
                setEmail: setExpirationDate,
                title: 'Expiration Date',
              }}
            />
          </div>

          {/*CVV*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>CVV</p>
            <EmailTextfield
              props={{email: cvv, setEmail: setCvv, title: 'CVV'}}
            />
          </div>

          {/*Postal Code*/}
          <div className={'flex w-full flex-col gap-1'}>
            <p>Postal Code</p>
            <EmailTextfield
              props={{
                email: postalCode,
                setEmail: setPostalCode,
                title: 'Postal Code',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreditCardInfo
