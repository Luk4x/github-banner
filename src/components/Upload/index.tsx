import { UploadContainer, ButtonUpload } from './styled';

import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import { useState } from 'react';

const uploader = Uploader({ apiKey: 'public_W142hbi5VQDBVDBog7k7VKRsALbU' });

export function Upload() {
    const [image, setImage] = useState(null);

    const handleImage = (image: any) => {
        setImage(image[0].fileUrl);
        console.log(image);
    };

    return (
        <UploadContainer image={image}>
            {!image && (
                <UploadButton
                    uploader={uploader}
                    options={{ multi: false }}
                    onComplete={files => handleImage(files)}
                >
                    {({ onClick }) => (
                        <ButtonUpload onClick={onClick}>Upload a file...</ButtonUpload>
                    )}
                </UploadButton>
            )}
        </UploadContainer>
    );
}

// alert(files.map(x => x.fileUrl).join('\n'))
