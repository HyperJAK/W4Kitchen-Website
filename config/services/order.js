export async function PlaceOrderForUser({address, cartId, userId}) {
  try {
    const response = await fetch(`http://localhost:3000/api/order/placeOrder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: address,
        delivery_method: 'plane',
        Carts_cart_id: cartId,
        Carts_User_user_id: userId,
      }),
    })

    const data = await response.json()

    console.log(data.message)

    if (data) {
      return data
    }

    return null
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}
