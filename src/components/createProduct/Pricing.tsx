import {TextInput} from "@mantine/core";
import CreateProductSection from "./CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";

function Pricing() {
    return <CreateProductSection
        title="Pricing"
        description="Add your product pricing here">
        <TableForm colCountLargeScreen={2}>
            <TextInput leftSection="$" label="Price" placeholder="10"/>
            <TextInput leftSection="$" label="Cost Price" placeholder="15"/>
            <TextInput leftSection="$" label="Retail Price" placeholder="10"/>
            <TextInput leftSection="$" label="Sale Price" placeholder="20"/>
        </TableForm>
    </CreateProductSection>
}

export default Pricing;