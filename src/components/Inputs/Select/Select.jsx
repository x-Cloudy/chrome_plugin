import Select from "react-select";
import "./Select.css"

const InputSelect = ({
  field,
  onChange,
  options,
  placeholder
}) => {
  return (
    <Select
      className="input-select-custom"
      isClearable
      isSearchable
      placeholder={placeholder}
      name={field}
      options={options}
      onChange={(e) => onChange({...e, name: field, select: true})}
    />
  )
}

export default InputSelect;