import React, { SelectHTMLAttributes } from 'react'
import './styles.css'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  options: Array<{ value: string, label: string }>
}

const Select: React.FC<Props> = (props) => {
  const { label, name, options, ...rest } = props

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option
          value=""
          disabled
          selected
          hidden
        >Selecione uma matéria</option>
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >{option.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Select