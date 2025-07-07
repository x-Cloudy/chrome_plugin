import { useEffect, useState } from 'react'
import InputController from '../../components/Inputs/InputControler/InputController'
import './ContactInfoPage.css'

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

      <InputController label={'Nome'} field={'Name'} placeholder={'Nome completo'} onChange={(e) => handleChange(e)} />

      <InputController label={'Telefone'} field={'Phone'} placeholder={'+55 00 000000-0000'} onChange={(e) => handleChange(e)} />

      <InputController type={'date'} label={'Aniversário'} field={'birthdate'} placeholder={'Aniversário'} onChange={(e) => handleChange(e)} />

      <InputController label={'País'} field={'country'} placeholder={'País'} onChange={(e) => handleChange(e)} />

      <InputController label={'Sexo'} field={'sex'} placeholder={'Sexo'} type={'radio'}
        radio_options={['Masculino', 'Feminino']} onChange={(e) => handleChange(e)} />

      <h5 className="contact-title">informações de venda</h5>

      <InputController label={'País'} placeholder={'País'} onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ContactInfoPage;