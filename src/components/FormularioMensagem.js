import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Formulario = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  flex: ${({ Remetente }) => (Remetente ? '0.2' : '1')}; 
  padding: 15px;
  border: none;
  color: #ffff;
  border-radius: 8px;
  background-color: #2a3942;
  font-size: 14px;
  margin-right: 10px;
  box-shadow: rgb(0 0 0 / 24%) 0px 6px 6px;
`;

const BotaoEnviar = styled.button`
  border: none;
  background-color: #128c7e;
  color: #fff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 24%) 0px 6px 6px;
`;

const IconeModificador = styled.div`
  color: #ffff; 
  font-size: 24px; 
  cursor: pointer; 
`;

function FormularioMensagem({ adicionarMensagem }) {
  const [remetente, setRemetente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const Submit = (e) => {
    e.preventDefault();
    if (remetente.trim() && conteudo.trim() != null) {
      if (remetente && conteudo) {
        adicionarMensagem({ remetente, conteudo });
        setRemetente('');
        setConteudo('');
      }
    }
  };

  return (
    <Formulario onSubmit={Submit}>
      <Input
        type="text"
        placeholder="Remetente"
        value={remetente}
        onChange={(e) => setRemetente(e.target.value)}
        Remetente={true} 
      />
      <Input
        type="text"
        placeholder="Digite uma mensagem..."
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        Remetente={false} 
      />
      <BotaoEnviar type="submit"><IconeModificador><FontAwesomeIcon icon={faPaperPlane} /></IconeModificador></BotaoEnviar>
    </Formulario>
  );
}

export default FormularioMensagem;
