import React from 'react';
import styled from 'styled-components';

const MensagemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ SouEu }) => (SouEu ? 'flex-end' : 'flex-start')};
  align-items: center;
  margin: 10px;
`;

const Remetente = styled.span`
  font-weight: bold;
  color: #fff;
`;

const ConteudoMensagem = styled.div`
  color: #ddd;
  border-radius: 8px;
  cursor: pointer;
  white-space: pre-wrap; 
`;

const BackgroundDaMsg = styled.div`
  background-color: ${({ SouEu }) => (SouEu ? '#128c7e' : '#2a3942')};
  padding: 1vh;
  border-radius: 8px;
  cursor: pointer;
`;


function quebrarTexto(texto, tamanhoMaximo) {
  const textoSemEspacosExcessivos = texto.replace(/\s+/g, ' ');

  const substrings = [];
  for (let i = 0; i < textoSemEspacosExcessivos.length; i += tamanhoMaximo) {
    substrings.push(textoSemEspacosExcessivos.slice(i, i + tamanhoMaximo));
  }
  return substrings;
}

function ItemMensagem({ mensagem, onDelete }) {
  if (!mensagem.conteudo || mensagem.conteudo.trim() === "") {
    return null; 
  }
  
  const SouEu = mensagem.remetente.toLowerCase().trim() === 'eu';
  const conteudoQuebrado = quebrarTexto(mensagem.conteudo, 50);

  return (
    <MensagemContainer SouEu={SouEu}>
      <BackgroundDaMsg SouEu={SouEu} onDoubleClick={onDelete}>
        {!SouEu && <Remetente>{mensagem.remetente}:</Remetente>}
        {conteudoQuebrado.map((linha, index) => (
          <ConteudoMensagem key={index} SouEu={SouEu}>{linha}</ConteudoMensagem>
        ))}
      </BackgroundDaMsg>
    </MensagemContainer>
  );
}

export default ItemMensagem;
