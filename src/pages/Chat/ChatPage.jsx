import { useState } from "react";
import CloseBtn from "../../components/Buttons/CloseBtn";
import bgChat from "../../assets/bgChat";
import "./chat.css";
import UserInfo from "../../components/User/UserInfo";
import PhoneInput from "../../components/Inputs/Phone/PhoneInput";


export const ChatStartPage = () => {
  const [ddd, setDdd] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [editMessage, setEditMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${bgChat})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="top-section">
        <h6 className="title-page">INICIAR CHAT</h6>
        <CloseBtn />
      </div>
      <div>
        <p
          style={{
            fontSize: "14px",
            color: "#54595FE8",
            height: "18px",
            fontWeight: "500",
          }}
        >
          Inicie uma conversa com um contato não salvo.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "350px",
          gap: "1rem 0",
          padding: "2rem 1rem",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <p className="phone-group">Número do WhatsApp</p>
          <PhoneInput 
            field="fullPhone" 
            initialDdd={ddd} 
            initialPhone={phone} 
            onChange={(e) => {
              const fullNumber = e.target.value;
              const dddPart = fullNumber.substring(1, 4); 
              const phonePart = fullNumber.substring(4); 
              setDdd(dddPart);
              setPhone(phonePart);
            }} 
          />
        </div>

        <div className="selects-row">
          <select
          value={option}
            onChange={(e) => setOption(e.target.value)}
            required
            className="styled-select"
            style={{ width: "190px" }}
          >
            <option value="" disabled hidden>
              TAB
            </option>
            <option value="1">Leopoldo</option>
            <option value="2">Barriga do aliçu</option>
            <option value="3">Tech Virgem</option>
          </select>

          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            required
            className="styled-select"
            style={{ width: "190px" }}
          >
            <option value="" disabled hidden>
              Enviar um modelo
            </option>
            <option value="1">Aramzinho?</option>
            <option value="2">Bê de calcinha</option>
            <option value="3">Salário em dia</option>
          </select>
        </div>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "1rem",
            color: "#54595FE8",
          }}
        >
          <input
            type="checkbox"
            checked={editMessage}
            onChange={(e) => setEditMessage(e.target.checked)}
            className="custom-checkbox"
            required
          />
          Editar mensagem antes do envio. (Apenas enviar texto)
        </label>

        <button type="submit" className="send-btn" disabled={isLoading}>
          {isLoading ? "Enviando..." : "ENVIAR"}
        </button>
        {message && (
          <div style={{ color: "green", marginTop: "0.5rem" }}>{message}</div>
        )}
      </form>
      <UserInfo />
    </div>
  );
};

export default ChatStartPage;
