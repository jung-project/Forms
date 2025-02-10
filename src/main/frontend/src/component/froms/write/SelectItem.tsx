import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import SelectItemProp from '@component/interfaces/SelectItemProp'
import {ItemProp} from '@component/interfaces/ItemProp'

// export default function SelectItem (props: {change: any, itemProps: SelectItemProp[]}){
export default function SelectItem (props: {change: any, itemProps: ItemProp[]}){
    const [options, setOptons] = useState<SelectItemProp[]>(props.itemProps as SelectItemProp[]);
    const [hover, setHover] = useState<any>();

    function boxClickHandler(options: SelectItemProp[]){
        props.change(options);
    }

    function handleMouseOver(){
        setHover({bgcolor: "#cfe8fc"});
    }
    function handleMouseOut(){
        setHover({bgcolor: ""});
    }
    const addOption = options.map((option) => {
        let value: string = option.value ? option.value : option.description
        return (
            <FormControlLabel
                key={option.id}
                value={value}
                control={<Radio />}
                label={value}
                disabled={false}
            />
        );
    })

    return (
       <Box onClick={() => boxClickHandler(options)} sx={hover}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <FormLabel>질문</FormLabel>
            <RadioGroup>
                {addOption}
            </RadioGroup>
       </Box>
    );
}