import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@component/froms/Header'
import MainContainer from '@component/froms/MainContainer'
export default function Main(){
    return (
        <>
            <Header />
            <MainContainer />
        </>
    );
}