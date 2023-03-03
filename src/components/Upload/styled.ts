import styled from 'styled-components';

export const UploadContainer = styled.div`
    position: relative;
    border-bottom: 2px solid #555;
    filter: brightness(95%);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    min-width: 866px;
    height: 350px;
    background-color: ${props => props.theme.color.backgroundLevel1};
`;

export const ButtonUpload = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${props => props.theme.color.borderBase};
    color: ${props => props.theme.color.textBase};
    border-radius: 6px;
    width: 12.5rem;
    height: 5rem;

    input {
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
`;
