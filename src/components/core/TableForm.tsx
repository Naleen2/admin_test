import {SimpleGrid} from "@mantine/core";
import {ReactNode} from "react";

type TableFormProps = {
    children : ReactNode
    colCountLargeScreen: number,
    colCountMediumScreen?: number,
    colCountSmallScreen?: number,
};

function TableForm({children, colCountSmallScreen, colCountLargeScreen, colCountMediumScreen} : TableFormProps) {
    if (!colCountMediumScreen) {
        colCountMediumScreen = colCountLargeScreen;
    }
    if (!colCountSmallScreen) {
        colCountSmallScreen = 1;
    }

    return (
        <SimpleGrid cols={{base: 1, sm: colCountSmallScreen, m: colCountMediumScreen, lg: colCountLargeScreen}} spacing="xl">
            {children}
        </SimpleGrid>
    );

}

export default TableForm;