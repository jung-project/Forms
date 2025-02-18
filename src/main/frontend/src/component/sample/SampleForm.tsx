import * as React from 'react';
import { FormControl, TextField, Fab, Box, Container, CssBaseline, Typography } from '@mui/material';
import { BorderColor, Add as AddIcon} from '@mui/icons-material';
import ButtonGrid from '@component/sample/ButtonGrid';
import Title from '@component/sample/Title';
const SampleForm: React.FC = () => {

    return (
        <FixedContainer />
    );
}

function FixedContainer() {
    const [isShowButtonGrid, setIsShowButtonGrid] = React.useState<boolean>(false);
    const handleActionButtonClick = () => {
      setIsShowButtonGrid(!isShowButtonGrid);
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: 'dark', height: '100vh'}} >
          <FormControl fullWidth>
            <Title />
            <FloatingActionButtons buttonClick={handleActionButtonClick}/>
            {isShowButtonGrid && <ButtonGrid add={() => {}}/>}
          </FormControl>
          </Box>
        </Container>
      </React.Fragment>
    );
}

function FloatingActionButtons({buttonClick} : {buttonClick: () => void}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={buttonClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default SampleForm;