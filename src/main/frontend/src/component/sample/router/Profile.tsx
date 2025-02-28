import React, { useState } from 'react';
import { Button, Typography, Box, Stack, colors as Color } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Profile = () => {

    const [search, setSearch] = useState<string>('');
    const navigate = useNavigate();

    const enterSearchUser = (e: React.KeyboardEvent) => {
        console.log(e.key);
        console.log(e);
        if (e.key === "Enter")
            searchUser()
    }
    const searchUser = () => {
        navigate(`/profile/${search}`)
    }
    return (

        <Box sx={{ p: 4 }}>
            <Stack sx={{
                justifyContent: "center",
                alignItems: "center",
                height: '70vh'
            }}>

                <Typography variant='h3' sx={{ mb: 5 }}>Profile</Typography>

                <Box sx={{ borderWidth: '1px', borderStyle: 'solid', borderColor: Color.common.black }}>
                    <InputBase
                        autoFocus
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="ID로 사용자 검색"
                        inputProps={{ 'aria-label': 'ID로 사용자 검색' }}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => enterSearchUser(e)}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchUser}>
                        <SearchIcon />
                    </IconButton>
                </Box>
                <Outlet />

            </Stack>

        </Box>


    )
}

export default Profile;