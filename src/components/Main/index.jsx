import { useState } from 'react'
import { StyledButtonGray } from '../../styles/global'
import Card from '../Card'
import ModalAdd from '../ModalAdd/index.jsx'
import ModalExcluirAtualizar from '../ModalExcluirAtualizar'
import { StyledAddContainer, StyledH3, StyledMain, StyledTecnologyContainer } from './style'


export default function Main({dados}) {

  const [modalAdd, setModalAdd] = useState(false)
  const [modalAtualizarExcluir, setModalAtualizarExcluir] = useState(false)

  const handleModalAdd = () => {
    setModalAdd(!modalAdd)
  }  

  const handleModalAtualizarExcluir = (event) => {
    const idTech = event.target
    console.log(idTech)
    setModalAtualizarExcluir(!modalAtualizarExcluir)
  }

  return (    
    <>
        {modalAdd && <ModalAdd setModalAdd={setModalAdd} modalAdd={modalAdd}/>}
        {modalAtualizarExcluir && <ModalExcluirAtualizar dados={dados} setModalAtualizarExcluir={setModalAtualizarExcluir} modalAtualizarExcluir={modalAtualizarExcluir}/>}
        <StyledMain>

            <StyledAddContainer>
                <StyledH3>Tecnologias</StyledH3>
                <StyledButtonGray onClick={handleModalAdd}>+</StyledButtonGray>
                
            </StyledAddContainer>
        
        <StyledTecnologyContainer>
          {dados?.map((tech) => 
            <Card id={dados.id} handleModalAtualizarExcluir={handleModalAtualizarExcluir} key={tech.id} dados={tech} /> 
          )}
             
        </StyledTecnologyContainer>

        </StyledMain>


    </>
  )
}
