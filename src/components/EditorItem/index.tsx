import {
    PopoverRoot,
    PopoverTrigger,
    PopoverPortal,
    PopoverContent,
    PopoverArrow,
    ToggleRoot
} from './styled';

import { ReactNode } from 'react';
import { defaultTheme } from 'src/styles/theme/default';

interface EditorItemProps {
    children: ReactNode;
    styleType: {
        title: {
            active: boolean;
            type: string;
        };
        subTitle: {
            active: boolean;
            type: string;
        };
    };
    onToggle: {
        titleToggle: () => void;
        subTitleToggle: () => void;
    };
}

export function EditorItem({ children, styleType, onToggle }: EditorItemProps) {
    return (
        <PopoverRoot>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverPortal>
                <PopoverContent sideOffset={5}>
                    <PopoverArrow />
                    <ToggleRoot
                        style={{
                            backgroundColor: styleType.title.active
                                ? defaultTheme.color.highlightColor
                                : defaultTheme.color.backgroundBase
                        }}
                        onPressedChange={onToggle.titleToggle}
                    >
                        Título
                    </ToggleRoot>
                    <ToggleRoot
                        style={{
                            backgroundColor: styleType.subTitle.active
                                ? defaultTheme.color.highlightColor
                                : defaultTheme.color.backgroundBase
                        }}
                        onPressedChange={onToggle.subTitleToggle}
                    >
                        SubTítulo
                    </ToggleRoot>
                </PopoverContent>
            </PopoverPortal>
        </PopoverRoot>
    );
}
