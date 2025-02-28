import React from 'react';
import { CssBaseline } from '@mui/material';
import { useRoutes } from "react-router-dom";
import App2 from './App2'
import Main from '@component/froms/Main';
import MainContainer from '@component/froms/MainContainer';
import Profile from '@component/sample/router/Profile';
import ProfileDetail from '@component/sample/router/ProfileDetail';
export default function App(){

  const element = useRoutes([
    {
        path: '/',
        element: <Main />,
        children: [
            {path: 'form', element: <MainContainer />},
            {path: 'sample', element: <App2 />},
            {
              path: 'profile', 
              element: <Profile />,
              children: [
                {path:':id', element: <ProfileDetail />}
              ]
            }
        ]
    },

])

  return element;
}
