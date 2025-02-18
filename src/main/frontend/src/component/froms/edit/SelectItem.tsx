import React, { useState } from 'react';
import M_TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import RadioOption from '@component/common/RadioOption';


import {SelectItemProp} from '@component/interfaces/SelectItemProp';
import AddIcon from '@mui/icons-material/Add';
import {ItemProp} from '@component/interfaces/ItemProp';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {colors as Colors} from '@mui/material';
import { teal } from '@mui/material/colors';

const defaultData = {order: 1, question: '질문', checkBoxs: [{idx: 1, value: "", description: "옵션 1"}
                                                , {idx: 2, value: "", description: "옵션 2"}]};


export default function SelectItem (props: {change: any, itemProp: ItemProp | null, order: number}){
    const [item, setItem] = useState<SelectItemProp>(props.itemProp === null ? {...defaultData, order: props.order}
                                                                                    : props.itemProp as SelectItemProp);

    function createOption(e: React.MouseEvent<HTMLElement>){
        e.stopPropagation();
        const optionCount: number = item.checkBoxs.length + 1;
        const defaultValue = "옵션 " + optionCount.toString();
        setItem({...item, checkBoxs: [...item.checkBoxs, {idx: optionCount, value: "", description: defaultValue}]})
    }

    function changeText(idx: Number, text: string){
        setItem({...item, checkBoxs: item.checkBoxs.map((checkBox) => {
                    if(checkBox.idx === idx){
                        return {...checkBox, value: text};
                    }
                    else{
                        return checkBox;
                    }
                })
            }
        )
    }

    function boxClickHandler(item: SelectItemProp){
        props.change(item);
    }

    function deleteOption(idx: Number){
        setItem({...item, checkBoxs: item.checkBoxs.filter((checkBox) => checkBox.idx !== idx)});
    }

    function chageHandler(e : React.ChangeEvent<any>){
        const text = e.target.value
        setItem({...item, question: text, checkBoxs: [...item.checkBoxs]})
    }

    const addOption = item.checkBoxs.map((option) => {
        return (
                <RadioOption key={option.idx} option={option} delete={deleteOption} change={changeText}/>
        );
    });
    return(
        <Box sx={{pl:5, bgcolor: '#f5f5f5'}} onClick={() => boxClickHandler(item)}>
            <Stack direction="row" >
                <Typography sx={{ width: 40, mt: 3}} align="center" variant="h6" gutterBottom> {props.order}. </Typography>
                <M_TextField
                      fullWidth
                      label="질문"
                      size="small"
                      margin="normal"
                      sx={{ bgcolor: Colors.common.white }}
                      value= {item.question}
                      onChange={(e) => chageHandler(e)}
                      onClick={(e) => e.stopPropagation()}
                />
            </Stack>
            <RadioGroup>
                    {addOption}
            </RadioGroup>
            <Button sx={{color: teal[800]}} startIcon={<AddIcon />} onClick={(e) => createOption(e)}>
              옵션 추가
            </Button>
            <Button sx={{color: teal[800]}} onClick={(e) => e.stopPropagation()} >
              "기타" 옵션 추가
            </Button>
            <Divider />
            <div style={{ textAlign: "end" }}>
                <FormControlLabel control={<Switch />} label="복수 답변" onClick={(e) => e.stopPropagation()}/>
                <FormControlLabel control={<Switch />} label="필수" onClick={(e) => e.stopPropagation()}/>
            </div>
        </Box>
    );
}