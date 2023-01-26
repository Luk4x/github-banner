import styled from 'styled-components';

interface ImageProps {
    image: string | null;
}

export const UploadContainer = styled.div<ImageProps>`
    color: red;
    border-bottom: 2px solid #555;
    display: flex;
    justify-content: center;

    ${props =>
        props.image
            ? `
        background-image: url(${props.image});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    `
            : `
    background: none;
    `}
`;

export const ButtonUpload = styled.button`
    margin-top: 100px;
    margin-bottom: 100px;
    background: transparent;
    padding: 1rem;
    border: 1px solid ${props => props.theme.color.gray};
    color: ${props => props.theme.color.white};
    border-radius: 6px;
    width: 12.5rem;
`;
