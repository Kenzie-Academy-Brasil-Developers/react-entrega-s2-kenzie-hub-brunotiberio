import React from 'react'
import { StyledCardContainer, StyledTecnologyLevel, StyledTecnologyName } from './style'

export default function Card({ dados }) {
  return (
    <>
    <StyledCardContainer>
        <StyledTecnologyName>{dados.title}</StyledTecnologyName>
        <StyledTecnologyLevel gray1>{dados.status}</StyledTecnologyLevel>
    </StyledCardContainer>
    </>
  )
}
