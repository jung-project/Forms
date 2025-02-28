import React, { useState } from "react";

import { styled, Box, Rating, Typography, TextField, Select, MenuItem, Stack, FormControl, InputLabel } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ItemProp } from '@component/interfaces/ItemProp';
import { RatingItemProp, RatingType, RatingTypeToArray } from '@component/interfaces/RatingItemProp';


const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const getRatingComponent = (type: string, ratingValue: number, ratingCount: number) => {

    switch (type) {
        case RatingType.STAR:
            return <Rating sx={{ p: 2 }} size='large' readOnly name="customized-10" defaultValue={ratingValue} max={ratingCount} />

        case RatingType.HEART:
            return <StyledRating
                readOnly
                name="customized-color"
                defaultValue={ratingValue}
                max={ratingCount}
                size='large'
                precision={0.5}
                sx={{ p: 2 }}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
    }
}
const RatingItem = (props: { change: any, itemProp: ItemProp | null }) => {

    const rating = props.itemProp as RatingItemProp;

    const boxClickHandler = (e: any) => {
        props.change(rating);
    }

    return (
        <Box sx={{ pl: 5, bgcolor: '#f5f5f5' }} onClick={(e) => boxClickHandler(e)}>
            <Typography sx={{ p: 2 }}>{rating?.question}</Typography>
            {getRatingComponent(rating.type, rating.value, rating.count)}
        </Box>
    )
}

const RatingItem_write = (props: { change: any, itemProp: ItemProp | null }) => {
    return (
        <RatingItem {...props} />
    )
}

export default RatingItem_write;