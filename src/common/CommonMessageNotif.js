import React from 'react'
import { Message } from 'semantic-ui-react'

const CommonMessageNotif = ({ hidden, header, content }) => {
  return <Message hidden={hidden} header={header} content={content} />
}

export default CommonMessageNotif
