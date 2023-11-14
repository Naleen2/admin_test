import {SimpleGrid, TextInput} from "@mantine/core";
import CreateProductSection from "./CreateProductSection.tsx";

function Pricing() {
    return <CreateProductSection
        title="Pricing"
        description="Add your product pricing here">
        <SimpleGrid cols={{base: 1, sm: 2, lg: 2}} spacing="lg">
            <TextInput leftSection="$" label="Price" placeholder="10"/>
            <TextInput leftSection="$" label="Cost Price" placeholder="15"/>
            <TextInput leftSection="$" label="Retail Price" placeholder="10"/>
            <TextInput leftSection="$" label="Sale Price" placeholder="20"/>
        </SimpleGrid>
    </CreateProductSection>
}

export default Pricing;