import React, { useEffect, useState } from 'react';

import TextField from '@component/froms/edit/TextField'
import SelectItem from '@component/froms/edit/SelectItem'
import Container from '@mui/material/Container';
import Component from '@component/froms/Component'
import Component2 from '@component/froms/Component2'


import SelectItem_edit from '@component/froms/edit/SelectItem'
import SelectItem_Write from '@component/froms/write/SelectItem'

export default function Section(){

    return (
        <Container maxWidth="sm" >
            {/**
            <TextField />
            <Component />
            */}
            <Component2 type="textField"/>
            <Component2 type="selectItem"/>
        </Container>
    );
}