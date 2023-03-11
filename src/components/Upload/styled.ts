import styled from 'styled-components';
import { ButtonStyled } from '../Button/styled';

export const UploadContainer = styled.div`
    position: relative;
    border-bottom: 1px solid ${props => props.theme.color.highlightColor};
    filter: brightness(95%);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    min-width: 866px;
    height: 350px;
    background: url(${props => props.theme.background.uploadBackground.src})
        ${props => props.theme.color.backgroundLevel1} center no-repeat;
    background-size: cover;
`;

export const ButtonUpload = styled(ButtonStyled)`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:hover {
        filter: brightness(90%);
    }

    span {
        transform: translateX(34px);
    }

    label {
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    input {
        display: none;
    }
`;
