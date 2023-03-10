import { createContext, ReactNode, useRef, useState } from 'react';

interface BannerDataProps {
    presentation: string;
    office: string;
}

interface BannerStyleProps {
    boldTitle: boolean;
    boldSubTitle: boolean;
    italicTitle: boolean;
    italicSubTitle: boolean;
}

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
    const [bannerStyle, setBannerStyle] = useState({
        boldTitle: false,
        boldSubTitle: false,
        italicTitle: false,
        italicSubTitle: false
    });

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
