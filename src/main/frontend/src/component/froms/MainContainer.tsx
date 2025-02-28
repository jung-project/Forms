import React, { useEffect, useState } from 'react';

import Section from '@component/froms/Section'
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import {colors as Colors} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';

import {ComponentType} from '@component/common/ComponentType';
import Component from '@component/froms/Component'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

export default function MainContainer(){
    return (
            <Container fixed sx={{
                            pt: 5,
                            bgcolor: Colors.common.white,
                            minHeight: '100vh',
                            borderRadius: 4}}>
                <Component type={ComponentType.fromsTitle} order={0}/>
                <Section />
            </Container>
    );
}