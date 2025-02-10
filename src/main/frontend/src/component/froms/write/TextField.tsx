import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import M_TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';

import {ItemProp, TextFieldProp} from '@component/interfaces/ItemProp'

export default function TextField(props: {change: any, itemProp: ItemProp}){
    const [item, setItem] = useState<TextFieldProp>(props.itemProp as TextFieldProp);
    const [hover, setHover] = useState<any>();
    function boxClickHandler(){
        props.change(item);
    }

    function handleMouseOver(){
        setHover({bgcolor: "#cfe8fc"});
    }
    function handleMouseOut(){
        setHover({bgcolor: ""});
    }

    return (
        <Box onClick={() => boxClickHandler()} sx={hover}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
            <FormLabel > {item.question} </FormLabel>

            <M_TextField
                  fullWidth
                  disabled
                  label="질문에 답변 하세요"
                  variant="filled"
                  size="small"
                  margin="normal"
            />
        </Box>
    );
}