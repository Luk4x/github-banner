import { createContext, ReactNode, useRef, useState } from 'react';

interface BannerDataProps {
    presentation: string;
    office: string;
}

interface GitHubBannerContextType {
    bannerData: BannerDataProps;
    updateBannerData: (bannerData: BannerDataProps) => void;
    bannerRef: any;
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

    function updateBannerData(bannerData: BannerDataProps) {
        setBannerData(bannerData);
    }

    return (
        <GitHubBannerContext.Provider value={{ bannerData, updateBannerData, bannerRef }}>
            {children}
        </GitHubBannerContext.Provider>
    );
}
