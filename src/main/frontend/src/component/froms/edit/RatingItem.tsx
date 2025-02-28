import React, { useState } from "react";

import { styled, Box, Rating, Typography, TextField, Select, MenuItem, Stack, FormControl, InputLabel } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ItemProp } from '@component/interfaces/ItemProp';
import { RatingItemProp, RatingType, RatingTypeToArray } from '@component/interfaces/RatingItemProp';
import '@component/css/fonts.css';

const RatingBoxWrapper = styled(Box)(({ theme }) => ({
    '&': {
        mb: 5
    },
    '&>*': {
        width: '100%'
    },
}));

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const RatingComponent = ({ type, ratingValue, ratingCount, ratingSize }: { type: string, ratingValue: number, ratingCount: number, ratingSize: "small" | "medium" | "large" }) => {

    switch (type) {
        case RatingType.STAR:
            return <Rating size={ratingSize} readOnly name="customized-10" defaultValue={ratingValue} max={ratingCount} />

        case RatingType.HEART:
            return <StyledRating
                readOnly
                name="customized-color"
                defaultValue={ratingValue}
                max={ratingCount}
                size={ratingSize}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
        default:
            return null;
    }
}
const RatingItem = (props: { change: any, itemProp: ItemProp | null, order: number }) => {

    const [rating, setRating] = useState<RatingItemProp>(props.itemProp === null ?
        { question: '질문', value: 0, type: RatingType.STAR, count: 5, order: props.order }
        : props.itemProp as RatingItemProp);

    const boxClickHandler = (e: any) => {
        props.change(rating);
    }

    const preventBubbling = (e: React.MouseEvent<HTMLTableElement | HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <Box sx={{ pl: 5, bgcolor: '#f5f5f5' }} onClick={(e) => boxClickHandler(e)}>
            <Box onClick={(e) => preventBubbling(e)} sx={{ pt: 2, pb: 2 }}>
                <TextField className='font-haeder' value={rating?.question} fullWidth onChange={(e) => setRating({ ...rating, question: e.target.value })} />
                <Stack spacing={2} sx={{ mb: 3, mt: 3 }}>
                    <RatingComponent type={rating.type} ratingValue={rating.value} ratingCount={rating.count} ratingSize="large" />
                </Stack>

                <FormControl sx={{ mr: 3 }}>
                    <InputLabel id="demo-simple-select-filled-label">기호</InputLabel>
                    <Select
                        labelId="rating-type-select-label"
                        id="rating-type-select"
                        label="기호"
                        value={rating.type}
                        sx={{ width: '100px' }}
                        onChange={(e) => setRating({ ...rating, type: e.target.value })}
                    >
                        {
                            RatingTypeToArray().map((type, idx) =>
                                <MenuItem key={`rating-type-${idx}`} value={type.value}>
                                    <RatingComponent type={type.value} ratingValue={0} ratingCount={1} ratingSize="small" />
                                </MenuItem>)
                        }
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="demo-simple-select-filled-label">수준</InputLabel>
                    <Select
                        labelId="rating-count-select-label"
                        id="rating-count-select"
                        value={rating.count}
                        label="수준"
                        sx={{ width: '100px' }}
                        onChange={(e) => setRating({ ...rating, count: Number(e.target.value) })}
                    >
                        {/* {Array.from([2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => (
                            <MenuItem key={`rating-value-${value}`} value={value}>{value}</MenuItem>
                        ))} */}

                        {Array.from({ length: 9 }, (_, idx) => (
                            <MenuItem key={`rating-value-${idx + 2}`} value={idx + 2}>{idx + 2}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

const RatingItem_edit = (props: { change: any, itemProp: ItemProp | null, order: number }) => {
    return (
        <RatingItem {...props} />
    )
}

export default RatingItem_edit;