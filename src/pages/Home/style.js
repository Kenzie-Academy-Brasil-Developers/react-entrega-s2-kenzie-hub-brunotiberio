import styled from "styled-components";
import { HeadLine } from "../../styles/global";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const StyledH2 = styled.h2`
    color: var(--gray0);
`

export const StyledH1 = styled.h1`
    margin-top: 20px;
`

export const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;

    width: 100%;
    margin-left: 30px;
`

export const StyledHeadLine = styled(HeadLine)`
    margin-bottom: 10px;
`

export const StyledContainerPassword = styled.div`
    width: 90%;

    display: flex;

    border: 0.9772px solid ${props => props.error ? 'var(--primary-focus)' : 'var(--gray0)'};
    border-radius: 3.20867px;
    background-color: var(--gray2);
    color: var(--gray0);

    button{
        margin: 0px;
    }

    input{
        border: none;
    }

    input:focus{
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`

export const StyledVisibilityOffIcon = styled(VisibilityOffIcon)`
    color: var(--gray0)
`

export const StyledVisibilityIcon = styled(VisibilityIcon)`
    color: var(--gray0)
`

