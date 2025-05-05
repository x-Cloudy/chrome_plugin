import { useState } from "react"
import Input from "../../components/Inputs/Input/Input";

export const LeadsPage = () => {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', gap: '10px 0px'}}>
      <Input name={'Nome'} id={'name'} handleChange={(e) => handleChange(e)}/>
      <Input name={'Email'} id={'email'} handleChange={(e) => handleChange(e)}/>
      <Input name={'Whatsapp'} id={'wpp'} handleChange={(e) => handleChange(e)}/>
      <Input name={'Colaborador'} id={'collaborator'} handleChange={(e) => handleChange(e)}/>
    </div>
  )
}

