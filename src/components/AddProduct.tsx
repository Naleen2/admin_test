import {useForm} from '@mantine/form';
import {Box, Button, ComboboxItem, Group, MultiSelect, NumberInput, TextInput} from '@mantine/core';
import {useProductDispatch} from "../store/hooks.ts";
import {createNewProduct, Product} from "../store/slices/product-slice.ts";
import {randomId} from "@mantine/hooks";
import {faker} from "@faker-js/faker";
import {useGetCategoriesQuery} from "../store/apis/categoryApi.ts";

type AddProductProps = {
    onSubmit: (p: Product) => void;
}

function AddProduct({onSubmit}: AddProductProps) {

    const dispatch = useProductDispatch();

    const {data : categories, isFetching} = useGetCategoriesQuery(undefined);

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
        initialValues: {
            name: '',
            description: '',
            stockCount: 1,
            price: 0,
            image: faker.image.avatar(),
            categories: []
        },
        validate: {
            name: (value) => {
                if (!value) {
                    return 'name can not be empty';
                }
            }
        }
    });

    function addProduct(id: string): void {
        if (form.isValid()) {
            const product = {id, ...form.getTransformedValues()};
            dispatch(createNewProduct({id, ...form.getTransformedValues()}));
            onSubmit(product);
            form.reset();
        }
    }

    return (
        <Box maw={340} mx="auto">
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
                    onClick={() => addProduct(randomId())}>
                    Add Product
                </Button>
            </Group>
        </Box>
    );
}

export default AddProduct;