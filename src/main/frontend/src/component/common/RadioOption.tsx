import React, { useState } from 'react';
import M_TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

import {SelectItemProp, CheckBoxProp} from '@component/interfaces/SelectItemProp'
import DeleteIcon from '@mui/icons-material/DeleteForever';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {colors as Colors} from '@mui/material';

export default function RadioOption(props: {option: CheckBoxProp, delete: any, change: any}){
    const [idx, setIdx] = useState<Number>(props.option.idx);

    function clickHandler(e: React.MouseEvent<HTMLElement>){
        e.stopPropagation();
        props.delete(idx);
    }

    function chageHandler(e : React.ChangeEvent<any>){
        e.stopPropagation();
        const text = e.target.value
        props.change(idx, text);
    }

    return(
        <div>
            <Radio disabled />
            <M_TextField
                defaultValue={props.option.value ? props.option.value : props.option.description}
                size="small"
                sx={{ width: 1/2, bgcolor: Colors.common.white }}
                onChange={chageHandler}
                onClick={(e) => e.stopPropagation()}
            />

            <Button startIcon={<DeleteIcon />} onClick={clickHandler}> </Button>
        </div>

    );
}