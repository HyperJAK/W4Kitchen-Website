import {AES, enc} from 'crypto-js'

export function ValidAlphaInput(input) {
  const inputRegex = /^[a-zA-Z]+$/
  const isValid = inputRegex.test(input)

  return isValid
}

export async function EncryptPassword(pass) {
  const encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY

  const plaintext = pass
  const secretKey = encryptionKey

  // Encrypt id
  const ciphertext = await AES.encrypt(plaintext, secretKey).toString()

  return ciphertext
}

export async function DecryptPassword(pass) {
  const encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY

  const plaintext = pass
  const secretKey = encryptionKey

  // Decrypt
  const bytes = await AES.decrypt(plaintext, secretKey)
  const decryptedText = bytes.toString(enc.Utf8)

  return decryptedText
}

export function ValidPassword(pass) {
  var passRegex = new RegExp('^((?=.*?[A-Za-z])(?=.*?[0-9]).{6,})*?$')
  const isValid = passRegex.test(pass)

  if (pass.length === 0) {
    return false
  }

  return isValid

  /*
    * ^: Asserts the start of the string.
    (?=.*[A-Z]): Positive lookahead to ensure there is at least one uppercase letter.
    (?=.*\d): Positive lookahead to ensure there is at least one digit (number).
    (?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]): Positive lookahead to ensure there is at least one special character. Note: Modify the special characters within the square brackets if needed, and be cautious about characters that might be dangerous for SQL injection.
    .{8,}: Ensures that the total length of the password is at least 8 characters.
    $: Asserts the end of the string.
    * */
}

export function ValidEmail(email) {
  var emailRegex = new RegExp(
    '^([a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z])*?$'
  )
  if (email.length === 0) {
    return false
  }

  return emailRegex.test(email)
}

export async function SignInFunc({email, encrypted_password}) {
  try {
    const response = await fetch('http://localhost:3000/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: encrypted_password,
      }),
    })

    const data = await response.json()

    //console.log("RESPONSESSSS")
    //console.log(response.data.data)

    console.log(data.message)
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}

export async function SignUpFunc({email, encrypted_password}) {
  try {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        username: 'Testing',
        password: encrypted_password,
      }),
    })

    const data = await response.json()

    //console.log("RESPONSESSSS")
    //console.log(response.data.data)

    console.log(data.message)
  } catch (error) {
    //alert(error.response.data.error);
    console.log(error)
  }
}
