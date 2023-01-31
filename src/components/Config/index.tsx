import { Dispatch, SetStateAction } from 'react';
import { ConfigStyled, InputStyled } from './styled';

interface ConfigProps {
    bannerData: {
        presentation: string;
        office: string;
    };
    setBannerData: Dispatch<SetStateAction<{ presentation: string; office: string }>>;
}

export function Config({ bannerData, setBannerData }: ConfigProps) {
    return (
        <ConfigStyled>
            <InputStyled
                type="text"
                placeholder="Apresentação"
                onChange={e =>
                    setBannerData({ ...bannerData, presentation: e.target.value })
                }
            />
            <InputStyled
                type="text"
                placeholder="Cargo"
                onChange={e => setBannerData({ ...bannerData, office: e.target.value })}
            />
        </ConfigStyled>
    );
}
