import CreateProductSection from "./CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";
import {TextInput} from "@mantine/core";

function Seo() {
    return (
        <CreateProductSection
            title="Search Engine Optimization"
            description="Add your product's seo info here">
            <TableForm colCountLargeScreen={2}>
                <TextInput label="Page Title" placeholder="Page Title"/>
                <TextInput label="Meta Keywords" placeholder="Meta Keywords"/>
                <TextInput label="Meta Description" placeholder="Meta Description"/>
                <TextInput label="Product URL" placeholder="https://"/>
            </TableForm>
        </CreateProductSection>
    );
}

export default Seo;