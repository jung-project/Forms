import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import M_TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {ItemProp, TextFieldProp} from '@component/interfaces/ItemProp'
import {SelectItemProp} from '@component/interfaces/SelectItemProp'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {colors as Colors} from '@mui/material';

const defaultItem: TextFieldProp = {
    order: 1,
    question: '질문',
    answer: ''
}

export default function TextField(props: {change: any, itemProp: ItemProp | null, order: number}){
    const [item, setItem] = useState<TextFieldProp>(props.itemProp === null ? {...defaultItem, order: props.order}
                                                                            : props.itemProp as TextFieldProp);
    function boxClickHandler(){
        props.change(item);
    }

    function questionHandler(e: React.ChangeEvent<any>){
        setItem({...item, question: e.target.value});
    }
    return (
        <Box sx={{bgcolor: '#f5f5f5'}} onClick={() => boxClickHandler()}>
            <Stack direction="row" >
                <Typography sx={{ width: 40, mt: 3}} align="center" variant="h6" gutterBottom> {item.order}. </Typography>
                <M_TextField
                      fullWidth
                      label="질문"
                      size="small"
                      margin="normal"
                      value={item.question}
                      sx={{ bgcolor: Colors.common.white }}
                      onChange={(e) => questionHandler(e)}
                      onClick={(e) => e.stopPropagation()}
                />
            </Stack>
            <M_TextField
                  sx={{ml:5, width:1/1.1}}
//                   fullWidth
                  disabled
                  label="질문에 답변 하세요"
                  variant="filled"
                  size="small"
                  margin="normal"
                  onClick={(e) => e.stopPropagation()}
            />
            <Divider />
            <div style={{ textAlign: "end" }}>
                <FormControlLabel control={<Switch />} label="긴 답변" onClick={(e) => e.stopPropagation()} />
                <FormControlLabel control={<Switch />} label="필수" onClick={(e) => e.stopPropagation()} />
            </div>
        </Box>
    );
}