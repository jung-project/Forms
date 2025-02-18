import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import {SelectItemProp} from '@component/interfaces/SelectItemProp'
import {ItemProp} from '@component/interfaces/ItemProp'

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function SelectItem (props: {change: any, itemProp: ItemProp | null}){
    const [item, setItem] = useState<SelectItemProp>(props.itemProp as SelectItemProp);
    let boxRef = useRef<any>();
    function boxClickHandler(item: SelectItemProp){
        props.change(item);
    }

    function handleMouseOver(){
        boxRef.current.style.setProperty('background-color', '#ebebeb');
    }
    function handleMouseOut(){
        boxRef.current.style.setProperty('background-color', '');
    }
    const addOption = item.checkBoxs.map((option) => {
        let value: string = option.value ? option.value : option.description
        return (
            <FormControlLabel
                key={option.idx}
                value={value}
                control={<Radio />}
                label={value}
                disabled={false}
            />
        );
    })

    return (
       <Box ref={boxRef} onClick={() => boxClickHandler(item)} sx={{pl:5}}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <Stack direction="row" >
                <Typography  align="center" variant="h6" gutterBottom> {item.order}. </Typography>
                <Typography  align="center" variant="h6" gutterBottom> {item.question} </Typography>
            </Stack>
            <RadioGroup>
                {addOption}
            </RadioGroup>
       </Box>
    );
}