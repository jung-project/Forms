import React, { useState } from 'react';
import M_TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

import SelectItemProp from '../interfaces/SelectItemProp'
import DeleteIcon from '@mui/icons-material/DeleteForever';

export default function RadioOption(props: {option: SelectItemProp, delete: any, change: any}){
    const [idx, setIdx] = useState<Number>(props.option.id);

    function clickHandler(){
        props.delete(idx);
    }

    function chageHandler(e : React.ChangeEvent<any>){
        const text = e.target.value
        props.change(idx, text);
    }

    return(
        <div>
            <Radio disabled />
            <M_TextField
                defaultValue={props.option.value ? props.option.value : props.option.description}
                size="small"
                onChange={chageHandler}
            />

            <Button startIcon={<DeleteIcon />} onClick={clickHandler}> </Button>
        </div>

    );
}