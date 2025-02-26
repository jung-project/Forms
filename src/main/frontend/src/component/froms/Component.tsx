import React, { useEffect, useState, useRef } from 'react';

import SelectItem_edit from '@component/froms/edit/SelectItem'
import SelectItem_Write from '@component/froms/write/SelectItem'
import Container from '@mui/material/Container';

import { SelectItemProp } from '@component/interfaces/SelectItemProp'
import { ItemProp } from '@component/interfaces/ItemProp'
import TextField_edit from '@component/froms/edit/TextField'
import TextField_write from '@component/froms/write/TextField'
import Box from '@mui/material/Box';
import { ComponentType } from '@component/common/ComponentType';

import FromsTitle_edit from '@component/froms/edit/FromsTitle'
import FromsTitle_write from '@component/froms/write/FromsTitle'

import Likert_write from '@component/froms/write/Likert'
import Likert_edit from '@component/froms/edit/Likert'

export default function Component(prop: { type: string, order: number }) {
    const isEdit = useRef<boolean>(true);
    const type = useRef<string>(prop.type);
    const [item, setItem] = useState<ItemProp | null>(null);


    function changePropHandler(prop: ItemProp) {
        isEdit.current = !isEdit.current;
        setItem({ ...prop });
    }

    function getElement() {
        switch (type.current) {
            case ComponentType.selectItem:
                return (
                    isEdit.current ? <SelectItem_edit change={changePropHandler} itemProp={item} order={prop.order} />
                        : <SelectItem_Write change={changePropHandler} itemProp={item} />

                );
            case ComponentType.textField:
                return (
                    isEdit.current ? <TextField_edit change={changePropHandler} itemProp={item} order={prop.order} />
                        : <TextField_write change={changePropHandler} itemProp={item} />
                );
            case ComponentType.fromsTitle:
                return (
                    isEdit.current ? <FromsTitle_write change={changePropHandler} itemProp={item} />
                        : <FromsTitle_edit change={changePropHandler} itemProp={item} />
                );
            case ComponentType.likert:
                return (
                    isEdit.current ? <Likert_edit change={changePropHandler} itemProp={item} order={prop.order}/>
                    : <Likert_write change={changePropHandler} itemProp={item}/>
                );

        }
    }

    return (
        <Box sx={{ mb: 5 }}>
            {getElement()}
        </Box>
    );
}