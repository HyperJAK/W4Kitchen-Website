export async function GetUserInfo({id}) {
  try {
    const response = await fetch(`http://localhost:3000/api/profile?id=${id}`, {
      method: 'GET',
    })

    const data = await response.json()

    if (data) {
      return data
    }

    return data
  } catch (error) {
    console.error(error)
  }
}

export async function UpdateProfile({data}) {
  try {
    console.log('The username is: ' + data.username)
    console.log('The address is: ' + data.address)
    const response = await fetch('http://localhost:3000/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const resData = await response.json()

    console.log('RESPONSESSSS')
    //console.log(response.data.data)

    console.log(resData.message)
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}
