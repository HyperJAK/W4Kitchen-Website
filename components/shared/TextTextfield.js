import {FloatingLabel, Form} from 'react-bootstrap'
import {ValidEmail, ValidPassword} from '@/config/Utilities'
import SignIn from '@/components/shared/Validation/SignIn'

const TextTextfield = ({props}) => {
  const {text, setText, title} = props

  return (
    <Form.Control
      className="h-full w-full overflow-auto rounded-2xl border border-gray-300 bg-accent px-3 py-2 text-[1rem] focus:outline-none focus:ring-1 focus:ring-blue-500"
      type={title ? title : 'Text'}
      placeholder={title ? title : 'Text'}
      value={text}
      onChange={(e) => {
        if (e.target.value.length < 300) {
          setText(e.target.value)
        }
      }}
    />
  )
}

export default TextTextfield
