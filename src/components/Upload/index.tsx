import { UploadContainer, ButtonUpload, DataContainer } from './styled';

import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import { useState } from 'react';
const uploader = Uploader({ apiKey: `${process.env.NEXT_PUBLIC_UPLOAD_API_KEY}` });

import domtoimage from 'dom-to-image';
const JSZip = require('jszip');
const GifEncoder = require('gif-encoder');
const concat = require('concat-stream');
import { saveAs } from 'file-saver';

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
    };

    // interface pixelsToGIFProps {
    //     pixels: Uint8ClampedArray;
    //     image?: string;
    //     width: number;
    //     height: number;
    // }
    const pixelsToGIF = (
        pixels: Uint8ClampedArray,
        image: string,
        width: number,
        height: number
    ) =>
        new Promise((resolve, reject) => {
            const gif = new GifEncoder(width, height);
            gif.pipe(concat(resolve));
            gif.writeHeader();
            gif.addFrame(pixels);
            gif.finish();
            gif.on('error', reject);
        });

    const convertToGif = () => {
        const uploadContainer = document.querySelector('#uploadContainer');
        console.log(uploadContainer);

        const width = 600;
        const height = 300;

        const zip = new JSZip();
        if (uploadContainer !== null) {
            domtoimage
                .toPixelData(uploadContainer, { width, height })
                .then(pixels => pixelsToGIF(pixels, 'image.gif', width, height))
                .then(gif => zip.file('image.gif', gif))
                .then(data =>
                    zip.generateAsync({ type: 'blob' }).then(function (data: any) {
                        saveAs(data, 'example.zip');
                    })
                )
                .catch(e => console.log("couldn't export to GIF", e));
        }
    };

    return (
        <>
            <UploadContainer image={image} id="uploadContainer">
                {!image ? (
                    <UploadButton
                        uploader={uploader}
                        options={{ multi: false }}
                        onComplete={files => handleImage(files)}
                    >
                        {({ onClick }) => (
                            <ButtonUpload onClick={onClick}>Suba uma Imagem</ButtonUpload>
                        )}
                    </UploadButton>
                ) : (
                    <DataContainer id="dataContainer">
                        <h1>{bannerData.presentation}</h1>
                        <h2>{bannerData.office}</h2>
                    </DataContainer>
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
