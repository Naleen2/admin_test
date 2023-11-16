import {useState} from 'react';
import {Box, Group, Paper, rem, SimpleGrid, Text} from '@mantine/core';
import {Dropzone, FileWithPath, IMAGE_MIME_TYPE} from '@mantine/dropzone';
import {IconPhoto, IconUpload, IconX} from "@tabler/icons-react";
import ImageWithX from "./ImageWithX.tsx";

function ImageUpload() {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    const previews = files.map((file, index) => {
        return <ImageWithX file={file} index={index} onRemove={removeFile}></ImageWithX>
    });

    function addFiles(newFiles: FileWithPath[]): void {
        setFiles([...files, ...newFiles])
    }

    function removeFile(file) {
        setFiles(files.filter((f) => f !== file));
    }

    return (
        <Box>
            <Paper shadow="xs" radius={10}>
                <Dropzone
                    onDrop={addFiles}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    maxFiles={5}
                    accept={IMAGE_MIME_TYPE}
                >
                    <Group justify="center" gap="xl" mih={220} style={{pointerEvents: 'none'}}>
                        <Dropzone.Accept>
                            <IconUpload
                                style={{width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)'}}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)'}}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconPhoto
                                style={{width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)'}}
                                stroke={1.5}
                            />
                        </Dropzone.Idle>

                        <div>
                            <Text size="xl" inline>
                                Drag images here or click to select files
                            </Text>
                            <Text size="sm" c="dimmed" inline mt={7}>
                                Attach as many files as you like, each file should not exceed 5mb
                            </Text>
                        </div>
                    </Group>
                </Dropzone>
            </Paper>
            <SimpleGrid cols={{base: 1, sm: 4}} mt={previews.length > 0 ? 'xl' : 0}>
                {previews}
            </SimpleGrid>
        </Box>
    );
}

export default ImageUpload;