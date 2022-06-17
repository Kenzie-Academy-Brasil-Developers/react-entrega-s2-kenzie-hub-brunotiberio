import React, { useState } from 'react'
import { HeadLine, StyledButtonGray, StyledButtonPrimary, StyledCenterItens, StyledInput, StyledForm } from '../../styles/global'
import { StyledH1, StyledH2, StyledHeadLine, StyledInputContainer, StyledContainerPassword, StyledVisibilityOffIcon, StyledVisibilityIcon } from './style'
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';



export default function Home() {

  const history = useHistory()

  function handleClick(){
    history.push('/register')
  }

  

  const [viewPassword, setViewPassword] = useState(false)

  const handleViewPassword = (event) => {  
    event.preventDefault()  
    setViewPassword(!viewPassword)
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }


  return (
    <>
    <StyledCenterItens>

      <StyledH1>Kenzie Hub</StyledH1>

      <StyledForm>      
        
        <StyledH2>Login</StyledH2>
        
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

        <StyledButtonPrimary primary type='submit'>Entrar</StyledButtonPrimary>

        <HeadLine gray1>Ainda não possui uma conta?</HeadLine>

        <StyledButtonGray gray1 onClick={handleClick}>Cadastre-se</StyledButtonGray>

      </StyledForm>

    </StyledCenterItens>
    </>
  )
}
