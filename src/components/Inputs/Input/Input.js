import { useState, useRef } from "react";
import "./Input.css"

const Input = ({ id, type = 'text', name, handleChange }) => {
  const [focus, setFocus] = useState(false)
  const inputRef = useRef(null)

  return (
    <div className="input-box">
      <p className={focus || inputRef.current?.value.length > 0 ? 'label-custom-active' : 'label-custom'}>
        {name}
      </p>
      <input
        ref={inputRef}
        className="input-custom"
        id={id}
        type={type}
        name={name}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default Input;