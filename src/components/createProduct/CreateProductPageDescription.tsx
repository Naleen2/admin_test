import {Box, Text, Title} from "@mantine/core";

type CreateProductPageDescriptionProps = {
    name: string,
    description: string
}

function CreateProductPageDescription({name, description}: CreateProductPageDescriptionProps) {
    return (
        <Box>
            <Title order={4}>{name}</Title>
            <Text>{description}</Text>
        </Box>
    )
}

export default CreateProductPageDescription;
