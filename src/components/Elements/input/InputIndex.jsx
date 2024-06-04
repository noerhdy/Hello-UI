import React from 'react'

const Input= (props) => {
const {type, placeholder, name, autoComplete} = props
  return (
    <input type={type}
    className="text-sm w-full rounded py-2 px-3 drop-shadow-sm text-slate-700"
    placeholder={placeholder}
    name= {name}
    autoComplete={autoComplete}
   /> 

)
}

export default Input;