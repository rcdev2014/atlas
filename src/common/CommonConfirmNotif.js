import React from 'react'
import { Confirm } from 'semantic-ui-react'

const CommonConfirmNotif = ({
  open,
  onCancel,
  onConfirm
}) => {
  return (
    <>
      <Confirm
        open={open}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  )
}

export default CommonConfirmNotif