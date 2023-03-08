import styled, { keyframes } from 'styled-components';

import * as Tabs from '@radix-ui/react-tabs';
import * as Popover from '@radix-ui/react-popover';
import * as Toggle from '@radix-ui/react-toggle';

export const ConfigStyled = styled.section`
    width: 866px;
    margin: 60px 0 80px;
    border-radius: 6px;
    padding: 1.5rem 2rem;
    background: ${props => props.theme.color.backgroundLevel1};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const InputStyled = styled.input`
    font-weight: 500;
    font-size: 14px;
    height: 40px;
    border-radius: 5px;
    background: ${props => props.theme.color.backgroundBase};
    color: ${props => props.theme.color.textBase};
    width: 250px;
    text-align: center;
    transition: 0.1s ease-in-out;

    &:focus,
    &[input1-state='active'],
    &[input2-state='active'] {
        border-bottom: 3px solid ${props => props.theme.color.highlightColor};
    }
`;

export const Editor = styled(Tabs.Root)`
    background: ${props => props.theme.color.backgroundBase};
    width: 100%;
    height: 260px;
    border-radius: 10px;
`;

export const EditorTabList = styled(Tabs.List)`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 5px;
    width: 50px;
    height: 100%;
    border-right: 1px solid ${props => props.theme.color.highlightColor};
    padding: 10px;
`;

export const EditorTab = styled(Tabs.Trigger)`
    background: none;
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover,
    &[data-state='active'] {
        color: ${props => props.theme.color.highlightColor};
    }
`;

export const EditorTabContent = styled(Tabs.Content)`
    width: 100%;

    div {
        padding: 10px 15px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const PopoverRoot = styled(Popover.Root)``;

export const PopoverTrigger = styled(Popover.Trigger)`
    background: ${props => props.theme.color.backgroundLevel1};
    color: ${props => props.theme.color.textBase};
    width: 50px;
    height: 50px;
    border-radius: 6px;
    cursor: pointer;
    padding-top: 4px;
    font-size: 25px;
    transition: 0.2s ease-in-out;

    &:hover,
    &[data-state='open'] {
        color: ${props => props.theme.color.highlightColor};
    }
`;

export const PopoverPortal = styled(Popover.Portal)``;

export const PopoverContent = styled(Popover.Content)`
    border-radius: 6px;
    padding: 15px;
    width: 120px;
    background: ${props => props.theme.color.backgroundLevel1};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    &:focus {
        box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
            hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px #00000050;
    }

    &[data-state='open'][data-side='top'] {
        animation-name: slideDownAndFade;
    }
    &[data-state='open'][data-side='right'] {
        animation-name: slideLeftAndFade;
    }
    &[data-state='open'][data-side='bottom'] {
        animation-name: slideUpAndFade;
    }
    &[data-state='open'][data-side='left'] {
        animation-name: slideRightAndFade;
    }
`;

export const PopoverArrow = styled(Popover.Arrow)`
    fill: ${props => props.theme.color.backgroundLevel1};
`;

export const ToggleRoot = styled(Toggle.Root)`
    background: ${props => props.theme.color.backgroundBase};
    color: ${props => props.theme.color.textBase};
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover,
    &[data-state='on'] {
        background: ${props => props.theme.color.highlightColor};
    }
`;

// export const slideUpAndFade = keyframes`
//     0% { opacity: 0; transform: translateY(2px) }
//     100% { opacity: 1; transform: translateY(0) }
//   `;

// export const slideRightAndFade = keyframes`
//     0% { opacity: 0; transform: translateX(-2px) };
//     100% { opacity: 1; transform: translateX(0) }
// `;

// export const slideDownAndFade = keyframes`
//     0% { opacity: 0; transform: translateY(-2px) }
//     100% { opacity: 1; transform: translateY(0) }
// `;

// export const slideLeftAndFade = keyframes`
//     0% { opacity: 0; transform: translateX(2px) }
//     100% { opacity: 1; transform: translateX(0) }
// `;
