import React from 'react'
import ModalExcluirAtualizar from '../ModalExcluirAtualizar'
import { StyledCardContainer, StyledTecnologyLevel, StyledTecnologyName } from './style'

export default function Card({ data, setModalAtualizarExcluir, dados, handleModalAtualizarExcluir, atualizarCards, modalAtualizarExcluir }) {
console.log(data)

  return (
    <>
    <StyledCardContainer onClick={handleModalAtualizarExcluir}>
        <StyledTecnologyName>{data.title}</StyledTecnologyName>
        <StyledTecnologyLevel gray1>{data.status}</StyledTecnologyLevel>
    </StyledCardContainer>
    {modalAtualizarExcluir && <ModalExcluirAtualizar setModalAtualizarExcluir={setModalAtualizarExcluir} atualizarCards={atualizarCards} dados={dados} handleModalAtualizarExcluir={handleModalAtualizarExcluir} data={data}/>}
    </>
  )
}
