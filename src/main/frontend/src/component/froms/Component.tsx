import React, { useEffect, useState, useRef } from 'react';

import SelectItem_edit from '@component/froms/edit/SelectItem'
import SelectItem_Write from '@component/froms/write/SelectItem'
import Container from '@mui/material/Container';

import SelectItemProp from '@component/interfaces/SelectItemProp'

export default function Component(){
    const isEdit = useRef<boolean>(true);
    const [component, setComponent] = useState(<SelectItem_edit change={clickHandler} itemProps={[]}/>);


    function clickHandler(items: SelectItemProp[]){
        isEdit.current = !isEdit.current
        if(isEdit.current){
            setComponent(<SelectItem_edit change={clickHandler} itemProps={items} />)
        }
        else{
            setComponent(<SelectItem_Write change={clickHandler}  itemProps={items} />)
        }
    }

    return (
        <Container maxWidth="sm">
            {component}
        </Container>
    );
}