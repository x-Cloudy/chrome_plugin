import "./InputText.css"

const InputText = ({
  field,
  onChange,
  placeholder,
  type = 'text'
}) => {
  return (
    <input
      type={type}
      className="input-text-custom"
      name={field}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default InputText;