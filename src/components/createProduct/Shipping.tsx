import CreateProductSection from "./CreateProductSection.tsx";
import TableForm from "../core/TableForm.tsx";
import {Grid, SimpleGrid, Switch, TextInput} from "@mantine/core";
import CustomFieldsAndValues from "../core/CustomFieldsAndValues.tsx";

function Shipping() {
    return (
        <CreateProductSection
            title="Shipping"
            description="Add your shipping info here">
            <Grid>
                <Grid.Col span={6}>
                    <TableForm colCountLargeScreen={1}>
                        <Switch label="Free Shipping"/>
                        <TextInput leftSection="$" label="Shipping Price" placeholder="150.00"/>
                        <Switch label="Location Based Shipping"/>
                    </TableForm>
                </Grid.Col>
                <Grid.Col span={12}>
                    <CustomFieldsAndValues fieldLabelAndValueLabel={{
                        fieldLabel : "Location Name",
                        valueLabel : "Shipping Charge"
                    }}></CustomFieldsAndValues>
                </Grid.Col>

            </Grid>

        </CreateProductSection>
    );
}

export default Shipping;