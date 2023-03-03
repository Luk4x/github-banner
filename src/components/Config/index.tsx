import { useContext, ChangeEvent } from 'react';
import { GitHubBannerContext } from 'src/context/contextGitBanner';
import { Button } from '../Button';
import { ConfigStyled, InputStyled } from './styled';

export function Config() {
    const { updateBannerData, bannerRef, bannerData } = useContext(GitHubBannerContext);

    const downloadSvg = async () => {
        if (bannerRef.current) {
            const svg = bannerRef.current;

            // get svg source.
            const serializer = new XMLSerializer();
            let source = serializer.serializeToString(svg);

            // add name spaces.
            if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
                source = source.replace(
                    /^<svg/,
                    '<svg xmlns="http://www.w3.org/2000/svg"'
                );
            }
            if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
                source = source.replace(
                    /^<svg/,
                    '<svg xmlns:xlink="http://www.w3.org/1999/xlink"'
                );
            }

            // add xml declaration and convert svg source to URI data scheme
            source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
            const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

            // generate download link
            const link = document.createElement('a');
            link.download = 'Github-Banner.svg';
            link.href = url;
            link.click();
        }
    };

    return (
        <ConfigStyled>
            <div>
                <div>
                    <InputStyled
                        type="text"
                        placeholder="Apresentação"
                        onChange={e =>
                            updateBannerData({
                                ...bannerData,
                                presentation: e.target.value
                            })
                        }
                    />
                </div>
                <div>
                    <InputStyled
                        type="text"
                        placeholder="Cargo"
                        onChange={e =>
                            updateBannerData({ ...bannerData, office: e.target.value })
                        }
                    />
                </div>
            </div>
            <Button onClick={downloadSvg} buttonName="Download" />
        </ConfigStyled>
    );
}
