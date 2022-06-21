import styled from "styled-components";
import { StyledButtonGray, StyledButtonPrimary } from "../../styles/global";

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

export const StyledCloseModalOrDelete = styled(StyledButtonGray)`
    width: ${(props) => props.excluir ? '78.35px' : '11px'};
    height: ${(props) => props.excluir ? '38.37px' : '26px'};
`

export const ContainerValueClick = styled.div`
    border: 0.973899px solid var(--gray2);
    border-radius: 3.19783px;
    background: var(--gray2);
    width: 263.76px;
    height: 38.37px;

    color: #868E96;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.9853px;
    line-height: 21px;

    display: flex;
    align-items: center;

    padding-left: 20px;

    @media (min-width: 500px){
        width: 331px;
        height: 48px;
    }
`

export const ContainerDataAdd = styled.div`
    display: flex;
    
    flex-direction: column;
    justify-content: space-between;
    
    width: 80%;
    height: 130px;

    margin-left: 10px;
    margin-bottom: 20px;

    @media (min-width: 500px) {
        height: 180px;
        margin-left: 15px;
    }

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

    select{
        width: 264.66px;
        height: 38.5px;

        @media (min-width: 500px) {
            width: 329.93px;
            height: 48px;
        }
    }

`

export const StyledFormAdd = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`

export const ContainerButtonAtualizarExcluir = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;
    margin-left: 10px;
    

    width: 89%;

    @media (min-width: 500px){
        margin-left: 16px;
    }
` 

export const StyledSalvarAlteracoes = styled(StyledButtonPrimary)`
    width: 163.09px;
    height: 38.37px;
`