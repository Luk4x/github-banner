import { useContext } from 'react';
import { GitHubBannerContext } from 'src/context/contextGitBanner';
import { Button } from '../Button';
import {
    ConfigStyled,
    InputStyled,
    Editor,
    EditorTabList,
    EditorTab,
    EditorTabContent,
    PopoverRoot,
    PopoverTrigger,
    PopoverPortal,
    PopoverContent,
    PopoverArrow,
    ToggleRoot
} from './styled';
import { Palette, TextT, TextBolder } from 'phosphor-react';

export function Config() {
    const { updateBannerData, bannerRef, bannerData, updateBannerStyle, bannerStyle } =
        useContext(GitHubBannerContext);

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
                        onChange={e => {
                            updateBannerData({
                                ...bannerData,
                                presentation: e.target.value
                            });

                            e.target.value
                                ? e.target.setAttribute('input1-state', 'active')
                                : e.target.removeAttribute('input1-state');
                        }}
                    />
                </div>
                <div>
                    <InputStyled
                        type="text"
                        placeholder="Cargo"
                        onChange={e => {
                            updateBannerData({ ...bannerData, office: e.target.value });

                            e.target.value
                                ? e.target.setAttribute('input2-state', 'active')
                                : e.target.removeAttribute('input2-state');
                        }}
                    />
                </div>
            </div>
            <Editor defaultValue="colorTab">
                <EditorTabList aria-label="Customize seu banner">
                    <EditorTab value="colorTab">
                        <Palette />
                    </EditorTab>
                    <EditorTab value="textTab">
                        <TextT />
                    </EditorTab>
                </EditorTabList>
                <EditorTabContent value="colorTab">
                    <div>cores</div>
                </EditorTabContent>
                <EditorTabContent value="textTab">
                    <div>
                        <PopoverRoot>
                            <PopoverTrigger>
                                <TextBolder />
                            </PopoverTrigger>
                            <PopoverPortal>
                                <PopoverContent sideOffset={5}>
                                    <ToggleRoot
                                        onPressedChange={() =>
                                            updateBannerStyle({
                                                ...bannerStyle,
                                                boldTitle: !bannerStyle.boldTitle
                                            })
                                        }
                                    >
                                        Título
                                    </ToggleRoot>
                                    <ToggleRoot
                                        onPressedChange={() =>
                                            updateBannerStyle({
                                                ...bannerStyle,
                                                boldSubTitle: !bannerStyle.boldSubTitle
                                            })
                                        }
                                    >
                                        SubTítulo
                                    </ToggleRoot>
                                    <PopoverArrow />
                                </PopoverContent>
                            </PopoverPortal>
                        </PopoverRoot>
                    </div>
                </EditorTabContent>
            </Editor>
            <Button onClick={downloadSvg} buttonName="Download" />
        </ConfigStyled>
    );
}
