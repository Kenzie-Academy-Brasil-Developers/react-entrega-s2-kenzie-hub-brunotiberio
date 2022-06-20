import styled from "styled-components";
import { StyledButtonGray } from "../../styles/global";

export const StyledDivModal = styled.div`
    background: var(--gray3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    width: 296px;
    height: 274.34px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: auto;

    @media (min-width: 500px) {
        width: 369px;
        height: 342px;        
    }
`

export const DivHeaderModal = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--gray1);
    height: 40px;

    @media (min-width: 500px) {
        height: 50px;
    }

    p {
        padding-left: 10px;

        @media (min-width: 500px){
            font-size: 14px;
        }        
    }

    button {
        padding-right: 20px;

        @media (min-width: 500px){
            font-size: 14px;
        }
    }
`

export const StyledCloseModal = styled(StyledButtonGray)`
    width: 11px;
    height: 26px;
`

export const StyledFormAdd = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    width: 80%;
    height: 50%;

    margin-left: 10px;

    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;
        color: var(--gray0);

        @media (min-width: 500px) {
            font-size: 12.182px;
        }
    }

    input, select{
        width: 264.66px;
        height: 38.5px;

        @media (min-width: 500px) {
            width: 329.93px;
            height: 48px;
        }
    }
`

export const ContainerButtonCadastrar = styled.div`
    display: flex;
    justify-content: center;

    margin-bottom: 20px;
    margin-left: -5px;

    width: 100%;
` 