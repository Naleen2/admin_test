import {useForm} from "@mantine/form";
import {Box, Button, Group, TextInput} from "@mantine/core";
import {useAddCategoryMutation} from "../store/apis/categoryApi.ts";
import {randomId} from "@mantine/hooks";
import {Category} from "./Categories.tsx";

type AddCategoryProps = {
    onSubmit: (c: Category) => void
}

function AddCategory({onSubmit}: AddCategoryProps) {
    const [addCategory] = useAddCategoryMutation();

    const form = useForm({
        initialValues: {
            name: '',
            description: '',
        },

        validate: {
            name: (value) => {
                if (!value) {
                    return 'name can not be empty';
                }
            }
        },
    });

    function addNewCategory(id: string) {
        if (form.isValid()) {
            const transformedValues = form.getTransformedValues();
            const newCategory = {
                id,
                ...transformedValues
            };
            addCategory(newCategory);
            onSubmit(newCategory)
        }
    }

    return (
        <Box maw={340} mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="name"
                    {...form.getInputProps('name')}
                />

                <TextInput
                    label="Description"
                    placeholder="Description"
                    {...form.getInputProps('description')}
                />

                <Group justify="flex-end" mt="md">
                    <Button type="submit" onClick={() => addNewCategory(randomId())}>Submit</Button>
                </Group>
            </form>
        </Box>
    );
}

export default AddCategory;