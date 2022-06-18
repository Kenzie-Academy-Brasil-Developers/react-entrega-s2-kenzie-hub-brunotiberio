import React from 'react'
import { ContainerHeader, StyledButton, StyledH1 } from './style'

export default function Navbar() {
  return (
    <>
    <ContainerHeader>
        <StyledH1>Kenzie Hub</StyledH1>
        <StyledButton>Sair</StyledButton>
    </ContainerHeader>
    </>
  )
}