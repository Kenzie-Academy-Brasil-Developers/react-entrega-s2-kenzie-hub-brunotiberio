import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { StyledButtonGray } from '../../styles/global'
import Card from '../Card'
import { StyledAddContainer, StyledH3, StyledMain, StyledTecnologyContainer } from './style'

export default function Main({dados}) {

  console.log(dados)

  return (    
    <>
        <StyledMain>

            <StyledAddContainer>
                <StyledH3>Tecnologias</StyledH3>
                <StyledButtonGray>+</StyledButtonGray>
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
