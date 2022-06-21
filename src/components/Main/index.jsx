import { useState } from 'react'
import { StyledButtonGray } from '../../styles/global'
import Card from '../Card'
import ModalAdd from '../ModalAdd/index.jsx'
import { StyledAddContainer, StyledH3, StyledMain, StyledTecnologyContainer } from './style'


export default function Main({dados, atualizarCards}) {

  const [modalAdd, setModalAdd] = useState(false)
  const [modalAtualizarExcluir, setModalAtualizarExcluir] = useState(false)

  const handleModalAdd = () => {
    setModalAdd(!modalAdd)
  }  

  const handleModalAtualizarExcluir = () => {
    setModalAtualizarExcluir(!modalAtualizarExcluir)
  }

  return (    
    <>
        {modalAdd && <ModalAdd atualizarCards={atualizarCards} setModalAdd={setModalAdd} modalAdd={modalAdd}/>}
        <StyledMain>

            <StyledAddContainer>
                <StyledH3>Tecnologias</StyledH3>
                <StyledButtonGray onClick={handleModalAdd}>+</StyledButtonGray>
                
            </StyledAddContainer>
        
        <StyledTecnologyContainer>
          {dados?.map((tech) => 
            <Card setModalAtualizarExcluir={setModalAtualizarExcluir} modalAtualizarExcluir={modalAtualizarExcluir} atualizarCards={atualizarCards} handleModalAtualizarExcluir={handleModalAtualizarExcluir} key={tech.id} dados={tech.id} data={tech} /> 
          
          )}
             
        </StyledTecnologyContainer>

        </StyledMain>


    </>
  )
}
