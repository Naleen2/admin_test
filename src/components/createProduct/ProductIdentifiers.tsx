import {Box, TextInput} from "@mantine/core";
import CreateProductSection from "./CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";
import CustomFieldsAndValues from "../core/CustomFieldsAndValues.tsx";

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
                </TableForm>
                <CustomFieldsAndValues fieldLabelAndValueLabel={
                    {
                        fieldLabel: "Custom Field Name",
                        valueLabel: "Custom Field Value"
                    }
                }></CustomFieldsAndValues>
            </CreateProductSection>
        </Box>
    );
}

export default ProductIdentifiers;