import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import M_TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';

import {ItemProp, TextFieldProp} from '@component/interfaces/ItemProp'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function TextField(props: {change: any, itemProp: ItemProp | null}){
    const [item, setItem] = useState<TextFieldProp>(props.itemProp as TextFieldProp);
    let boxRef = useRef<any>();
    function boxClickHandler(){
        props.change(item);
    }

    function handleMouseOver(){
        boxRef.current.style.setProperty('background-color', '#ebebeb');
    }
    function handleMouseOut(){
        boxRef.current.style.setProperty('background-color', '');
    }

    return (
        <Box ref={boxRef} onClick={() => boxClickHandler()} sx={{pl:5}}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
              <Stack direction="row" >
                <Typography align="center" variant="h6" gutterBottom> {item.order}. </Typography>
                <Typography align="center" variant="h6" gutterBottom> {item.question} </Typography>

              </Stack>

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