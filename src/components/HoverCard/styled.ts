import styled from 'styled-components';
import * as HoverCard from '@radix-ui/react-hover-card';

export const HoverCardRoot = styled(HoverCard.Root)``;

interface TriggerProps {
    githubName: string;
}

export const HoverCardTrigger = styled(HoverCard.Trigger)<TriggerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    cursor: pointer;
    pointer-events: none;
    background: ${props =>
        props.githubName === 'Luk4x'
            ? `url(${props.theme.background.luk4xBackground.src})`
            : `url(${props.theme.background.luizBackground.src})`};

    img {
        pointer-events: all;
        object-fit: contain;
        clip-path: circle();
    }
`;

export const HoverCardPortal = styled(HoverCard.Portal)``;

export const HoverCardContent = styled(HoverCard.Content)`
    border-radius: 6;
    padding: 20;
    width: 300;
    background: white;
`;

export const HoverCardArrow = styled(HoverCard.Arrow)``;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;
