import { useState } from 'react'
import { StyledButtonGray } from '../../styles/global'
import Card from '../Card'
import ModalAdd from '../ModalAdd/index.jsx'
import { StyledAddContainer, StyledH3, StyledMain, StyledTecnologyContainer } from './style'


export default function Main({dados}) {

  const [modalAdd, setModalAdd] = useState(false)

  const handleModalAdd = () => {
    setModalAdd(!modalAdd)
  }


  return (    
    <>
        {modalAdd && <ModalAdd setModalAdd={setModalAdd} modalAdd={modalAdd}/>}
        <StyledMain>

            <StyledAddContainer>
                <StyledH3>Tecnologias</StyledH3>
                <StyledButtonGray onClick={handleModalAdd}>+</StyledButtonGray>
                
            </StyledAddContainer>
        
        <StyledTecnologyContainer>
          {dados?.map((tech) => 
            <Card key={tech.id} dados={tech}/> 
          )}
             
        </StyledTecnologyContainer>

        </StyledMain>


    </>
  )
}
