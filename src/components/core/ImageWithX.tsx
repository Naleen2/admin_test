import {ActionIcon, FileWithPath, Group, HoverCard, Image} from "@mantine/core";

type ImageProps = {
    file: FileWithPath,
    index: number,
    onRemove: (file) => void
}

function ImageWithX({file, index, onRemove} : ImageProps) {
    const imageUrl = URL.createObjectURL(file);


    return (
        <Group justify="center">
            <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                    <Image src={imageUrl} key={index}  radius={15}  onLoad={() => URL.revokeObjectURL(imageUrl)}></Image>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                    <ActionIcon size={"sm"} onClick={() => onRemove(file)}>X</ActionIcon>
                </HoverCard.Dropdown>
            </HoverCard>
        </Group>
    );
}

export default ImageWithX