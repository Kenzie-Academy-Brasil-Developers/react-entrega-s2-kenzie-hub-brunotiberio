import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerHeader, StyledButton, StyledH1 } from './style'

export default function Navbar() {

  const historyMain = useHistory()

  function handleClickMain(){
    historyMain.push(`/`)
    localStorage.clear()
  }

  return (
    <>
    <ContainerHeader>
        <StyledH1>Kenzie Hub</StyledH1>
        <StyledButton onClick={handleClickMain}>Sair</StyledButton>
    </ContainerHeader>
    </>
  )
}