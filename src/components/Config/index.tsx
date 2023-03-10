import {
    ConfigStyled,
    InputStyled,
    Editor,
    EditorTabList,
    EditorTab,
    EditorTabContent
} from './styled';

import { useContext } from 'react';
import { GitHubBannerContext } from 'src/context/contextGitBanner';

import { Button } from '../Button';
import { EditorItem } from '../EditorItem';

import { Palette, TextT, TextBolder, TextItalic } from 'phosphor-react';

export function Config() {
    const { bannerRef, updateBannerData, bannerData } = useContext(GitHubBannerContext);

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
                        <EditorItem
                            availableTypes={[
                                '100',
                                '200',
                                '300',
                                '400',
                                '500',
                                '600',
                                '700',
                                '800',
                                '900'
                            ]}
                            styleType="bold"
                        >
                            <TextBolder />
                        </EditorItem>
                        <EditorItem
                            availableTypes={['italic', 'oblique']}
                            styleType="italic"
                        >
                            <TextItalic />
                        </EditorItem>
                    </div>
                </EditorTabContent>
            </Editor>
            <Button onClick={downloadSvg} buttonName="Download" />
        </ConfigStyled>
    );
}
