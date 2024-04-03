import Image from 'next/image'
import Button from '@/components/shared/Button'

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

export default function SpecificRecipe({params}) {
  /*if (!recipe) {
    // Handle the case where no recipe data was found (optional)
    return <p>Recipe not found!</p>
  }*/

  const UserInfoDiv = () => {
    return (
      <div className={'flex flex-row flex-nowrap'}>
        <Image
          src={''}
          alt={'profile pic'}
          width={50}
          height={50}
        />
        {/*We use a fetch in this component to get the user info so like username*/}
        <p>Username here</p>
        <p>here date of publish</p>
      </div>
    )
  }

  const TitleAndPicDiv = () => {
    return (
      <div className={'m-8 h-80 rounded-2xl bg-recipeCategoriesImg bg-cover '}>
        {/*We use a fetch in this component to get the user info so like username*/}
        <div
          className={
            'flex h-80 flex-col flex-nowrap items-center justify-evenly gap-4 rounded-2xl bg-black/30 align-middle'
          }>
          <div>
            <p>Recipe name here</p>
            <p>Stars here</p>
          </div>
          <div>
            <p>3 buttons here</p>
          </div>
        </div>
      </div>
    )
  }

  const ButtonsChoiceDiv = () => {
    return (
      <div className={'flex flex-row flex-nowrap justify-center gap-60'}>
        <Button />
        <Button />
      </div>
    )
  }

  const IngredientsAndPrep = () => {
    return (
      <div className={'flex flex-col flex-nowrap justify-center'}>
        {/*Titles*/}
        <div className={'flex flex-row flex-nowrap justify-center gap-60'}>
          <h1>title 1</h1>
          <h1>title 2</h1>
        </div>
        <div className={'flex flex-row flex-nowrap justify-center gap-60'}>
          <p>
            Heat canola and sesame oils in a large, nonstick skillet over
            medium-high heat. Add carrot and 1/4 cup green onion; cook, stirring
            constantly, for 2 minutes. Stir in garlic powder and ginger and cook
            for 2 minutes. Stir in rice, salt, and pepper; cook, stirring only
            once or twice, until rice is lightly browned, about 5 minutes. Stir
            in chicken and peas; cook for 2 minutes. Push rice mixture to the
            sides of the pan, creating a circle in the middle. Add butter to the
            center of the pan. When melted, pour eggs into the center. Cook
            eggs, stirring often, until almost set, about 3 minutes. Stir eggs
            into the rice mixture. Stir in soy sauce and rice vinegar; cook for
            2 more minutes. Serve immediately topped with Sriracha mayo and
            green onions.
          </p>
          <p>
            Heat canola and sesame oils in a large, nonstick skillet over
            medium-high heat. Add carrot and 1/4 cup green onion; cook, stirring
            constantly, for 2 minutes. Stir in garlic powder and ginger and cook
            for 2 minutes. Stir in rice, salt, and pepper; cook, stirring only
            once or twice, until rice is lightly browned, about 5 minutes. Stir
            in chicken and peas; cook for 2 minutes. Push rice mixture to the
            sides of the pan, creating a circle in the middle. Add butter to the
            center of the pan. When melted, pour eggs into the center. Cook
            eggs, stirring often, until almost set, about 3 minutes. Stir eggs
            into the rice mixture. Stir in soy sauce and rice vinegar; cook for
            2 more minutes. Serve immediately topped with Sriracha mayo and
            green onions.
          </p>
        </div>
      </div>
    )
  }

  const NutritionFacts = () => {
    return (
      <div className={'flex flex-col flex-nowrap justify-center'}>
        <h1>Title</h1>
        <div>
          <div className={'flex flex-row flex-wrap justify-evenly gap-5'}>
            {InterestData.bottomInfo.map((infoData) => {
              return (
                <div
                  key={infoData.description}
                  className={
                    'flex h-[180px] w-[180px] min-w-[180px] flex-col items-center justify-between rounded-2xl border-2 border-solid border-secondary p-6 text-center align-middle'
                  }>
                  {/*Icon / Main Text*/}
                  <h1 className={'text-2xl text-secondary'}>
                    {infoData.dataNb}
                  </h1>
                  {/*Informative text*/}
                  <p className={'text-opposite'}>{infoData.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between gap-40 p-24">
        {/*Main div*/}
        <div className={'flex w-[90%] flex-col flex-nowrap bg-accent'}>
          {/*User info div*/}
          <UserInfoDiv />
          {/*title and picture div*/}
          <TitleAndPicDiv />
          {/*buttons choice div*/}
          <ButtonsChoiceDiv />
          {/*ingredients and prep method div*/}
          <IngredientsAndPrep />
          {/*Nutrition facts div*/}
          <NutritionFacts />
        </div>
        {/*Reviews div*/}
        <div className={'flex w-[90%] flex-col flex-nowrap bg-accent'}>
          {/*title*/}
          <h1>User Reviews</h1>
          {/*sort div*/}
          <div></div>
          {/*reviews div*/}
          <div>
            {/*User info div*/}
            <UserInfoDiv />
            {/*Stars div*/}
            {/*review div*/}
            <p>
              Review is here and it is big, example: Heat canola and sesame oils
              in a large, nonstick skillet over medium-high heat. Add carrot and
              1/4 cup green onion; cook, stirring constantly, for 2 minutes.
              Stir in garlic powder and ginger and cook for 2 minutes. Stir in
              rice, salt, and pepper; cook, stirring only once or twice, until
              rice is lightly browned, about 5 minutes. Stir in chicken and
              peas; cook for 2 minutes. Push rice mixture to the sides of the
              pan, creating a circle in the middle. Add butter to the center of
              the pan. When melted, pour eggs into the center. Cook eggs,
              stirring often, until almost set, about 3 minutes. Stir eggs into
              the rice mixture. Stir in soy sauce and rice vinegar; cook for 2
              more minutes. Serve immediately topped with Sriracha mayo and
              green onions.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
