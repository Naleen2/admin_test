import CheckboxCard from "./CheckboxCard.tsx";
import {useState} from "react";
import {SimpleGrid} from "@mantine/core";

type CheckboxCardGroupProp = {
    options: string[]
}

function CheckboxCardGroup({options}: CheckboxCardGroupProp) {
    const [selected, setSelected] = useState(options[0])

    const elements = options.map(option => {
        return <CheckboxCard key={option} title={option} isSelected={selected === option} onButtonClick={setSelected}></CheckboxCard>
    });

    return <SimpleGrid cols={{base: 1, sm: 3, lg: 3}} spacing="lg">
        {elements}
    </SimpleGrid>
}

export default CheckboxCardGroup;