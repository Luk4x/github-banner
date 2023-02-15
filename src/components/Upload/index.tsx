import { useState } from 'react';

import { UploadContainer, ButtonUpload, UserData } from './styled';

interface UploadProps {
    bannerData: {
        presentation: string;
        office: string;
    };
}

export function Upload({ bannerData }: UploadProps) {
    const [image, setImage] = useState<null | string>(null);

    const convertToGif = () => {
        console.log('akame');
    };

    return (
        <>
            <UploadContainer image={image}>
                {!image ? (
                    <ButtonUpload
                        type="file"
                        accept="image/*"
                        onChange={e => {
                            if (e.target.files !== null) {
                                const bgImage = e.target.files[0];
                                setImage(URL.createObjectURL(bgImage));
                            }
                        }}
                    />
                ) : (
                    <UserData>
                        <h1>{bannerData.presentation}</h1>
                        <h2>{bannerData.office}</h2>
                    </UserData>
                )}
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
