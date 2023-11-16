import {Box, Select, Textarea, TextInput} from "@mantine/core";
import CreateProductSection from "./CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";

function ProductSummary() {
    return (
        <Box>
            <CreateProductSection
                title="Summary"
                description="Edit your product description and necessary information from here">
                <TableForm colCountLargeScreen={2}>
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
                </TableForm>
                <TableForm colCountLargeScreen={1}>
                    <Textarea pt={15} label="Description" placeholder="Product title" autosize minRows={3}/>
                </TableForm>
            </CreateProductSection>
        </Box>);


}

export default ProductSummary;