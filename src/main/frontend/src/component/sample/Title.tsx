import * as React from 'react';
import {TextField, Typography, styled, Box, colors as Colors, BoxProps} from '@mui/material';

// const TitleWrapper = styled.div`
//     margin: 2%;
//     &:hover {background-color : #EEEEEE}
//     & > * {width : 100%;}
// `;

const TitleBoxWrapper = styled(Box)<BoxProps>(({theme}) => ({
    '&:hover' : {
        backgroundColor: Colors.grey[200]
    },
    '&>*' : {
        width: '100%'
    },
}));

const Title = () => {
  const [title, setTitle] = React.useState<string>('제목없는 양식');
  const [description, setDescription] = React.useState<string>('');
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const handleTitleClick = () => {
    setIsEditing(true);
  }
  const handleTitleSave = (newTitle:string, newDescription:string) => {
    setTitle(newTitle ? newTitle : '제목없는 양식');
    setDescription(newDescription);
    setIsEditing(false)
  }
  return (
      isEditing ? <TitleInputBox title={title} description={description} onSave={handleTitleSave} /> 
      : <TitleBox title={title} description={description} handleTitleClick={handleTitleClick}/>
  )

}
const TitleInputBox = ({title, description, onSave} : {title: string, description: string, onSave:(title:string, description:string) => void}) => {
  const [tempTitle, setTempTitle] = React.useState<string>(title === '제목없는 양식' ? '' : title);
  const [tempDescription, setTempDescription] = React.useState<string>(description);
 
  const saveTitle = (e : React.FocusEvent) => {
    if (e.relatedTarget && e.relatedTarget instanceof HTMLElement) {
      if (e.relatedTarget.closest('input')) {
        return;
      }
    }
    onSave(tempTitle, tempDescription);
  }
  return (
    <TitleBoxWrapper onBlur={saveTitle}>
      <TextField label="양식 제목" variant="standard" onChange={(e) => setTempTitle(e.target.value)} value={tempTitle} autoFocus></TextField>
      <TextField label="양식 설명" variant="standard" onChange={(e) => setTempDescription(e.target.value)} value={tempDescription}></TextField>
    </TitleBoxWrapper>
  )
}

const TitleBox = ({title, description, handleTitleClick} : {title: string, description: string, handleTitleClick: () => void}) => {
  return (
    <TitleBoxWrapper onClick={handleTitleClick}>
      <Typography variant="h3" >{title}</Typography>
      <Typography variant="h5" >{description}</Typography>
    </TitleBoxWrapper>
  )
}

export default Title;
