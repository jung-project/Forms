import React, { useState } from 'react';
import Button from '@mui/material/Button';
import '@component/css/component.css'

export default function Header(props: {change: any}){
    function clickHandler(isTest1: boolean){
        props.change(isTest1);
    }
    return (
        <header className = "header" >
        {/**
            <Button variant="contained" onClick={() => clickHandler(true)}>test1</Button>
                        <Button variant="contained" onClick={() => clickHandler(false)}>test2</Button>
        */}

        </header>
    );
}