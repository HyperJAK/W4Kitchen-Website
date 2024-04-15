export async function GetRecipeDetails({id}) {
  try {
    console.log('Entered signup func')
    const response = await fetch(
      `http://localhost:3000/api/recipes/${id}?id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data = await response.json()

    console.log('RESPONSESSSS')
    console.log(data.recipe_id)

    console.log(data.message)
    console.log(data.User_user_id)

    if (data.User_user_id) {
      const recipePoster = {
        userId: data.User_user_id,
      }

      localStorage.setItem('recipe', JSON.stringify(recipePoster))
      console.log('Saved in local storage after recipe details retrieval')
    }

    return data
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}

export async function GetRecipeIngredients({id}) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/recipes/getIngredients?id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}

export async function GetRecipeReviews({id}) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/recipes/getReviews?id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}

export async function GetRecipePublisher({id}) {
  try {
    console.log('Entered signup func')
    const response = await fetch(
      `http://localhost:3000/api/recipes/getPublisher?id=${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}
