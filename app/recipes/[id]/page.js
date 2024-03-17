import Image from 'next/image'
import Logo from '@/components/shared/Logo'
import Nav from '@/components/shared/Nav'

export async function SpecificRecipeServer({query}) {
  const {id} = query

  // Replace with your actual data fetching logic
  const recipeData = await fetchRecipeData(id)

  if (!recipeData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      recipe: recipeData,
    },
  }
}

export default function SpecificRecipe({recipe}) {
  if (!recipe) {
    // Handle the case where no recipe data was found (optional)
    return <p>Recipe not found!</p>
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  )
}
