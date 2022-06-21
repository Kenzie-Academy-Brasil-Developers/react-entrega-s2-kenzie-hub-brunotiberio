import { HeadLine, StyledSelect } from "../../styles/global";
import { DivHeaderModal, StyledDivModal, StyledFormAdd, ContainerDataAdd, ContainerValueClick, ContainerButtonAtualizarExcluir, StyledCloseModalOrDelete, StyledSalvarAlteracoes } from "./style";
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import StyledModalContainer from "../StyledModalContainer";
import { api } from "../../services/api";
/* import { api } from "../../services/api";
import { toast } from 'react-toastify'; */

const formSchema = yup.object({
  status: yup.string().required('Selecione a tecnologia'),
})


export default function ModalExcluirAtualizar({ setModalAtualizarExcluir, modalAtualizarExcluir, dados }) {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  /* não estou conseguindo pegar o id ao clicar sobre o card */
  
  function onSubmitAlteracoes(data) {

        const dataID = dados.filter((dado) => dado.id === data.id /* hipotese */) 
        console.log(dataID)
        
        api.put(`/users/techs/${dataID.id}`, {
            status: data.status,
        },{
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem('@KH/Token'))}`
            }
        })
    
      }



      console.log(errors)

/* não estou conseguindo pegar o id ao clicar sobre o card */

  /* (Para delete) não estou conseguindo pegar o id ao clicar sobre o card */
  
  function onSubmitDelete(data) {

    const dataID = dados.filter((dado) => dado.id === data.id /* hipotese */)
    
    api.delete(`/users/techs/${dataID.id}`,
        {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('@KH/Token'))}`
        }
    })

  }

  console.log(errors)

/* não estou conseguindo pegar o id ao clicar sobre o card */






  return (
    <>
    <StyledModalContainer>

        <StyledDivModal>
        <DivHeaderModal>
          <HeadLine>Tecnologia Detalhes</HeadLine>
          <StyledCloseModalOrDelete gray1 onClick={() => setModalAtualizarExcluir(!modalAtualizarExcluir)}>X</StyledCloseModalOrDelete>
        </DivHeaderModal>     

        <StyledFormAdd onSubmit={handleSubmit(onSubmitAlteracoes)}>

          <ContainerDataAdd>
            <label>Nome do projeto</label>
            <ContainerValueClick>Material UI</ContainerValueClick>

            <label>Status</label>
            <StyledSelect {...register('status')}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </StyledSelect>
          </ContainerDataAdd>

          <ContainerButtonAtualizarExcluir>
            <StyledSalvarAlteracoes type='submit'>Salvar Alterações</StyledSalvarAlteracoes>
            <StyledCloseModalOrDelete gray1 excluir type='submit'>Excluir</StyledCloseModalOrDelete>
          </ContainerButtonAtualizarExcluir>

          </StyledFormAdd>
        
        </StyledDivModal>

        </StyledModalContainer>  
    </>
  )
}


