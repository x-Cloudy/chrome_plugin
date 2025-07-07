import { useEffect, useState } from 'react'
import InputController from '../../components/Inputs/InputControler/InputController'
import './ContactInfoPage.css'

const ContactInfoPage = () => {
  const [data, setData] = useState({})

  const activityOpitons = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' }
  ]

  useEffect(() => {
    console.log('data', data)
  }, [data])

  const handleChange = (e) => {
    if ('select' in e) {
      setData((prev) => ({
        ...prev,
        [e.name]: e.value
      })
      )
    } else {
      setData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      })
      )
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', color: 'black' }}>
      <h5 className="contact-title">informações de contato</h5>

      <InputController label={'Nome'} field={'name'} placeholder={'Nome completo'} onChange={(e) => handleChange(e)} />

      <InputController label={'Telefone'} field={'phone'} placeholder={'+55 00 000000-0000'} onChange={(e) => handleChange(e)} />

      <InputController type={'date'} label={'Aniversário'} field={'birthdate'} placeholder={'Aniversário'} onChange={(e) => handleChange(e)} />

      <InputController label={'País'} field={'country'} placeholder={'País'} onChange={(e) => handleChange(e)} />

      <InputController label={'Sexo'} field={'sex'} placeholder={'Sexo'} type={'radio'}
        radio_options={['Masculino', 'Feminino']} onChange={(e) => handleChange(e)} />

      <h5 className="contact-title">informações de venda</h5>

      <InputController
        label={'Atividade'}
        field={'activity'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <InputController
        label={'Fase'}
        field={'fase'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <InputController
        label={'Nível'}
        field={'nivel'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <InputController
        label={'Fonte'}
        field={'fonte'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <h5 className="contact-title">informações da empresa</h5>

      <InputController label={'Nome'} field={'enterprise_name'} placeholder={'Nome da empresa'} onChange={(e) => handleChange(e)} />

      <InputController label={'Posição'} field={'enterprise_position'} placeholder={'Nome da empresa'} onChange={(e) => handleChange(e)} />

      <h5 className="contact-title">tempo de acompanhamento</h5>

      <InputController type={'date'} label={'Contato em'}
        field={'chatOn'} onChange={(e) => handleChange(e)} />

      <InputController type={'date'} label={'Editar em'}
        field={'EditOn'}  onChange={(e) => handleChange(e)} />
    </div>
  )
}

export default ContactInfoPage;