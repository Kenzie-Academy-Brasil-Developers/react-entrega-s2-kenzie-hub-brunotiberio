import { HeadLine, StyledButtonPrimary, StyledInput, StyledSelect } from "../../styles/global";
import { DivHeaderModal, StyledCloseModal, StyledDivModal, StyledFormAdd, ContainerButtonCadastrar, ContainerDataAdd } from "./style";
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import StyledModalContainer from "../StyledModalContainer";
import { api } from "../../services/api";
import { toast } from 'react-toastify';

const formSchema = yup.object({
  title: yup.string().required('Digite a tecnologia'),
})


export default function ModalAdd({setModalAdd, modalAdd}) {


  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  /* A renderização em tempo real deve ser feito com useEffect, porém não consegui fazer funfar */

  function onSubmit(data) {

    api.post('/users/techs', {
       'title': data.title,
       'status': data.status
   }, {
     headers: {
       Authorization: `Bearer ${JSON.parse(localStorage.getItem('@KH/Token'))}`
     }
   })

   .then((response) => {
     console.log(response)
     toast.success('Tecnologia adicionada com sucesso')
   })

   .catch((err) => {
     console.log(err.response.data)
     toast.error('Preencha todos os campos corretamente')
   }) 
 }

  

  console.log(errors)

  return (
    <>
    <StyledModalContainer>

        <StyledDivModal>
        <DivHeaderModal>
          <HeadLine>Cadastrar Tecnologia</HeadLine>
          <StyledCloseModal gray1 onClick={() => setModalAdd(!modalAdd)}>X</StyledCloseModal>
        </DivHeaderModal>     

        <StyledFormAdd onSubmit={handleSubmit(onSubmit)}>

          <ContainerDataAdd>
            <label>Nome</label>
            <StyledInput correct placeholder="Digite a tecnologia" type="text" {...register('title')}/>

            <label>Selecionar status</label>
            <StyledSelect {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyledSelect>
          </ContainerDataAdd>

          <ContainerButtonCadastrar>
            <StyledButtonPrimary primary type='submit'>Cadastrar Tecnologia</StyledButtonPrimary>
          </ContainerButtonCadastrar>

          </StyledFormAdd>
        
        </StyledDivModal>

        </StyledModalContainer>  
    </>
  )
}


