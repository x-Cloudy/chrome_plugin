import { useState } from "react";
import { AnnotationService } from "../../service/annotation.service";
import "./annotations.css";

const Annotation = () => {
  const [anotacao, setAnotacao] = useState("");
  const annotationService = new AnnotationService();

  const handleSalvar = async (e) => {
    e.preventDefault();
    console.log('anotacao:', anotacao);
    try {
      const result = await annotationService.post({ text: anotacao });
      console.log('Resultado:', result);
      setAnotacao("");
    } catch (error) {
      console.error('Err:', error);
    }
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
