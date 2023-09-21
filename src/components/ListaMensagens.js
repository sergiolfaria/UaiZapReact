import React from 'react';
import ItemMensagem from './ItemMensagem';
import styled from 'styled-components';
const ListaMensagensContainer = styled.div`
  max-height: 85vh; 
  overflow-y: auto; 
  
  &::-webkit-scrollbar {
    width: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a3942; 
    border-radius: 5px; 
  }
`;

function ListaMensagens({ mensagens, deletarMensagem }) {
  return (
    <ListaMensagensContainer>
      {mensagens.map((mensagem, indice) => (
        <ItemMensagem key={indice} mensagem={mensagem} onDelete={() => deletarMensagem(indice)} />
      ))}
    </ListaMensagensContainer>
  );
}

export default ListaMensagens;
