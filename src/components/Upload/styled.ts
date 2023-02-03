import styled from 'styled-components';

interface ImageProps {
    image: string | null;
}

export const UploadContainer = styled.div`
    position: relative;
`;

export const Canvas = styled.canvas<ImageProps>`
    border-bottom: 2px solid #555;
    filter: brightness(95%);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 350px;
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

// export const UserData = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     /* background: #00000050; */
//     border-radius: 3px;
//     padding: 40px;
//     /* width: 400px; */
//     filter: brightness(105%);
//     text-align: center;

//     h1 {
//         font-weight: 500;
//         font-size: 50px;
//         overflow: hidden;
//         color: #444d35;
//         border-right: 4px solid #603428;
//         white-space: nowrap;
//         margin: 0 auto;
//         letter-spacing: 3px;
//         animation: typing 7.5s steps(40, end) infinite, blink-caret 0.5s infinite;
//         height: 56px;
//     }

//     h2 {
//         color: #8f7a5e;
//         font-weight: 400;
//         font-size: 25px;
//         font-style: italic;
//         border-bottom: 1px solid;
//         opacity: 0;
//         animation: blink 7.5s 0.5s infinite;
//     }

//     @keyframes typing {
//         0%,
//         10% {
//             width: 0;
//         }

//         20%,
//         30%,
//         40%,
//         50%,
//         60%,
//         70%,
//         80% {
//             width: 100%;
//         }

//         90%,
//         100% {
//             width: 0;
//         }
//     }

//     @keyframes blink-caret {
//         from,
//         to {
//             border-color: transparent;
//         }
//         50% {
//             border-color: #603428;
//         }
//     }

//     @keyframes blink {
//         0%,
//         10% {
//             opacity: 0;
//         }

//         20%,
//         30%,
//         40%,
//         50%,
//         60%,
//         70%,
//         80% {
//             opacity: 1;
//         }

//         90%,
//         100% {
//             opacity: 0;
//         }
//     }
// `;

export const ButtonUpload = styled.button`
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
