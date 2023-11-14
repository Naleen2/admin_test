import {ActionIcon, Table} from "@mantine/core";
import {type Category} from "../pages/Categories.tsx";
import {IconTrash} from "@tabler/icons-react";
import {useDeleteCategoryMutation} from "../store/apis/categoryApi.ts";

type CategoryItemProps = {
    category : Category
}

function CategoryItem({category}: CategoryItemProps) {

    const [deleteCategory] = useDeleteCategoryMutation();

    function removeCategory() {
        deleteCategory(category.id);
    }

    return <Table.Tr key={category.id}>
        <Table.Td>{category.name}</Table.Td>
        <Table.Td>{category.description}</Table.Td>
        <Table.Td>
            <ActionIcon variant="filled" aria-label="Settings">
                <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} onClick={removeCategory} />
            </ActionIcon>
        </Table.Td>
    </Table.Tr>
}

export default CategoryItem;