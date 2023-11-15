import {Button} from "@mantine/core";
import {IconCheck} from "@tabler/icons-react";

type CheckboxCardProps = {
    title: string,
    isSelected?: boolean
    onButtonClick: (selectedOption: string) => void
}

function CheckboxCard({title, isSelected, onButtonClick}: CheckboxCardProps) {
    return (
        <Button size={"lg"} variant={"default"} onClick={() => onButtonClick(title)}
                rightSection={isSelected ? <IconCheck size={14}/> : null}>{title}</Button>
    );
}

export default CheckboxCard;