import React from 'react'
import { Button } from 'semantic-ui-react'

const CommonButton = ({ type, btnText, className, onClick }) => {
  return (
    <>
      <Button type={type} className={className} onClick={onClick}>
        {btnText}
      </Button>
    </>
  )
}

export default CommonButton
