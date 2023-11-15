import {useState} from "react";
import CustomFieldAndValue, {FieldAndValue} from "./CustomFieldAndValue.tsx";
import {Box, Button, SimpleGrid} from "@mantine/core";
import {randomId} from "@mantine/hooks";

type CustomFieldsAndValuesProps = {
    fieldsAndValues?: []
}

function CustomFieldsAndValues({fieldsAndValues}: CustomFieldsAndValuesProps) {

    const [fvs, setFvs]
        = useState<FieldAndValue[]>(fieldsAndValues ? fieldsAndValues : [{id: randomId(), fieldName: "", value: ""}])

    function onValueChange(fieldAndValue: FieldAndValue) {
        setFvs(fvs.map(fv => {
            if (fv.id == fieldAndValue.id) {
                return fieldAndValue;
            } else {
                return fv;
            }
        }));
    }

    function onCustomFieldRemoval(id: string) {
        setFvs(fvs.filter(fv => fv.id !== id));
    }

    function addCustomFieldAndValue() {
        setFvs([...fvs, {id: randomId(), fieldName: "", value: ""}])
    }

    const content = fvs.map(fv => {
        return <CustomFieldAndValue key={fv.id}
                                    fieldAndValue={fv}
                                    onValueChange={onValueChange}
                                    isRemovable={fvs.length != 1}
                                    onRemoval={onCustomFieldRemoval}></CustomFieldAndValue>
    });

    return (
        <Box>
            <SimpleGrid cols={{base: 1, sm: 1, m: 1, lg: 1}} spacing="xl">
                {content}
            </SimpleGrid>
            <Button variant="default" onClick={addCustomFieldAndValue}>
                + Add Item
            </Button>
        </Box>

    );
}

export default CustomFieldsAndValues;