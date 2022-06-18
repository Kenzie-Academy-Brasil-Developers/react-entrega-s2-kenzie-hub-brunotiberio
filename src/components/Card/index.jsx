import React from 'react'
import { StyledCardContainer, StyledTecnologyLevel, StyledTecnologyName } from './style'

export default function Card() {
  return (
    <>
    <StyledCardContainer>
        <StyledTecnologyName>React JS</StyledTecnologyName>
        <StyledTecnologyLevel gray1>Intermediário</StyledTecnologyLevel>
    </StyledCardContainer>
    </>
  )
}
