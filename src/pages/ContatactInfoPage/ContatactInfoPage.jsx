import { useEffect, useState } from 'react'
import InputController from '../../components/Inputs/InputControler/InputController'
import { ContactInfoService } from '../../service/contactInfo.service'
import './ContactInfoPage.css'

const ContactInfoPage = () => {
  const [data, setData] = useState({})
  const contactService = new ContactInfoService()

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

  const handleSave = async () => {
    try {
      await contactService.store(data)      
    } catch (error) {
      console.error('Err:', error)
    }
  }

  return (
    <div style={{ width: '100%', height: '100%', color: 'black' }}>
      <h5 className="contact-title">informações de contato</h5>

      <InputController label={'Nome'} field={'Name'} placeholder={'Nome completo'} onChange={(e) => handleChange(e)} />

      <InputController label={'Telefone'} field={'Phone'} placeholder={'+55 00 000000-0000'} onChange={(e) => handleChange(e)} />

      <InputController type={'date'} label={'Aniversário'} field={'birthday'} placeholder={'Aniversário'} onChange={(e) => handleChange(e)} />

      <InputController label={'País'} field={'country'} placeholder={'País'} onChange={(e) => handleChange(e)} />

      <InputController label={'Sexo'} field={'genery'} placeholder={'Sexo'} type={'radio'}
        radio_options={['Masculino', 'Feminino']} onChange={(e) => handleChange(e)} />

      <h5 className="contact-title">informações de venda</h5>

<<<<<<< Updated upstream
      <InputController label={'País'} placeholder={'País'} onChange={(e) => handleChange(e)} />
=======
      <InputController
        label={'Atividade'}
        field={'info_activity'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <InputController
        label={'Fase'}
        field={'info_fase'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <InputController
        label={'Nível'}
        field={'info_nivel'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <InputController
        label={'Fonte'}
        field={'info_font'}
        placeholder={''}
        type={'select'}
        onChange={(e) => handleChange(e)}
        options={activityOpitons} />

      <h5 className="contact-title">informações da empresa</h5>

      <InputController label={'Nome'} field={'info_business_name'} placeholder={'Nome da empresa'} onChange={(e) => handleChange(e)} />

      <InputController label={'Posição'} field={'info_business_position'} placeholder={'Nome da empresa'} onChange={(e) => handleChange(e)} />

      <h5 className="contact-title">tempo de acompanhamento</h5>

      <InputController type={'date'} label={'Contato em'}
        field={'time_conversation'} onChange={(e) => handleChange(e)} />

      <InputController type={'date'} label={'Editar em'}
        field={'time_conversation_edit'}  onChange={(e) => handleChange(e)} />

        <div style={{ display: 'flex', width: '100%', justifyContent: 'end', gap: '1rem', marginTop: '2rem'}}>
          <button className='action-btn-redefinir' onClick= {() => setData({})}>Redefinir</button>
          <button className='action-btn-save' onClick={handleSave}>Salvar</button>
        </div>
>>>>>>> Stashed changes
    </div>
  )
}

export default ContactInfoPage;