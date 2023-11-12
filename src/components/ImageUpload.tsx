import {useState} from 'react';
import {Text, Image, SimpleGrid} from '@mantine/core';
import {Dropzone, IMAGE_MIME_TYPE, FileWithPath} from '@mantine/dropzone';

function ImageUpload() {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return <Image key={index} src={imageUrl} onLoad={() => URL.revokeObjectURL(imageUrl)}/>;
    });

    return (
        <div>
            <Dropzone accept={IMAGE_MIME_TYPE} maxFiles={5} onDrop={setFiles}>
                <div>
                    <Text size="xl" inline>
                        Drag images here or click to select files
                    </Text>
                    <Text size="sm" c="dimmed" inline mt={7}>
                        Attach as many files as you like, each file should not exceed 5mb
                    </Text>
                </div>
            </Dropzone>

            <SimpleGrid cols={{base: 1, sm: 4}} mt={previews.length > 0 ? 'xl' : 0}>
                {previews}
            </SimpleGrid>
        </div>
    );
}

export default ImageUpload;