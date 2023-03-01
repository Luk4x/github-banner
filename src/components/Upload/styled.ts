import styled from 'styled-components';

export const UploadContainer = styled.div`
    position: relative;
    border-bottom: 2px solid #555;
    filter: brightness(95%);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 350px;
    background-color: ${props => props.theme.color.highlightColor};
`;

export const ButtonUpload = styled.input`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border: 1px solid ${props => props.theme.color.borderBase};
    color: ${props => props.theme.color.textBase};
    border-radius: 6px;
    width: 12.5rem;
    height: 5rem;
    cursor: pointer;
`;
