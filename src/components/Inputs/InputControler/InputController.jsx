import Radio from '../Radio/Radio'
<<<<<<< Updated upstream
=======
import InputText from '../Text/InputText'
import InputSelect from '../Select/Select'
import PhoneInput from '../Phone/PhoneInput'
>>>>>>> Stashed changes
import './InputController.css'

const Input = ({
  label,
  placeholder,
  onChange,
  type = 'text',
  field,
<<<<<<< Updated upstream
  radio_options
}) => {
=======
  radio_options,
  options,
  value
}) => {

  const inputSwitcher = (type) => {
    switch (type) {
      case 'text':
        return <InputText field={field} placeholder={placeholder} onChange={onChange} value={value} />;

      case 'date':
        return <InputText type={'date'} field={field} placeholder={placeholder} onChange={onChange} value={value} />;
    
      case 'radio':
        return <Radio onChange={onChange} field={field} radio_options={radio_options} value={value} />;

      case 'select':
        return <InputSelect onChange={onChange} field={field} options={options} placeholder={placeholder} value={value} />;
        
      case 'phone':
        return <PhoneInput onChange={onChange} field={field} />;

      default:
        return <></>;
    }
  }

>>>>>>> Stashed changes
  return (
    <div className='input-container'>
      <p className='input-label'>{label}</p>

      {type === 'radio' && radio_options ?
        <Radio onChange={onChange} field={field} radio_options={['Masculino', 'Feminino']} />
        :
        type === 'select' ?
          <input
            type={type}
            name={field}
            style={{ width: '280px', height: '30px', paddingLeft: '.5rem' }}
            onChange={onChange}
            placeholder={placeholder}
          />
          :
          <input
            type={type}
            name={field}
            style={{ width: '280px', height: '30px', paddingLeft: '.5rem' }}
            onChange={onChange}
            placeholder={placeholder}
          />}
    </div>
  )
}

export default Input;