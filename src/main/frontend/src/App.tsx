import React from 'react';
import Main from '@component/froms/Main'
import { CssBaseline } from '@mui/material';

export default function App(){

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
            <Main />
  );
}
