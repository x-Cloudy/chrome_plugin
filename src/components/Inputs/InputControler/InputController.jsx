import Radio from '../Radio/Radio'
import InputText from '../Text/InputText'
import InputSelect from '../Select/Select'
import './InputController.css'

const Input = ({
  label,
  placeholder,
  onChange,
  type = 'text',
  field,
  radio_options,
  options
}) => {

  const inputSwitcher = (type) => {
    switch (type) {
      case 'text':
        return <InputText field={field} placeholder={placeholder} onChange={onChange} />;

      case 'date':
        return <InputText type={'date'} field={field} placeholder={placeholder} onChange={onChange} />;
    
      case 'radio':
        return <Radio onChange={onChange} field={field} radio_options={radio_options} />;

      case 'select':
        return <InputSelect onChange={onChange} field={field} options={options} placeholder={placeholder} />;

      default:
        return <></>;
    }
  }

  return (
    <div className='input-container'>
      <p className='input-label'>{label}</p>
        {inputSwitcher(type)}
    </div>
  )
}

export default Input;