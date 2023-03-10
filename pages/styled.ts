import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const MainStyled = styled.main`
    max-width: 866px;
    margin: 0 auto;
    padding-top: 80px;
`;

export const PresentationContainer = styled.div`
    background: ${props => props.theme.color.backgroundLevel1};
    width: 400px;
    left: 0;
    position: fixed;
    height: 100vh;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Presentation = styled.div`
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

export const Collaborators = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: 2rem;
    }

    div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const PresentationBase = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    // justify-content: center;
    // width: 100%;
    // height: 150px;
    cursor: pointer;

    p {
        max-width: 300px;
        text-align: left;
    }

    header {
        display: flex;

        div {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    img {
        object-fit: contain;
        clip-path: circle();
    }
`;

export const Followers = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
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
