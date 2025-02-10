import React, { useEffect, useState } from 'react';

import Section from '@component/froms/Section'
import Container from '@mui/material/Container';
export default function MainContainer(){
    return (
            <Container maxWidth="sm" >
                <Section />
            </Container>
    );
}