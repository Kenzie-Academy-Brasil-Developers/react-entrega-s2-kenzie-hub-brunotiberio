import React from 'react'
import { StyledModalGlobal } from '../../styles/global'

export default function StyledModalContainer({children}) {
  return (
    <>
        <StyledModalGlobal>
            {children}
        </StyledModalGlobal>        
    </>
  )
}
