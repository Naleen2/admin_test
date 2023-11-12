import {useGetCategoriesQuery} from "../store/apis/categoryApi.ts";
import {ReactNode} from "react";
import {Loader, Table} from "@mantine/core";
import AddCategory from "./AddCategory.tsx";
import CategoryItem from "./CategoryItem.tsx";

export type Category = {
    id: string,
    name: string,
    description: string
}

function Categories() {
    const {data, isFetching, error} = useGetCategoriesQuery(undefined);

    let content: ReactNode;

    function getCategoryTable(data: Category[]): ReactNode {
        const rows = data.map(category => {
            return <CategoryItem key={category.id} category={category}></CategoryItem>;
        });

        return (
            <div>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Category name</Table.Th>
                            <Table.Th>Category description</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>

                <AddCategory></AddCategory>
            </div>
        );
    }

    if (isFetching) {
        content = <Loader color="blue"/>;
    } else if (error) {
        content = <div>Error loading Data</div>;
    } else {
        content = getCategoryTable(data);
    }

    return <div>
        {content}
    </div>;
}

export default Categories;