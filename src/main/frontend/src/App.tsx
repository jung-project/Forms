import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from './component/froms/TextField'
import SelectItem from './component/froms/SelectItem'
import Container from '@mui/material/Container';

export default function App(){
    const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .get('/api/test') // Use the proxy path `/api`
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  return (
      <Container maxWidth="sm" >
        <TextField />
        <SelectItem />
      </Container>
  );
}
