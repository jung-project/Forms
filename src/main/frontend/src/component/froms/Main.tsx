import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@component/froms/Header'
import MainContainer from '@component/froms/MainContainer'
import Box from '@mui/material/Box';
import App2 from '../../App2'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Button, Stack, Typography } from '@mui/material';

export default function Main() {
    const [main, setMain] = useState(<App2 />)

    function changeHandler(isTest1: boolean) {
        if (isTest1)
            setMain(<MainContainer />)
        else
            setMain(<App2 />)
    }

    return (
        <>
            {/* <Header change={changeHandler}/> */}

            <Box sx={{ p: 4 }}>
                <Stack sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: '70vh'
                }}>
                    <Typography variant='h3' sx={{ mb: 5 }}>HOME</Typography>
                    <Stack direction={'row'} spacing={2}>
                        <Link to="/form"><Button variant="contained" >FORM</Button></Link>
                        <Link to="/sample"><Button variant="contained">SAMPLE</Button></Link>
                        <Link to="/profile"><Button variant="contained">PROFILE</Button></Link>
                    </Stack>
                </Stack>

                <Outlet />

                {/* <Routes>
                    <Route path='/' element={<MainLink />}></Route>
                    <Route path='/form' element={<MainContainer />}></Route>
                    <Route path='/sample' element={<App2 />}></Route>
                    <Route path='/router' element={<RouterPage />}></Route>
                </Routes> */}
            </Box>
        </>
    );
}

