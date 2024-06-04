import React from 'react'

const Input= (props) => {
const {type, placeholder, name} = props
  return (
    <input type={type}
    className="text-sm w-full rounded py-2 px-3 text-slate-700"
    placeholder={placeholder}
    name= {name}/> 

)
}

export default Input;