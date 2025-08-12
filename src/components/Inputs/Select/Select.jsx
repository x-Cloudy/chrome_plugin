import Select from "react-select";
import "./Select.css"

const InputSelect = ({
  field,
  onChange,
  options,
  placeholder,
  customLabel = ''
}) => {
  return (
    <>
      {customLabel ?
        <Select
          className="input-select-custom"
          isClearable
          isSearchable
          placeholder={placeholder}
          name={field}
          options={options}
          getOptionLabel={(option) => `${option[customLabel]}`}
          getOptionValue={(option) => `${option[customLabel]}`}
          onChange={(e) => onChange({ ...e, name: field, select: true })}
        />
        : <Select
          className="input-select-custom"
          isClearable
          isSearchable
          placeholder={placeholder}
          name={field}
          options={options}
          onChange={(e) => onChange({ ...e, name: field, select: true })}
        />
      }
    </>
  )
}

export default InputSelect;