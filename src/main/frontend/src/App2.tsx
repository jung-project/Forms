import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sample from '@component/sample/Sample';
import SampleForm from '@component/sample/SampleForm';
const App2: React.FC = () => {

    return (
        // <ThemeProvider theme={darkTheme}>
          // <CssBaseline />
        <div>
          {/* <h1>Users</h1> */}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <Sample />
          <h2>EXAMPLE</h2>
          <SampleForm />
        </div>
        // </ThemeProvider>
    
      );
    };
    
    // const darkTheme = createTheme({
    //   palette: {
    //     mode: 'dark',
    //   },
    // });

export default App2;