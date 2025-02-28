import { useParams } from "react-router-dom";
import { Typography, Box } from '@mui/material';
interface User {
    id: string;
    name: string;
    age: number;
    country: string;
}
const userData: User[] = [
    {
        id: 'test1',
        name: 'test1입니당',
        age: 35,
        country: '한국'
    },
    {
        id: 'test2',
        name: 'test2입니당',
        age: 25,
        country: '일본'
    },
    {
        id: 'test3',
        name: 'test5입니당',
        age: 26,
        country: '미국'
    },
    {
        id: 'test4',
        name: 'test4입니당',
        age: 15,
        country: '영국'
    },
]
const ProfileDetail = () => {

    const params = useParams();
    const user: User[] = userData.filter(f => f.id === params.id)
    return (
        <>
            {user.map(user =>
                <Box key={user.id} sx={{mt:5}}>
                    <Typography variant="h5">ID: {user.id}</Typography>
                    <Typography variant="h5">NAME: {user.name}</Typography>
                    <Typography variant="h5">AGE: {user.age}</Typography>
                    <Typography variant="h5">COUNTRY: {user.country}</Typography>
                </Box>
            )}

        </>
    )
}

export default ProfileDetail;