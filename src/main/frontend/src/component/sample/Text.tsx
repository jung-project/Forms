import {useState} from 'react';
import {TextField, Typography, styled, Box, colors as Colors, BoxProps} from '@mui/material';

const TextBoxWrapper = styled(Box)<BoxProps>(({theme}) => ({
    '&:hover' : {
        backgroundColor: Colors.grey[200]
    },
    '&>*' : {
        width: '100%'
    },
}));

const TextBox = ({question, handleTextBoxClick} : {question:string, handleTextBoxClick:() => void}) => {

    return (
        <TextBoxWrapper onClick={handleTextBoxClick}> 
            <Typography variant='h3'>{question}</Typography>
            <Typography variant='h5'>답변을 입력하세요</Typography>
        </TextBoxWrapper>
    )
}

const EditTextBox = ({newQuestion, handleTextInputBlur} : {newQuestion:string, handleTextInputBlur: (newQuestion:string) => void}) => {
    const [tempQuestion,setTempQuestion] = useState<string>(newQuestion === '질문' ? '' : newQuestion);
    const saveTextInput = () => {
        handleTextInputBlur(tempQuestion);
    }
    return (
        <TextBoxWrapper onBlur={saveTextInput} >
            <TextField label="질문" variant="standard" value={tempQuestion} onChange={(e) => setTempQuestion(e.target.value)} autoFocus />
            <TextField label="답변을 입력하세요" variant="standard" disabled sx={{backgroundColor : Colors.grey[300]}} />
        </TextBoxWrapper>
    )
}
const Text = () => {

    const [question, setQuestion] = useState<string>('질문');
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleTextBoxClick = () => {
        setIsEditing(true);
    }
    const handleTextInputBlur = (newQuestion:string) => {
        setQuestion(newQuestion ? newQuestion : '질문')
        setIsEditing(false);
    }
    return (
        isEditing ? <EditTextBox newQuestion={question} handleTextInputBlur={handleTextInputBlur} /> : <TextBox question={question} handleTextBoxClick={handleTextBoxClick}/>
    ) 
}

export default Text;