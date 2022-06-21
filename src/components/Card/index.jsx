import React from 'react'
import ModalExcluirAtualizar from '../ModalExcluirAtualizar'
import { StyledCardContainer, StyledTecnologyLevel, StyledTecnologyName } from './style'

export default function Card({ setModalAtualizarExcluir ,dados, handleModalAtualizarExcluir, atualizarCards, modalAtualizarExcluir }) {
  return (
    <>
    <StyledCardContainer onClick={handleModalAtualizarExcluir}>
        <StyledTecnologyName>{dados.title}</StyledTecnologyName>
        <StyledTecnologyLevel gray1>{dados.status}</StyledTecnologyLevel>
    </StyledCardContainer>
    {modalAtualizarExcluir && <ModalExcluirAtualizar setModalAtualizarExcluir={setModalAtualizarExcluir} atualizarCards={atualizarCards} dados={dados} handleModalAtualizarExcluir={handleModalAtualizarExcluir}/>}
    </>
  )
}
