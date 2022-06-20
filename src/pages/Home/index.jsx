import React, { useState } from 'react'
import { HeadLine, StyledButtonGray, StyledButtonPrimary, StyledCenterItens, StyledInput, StyledForm, FormError, LabelFeedbackContainer } from '../../styles/global'
import { StyledH1, StyledH2, StyledHeadLine, StyledInputContainer, StyledContainerPassword, StyledVisibilityOffIcon, StyledVisibilityIcon } from './style'
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { toast } from 'react-toastify';

const formSchema = yup.object({
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres')
})

export default function Home() {
  
  const [viewPassword, setViewPassword] = useState(false) 

  const historyRegister = useHistory()

  function handleClickRegister(){
    historyRegister.push('/register')
  }

  const historyMain = useHistory()

  function handleClickMain(id){
    historyMain.push(`/users/${id}`)
  }

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data) => {
    console.log(data)
    api.post('/sessions', {
      email: data.email,
      password: data.password
    })
    .then((response) => {
      console.log(response)
      toast.success('Login realizado com sucesso')
      localStorage.setItem('@KH/User', JSON.stringify(response.data.user.id))
      localStorage.setItem('@KH/Token', JSON.stringify(response.data.token))
      handleClickMain(JSON.parse(localStorage.getItem('@KH/User')))

    })
    .catch((error) => {
      console.log(error)
      toast.error('Email ou senha inválidos')
    })
    
  }



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

      <StyledForm onSubmit={handleSubmit(onSubmit)}>      
        
        <StyledH2>Login</StyledH2>
        
        <StyledInputContainer>
          <LabelFeedbackContainer>
          <StyledHeadLine>Email</StyledHeadLine>
          {!!errors && <FormError>  {errors?.email?.message}</FormError>}
          </LabelFeedbackContainer>
          <StyledInput correct type='email' placeholder='Digite aqui seu e-mail' {...register('email')}/>
        </StyledInputContainer>

        <StyledInputContainer>
        <LabelFeedbackContainer>
          <StyledHeadLine>Senha</StyledHeadLine>
          {!!errors && <FormError>  {errors?.password?.message}</FormError>}
          </LabelFeedbackContainer>

            
              <StyledContainerPassword >
                <StyledInput
                type={viewPassword === false ? 'password' : 'text'} 
                placeholder='Digite aqui sua senha'
                {...register('password')}            
                />
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

        <StyledButtonGray gray1 onClick={handleClickRegister}>Cadastre-se</StyledButtonGray>

      </StyledForm>

    </StyledCenterItens>
    </>
  )
}
