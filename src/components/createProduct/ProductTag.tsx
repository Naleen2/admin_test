import CreateProductSection from "./CreateProductSection.tsx";
import {Button, Grid, rem, TextInput} from "@mantine/core";
import {IconTag, IconX} from "@tabler/icons-react";
import {useState} from "react";


function ProductTag() {

    const [tags, setTags] = useState<string[]>([]);
    const [currentTag, setCurrentTag] = useState<string>("");

    function addTag() {
        setTags([...tags, currentTag]);
        console.log(tags);
        setCurrentTag("");
    }

    function removeTag(tag: string) {
        setTags(tags.filter(t => t !== tag));
    }

    const tagsComponent = tags.map(tag => {
        return <Button key={tag} mr={5} radius={20} variant={"default"}
                       onClick={() => removeTag(tag)}
                       rightSection={<IconX size={14} />}>{tag}</Button>
    })

    const icon = <IconTag style={{width: rem(16), height: rem(16)}}/>;
    return (
        <CreateProductSection title="Product Tags" description="Add your product's tag or category here">
            <Grid>
                <Grid.Col span={4}>
                    <TextInput
                        value={currentTag}
                        leftSectionPointerEvents="none"
                        leftSection={icon}
                        placeholder="Enter a Tag"
                        onChange={(event) => setCurrentTag(event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={1}>
                    <Button disabled={!currentTag} variant={"default"} onClick={addTag}>Add Tag</Button>
                </Grid.Col>
                <Grid.Col span={12}>
                    {tagsComponent}
                </Grid.Col>
            </Grid>
        </CreateProductSection>
    );
}

export default ProductTag;