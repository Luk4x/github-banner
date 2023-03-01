import { useState, useRef } from 'react';
import { UploadContainer, ButtonUpload } from './styled';

interface UploadProps {
    bannerData: {
        presentation: string;
        office: string;
    };
}

export function Upload({ bannerData }: UploadProps) {
    const svgRef = useRef(null);
    const [bgImageUrl, setBgImageUrl] = useState<null | string>(null);

    const DownloadSvg = async () => {
        if (svgRef.current) {
            const svg = svgRef.current;

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

            // add xml declaration
            source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

            // convert svg source to URI data scheme
            const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);

            // generate download link
            const link = document.createElement('a');
            link.download = 'Github-Banner.svg';
            link.href = url;
            link.click();
        }
    };

    return (
        <>
            <UploadContainer>
                {!bgImageUrl ? (
                    <ButtonUpload
                        type="file"
                        accept="image/*"
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
                ) : (
                    <svg
                        width="800"
                        height="350"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        ref={svgRef}
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
                            fontFamily="Montserrat"
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
                            fontFamily="Montserrat"
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
            <button
                style={{ position: 'absolute', right: '-80px', top: '-40px' }}
                onClick={DownloadSvg}
            >
                Download
            </button>
        </>
    );
}
