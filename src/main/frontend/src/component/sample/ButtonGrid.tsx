import {Grid2 as Grid, Box, Button, ButtonProps, styled, colors as Colors } from '@mui/material';
import {
    RadioButtonChecked as RadioButtonCheckedIcon, 
    TextFields as TextFieldsIcon,
    CalendarMonth as CalendarMonthIcon,
    ThumbUp as ThumbUpIcon
} from '@mui/icons-material';
function ButtonGrid() {
    
  return (
    <Box sx={{ width: '100%' , m : 2}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={4}>
          <ColorButton><RadioButtonCheckedIcon/> 선택 항목</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><TextFieldsIcon/> 텍스트</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><ThumbUpIcon /> 평가</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><CalendarMonthIcon/> 날짜</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton>순위</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton>Likert</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton>점수</ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton>섹션</ColorButton>
        </Grid>

      </Grid>
    </Box>
  );
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    width: '100%',
    color: Colors.common.white,
    backgroundColor: Colors.purple[500],
    '&:hover': {
      backgroundColor: Colors.purple[700],
    },
  }));
export default ButtonGrid;