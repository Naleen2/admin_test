import CreateProductSection from "./CreateProductSection.tsx";
import CustomFieldsAndValues from "../core/CustomFieldsAndValues.tsx";

function Variant() {
    return (
        <CreateProductSection title="Variant Options" description="Add your product variants here">
            <CustomFieldsAndValues fieldLabelAndValueLabel={{
                fieldLabel: "Variant Name",
                valueLabel: "Variant Value"
            }}>
            </CustomFieldsAndValues>
        </CreateProductSection>
    );
}

export default Variant;