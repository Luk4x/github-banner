import { Image } from 'phosphor-react';
import { useState, useContext } from 'react';
import { GitHubBannerContext } from 'src/context/contextGitBanner';
import { UploadContainer, ButtonUpload } from './styled';

export function Upload() {
    const { bannerData, bannerRef, bannerStyle } = useContext(GitHubBannerContext);
    const [bgImageUrl, setBgImageUrl] = useState<null | string>(null);

    return (
        <UploadContainer>
            {!bgImageUrl ? (
                <ButtonUpload>
                    <span>Upload</span>
                    <Image />
                    <label htmlFor="uploadImage" />
                    <input
                        type="file"
                        accept="image/*"
                        id="uploadImage"
                        onChange={e => {
                            if (e.target.files) {
                                const imageFile = e.target.files[0];

                                // converting the background image uploaded to DataURL
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    reader.result &&
                                        setBgImageUrl(reader.result.toString());
                                };
                                reader.readAsDataURL(imageFile);
                            }
                        }}
                    />
                </ButtonUpload>
            ) : (
                <svg
                    width="866"
                    height="350"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    ref={bannerRef}
                >
                    {bgImageUrl && <image href={bgImageUrl} width="100%" />}
                    <path id="path">
                        <animate
                            attributeName="d"
                            from="m0,110 h0"
                            to="m0,110 h1100"
                            dur="6.8s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <text
                        fontSize="28"
                        fontFamily="Roboto, Arial, Helvetica, sans-serif"
                        fontStyle={
                            bannerStyle.italic.title.active
                                ? bannerStyle.italic.title.type
                                : 'normal'
                        }
                        fontWeight={
                            bannerStyle.bold.title.active
                                ? bannerStyle.bold.title.type
                                : 'normal'
                        }
                        fill="hsla(36, 95%, 85%, 1)"
                        textAnchor="middle"
                        x="50%"
                        dy="4%"
                    >
                        <textPath alignmentBaseline="middle" xlinkHref="#path">
                            {bannerData.presentation}
                        </textPath>
                    </text>
                    <text
                        fontSize="22"
                        fontFamily="Roboto, Arial, Helvetica, sans-serif"
                        fontStyle={
                            bannerStyle.italic.subTitle.active
                                ? bannerStyle.italic.subTitle.type
                                : 'normal'
                        }
                        fontWeight={
                            bannerStyle.bold.subTitle.active
                                ? bannerStyle.bold.subTitle.type
                                : 'normal'
                        }
                        fill="hsla(36, 95%, 85%, 1)"
                        textAnchor="middle"
                        x="50%"
                        dy="14%"
                    >
                        <textPath xlinkHref="#path">{bannerData.office}</textPath>
                    </text>
                </svg>
            )}
        </UploadContainer>
    );
}
