import CreateProductSection from "../createProduct/CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";
import {Select, Textarea, TextInput} from "@mantine/core";

function AddCategory() {
    return (
        <CreateProductSection title="Add new category" description="Edit your category information from here">
            <TableForm colCountLargeScreen={2}>
                <TextInput label="Category Name" placeholder="Vegetables"/>
                <TextInput label="Slug" placeholder="Vegetables"/>
                <Select
                    label="Parent Category"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
                <Select
                    label="Display Type"
                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
            </TableForm>
            <TableForm colCountLargeScreen={1}>
                <Textarea pt={15} label="Description" placeholder="Product title" autosize minRows={3}/>
            </TableForm>
        </CreateProductSection>
    );
}

export default AddCategory;