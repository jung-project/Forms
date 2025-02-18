import React, { useEffect, useState, useRef } from 'react';
import {ItemProp, FromsTileProp} from '@component/interfaces/ItemProp'
import {Box, InputLabel} from '@mui/material';

const defaultValue: FromsTileProp = {
    order: 0,
    title: '제목 없는 양식',
    description: ''
};

export default function FromsTitle(props: {change: any, itemProp: ItemProp | null}){
    const [item, setItem] = useState<FromsTileProp>(props.itemProp === null ? defaultValue : props.itemProp as FromsTileProp);
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

    return(
        <Box ref={boxRef} onClick={(e) => boxClickHandler()}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}>
            <InputLabel filled sx={{ fontSize: 30, p: 5, fontWeight: 'bold' }}> {item.title} </InputLabel>
        </Box>

    );
}