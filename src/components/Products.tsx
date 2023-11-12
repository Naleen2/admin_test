import {Button, Drawer, Table} from '@mantine/core';
import AddProduct from "./AddProduct.tsx";
import {Product} from "../store/slices/product-slice.ts";
import {useDisclosure} from "@mantine/hooks";
import {useGetCategoriesQuery} from "../store/apis/categoryApi.ts";
import ProductItem from "./ProductItem.tsx";


type MyTableProps = {
    products: Product[]
};

function Products({products}: MyTableProps) {

    const {data: categories} = useGetCategoriesQuery(undefined);

    const [opened, {open, close}] = useDisclosure(false);

    const rows = products.map(value => {
        return <ProductItem key={value.id} product={value} categories={categories}></ProductItem>;
    });

    return (
        <div>
            <Drawer opened={opened} onClose={close} title="Add New Product">
                <AddProduct onSubmit={close}></AddProduct>
            </Drawer>
            <Button onClick={open}>Add New Product</Button>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Stock Count</Table.Th>
                        <Table.Th>Price</Table.Th>
                        <Table.Th>Categories</Table.Th>
                        <Table.Th>Image</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
}

export default Products;