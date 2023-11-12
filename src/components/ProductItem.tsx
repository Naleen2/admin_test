import {Avatar, Badge, Table} from "@mantine/core";
import {type Product} from "../store/slices/product-slice.ts";
import {Category} from "./Categories.tsx";

type ProductItemProps = {
    product: Product,
    categories: Category[] | undefined
};

function ProductItem({product, categories}: ProductItemProps) {

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

    return (<Table.Tr key={product.id}>
        <Table.Td>{product.name}</Table.Td>
        <Table.Td>{product.description}</Table.Td>
        <Table.Td>{product.stockCount}</Table.Td>
        <Table.Td>{product.price}</Table.Td>
        <Table.Td>{getCategoryName(product.categories)}</Table.Td>
        <Table.Td>
            <Avatar size={60} src={product.image} radius={15}/>
        </Table.Td>
    </Table.Tr>);
}

export default ProductItem;