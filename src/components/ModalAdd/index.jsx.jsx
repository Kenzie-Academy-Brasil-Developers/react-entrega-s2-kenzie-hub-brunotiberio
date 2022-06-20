import { HeadLine, StyledButtonPrimary, StyledInput, StyledSelect } from "../../styles/global";
import { DivHeaderModal, StyledCloseModal, StyledDivModal, StyledFormAdd, ContainerButtonCadastrar } from "./style";
import React from 'react'


export default function ModalAdd({setModalAdd, modalAdd}) {
  return (
    <>
      <StyledDivModal>
      <DivHeaderModal>
        <HeadLine>Cadastrar Tecnologia</HeadLine>
        <StyledCloseModal gray1 onClick={() => setModalAdd(!modalAdd)}>X</StyledCloseModal>
      </DivHeaderModal>     

      <StyledFormAdd type='submit'>
        <label>Nome</label>
        <StyledInput correct placeholder="Digite a tecnologia" type="text" />

        <label>Selecionar status</label>
        <StyledSelect>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </StyledSelect>

        </StyledFormAdd>

        <ContainerButtonCadastrar>
          <StyledButtonPrimary primary type='submit'>Cadastrar Tecnologia</StyledButtonPrimary>
        </ContainerButtonCadastrar>

        
      
      </StyledDivModal>

    </>
  )
}


