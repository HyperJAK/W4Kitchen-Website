import {FloatingLabel, Form} from 'react-bootstrap'
import {ValidEmail, ValidPassword} from '@/config/Utilities'
import SignIn from '@/components/shared/Validation/SignIn'

const PasswordButton = ({props}) => {
  const {password, setPassword, title, showPassword} = props

  return (
    <Form.Control
      className="w-full rounded-full border border-gray-300 bg-accent px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      type={showPassword ? 'text' : 'Password'}
      placeholder={title ? title : 'Password'}
      value={password}
      onChange={(e) => {
        if (e.target.value.length < 60) {
          setPassword(e.target.value)
        }
      }}
    />
  )
}

export default PasswordButton
