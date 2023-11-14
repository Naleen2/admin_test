import CreateProductSection from "./CreateProductSection.tsx";
import {SimpleGrid} from "@mantine/core";
import CheckboxCardGroup from "../core/CheckboxCardGroup.tsx";

function Availability() {
    return <CreateProductSection
        title="Availability"
        description="Add your product inventory info here">
        <SimpleGrid cols={{base: 1, sm: 2, lg: 2}} spacing="lg">
            <CheckboxCardGroup options={["Only available online.", "Coming soon", "Only available offline."]}></CheckboxCardGroup>
        </SimpleGrid>
    </CreateProductSection>
}

export default Availability;