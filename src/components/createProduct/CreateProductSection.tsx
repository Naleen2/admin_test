import {ReactNode} from "react";
import CreateProductPageDescription from "./CreateProductPageDescription.tsx";
import {Grid} from "@mantine/core";

type CreateProductSectionProps = {
    title: string,
    description: string,
    children: ReactNode,
}

function CreateProductSection({title, description, children}: CreateProductSectionProps) {
    return <Grid pt={30} pb={30}>
        <Grid.Col span={4}>
            <CreateProductPageDescription
                name={title}
                description={description}></CreateProductPageDescription>
        </Grid.Col>
        <Grid.Col span={8}>
            {children}
        </Grid.Col>
    </Grid>
}

export default CreateProductSection;