import styled, { createGlobalStyle } from "styled-components";


export const StyledGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: #000000;
    }

    h1{
        font-weight: bold;
        font-size: 16px;
        color: var(--primary);

    }

    h1, h2, h3{
        font-weight: bold;
        font-size: 16px;
    }

    :root{
        --primary: #FF577F;
        --primary-focus: #FF427F ;
        --primary-negative: #59323F;

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

export const FormError = styled.label`
    font-size: 12px;
    color: var(--primary-focus);
`

export const StyledButtonPrimary = styled.button`
    width: 90%;
    height: 38.5px;

    border: 1.2182px solid ${props => props.primary ? 'var(--primary)' : 'var(--primary-negative)'};
    border-radius: 4.06066px;
    background: ${props => props.primary ? 'var(--primary)' : 'var(--primary-negative)'};

    color: #FFFFFF;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
`

export const StyledButtonGray = styled.button`
    width: 90%;
    height: 38.5px;

    border: 1.2182px solid ${props => props.gray1 ? 'var(--gray1)' : 'var(--gray3)'};
    border-radius: 4.06066px;
    background: ${props => props.gray1 ? 'var(--gray1)' : 'var(--gray3)'};

    color: var(--gray0);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12.8347px;
    line-height: 21px;
`

export const StyledInput = styled.input`
    border: 0.9772px solid ${props => props.correct ? 'var(--gray0)' : 'var(--primary-focus)'};
    border-radius: 3.20867px;
    background-color: var(--gray2);
    color: var(--gray0);

    width: 90%;
    height: 38.5px;    

    padding: 0px 13.0293px;

    &&::placeholder{
        color: #868E96;
        font-size: 12.9865px;
        line-height: 21px;
        
    }
`

export const StyledSelect = styled.select`
    border: 0.9772px solid #F8F9FA;
    border-radius: 3.20867px;
    background-color: var(--gray2);
    color: var(--gray0);

    width: 90%;
    height: 38.5px;    

    padding: 0px 13.0293px;

    option {
        color: #868E96;
        font-size: 12.9865px;
        line-height: 21px;       
    }

    &&::placeholder{
        color: #868E96;
        font-size: 12.9865px;
        line-height: 21px;       
    
    }
`

export const StyledCenterItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const StyledForm = styled.form`
    background: var(--gray2);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    width: 296px;
    height: 402.69px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 30px;
`

export const Teste = styled.p`
    color: white;
`

export const LabelFeedbackContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 90%;
`

export const StyledModalGlobal = styled.div`
    position: fixed;

    width: 100%;
    height: 100vh;

    background-color: rgba(0,0,0, .9);
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;
`



