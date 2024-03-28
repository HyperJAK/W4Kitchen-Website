import {FloatingLabel, Form} from 'react-bootstrap'
import {ValidEmail, ValidPassword} from '@/config/Utilities'
import SignIn from '@/components/shared/Validation/SignIn'

const EmailTextfield = ({props}) => {
  const {email, setEmail, title} = props

  return (
    <Form.Control
      className="w-full rounded-2xl border border-gray-300 bg-accent px-3 py-2 text-[1rem] focus:outline-none focus:ring-1 focus:ring-blue-500"
      type={title ? title : 'Email'}
      placeholder={title ? title : 'Email'}
      value={email}
      onChange={(e) => {
        if (e.target.value.length < 60) {
          setEmail(e.target.value)
        }
      }}
    />
  )
}

export default EmailTextfield
