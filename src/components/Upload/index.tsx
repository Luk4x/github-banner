import { UploadContainer, ButtonUpload } from './styled';

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
    const [image, setImage] = useState(null);

    const handleImage = (image: any) => {
        setImage(image[0].fileUrl);
        console.log(image);
    };

    console.log(bannerData);

    return (
        <UploadContainer image={image}>
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
        </UploadContainer>
    );
}

// alert(files.map(x => x.fileUrl).join('\n'))
