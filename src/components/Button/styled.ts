import styled from 'styled-components';

export const ButtonStyled = styled.button`
    position: relative;
    width: 150px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: ${props => props.theme.color.highlightColor};
    border-radius: 6px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);

    span {
        transition: 0.2s ease-in-out;
        transform: translateX(24px);
        color: ${props => props.theme.color.textBase};
        font-weight: bold;
        font-size: 14px;
    }

    svg {
        transition: 0.2s ease-in-out;
        position: absolute;
        transform: translateX(108px);
        font-size: 26px;
        color: #fff;
        border-left: 1px solid #55555555;
        padding: 6px;
        width: 44px;
        height: 80%;
    }

    &:hover {
        filter: brightness(105%);

        span {
            color: transparent;
        }

        svg {
            width: 150px;
            padding: 3px;
            transform: translateX(0);
        }
    }
`;
