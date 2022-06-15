import styled, { createGlobalStyle } from "styled-components";


export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    h1, h2, h3{
        font-weight: bold;
        font-size: 16px;
    }

    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F ;
        --primary-Negative: #59323F;

        --gray4: #121214;
        --gray3: #212529;
        --gray2: #343B41;
        --gray1: #868E96;
        --gray0: #F8F9FA;
    }

`

export const HeadLine = styled.p`
    font-size: 12px;
    color: ${(props) => props.gray1 ? 'var(--gray1)' : 'var(--gray0)'};
`

export const HeadlineBold = styled.p`
    font-size: 12px;
    font-weight: 12px;
    color: ${(props) => props.gray1 ? 'var(--gray1)' : 'var(--gray0)'};
`

export const HeadlineItalic = styled.p`
    font-size: 12px;
    font-style: italic;
    color: ${(props) => props.gray1 ? 'var(--gray1)' : 'var(--gray0)'};
`

