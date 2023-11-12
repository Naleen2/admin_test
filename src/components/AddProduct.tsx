import {useForm} from '@mantine/form';
import {TextInput, Button, Group, Box, NumberInput} from '@mantine/core';
import {useProductDispatch} from "../store/hooks.ts";
import {createNewProduct, Product} from "../store/slices/product-slice.ts";
import {randomId } from "@mantine/hooks";
import {faker} from "@faker-js/faker";

type AddProductProps = {
    onSubmit : (p: Product) => void;
}

function AddProduct({onSubmit} : AddProductProps) {

    const dispatch = useProductDispatch();

    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            stockCount: 1,
            price: 0,
            image: faker.image.avatar()
        },
    });

    function addProduct(id: string): void {
        const product = {id, ...form.getTransformedValues()};
        dispatch(createNewProduct({id, ...form.getTransformedValues()}));
        onSubmit(product);
        form.reset();
    }

    return (
        <Box maw={340} mx="auto">
            <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
            <TextInput label="Description" placeholder="Description" {...form.getInputProps('description')} />
            <NumberInput label="Stock Count" placeholder="Stock Count" {...form.getInputProps('stockCount')} />
            <NumberInput label="Price" placeholder="Price" {...form.getInputProps('price')} />

            <Group justify="center" mt="xl">
                <Button
                    variant="outline"
                    onClick={() => addProduct(randomId ())}>
                    Add Product
                </Button>
            </Group>
        </Box>
    );
}

export default AddProduct;