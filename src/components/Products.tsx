import {Avatar, Badge, Button, Drawer, Table} from '@mantine/core';
import AddProduct from "./AddProduct.tsx";
import {Product} from "../store/slices/product-slice.ts";
import {useDisclosure} from "@mantine/hooks";
import {useGetCategoriesQuery} from "../store/apis/categoryApi.ts";


type MyTableProps = {
    products: Product[]
};

function Products({products}: MyTableProps) {

    const {data: categories} = useGetCategoriesQuery(undefined);

    const categoryNameAndId = new Map<string, string>();

    if (categories) {
        for (const category of categories) {
            categoryNameAndId.set(category.id, category.name);
        }
    }

    function getCategoryName(ids: string[]) {
        return ids.map(id => {
            return <Badge size='md' key={id} color="blue">{categoryNameAndId.get(id)}</Badge>;
        });
    }

    const [opened, {open, close}] = useDisclosure(false);

    const rows = products.map((product) => (
        <Table.Tr key={product.id}>
            <Table.Td>{product.name}</Table.Td>
            <Table.Td>{product.description}</Table.Td>
            <Table.Td>{product.stockCount}</Table.Td>
            <Table.Td>{product.price}</Table.Td>
            <Table.Td>{getCategoryName(product.categories)}</Table.Td>
            <Table.Td>
                <Avatar size={60} src={product.image} radius={15}/>
            </Table.Td>
        </Table.Tr>
    ));

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