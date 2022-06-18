import styled from "styled-components";
import { StyledButtonGray } from "../../styles/global";

export const ContainerHeader = styled.nav`
    max-width: 1024px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 60px;
`

export const StyledButton = styled(StyledButtonGray)`
    width: 55.49px;
    height: 32px;

    margin-right: 10px;
`

export const StyledH1 = styled.h1`
    margin-left: 10px;

`