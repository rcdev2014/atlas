import React from 'react'
import { Form } from 'semantic-ui-react'

const CommonInput = ({
  error,
  errorContent,
  type,
  label,
  placeholder,
  name,
  className,
  value,
  onChange
}) => {
  return (
    <>
      <Form.Input
        error={
          error && {
            content: errorContent,
            pointing: 'below'
          }
        }
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        className={className}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default CommonInput
