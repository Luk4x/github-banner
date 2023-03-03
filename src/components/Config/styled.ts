import styled from 'styled-components';

export const ConfigStyled = styled.section`
    width: 866px;
    margin-top: 70px;
    // margin-bottom: 50px;
    border-radius: 6px;
    padding: 1rem;
    background: ${props => props.theme.color.backgroundLevel1};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    div {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
`;

export const InputStyled = styled.input`
    font-weight: 500;
    font-size: 14px;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    background: ${props => props.theme.color.backgroundBase};
    color: ${props => props.theme.color.textBase};
    width: 250px;
    text-align: center;

    &:focus {
        border-bottom: 3px solid ${props => props.theme.color.highlightColor};
        -webkit-transition: 0.1s;
        transition: 0.1s;
    }
`;
