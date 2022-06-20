import React, { useState } from 'react'
import { api } from '../../services/api'
import { HeadLine } from '../../styles/global'
import { ContainerHeader, StyledH2 } from './style'

export default function Header({dados}) {

  return (
    <>
    <ContainerHeader>
        <StyledH2>Olá, {dados.name}</StyledH2>
        <HeadLine gray1>{dados.course_module}</HeadLine>
    </ContainerHeader>
    
    </>
  )
}
