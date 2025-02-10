import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import M_TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {ItemProp, TextFieldProp} from '@component/interfaces/ItemProp'
import SelectItemProp from '@component/interfaces/SelectItemProp'

const defaultItem: TextFieldProp = {
    question: '질문',
    answer: ''
}

export default function TextField(props: {change: any, itemProp: ItemProp}){
    const [item, setItem] = useState<TextFieldProp>(props.itemProp ? props.itemProp as TextFieldProp : defaultItem);
    function boxClickHandler(){
        props.change(item);
    }

    function questionHandler(e: React.ChangeEvent<any>){
        setItem({...item, question: e.target.value});
    }
    return (
        <Box onClick={() => boxClickHandler()}>
            <M_TextField
                  fullWidth
                  label="질문"
                  size="small"
                  margin="normal"
//                   value={item.question}
                  onChange={(e) => questionHandler(e)}
                  onClick={(e) => e.stopPropagation()}
              />

            <M_TextField
                  fullWidth
                  disabled
                  label="질문에 답변 하세요"
                  variant="filled"
                  size="small"
                  margin="normal"
                  onClick={(e) => e.stopPropagation()}
            />
            <Divider />
            <div style={{ textAlign: "end" }}>
                <FormControlLabel control={<Switch />} label="긴 답변" />
                <FormControlLabel control={<Switch />} label="필수" />
            </div>
        </Box>
    );
}