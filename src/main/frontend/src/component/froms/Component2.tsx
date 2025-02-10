import React, { useEffect, useState, useRef } from 'react';

import SelectItem_edit from '@component/froms/edit/SelectItem'
import SelectItem_Write from '@component/froms/write/SelectItem'
import Container from '@mui/material/Container';

import SelectItemProp from '@component/interfaces/SelectItemProp'
import {ItemProp} from '@component/interfaces/ItemProp'
import TextField_edit from '@component/froms/edit/TextField'
import TextField_write from '@component/froms/write/TextField'

export default function Component2(prop: {type: string}){
    const isEdit = useRef<boolean>(true);
    const type = useRef<string>(prop.type);
    const [items, setItems] = useState<ItemProp[]>([]);
    const [item, setItem] = useState<ItemProp>({});

    function changePropsHandler(props: ItemProp[]){
        isEdit.current = !isEdit.current;
        setItems([...props]);
    }

    function changePropHandler(prop: ItemProp){
        isEdit.current = !isEdit.current;
        setItem({...prop});
    }

    function getElement(){
        switch(type.current){
            case 'selectItem':
                return (
                    isEdit.current ? <SelectItem_edit change={changePropsHandler} itemProps={items} />
                        :  <SelectItem_Write change={changePropsHandler} itemProps={items} />

                );
            case 'textField':
                return(
                    isEdit.current ? <TextField_edit change={changePropHandler} itemProp={item} />
                        :   <TextField_write change={changePropHandler} itemProp={item} />
                );
        }
    }

    return (
        <Container maxWidth="sm" sx={{ mb: 5 }}>
            {getElement()}
        </Container>
    );
}