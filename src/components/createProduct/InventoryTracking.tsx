import CreateProductSection from "./CreateProductSection.tsx";
import {Group, Radio, SimpleGrid, Stack, TextInput} from "@mantine/core";

function InventoryTracking() {
    return <CreateProductSection
        title="Inventory Tracking"
        description="Add your product inventory info here">
        <Group>
            <Stack>
                <Radio checked label="Track inventory for this product" value="react"/>
                <Radio label="Do not track inventory for this product" value="nu"/>
                <Radio label="Track inventory by options" value="sv"/>
            </Stack>
        </Group>
        <SimpleGrid pt={20} cols={{base: 1, sm: 2, lg: 2}} spacing="lg">
            <TextInput label="Current Stock Level" placeholder="150"/>
            <TextInput label="Low Stock Level" placeholder="20"/>
        </SimpleGrid>
    </CreateProductSection>
}

export default InventoryTracking;