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
    titleState: boolean;
    subTitleState: boolean;
    onTitleToggle: () => void;
    onSubTitleToggle: () => void;
}

export function EditorItem({
    children,
    titleState,
    subTitleState,
    onTitleToggle,
    onSubTitleToggle
}: EditorItemProps) {
    return (
        <PopoverRoot>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverPortal>
                <PopoverContent sideOffset={5}>
                    <ToggleRoot
                        style={{
                            backgroundColor: titleState
                                ? defaultTheme.color.highlightColor
                                : defaultTheme.color.backgroundBase
                        }}
                        onPressedChange={onTitleToggle}
                    >
                        Título
                    </ToggleRoot>
                    <ToggleRoot
                        style={{
                            backgroundColor: subTitleState
                                ? defaultTheme.color.highlightColor
                                : defaultTheme.color.backgroundBase
                        }}
                        onPressedChange={onSubTitleToggle}
                    >
                        SubTítulo
                    </ToggleRoot>
                    <PopoverArrow />
                </PopoverContent>
            </PopoverPortal>
        </PopoverRoot>
    );
}
