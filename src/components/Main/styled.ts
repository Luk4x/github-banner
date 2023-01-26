import styled from 'styled-components';

export const MainStyled = styled.main`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    height: 65vh;
    background: ${props => props.theme.color['blue-900']};
    display: grid;
    grid-template-rows: 1.2fr 2fr;
`;
