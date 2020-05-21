import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CommonCheckbox = ({
  onChange,
  name,
  checked,
  checkboxStyle,
  onClick
}) => {
  return (
    <div className="holder-checkbox">
      <Checkbox
        onChange={onChange}
        name={name}
        checked={checked}
        className={checkboxStyle}
        onClick={onClick}
      />
    </div>
  )
}

export default CommonCheckbox
