import {ActionIcon, Avatar, Badge, Table} from "@mantine/core";
import {type Product} from "../store/slices/product-slice.ts";
import {Category} from "./Categories.tsx";
import {IconEdit} from "@tabler/icons-react";

type ProductItemProps = {
    product: Product,
    onEdit: (p: Product) => void,
    categories: Category[] | undefined
};

function ProductItem({product, categories, onEdit}: ProductItemProps) {

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
        <Table.Td>
            <ActionIcon variant="filled" aria-label="Settings">
                <IconEdit style={{ width: '70%', height: '70%' }} stroke={1.5} onClick={() => onEdit(product)} />
            </ActionIcon>
        </Table.Td>
    </Table.Tr>);
}

export default ProductItem;