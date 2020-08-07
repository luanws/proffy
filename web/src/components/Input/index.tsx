import React, { InputHTMLAttributes } from 'react'
import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
}

const Input: React.FC<Props> = (props) => {
  const { label, name, ...rest } = props

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input