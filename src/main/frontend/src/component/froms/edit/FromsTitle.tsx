import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import M_TextField from '@mui/material/TextField';
import {ItemProp, FromsTileProp} from '@component/interfaces/ItemProp'
import {colors as Colors} from '@mui/material';

export default function FromsTitle(props: {change: any, itemProp: ItemProp | null}){
    const [item, setItem] = useState<FromsTileProp>(props.itemProp as FromsTileProp);

    function boxClickHandler(){
        props.change(item);
    }

    function txtChangeHandler(e: React.ChangeEvent<any>){
        const key = e.target.id;
        setItem({...item, [key] : e.target.value});
    }

    return(
        <Box sx={{p:3, bgcolor: '#f5f5f5'}} onClick={() => boxClickHandler()}>
            <M_TextField
                  id='title'
                  fullWidth
                  size="small"
                  margin="normal"
                  value={item.title}
                  sx={{ bgcolor: Colors.common.white }}
                  onChange={(e) => txtChangeHandler(e)}
                  onClick={(e) => e.stopPropagation()}
            />
            <M_TextField
                  id='description'
                  fullWidth
                  size="small"
                  margin="normal"
                  value={item.description}
                  sx={{ bgcolor: Colors.common.white }}
                  onChange={(e) => txtChangeHandler(e)}
                  onClick={(e) => e.stopPropagation()}
            />
        </Box>
    );
}