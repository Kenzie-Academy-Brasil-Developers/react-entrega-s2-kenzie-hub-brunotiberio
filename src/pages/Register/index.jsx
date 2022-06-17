import React, { useState } from 'react'
import { FormError, LabelFeedbackContainer, HeadLine, StyledButtonGray, StyledButtonPrimary, StyledCenterItens, StyledInput, StyledSelect } from '../../styles/global'
import { StyledLogoBack ,StyledH1, StyledH2, StyledHeadLine, StyledInputContainer, StyledContainerPassword, StyledVisibilityOffIcon, StyledVisibilityIcon, StyledRegisterForm } from './style'
import { IconButton } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from '../../services/api';
import { toast } from 'react-toastify';

const formSchema = yup.object({
  name: yup.string().required('Nome Obrigatório').matches('[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$', 'Apenas letras são aceitas'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'Mínimo de 6 caracteres'),
  passwordConfirmed: yup.string().required('Digite novamente sua senha').oneOf([yup.ref('password')], 'Senhas não coincidem'),
  bio: yup.string().required('Campo obrigatório'),
  contact: yup.string().required('Contato obrigatório'),
  course_module: yup.string().required('Escolha o módulo'),
})


export default function Register() {

  const historyHome = useHistory()

  function handleClickHome(){
    historyHome.push('/')
  }

  const historyLogin = useHistory()

  const handleClickLogin = () => {
    return historyLogin.push('/')
  }



  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = (data) => {

    api.post('/users', {
      email: data.email, 
      password: data.password,
      name: data.name, 
      bio: data.bio,
      contact: data.contact, 
      course_module: data.course_module

    })

    .then((response) => {
      console.log(response)
      toast.success('Cadastro realizado com sucesso, indo para o Login')      
      setInterval(handleClickLogin, 3000)
    })

    .catch((error) => {
      console.log(error)
      toast.error('Email já registrado')
    })
  }

  console.log(errors)

  



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
        <StyledButtonGray onClick={handleClickHome}>Voltar</StyledButtonGray>
      </StyledLogoBack>

      <StyledRegisterForm type='submit'>      
        
        <StyledH2>Crie sua conta</StyledH2>
        <HeadLine gray1>Rapido e grátis, vamos nessa!</HeadLine>
        
        <StyledInputContainer>
          <LabelFeedbackContainer>
          <StyledHeadLine>Nome</StyledHeadLine>
          {!!errors && <FormError>  {errors?.name?.message}</FormError>}
          </LabelFeedbackContainer>
          <StyledInput correct type='text' placeholder='Digite aqui seu nome' {...register('name')}/>
        </StyledInputContainer>

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


        <StyledInputContainer>
          <LabelFeedbackContainer>
            <StyledHeadLine>Confirmar senha</StyledHeadLine>
            {!!errors && <FormError>  {errors?.passwordConfirmed?.message}</FormError>}
          </LabelFeedbackContainer>

              
          <StyledContainerPassword >
            <StyledInput
            type={viewConfirmedPassword === false ? 'password' : 'text'} 
            placeholder='Digite novamente sua senha'
            {...register('passwordConfirmed')}            
            />
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
          <LabelFeedbackContainer>
          <StyledHeadLine>Bio</StyledHeadLine>
          {!!errors && <FormError>  {errors?.bio?.message}</FormError>}
          </LabelFeedbackContainer>
          <StyledInput correct type='text' placeholder='Fale sobre você' {...register('bio')}/>
        </StyledInputContainer>

        <StyledInputContainer>
          <LabelFeedbackContainer>
          <StyledHeadLine>Contato</StyledHeadLine>
          {!!errors && <FormError>  {errors?.contact?.message}</FormError>}
          </LabelFeedbackContainer>
          <StyledInput correct type='text' placeholder='Opção de contato' {...register('contact')}/>
        </StyledInputContainer>


        <StyledInputContainer>
          <StyledHeadLine>Selecionar módulo</StyledHeadLine>
          <StyledSelect name='course_module' {...register('course_module')}>
            <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo (Introdução ao Frontend)</option>
            <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo (Frontend Avançado)</option>
            <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo (Introdução ao Backend)</option>
            <option value='Quarto módulo (Backend Avançado)'>Quarto módulo (Backend Avançado)</option>
          </StyledSelect>
        </StyledInputContainer>

        <StyledButtonPrimary primary onClick={handleSubmit(onSubmit)}>Cadastrar</StyledButtonPrimary>

        
      </StyledRegisterForm>

    </StyledCenterItens>
    </>
  )
}
