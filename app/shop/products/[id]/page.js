'use client'
import Image from 'next/image'
import Button from '@/components/shared/Button'
import {useEffect, useState} from 'react'
import Rating from '@/components/recipe/Rating'
import {Rubik} from 'next/font/google'
import {GetProductDetails} from '@/config/services/product'
import {AddProductToCart} from '@/config/services/cart'
import SuccessNotification from '@/components/shared/SuccessNotification'

const InterestData = {
  topInfo: [
    {
      iconPath: '/icons/beenhere.png',
      description: 'Professional chef’s approval',
    },
    {
      iconPath: '/icons/done.png',
      description: 'Safety checks',
    },
    {
      iconPath: '/icons/fast_forward.png',
      description: 'Fast equipment deliveries',
    },
  ],
  bottomInfo: [
    {
      dataNb: 10000,
      description: 'Recipes published',
    },
    {
      dataNb: 7000,
      description: 'Good ratings',
    },
    {
      dataNb: 100000,
      description: 'User reviews',
    },
    {
      dataNb: 100000,
      description: 'User reviews',
    },
  ],
}

const rubikBold = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['700'],
})

export default function SpecificRecipe({params}) {
  /*if (!recipe) {
    // Handle the case where no recipe data was found (optional)
    return <p>Recipe not found!</p>
  }*/
  const [productDetails, setProductDetails] = useState('')
  const [detailsHovered, setDetailsHovered] = useState(false)
  const [productAdded, setProductAdded] = useState(false)

  const handleAddToCart = async () => {
    const storedUser = localStorage.getItem('user')

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      try {
        const response = await AddProductToCart({
          userId: parsedUser.userId,
          productId: productDetails.product_id,
        })

        if (response) {
          setProductAdded(true)
        }
      } catch (e) {}
    }
  }

  const TitleAndPicDiv = () => {
    return (
      <div className={'mb-8 w-[100%] self-center rounded-2xl text-white'}>
        {/*We use a fetch in this component to get the user info so like username*/}

        <div
          className={
            'flex flex-row flex-wrap items-center justify-evenly gap-4 rounded-2xl bg-transparent align-middle'
          }>
          <Image
            src={productDetails.picture}
            alt={'product image'}
            width={800}
            height={400}
            className={'z-10 w-[600px]'}
          />

          {/*title and rating*/}
          <div className={'z-30 rounded-full'}>
            <p
              className={`${rubikBold.variable} font-rubik text-[3rem] text-opposite`}>
              {productDetails.name}
            </p>
            <p>
              <div className={'flex flex-row justify-center self-center'}>
                <Rating rating={productDetails.rating} />
              </div>
            </p>
          </div>
        </div>
      </div>
    )
  }

  const ButtonsChoiceDiv = () => {
    return (
      <div className={'flex flex-row flex-nowrap justify-center gap-36'}>
        <Button
          style={
            'justify-center w-[40%] flex flex-row border-solid border-secondary border-2 bg-secondary p-3 hover:bg-accent hover:cursor-pointer flex-row flex text-page rounded-full hover:text-opposite'
          }
          itemComponents={<p>Add to Cart</p>}
          handle={handleAddToCart}
        />
        <Button
          style={
            'justify-center w-[40%] flex flex-row border-solid border-secondary border-2 bg-secondary p-3 hover:bg-accent hover:cursor-pointer flex-row flex text-page rounded-full hover:text-opposite'
          }
          itemComponents={<p>Share Product</p>}
          handle={''}
        />
      </div>
    )
  }

  const ProductDescription = () => {
    return (
      <>
        {productDetails && (
          <>
            {/* description */}
            <div
              className={
                'flex h-fit flex-col flex-nowrap items-center justify-center gap-2 p-10 align-middle'
              }>
              {/*Title*/}
              <h2 className={`${rubikBold.variable} font-rubik text-[2rem]`}>
                Description
              </h2>

              {/* Product description*/}
              <div className={` block rounded-3xl bg-black/70 p-3 text-white`}>
                {productDetails.description}
              </div>
            </div>
          </>
        )}
      </>
    )
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')
    console.log('Product id is: ' + id)

    async function fetchData() {
      const productDetails = await GetProductDetails({id: id})

      if (productDetails) {
        console.log('Got Product ' + productDetails.product_id + ' details')
        setProductDetails(productDetails)
      } else {
        console.log('Failed to get product details')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (productAdded) {
      const timeout = setTimeout(() => {
        setProductAdded(false)
      }, 3000)

      return () => clearTimeout(timeout)
    }
  }, [productAdded, setProductAdded])

  return (
    <>
      {productDetails && (
        <main className="flex min-h-screen flex-col items-center justify-between gap-40 p-24 text-black">
          {/*Main div*/}
          <div
            className={
              'flex w-[90%] flex-col flex-nowrap rounded-2xl bg-accent p-10'
            }>
            <div className={'top-200 absolute w-[100%] self-center'}>
              {productAdded && (
                <SuccessNotification
                  message={'Product was added to your cart'}
                />
              )}
            </div>

            {/*title and picture div*/}
            <TitleAndPicDiv />
            {/*buttons choice div*/}
            <ButtonsChoiceDiv />
            {/*ingredients and prep method div*/}
            <ProductDescription />
          </div>
        </main>
      )}
    </>
  )
}
