import {Box, TextInput} from "@mantine/core";
import CreateProductSection from "./CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";

function ProductIdentifiers() {
    return (
        <Box>
            <CreateProductSection
                title="Product Identifiers"
                description="Edit your product identifiers here">
                <TableForm colCountLargeScreen={2}>
                    <TextInput label="Global Trade Item Number" placeholder="12345"/>
                    <TextInput label="Manufacturer Part Number" placeholder="12345"/>
                    <TextInput label="Brand Name" placeholder="Brand Name"/>
                    <TextInput label="Product UPC/EAN" placeholder="12345"/>
                    <TextInput label="Custom Field Name" placeholder="Custom Field Name"/>
                    <TextInput label="Custom Field Value" placeholder="Custom Field Value"/>
                </TableForm>
            </CreateProductSection>
        </Box>
    );
}

export default ProductIdentifiers;