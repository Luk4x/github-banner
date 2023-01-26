import styled from 'styled-components';

interface ImageProps {
    image: string | null;
}

export const UploadContainer = styled.div<ImageProps>`
    color: red;
    border-bottom: 2px solid #555;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    ${props =>
        props.image
            ? `
        background-image: url(${props.image});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `
            : `
    background-color: ${props.theme.color.highlightColor};
    `}
`;

export const ButtonUpload = styled.button`
    background: transparent;
    border: 1px solid ${props => props.theme.color.borderBase};
    color: ${props => props.theme.color.textBase};
    border-radius: 6px;
    width: 12.5rem;
    height: 5rem;
    cursor: pointer;
`;
