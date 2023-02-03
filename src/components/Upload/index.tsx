import { UploadContainer, ButtonUpload, Canvas } from './styled';

import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import { useState } from 'react';
const uploader = Uploader({ apiKey: `${process.env.NEXT_PUBLIC_UPLOAD_API_KEY}` });

interface UploadProps {
    bannerData: {
        presentation: string;
        office: string;
    };
}

export function Upload({ bannerData }: UploadProps) {
    const [image, setImage] = useState<null | string>(null);

    const handleImage = (image: any) => {
        setImage(image[0].fileUrl);
    };

    const convertToGif = () => {
        const canvas: HTMLCanvasElement | null = document.querySelector('#canvas');
        const ctx = canvas?.getContext('2d');
        console.log(ctx);
        if (ctx) {
            ctx.font = '20px Roboto';
            ctx.fillText(bannerData.presentation, 10, 50);
            ctx.fillText(bannerData.office, 30, 70);
        }
    };

    return (
        <>
            <UploadContainer>
                <Canvas image={image} id="canvas" />

                {!image && (
                    <UploadButton
                        uploader={uploader}
                        options={{ multi: false }}
                        onComplete={files => handleImage(files)}
                    >
                        {({ onClick }) => (
                            <ButtonUpload onClick={onClick}>Suba uma Imagem</ButtonUpload>
                        )}
                    </UploadButton>
                )}
                {/* <UserData>
                            <h1>{bannerData.presentation}</h1>
                            <h2>{bannerData.office}</h2>
                        </UserData> */}
            </UploadContainer>
            <button
                style={{ position: 'absolute', right: '-80px' }}
                onClick={convertToGif}
            >
                Download
            </button>
        </>
    );
}

// alert(files.map(x => x.fileUrl).join('\n'))
