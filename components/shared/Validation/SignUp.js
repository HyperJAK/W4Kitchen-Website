import {useState} from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  FloatingLabel,
} from 'react-bootstrap'
import EmailAndPass from './EmailAndPass'
import {
  ValidEmail,
  ValidPassword,
  SignUpFunc,
  EncryptPassword,
} from '@/config/Utilities'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPass] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()

    if (
      ValidEmail(email) &&
      ValidPassword(password) &&
      password === cPassword
    ) {
      const encryptedPass = await EncryptPassword(password)

      try {
        // Assuming setUser and setCurrentScreen are defined elsewhere
        await SignUpFunc({email, encryptedPass})
      } catch (error) {
        alert(error.response.data.error)
      }
    } else {
      // Handle invalid form data
    }
  }

  const handleRegistring = (e) => {
    e.preventDefault()
  }

  const button_style = {
    width: '100%',
    marginTop: '15px',
    borderRadius: '30px',
    height: '60px',
    color: 'white',
    backgroundColor: isHovered ? '#00008B' : '#0074D9',
  }

  return (
    <section
      style={{
        backgroundColor: '#a8d2f0',
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'auto',
      }}>
      <Container className="h-100 py-5">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xl={10}>
            <Card style={{borderRadius: '1rem'}}>
              <Row className="g-0">
                <Col
                  md={6}
                  lg={5}
                  className="d-none d-md-block">
                  <Card.Img
                    src={''}
                    alt="login form"
                    className="img-fluid"
                    style={{borderRadius: '1rem 0 0 1rem', height: '700'}}
                  />
                </Col>
                <Col
                  md={6}
                  lg={7}
                  className="d-flex align-items-center">
                  <Card.Body className="p-lg-5 p-4 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Sign Up</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{letterSpacing: '1px'}}>
                        Create an account
                      </h5>
                      <div className="form-outline mb-4">
                        <EmailAndPass
                          props={{email, password, setEmail, setPassword}}
                        />
                        <FloatingLabel
                          controlId="floatingPassword"
                          label="Confirm Password">
                          <Form.Control
                            style={{
                              border:
                                cPassword === password
                                  ? '1px solid black'
                                  : '1px solid red',
                              marginTop: '20px',
                            }}
                            type="password"
                            placeholder="Confirm Password"
                            value={cPassword}
                            onChange={(e) => {
                              if (e.target.value.length < 50) {
                                setCPass(e.target.value)
                              }
                            }}
                          />
                        </FloatingLabel>
                      </div>
                      <div className="mb-4 pt-1">
                        <Button
                          style={button_style}
                          variant="dark"
                          size="lg"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          onClick={handleSignup}>
                          SignUp
                        </Button>
                      </div>
                      <a href="/api/auth/login">
                        Click me to use auth to login !!!
                      </a>
                      <p
                        className="pb-lg-2 mb-5"
                        style={{color: 'rgba(52, 52, 52, 0.8)'}}>
                        Already have an account?{' '}
                        <a
                          id={'signIn_link'}
                          onClick={handleRegistring}>
                          Sign In
                        </a>
                      </p>
                      <a
                        href="#!"
                        className="small text-muted">
                        Terms of use.
                      </a>
                      <a
                        href="#!"
                        className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SignUp
