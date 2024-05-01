let currentCartId = null
let currentUserId = null

const cartIdData = localStorage.getItem('currentCartId')
if (cartIdData !== null) {
  try {
    const parsedData = JSON.parse(cartIdData)
    if (parsedData.cartId !== undefined) {
      currentCartId = parsedData.cartId
    }
  } catch (error) {
    console.error('Error parsing cartId data:', error)
  }
}

const userData = localStorage.getItem('user')
if (userData !== null) {
  try {
    const parsedData = JSON.parse(userData)
    if (parsedData.userId !== undefined) {
      currentUserId = parsedData.userId
    }
  } catch (error) {
    console.error('Error parsing userId data:', error)
  }
}

export function setCurrentCartId(id) {
  currentCartId = id
  const cartForStorage = {
    cartId: id,
  }
  localStorage.setItem('currentCartId', JSON.stringify(cartForStorage))
}

export function setCurrentUserId(id) {
  currentUserId = id
  const userForStorage = {
    userId: id,
  }
  localStorage.setItem('user', JSON.stringify(userForStorage))
}

export function getCurrentCartId() {
  return currentCartId
}

export function getCurrentUserId() {
  return currentUserId
}
