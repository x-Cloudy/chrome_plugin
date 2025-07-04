import { useEffect, useState } from 'react'
import './ContactInfoPage.css'

const Input = ({ label, placeholder, onChange, type = 'text' }) => {
  return (
    <div className='input-container'>
      <p className='input-label'>{label}</p>
      <input
        type={type}
        name={label}
        style={{ width: '280px', height: '30px', paddingLeft: '.5rem' }}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}

const ContactInfoPage = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    console.log('data', data)
  }, [data])

  const handleChange = (e) => {
    setData((prev) => ({
       ...prev,
      [e.target.name]: e.target.value
    })
    )
  }

  return (
    <div style={{ width: '100%', height: '100%', color: 'black' }}>
      <h5 className="contact-title">informações de contato</h5>
      <Input label={'Nome'} placeholder={'Nome completo'} onChange={(e) => handleChange(e)} />
      <Input label={'Telefone'} placeholder={'+55 00 000000-0000'} onChange={(e) => handleChange(e)} />
      <Input type={'date'} label={'Aniversário'} placeholder={'Aniversário'} onChange={(e) => handleChange(e)} />
      <Input label={'País'} placeholder={'País'} onChange={(e) => handleChange(e)} />

      <h5 className="contact-title">informações de venda</h5>

      <Input label={'País'} placeholder={'País'} onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ContactInfoPage;