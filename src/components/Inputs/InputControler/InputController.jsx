import Radio from '../Radio/Radio'
import './InputController.css'

const Input = ({
  label,
  placeholder,
  onChange,
  type = 'text',
  field,
  radio_options
}) => {
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