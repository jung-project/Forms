import React, { useEffect, useState } from 'react';

import TextField from '@component/froms/edit/TextField'
import SelectItem from '@component/froms/edit/SelectItem'
import Container from '@mui/material/Container';
import Component from '@component/froms/Component'


import SelectItem_edit from '@component/froms/edit/SelectItem'
import SelectItem_Write from '@component/froms/write/SelectItem'
import ButtonGrid from '@component/sample/ButtonGrid';
import { FormControl, Fab, Box, CssBaseline, Typography } from '@mui/material';
import { BorderColor, Add as AddIcon} from '@mui/icons-material';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { teal } from '@mui/material/colors';

function FloatingActionButtons({buttonClick} : {buttonClick: () => void}) {
  return (
    <Stack direction="row" sx={{ '& > :not(style)': { m: 1 } }} onClick={buttonClick} >
      <AddCircleIcon sx={{ color: teal[800] }}/>
      <FormLabel sx={{ fontSize: 20, color: teal[800], fontWeight: 'bold'}}> 새 질문 추가 </FormLabel>
    </Stack>
  );
}


export default function Section(){
    const [components, setComponents] = useState<string[]>([]);
    const [isShowButtonGrid, setIsShowButtonGrid] = React.useState<boolean>(false);
    const handleActionButtonClick = () => {
      setIsShowButtonGrid(!isShowButtonGrid);
    }

    function addComponent(type: string){
        setComponents([...components, type])
    }

    const componentList = components.map((component, idx) => {
        const order = idx + 1;
        return(
                <Component key={idx} type={component} order={order}/>
        );
    })

    return (
        <>
            <Box>
                {componentList}
            </Box>
            <FloatingActionButtons buttonClick={handleActionButtonClick}/>
                        {isShowButtonGrid && <ButtonGrid add={addComponent}/>}
        </>
    );
}