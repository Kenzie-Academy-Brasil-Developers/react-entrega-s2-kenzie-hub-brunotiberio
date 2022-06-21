import React from 'react'
import { StyledCardContainer, StyledTecnologyLevel, StyledTecnologyName } from './style'

export default function Card({ dados, handleModalAtualizarExcluir }) {

  return (
    <>
    <StyledCardContainer onClick={handleModalAtualizarExcluir}>
        <StyledTecnologyName>{dados.title}</StyledTecnologyName>
        <StyledTecnologyLevel gray1>{dados.status}</StyledTecnologyLevel>
    </StyledCardContainer>
    </>
  )
}
