import React from 'react'
import { Select } from 'semantic-ui-react'

const CommonDropdown = ({  
  onChange,
  name,
  options,
  placeholder,
  dropdownClass,
  value,
  disabled,
  defaultValue
}) => {
  return (
    <>
      <Select
        onChange={onChange}
        name={name}
        className={dropdownClass}
        placeholder={placeholder}
        options={options}
        value={value}
        disabled={disabled}
        defaultValue={defaultValue}
      />
    </>
  )
}
export default CommonDropdown
