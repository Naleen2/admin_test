import {Divider, Grid, Select, SimpleGrid, Textarea, TextInput} from "@mantine/core";
import CreateProductPageDescription from "./CreateProductPageDescription.tsx";

function ProductSummary() {
    return <div>
        <Grid pt={30} pb={30}>
            <CreateProductPageDescription name="Summary"
                                          description="Edit your product description and necessary information from here"></CreateProductPageDescription>
            <Grid.Col span={8}>
                <Grid>
                    <Grid.Col span={12}>
                        <SimpleGrid cols={{base: 1, sm: 2, lg: 2}} spacing="lg">
                            <TextInput label="Title" placeholder="Product title"/>
                            <TextInput label="SKU" placeholder="Product sku"/>
                            <Select
                                label="Product Type"
                                placeholder="Select"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                            />
                            <Select
                                label="Categories"
                                placeholder="Select"
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                            />
                        </SimpleGrid>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Textarea label="Description" placeholder="Product title" autosize minRows={3}/>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
        </Grid>
        <Divider my="sm" variant="dotted"/>
    </div>
}

export default ProductSummary;