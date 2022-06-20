import React from 'react'
import { StyledCardContainer, StyledTecnologyLevel, StyledTecnologyName } from './style'

export default function Card({ title, status }) {
  return (
    <>
    <StyledCardContainer>
        <StyledTecnologyName>{title}</StyledTecnologyName>
        <StyledTecnologyLevel gray1>{status}</StyledTecnologyLevel>
    </StyledCardContainer>
    </>
  )
}
