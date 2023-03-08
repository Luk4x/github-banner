import {
    HoverCardRoot,
    HoverCardTrigger,
    HoverCardPortal,
    HoverCardContent,
    HoverCardArrow,
    Flex
} from './styled';

import Image from 'next/image';
import { ReactNode } from 'react';

interface HoverCardProps {
    githubName: string;
    children: ReactNode;
}

export function HoverCard({ githubName, children }: HoverCardProps) {
    return (
        <HoverCardRoot>
            <HoverCardTrigger githubName={githubName}>
                <Image
                    src={`https://github.com/${githubName}.png`}
                    alt={`${githubName} github user photo`}
                    width={100}
                    height={100}
                />
            </HoverCardTrigger>
            <HoverCardPortal>
                <HoverCardContent>
                    <HoverCardArrow />
                    <Flex>
                        <Image
                            src={`https://github.com/${githubName}.png`}
                            alt={`${githubName} github user photo`}
                            width={100}
                            height={100}
                        />
                    </Flex>
                    <Flex>{children}</Flex>
                </HoverCardContent>
            </HoverCardPortal>
        </HoverCardRoot>
    );
}
