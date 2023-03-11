import { createContext, ReactNode, useRef, useState } from 'react';

interface BannerDataProps {
    presentation: string;
    office: string;
}

interface BannerStyleProps {
    bold: {
        title: {
            active: boolean;
            type: string;
        };
        subTitle: {
            active: boolean;
            type: string;
        };
    };
    italic: {
        title: {
            active: boolean;
            type: string;
        };
        subTitle: {
            active: boolean;
            type: string;
        };
    };
}

const bannerStyleSchema = {
    bold: {
        title: {
            active: false,
            type: 'normal'
        },
        subTitle: {
            active: false,
            type: 'normal'
        }
    },
    italic: {
        title: {
            active: false,
            type: 'normal'
        },
        subTitle: {
            active: false,
            type: 'normal'
        }
    }
};

interface GitHubBannerContextType {
    bannerRef: any;
    bannerData: BannerDataProps;
    bannerStyle: BannerStyleProps;
    updateBannerData: (bannerData: BannerDataProps) => void;
    updateBannerStyle: (bannerStyle: BannerStyleProps) => void;
}

export const GitHubBannerContext = createContext({} as GitHubBannerContextType);

interface GitHubBannerContextProviderProps {
    children: ReactNode;
}

export function GitHubBannerContextProvider({
    children
}: GitHubBannerContextProviderProps) {
    const [bannerData, setBannerData] = useState({ presentation: '', office: '' });
    const bannerRef = useRef(null);
    const [bannerStyle, setBannerStyle] = useState(bannerStyleSchema);

    function updateBannerData(bannerData: BannerDataProps) {
        setBannerData(bannerData);
    }

    function updateBannerStyle(bannerStyle: BannerStyleProps) {
        setBannerStyle(bannerStyle);
    }

    return (
        <GitHubBannerContext.Provider
            value={{
                bannerData,
                updateBannerData,
                bannerRef,
                bannerStyle,
                updateBannerStyle
            }}
        >
            {children}
        </GitHubBannerContext.Provider>
    );
}
