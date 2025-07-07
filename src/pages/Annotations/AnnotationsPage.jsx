import { useState } from "react";
import "./annotations.css";

const Annotation = () => {
  const [anotacao, setAnotacao] = useState("");

  const handleSalvar = (e) => {
    e.preventDefault();
  };

  return (
    <div className="annotation-container">
      <h5 className="title-page">ADICIONAR ANOTAÇÕES</h5>

      <form onSubmit={handleSalvar} className="annotation-form">
        <textarea
          id="anotacao"
          value={anotacao}
          onChange={(e) => setAnotacao(e.target.value)}
          className="anotacao-textarea"
          placeholder="Digite sua anotação aqui..."
        />

        <div className="button-section">
          <button type="submit" className="salvar-btn">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Annotation;
