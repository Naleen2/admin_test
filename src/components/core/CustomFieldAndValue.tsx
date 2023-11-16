import {ActionIcon, Box, Grid, TextInput} from "@mantine/core";
import {IconTrash} from "@tabler/icons-react";
import {useForm} from "@mantine/form";

export type FieldAndValue = {
    id: string,
    fieldName: string,
    value: string
}

export type FieldLabelAndValueLabel = {
    fieldLabel: string,
    valueLabel: string
}

type CustomFieldAndValueProps = {
    fieldAndValue: FieldAndValue,
    fieldLabelAndValueLabel: FieldLabelAndValueLabel,
    onValueChange: (fv: FieldAndValue) => void;
    onRemoval: (id: string) => void;
    isRemovable: boolean
}

function CustomFieldAndValue({fieldAndValue, fieldLabelAndValueLabel, onValueChange, onRemoval, isRemovable}: CustomFieldAndValueProps) {

    const form = useForm({
        initialValues: fieldAndValue
    });

    return (
        <Box>
            <Grid onBlur={() => onValueChange(form.getTransformedValues())}>
                <Grid.Col span={isRemovable ? 5.75 : 6}>
                    <TextInput label={fieldLabelAndValueLabel.fieldLabel}
                               placeholder={fieldLabelAndValueLabel.fieldLabel} {...form.getInputProps('fieldName')} />
                </Grid.Col>
                <Grid.Col span={isRemovable ? 5.75 : 6}>
                    <TextInput label={fieldLabelAndValueLabel.valueLabel}
                               placeholder={fieldLabelAndValueLabel.valueLabel}  {...form.getInputProps('value')}/>
                </Grid.Col>
                <Grid.Col span={0.5}>
                    {isRemovable &&
                        <ActionIcon variant="filled" aria-label="Settings" onClick={() => onRemoval(fieldAndValue.id)}>
                            <IconTrash style={{width: '70%', height: '70%'}} stroke={1.5}/>
                        </ActionIcon>}
                </Grid.Col>
            </Grid>
        </Box>
    );
}

export default CustomFieldAndValue;