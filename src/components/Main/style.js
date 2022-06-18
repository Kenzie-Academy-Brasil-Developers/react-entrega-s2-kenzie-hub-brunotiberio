import styled from "styled-components";

export const StyledMain = styled.main`
    max-width: 1024px;
`

export const StyledAddContainer = styled.div`
    height: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        width: 32.49px;
        height: 32px;

        margin-right: 10px;
    }

    h3{
        margin-left: 10px;
    }
`

export const StyledH3 = styled.h3`
    color: var(--gray0);

    font-size: 16px;
`

export const StyledTecnologyContainer = styled.div`
    background-color: var(--gray3);
    border-radius: 4px;

    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

