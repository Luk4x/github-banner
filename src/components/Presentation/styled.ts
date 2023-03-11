import styled from 'styled-components';

export const PresentationContainer = styled.div`
    background: ${props => props.theme.color.backgroundLevel1};
    width: 400px;
    left: 0;
    position: fixed;
    height: 100vh;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const PresentationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    span {
        line-height: 160%;
        text-align: center;
        max-width: 245px;
        font-size: 1rem;
    }

    button {
        background: ${props => props.theme.color.highlightColor};
        color: ${props => props.theme.color.textBase};
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem;

        cursor: pointer;
    }
`;

export const CarouselPresentation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

export const CarouselPresentationHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        p {
            opacity: 0.6;
            font-size: 14px;
        }
    }

    img {
        object-fit: contain;
        clip-path: circle();
    }
`;

export const CarouselPresentationBody = styled.div`
    padding: 0 50px;
    text-align: left;

    div {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    button {
        background: ${props => props.theme.color.highlightColor};
        color: #fff;
        padding: 0.25rem;
        border-radius: 6px;
        cursor: pointer;
    }
`;
