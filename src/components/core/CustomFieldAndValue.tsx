import {ActionIcon, Box, SimpleGrid, TextInput} from "@mantine/core";
import {IconTrash} from "@tabler/icons-react";
import {useForm} from "@mantine/form";

export type FieldAndValue = {
    id: string,
    fieldName: string,
    value: string
}

type CustomFieldAndValueProps = {
    fieldAndValue: FieldAndValue,
    onValueChange: (fv: FieldAndValue) => void;
    onRemoval: (id: string) => void;
    isRemovable: boolean
}

function CustomFieldAndValue({fieldAndValue, onValueChange, onRemoval, isRemovable}: CustomFieldAndValueProps) {

    const form = useForm({
        initialValues: fieldAndValue
    });

    return (
        <Box>
            <SimpleGrid cols={{base: 1, sm: 1, m: 3, lg: 3}} spacing="lg"
                        onBlur={() => onValueChange(form.getTransformedValues())}>
                <TextInput label="Custom Field Name"
                           placeholder="Custom Field Name" {...form.getInputProps('fieldName')} />
                <TextInput label="Custom Field Value"
                           placeholder="Custom Field Value"  {...form.getInputProps('value')}/>
                {isRemovable &&
                    <ActionIcon variant="filled" aria-label="Settings" onClick={() => onRemoval(fieldAndValue.id)}>
                        <IconTrash style={{width: '70%', height: '70%'}} stroke={1.5}/>
                    </ActionIcon>}
            </SimpleGrid>
        </Box>
    );
}

export default CustomFieldAndValue;