import {Button, Drawer, Table} from '@mantine/core';
import AddEditProduct from "./AddEditProduct.tsx";
import {createNewProduct, editExistingProduct, Product} from "../store/slices/product-slice.ts";
import {useProductDispatch} from "../store/hooks.ts";
import {randomId, useDisclosure} from "@mantine/hooks";
import {useGetCategoriesQuery} from "../store/apis/categoryApi.ts";
import ProductItem from "./ProductItem.tsx";
import {faker} from "@faker-js/faker";
import {ReactNode, useState} from "react";


type MyTableProps = {
    products: Product[]
};

function Products({products}: MyTableProps) {

    const dispatch = useProductDispatch();

    const {data: categories} = useGetCategoriesQuery(undefined);

    const [opened, {open, close}] = useDisclosure(false);

    const rows = products.map(value => {
        return <ProductItem key={value.id} product={value} categories={categories} onEdit={onEditProductClick}></ProductItem>;
    });

    const [drawerContent, setDrawerContent] = useState<ReactNode | undefined>(undefined);

    function addNewProduct(product: Product) {
        dispatch(createNewProduct(product));
        close();
    }

    function editProduct(product: Product) {
        dispatch(editExistingProduct(product));
        close();
    }

    function onNewProductClick() {
        setDrawerContent(<AddEditProduct product={getEmptyProduct(randomId())} onSubmit={addNewProduct}></AddEditProduct>);
        open();
    }

    function onEditProductClick(product: Product) {
        setDrawerContent(<AddEditProduct product={{...product}} onSubmit={editProduct}></AddEditProduct>);
        open();
    }

    function getEmptyProduct(id: string): Product {
        return {
            id,
            name: '',
            description: '',
            stockCount: 1,
            price: 0,
            image: faker.image.avatar(),
            categories: []
        }
    }

    return (
        <div>
            <Drawer opened={opened} onClose={close} title="Add/Edit Product" position="right" size={"xl"}>
                {drawerContent}
            </Drawer>
            <Button onClick={onNewProductClick}>Add New Product</Button>
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