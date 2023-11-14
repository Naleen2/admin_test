import {Grid, Text, Title} from "@mantine/core";

type CreateProductPageDescriptionProps = {
    name: string,
    description: string
}

function CreateProductPageDescription({name, description}: CreateProductPageDescriptionProps) {
    return (
        <Grid.Col span={4}>
            <Title order={4}>{name}</Title>
            <Text>{description}</Text>
        </Grid.Col>
    )
}

export default CreateProductPageDescription;
