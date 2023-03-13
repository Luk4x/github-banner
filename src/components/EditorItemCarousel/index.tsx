import { ReactChild, useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { GitHubBannerContext } from 'src/context/contextGitBanner';

interface EditorItemCarouselProps {
    children: ReactChild[];
    availableTypes: string[];
    styleType: string;
    isTitle: boolean;
}

export function EditorItemCarousel({
    children,
    availableTypes,
    styleType,
    isTitle
}: EditorItemCarouselProps) {
    const { bannerStyle, updateBannerStyle } = useContext(GitHubBannerContext);

    return (
        <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            axis="horizontal"
            onChange={currentItem => {
                updateBannerStyle({
                    ...bannerStyle,
                    [styleType as keyof typeof bannerStyle]: {
                        ...bannerStyle[styleType as keyof typeof bannerStyle],
                        [isTitle ? 'title' : 'subTitle']: {
                            ...bannerStyle[styleType as keyof typeof bannerStyle][
                                isTitle ? 'title' : 'subTitle'
                            ],
                            type: availableTypes[currentItem]
                        }
                    }
                });
            }}
        >
            {children}
        </Carousel>
    );
}
