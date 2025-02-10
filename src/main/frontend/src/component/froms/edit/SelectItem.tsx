import React, { useState } from 'react';
import M_TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import RadioOption from '@component/common/RadioOption';


import SelectItemProp from '@component/interfaces/SelectItemProp';
import AddIcon from '@mui/icons-material/Add';
import {ItemProp} from '@component/interfaces/ItemProp';

const defaultData = [{id: 1, value: "", description: "옵션 1"}
                    , {id: 2, value: "", description: "옵션 2"}];

// export default function SelectItem (props: {change: any, itemProps: SelectItemProp[]}){
export default function SelectItem (props: {change: any, itemProps: ItemProp[]}){
    const [options, setOptions] = useState<SelectItemProp[]>(props.itemProps.length === 0 ? defaultData : props.itemProps as SelectItemProp[]);

    function createOption(e: React.MouseEvent<HTMLElement>){
        e.stopPropagation();
        const optionCount: number = options.length + 1;
        const defaultValue = "옵션 " + optionCount.toString();
        setOptions([...options, {id: optionCount, value: "", description: defaultValue}])
    }

    function changeText(id: Number, text: string){
        setOptions(options.map((option) => {
                if(option.id === id){
                    return {...option, value: text};
                }
                else{
                    return option;
                }
            })
        )
    }

    function boxClickHandler(options: SelectItemProp[]){
        props.change(options);
    }

    function deleteOption(id: Number){
        setOptions(options.filter((option) => option.id !== id));
    }

    const addOption = options.map((option) => {
        return (
            <li key={option.id}>

                <RadioOption option={option} delete={deleteOption} change={changeText}/>
            </li>
        );
    });
    return(
        <Box onClick={() => boxClickHandler(options)} sx={{bgcolor: '#f5f5f5'}}>
            <M_TextField
                  fullWidth
                  label="질문"
                  size="small"
                  margin="normal"
                  onClick={(e) => e.stopPropagation()}
            />
            <RadioGroup>
                <ol>
                    {addOption}
                </ol>
            </RadioGroup>
            <Button  startIcon={<AddIcon />} onClick={(e) => createOption(e)}>
              옵션 추가
            </Button>
            <Button  >
              "기타" 옵션 추가
            </Button>
            <Divider />
            <div style={{ textAlign: "end" }}>
                <FormControlLabel control={<Switch />} label="복수 답변" />
                <FormControlLabel control={<Switch />} label="필수" />
            </div>
        </Box>
    );
}