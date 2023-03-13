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

import { EditorItemCarousel } from '../EditorItemCarousel';

import { useContext } from 'react';
import { GitHubBannerContext } from 'src/context/contextGitBanner';

interface EditorItemProps {
    children: ReactNode;
    availableTypes: string[];
    styleType: string;
}

export function EditorItem({ children, styleType, availableTypes }: EditorItemProps) {
    const { updateBannerStyle, bannerStyle } = useContext(GitHubBannerContext);

    return (
        <PopoverRoot>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverPortal>
                <PopoverContent sideOffset={5}>
                    <PopoverArrow />
                    <ToggleRoot
                        style={{
                            backgroundColor: bannerStyle[
                                styleType as keyof typeof bannerStyle
                            ].title.active
                                ? defaultTheme.color.highlightColor
                                : defaultTheme.color.backgroundBase
                        }}
                        onPressedChange={() =>
                            updateBannerStyle({
                                ...bannerStyle,
                                [styleType as keyof typeof bannerStyle]: {
                                    ...bannerStyle[styleType as keyof typeof bannerStyle],
                                    title: {
                                        ...bannerStyle[
                                            styleType as keyof typeof bannerStyle
                                        ].title,
                                        active: !bannerStyle[
                                            styleType as keyof typeof bannerStyle
                                        ].title.active
                                    }
                                }
                            })
                        }
                    >
                        Título
                    </ToggleRoot>
                    <ToggleRoot
                        style={{
                            backgroundColor: bannerStyle[
                                styleType as keyof typeof bannerStyle
                            ].subTitle.active
                                ? defaultTheme.color.highlightColor
                                : defaultTheme.color.backgroundBase
                        }}
                        onPressedChange={() =>
                            updateBannerStyle({
                                ...bannerStyle,
                                [styleType as keyof typeof bannerStyle]: {
                                    ...bannerStyle[styleType as keyof typeof bannerStyle],
                                    subTitle: {
                                        ...bannerStyle[
                                            styleType as keyof typeof bannerStyle
                                        ].subTitle,
                                        active: !bannerStyle[
                                            styleType as keyof typeof bannerStyle
                                        ].subTitle.active
                                    }
                                }
                            })
                        }
                    >
                        SubTítulo
                    </ToggleRoot>
                    {bannerStyle[styleType as keyof typeof bannerStyle].title.active && (
                        <EditorItemCarousel
                            availableTypes={availableTypes}
                            styleType={styleType}
                            isTitle={true}
                        >
                            {availableTypes.map(type => (
                                <p key={type}>{type}</p>
                            ))}
                        </EditorItemCarousel>
                    )}
                    {bannerStyle[styleType as keyof typeof bannerStyle].subTitle
                        .active && (
                        <EditorItemCarousel
                            availableTypes={availableTypes}
                            styleType={styleType}
                            isTitle={false}
                        >
                            {availableTypes.map(type => (
                                <p key={type}>{type}</p>
                            ))}
                        </EditorItemCarousel>
                    )}
                </PopoverContent>
            </PopoverPortal>
        </PopoverRoot>
    );
}
