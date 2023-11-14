import {useForm} from '@mantine/form';
import {Button, ComboboxItem, Group, MultiSelect, NumberInput, SimpleGrid, TextInput} from '@mantine/core';
import {Product} from "../store/slices/product-slice.ts";
import {useGetCategoriesQuery} from "../store/apis/categoryApi.ts";

type AddEditProductProps = {
    product: Product,
    onSubmit: (p: Product) => void;
}

function AddEditProduct({product, onSubmit}: AddEditProductProps) {

    const {data: categories, isFetching} = useGetCategoriesQuery(undefined);

    let categoryComboItems: ComboboxItem[] | undefined;

    if (!isFetching && categories) {
        categoryComboItems = categories.map<ComboboxItem>(category => {
            return {
                value: category.id,
                label: category.name
            }
        })
    }

    const form = useForm({
        initialValues: product,
        validate: {
            name: (value) => {
                if (!value) {
                    return 'name can not be empty';
                }
            }
        }
    });

    function save(): void {
        if (form.isValid()) {
            product = form.getTransformedValues();
            onSubmit(product);
            form.reset();
        }
    }

    return (
        <SimpleGrid cols={1} verticalSpacing="md">
            <TextInput label="Name" withAsterisk placeholder="Name" {...form.getInputProps('name')} />
            <TextInput label="Description" placeholder="Description" {...form.getInputProps('description')} />
            <NumberInput label="Stock Count" placeholder="Stock Count" {...form.getInputProps('stockCount')} />
            <NumberInput label="Price" placeholder="Price" {...form.getInputProps('price')} />
            <MultiSelect  {...form.getInputProps('categories')}
                          label="Choose Categories"
                          placeholder="Choose Categories"
                          data={categoryComboItems}
            />
            {/*<ImageUpload></ImageUpload>*/}

            <Group justify="center" mt="xl">
                <Button
                    variant="outline"
                    onClick={() => save()}>
                    Add Product
                </Button>
            </Group>
        </SimpleGrid>
    );
}

export default AddEditProduct;