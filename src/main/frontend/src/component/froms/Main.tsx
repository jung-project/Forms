import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@component/froms/Header'
import MainContainer from '@component/froms/MainContainer'
import Box from '@mui/material/Box';
import App2 from '../../App2'
export default function Main(){
    const[ main, setMain ] = useState(<App2 />)

    function changeHandler(isTest1: boolean){
        if(isTest1)
            setMain(<MainContainer />)
        else
            setMain(<App2 />)
    }

    return (
        <>
            <Header change={changeHandler}/>
            <Box sx={{p: 4}}>
                <MainContainer />
            </Box>
        </>
    );
}