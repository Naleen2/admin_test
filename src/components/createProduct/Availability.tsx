import CreateProductSection from "./CreateProductSection.tsx";
import CheckboxCardGroup from "../core/CheckboxCardGroup.tsx";

function Availability() {
    return <CreateProductSection
        title="Availability"
        description="Add your product inventory info here">
            <CheckboxCardGroup options={["Only available online.", "Coming soon", "Only available offline."]}></CheckboxCardGroup>
    </CreateProductSection>
}

export default Availability;