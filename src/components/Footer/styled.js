import styled from "styled-components";

export const FooterSection = styled.section`
    max-width: 691px;
    padding-top: 120px;
`;

export const FooterIntro = styled.p`
    font-size: 12px;
    font-weight: 700;
    padding-bottom: 24px;
    margin: 0;
    color: ${({ theme }) => theme.color.slateGray};
`;

export const FooterContact = styled.a`
    text-decoration: none;
    font-size: 32px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.black.dark};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;

export const FooterDescription = styled.p`
    font-size: 18px;
    font-weight: 400;
    padding: 24px 0 56px 0; 
    margin: 0;
    color: ${({ theme }) => theme.color.black.dark};
`;

export const FooterIcons = styled.div`
    display: flex;
    gap: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) { 
        gap: 16px;
    }
`;

export const FooterIcon = (Icon) => styled(Icon)`
    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        width: 20px;
        height: 20px;
    }
`;

export const FooterLink = styled.a`
    color: ${({ theme }) => theme.color.black.dark};
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.scienceBlue};
    }
`;
