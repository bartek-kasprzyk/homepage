import styled from "styled-components";
import { ReactComponent as Github } from "./Github.svg";

export const Wrapper = styled.div`
    width: 195px;
    margin: auto;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-top: -2px;
    }
`;

export const PortfolioIcon = styled(Github)`
    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 32px;
        height: 32px;
    }
`;

export const PortfolioTitle = styled.div`
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.header};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 18px;
    }
`;

export const PortfolioSubtitle = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.header};

    @media(max-width: ${({ theme }) => theme.breakpoint.tablet}) { 
        font-size: 17px;
    }
`;