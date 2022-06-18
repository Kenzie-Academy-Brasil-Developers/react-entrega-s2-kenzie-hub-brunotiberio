import styled from "styled-components";

export const ContainerHeader = styled.header`
    max-width: 1024px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    height: 60px;

    height: 131px;

    border-top: 1px solid var(--gray3);
    border-bottom: 1px solid var(--gray3);

   h2,p{
    margin-left: 10px;
   }
`

export const StyledH2 = styled.h2`
    color: var(--gray0);

    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
`

