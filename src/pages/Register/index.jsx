import React, { useState } from 'react'
import { HeadLine, StyledButtonGray, StyledButtonPrimary, StyledCenterItens, StyledInput, StyledSelect } from '../../styles/global'
import { StyledLogoBack ,StyledH1, StyledH2, StyledHeadLine, StyledInputContainer, StyledContainerPassword, StyledVisibilityOffIcon, StyledVisibilityIcon, StyledRegisterForm } from './style'
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';



export default function Register() {

  const history = useHistory()

  function handleClick(){
    history.push('/')
  }

  const [viewPassword, setViewPassword] = useState(false)

  const [viewConfirmedPassword, setViewConfirmedPassword] = useState(false)

  const handleViewPassword = (event) => {  
    event.preventDefault()  
    setViewPassword(!viewPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleViewConfirmedPassword = (event) => {  
    event.preventDefault()  
    setViewConfirmedPassword(!viewConfirmedPassword)
  }

  const handleMouseDownConfirmedPassword = (event) => {
    event.preventDefault()
  }


  return (
    <>
    <StyledCenterItens>

      <StyledLogoBack>
        <StyledH1>Kenzie Hub</StyledH1>
        <StyledButtonGray onClick={handleClick}>Voltar</StyledButtonGray>
      </StyledLogoBack>

      <StyledRegisterForm>      
        
        <StyledH2>Crie sua conta</StyledH2>
        <HeadLine gray1>Rapido e grátis, vamos nessa!</HeadLine>

        <StyledInputContainer>
          <StyledHeadLine>Nome</StyledHeadLine>
          <StyledInput type='text' placeholder='Digite aqui seu nome'/>
        </StyledInputContainer>
        
        <StyledInputContainer>
          <StyledHeadLine>Email</StyledHeadLine>
          <StyledInput type='email' placeholder='Digite aqui seu e-mail'/>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledHeadLine>Senha</StyledHeadLine>

            <StyledContainerPassword>
        
            <StyledInput 
            type={viewPassword === false ? 'password' : 'text'} 
            placeholder='Digite aqui sua senha'/>
            <IconButton 
            onClick={handleViewPassword}
            onMouseDown={handleMouseDownPassword}
            edge='end'
            >
            {viewPassword === false ? <StyledVisibilityOffIcon fontSize='small'/> : <StyledVisibilityIcon fontSize='small'/>}
            </IconButton>
            

            </StyledContainerPassword>

        </StyledInputContainer>

        <StyledInputContainer>

              
          <StyledHeadLine>Confirmar Senha</StyledHeadLine>

            <StyledContainerPassword>
        
            <StyledInput 
            type={viewConfirmedPassword === false ? 'password' : 'text'} 
            placeholder='Digite novamente sua senha'/>
            <IconButton 
            onClick={handleViewConfirmedPassword}
            onMouseDown={handleMouseDownConfirmedPassword}
            edge='end'
            >
            {viewConfirmedPassword === false ? <StyledVisibilityOffIcon fontSize='small'/> : <StyledVisibilityIcon fontSize='small'/>}
            </IconButton>
            

            </StyledContainerPassword>
         
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledHeadLine>Bio</StyledHeadLine>
          <StyledInput type='text' placeholder='Fale sobre você'/>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledHeadLine>Contato</StyledHeadLine>
          <StyledInput type='text' placeholder='Opção de contato'/>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledHeadLine>Selecionar módulo</StyledHeadLine>
          <StyledSelect name='course_module'>Escolha uma opção
            <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo (Introdução ao Frontend)</option>
            <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo (Frontend Avançado)</option>
            <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo (Introdução ao Backend)</option>
            <option value='Quarto módulo (Backend Avançado)'>Quarto módulo (Backend Avançado)</option>
          </StyledSelect>
        </StyledInputContainer>

        <StyledButtonPrimary primary>Cadastrar</StyledButtonPrimary>

        
      </StyledRegisterForm>

    </StyledCenterItens>
    </>
  )
}
