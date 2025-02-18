import {Grid2 as Grid, Box, Button, ButtonProps, styled, colors as Colors } from '@mui/material';
import {
    RadioButtonChecked as RadioButtonCheckedIcon, 
    TextFields as TextFieldsIcon,
    CalendarMonth as CalendarMonthIcon,
    ThumbUp as ThumbUpIcon,
    SwapVert as SwapVertIcon
} from '@mui/icons-material';
import {ComponentType} from '@component/common/ComponentType';
import InputLabel from '@mui/material/InputLabel';

function ButtonGrid(props: {add: any}) {
    function clickHandler(type: string){
        props.add(type);
    }
  return (
    <Box sx={{ width: '100%' , m : 2}}>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
        <Grid size={4} onClick={() => clickHandler(ComponentType.selectItem)}>
          <ColorButton><RadioButtonCheckedIcon/><InputLabel> 선택 항목</InputLabel></ColorButton>
        </Grid>
        <Grid size={4} onClick={() => clickHandler(ComponentType.textField)}>
          <ColorButton><TextFieldsIcon/><InputLabel>텍스트</InputLabel></ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><ThumbUpIcon /> <InputLabel>평가</InputLabel></ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><CalendarMonthIcon/> <InputLabel>날짜</InputLabel></ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><SwapVertIcon /><InputLabel>순위</InputLabel></ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><InputLabel>Likert</InputLabel></ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><InputLabel>점수</InputLabel></ColorButton>
        </Grid>
        <Grid size={4}>
          <ColorButton><InputLabel>섹션</InputLabel></ColorButton>
        </Grid>

      </Grid>
    </Box>
  );
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    width: '100%',
//     color: Colors.common.white,
    color: Colors.teal[500],
    backgroundColor: '#e8f2f4',
    '&:hover': {
      backgroundColor: Colors.teal[50],
    },
    border: '1px solid ' + Colors.teal[800],
    borderRadius: 8,
    borderColor: Colors.teal[500],
    height: 50,
    justifyContent: 'flex-start'
  }));
export default ButtonGrid;