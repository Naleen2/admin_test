import {Table, Image} from '@mantine/core';
import AddProduct from "./AddProduct.tsx";
import {Product} from "../store/slices/product-slice.ts";


type MyTableProps = {
    products: Product[]
};

function Products({products}: MyTableProps) {

    const rows = products.map((product) => (
        <Table.Tr key={product.id}>
            <Table.Td>{product.name}</Table.Td>
            <Table.Td>{product.description}</Table.Td>
            <Table.Td>{product.stockCount}</Table.Td>
            <Table.Td>{product.price}</Table.Td>
            <Table.Td>
                <Image
                    radius="md"
                    h={100}
                    w="auto"
                    fit="contain"
                    src={product.image}
                />
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <AddProduct></AddProduct>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Name</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Stock Count</Table.Th>
                        <Table.Th>Price</Table.Th>
                        <Table.Th>Image</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </div>
    );
}

export default Products;