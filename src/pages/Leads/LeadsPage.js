import { useState, createContext } from "react"
import Input from "../../components/Inputs/Input/Input";
import leadService from "../../service/lead.service";
import { AuthContext } from "../../context/authContext";

export const LeadsPage = () => {
  const authStore = createContext(AuthContext);

  const [form, setForm] = useState({
    collaborator_id: 88,
    origem: "admin",
    site_origem: "https://web.whatsapp.com/",
    utm_medium: "admin",
    urm_source: authStore.user?.name ?? '' 
  });

  const handleChange = (event) => {
    setForm(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', width: '100%', gap: '10px 0px'}}>
      <Input name={'Nome'} id={'nome'} handleChange={(e) => handleChange(e)}/>
      <Input name={'Email'} id={'email'} handleChange={(e) => handleChange(e)}/>
      <Input name={'Whatsapp'} id={'cel'} handleChange={(e) => handleChange(e)}/>
      <Input name={'Colaborador'} id={'collaborator_id'}/>

      <button onClick={() => leadService.createQuote(form)} className="create-lead-button">CRIAR LEAD</button>
    </div>
  )
}

