import styled from 'styled-components';

import * as Tabs from '@radix-ui/react-tabs';

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
        gap: 10px;
    }
`;
