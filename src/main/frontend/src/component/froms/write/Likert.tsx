import React, {useState, useRef } from 'react';
import {
    Box, BoxProps, styled, colors as Colors, RadioGroup, Radio, FormControlLabel, Typography, Button, Fab,
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
} from '@mui/material';

import { ItemProp } from '@component/interfaces/ItemProp'
import { LikertProp, RowProp, ColProp } from '@component/interfaces/LikertProp';

const LikertBoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
    '&': {
        mb: 5
    },
    '&>*': {
        width: '100%'
    },
}));

const LikertTable = (props: any) => {
    const likert = props.itemProp as LikertProp;
    let boxRef = useRef<any>();

    const calculateColumnGap = () => {
        switch (likert.rows[0].cols.length) {
            case 5:
                return 18;
            case 6:
                return 14.5;
            case 7:
                return 12;
        }
    }

    const caculateColumnWidth = () => {
        switch (likert.rows[0].cols.length) {
            case 5:
                return '15%';
            case 6:
                return '14%';
            case 7:
                return '12%';
        }
    }

    function handleMouseOver() {
        boxRef.current.style.setProperty('background-color', '#ebebeb');
    }
    function handleMouseOut() {
        boxRef.current.style.setProperty('background-color', '');
    }

    function boxClickHandler(e: any) {
        props.change(likert);
    }

    return (
        <Box ref={boxRef} onClick={(e) => boxClickHandler(e)} sx={{ pl: 5 }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            <Typography sx={{p:2}}>{likert.question}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{width:caculateColumnWidth}}></TableCell>
                        {likert.rows[0].cols.map((col: ColProp) =>
                            <TableCell key={col.id} sx={{width:caculateColumnWidth}}>
                                <Typography>{col.option}</Typography>
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {likert.rows.map((row: RowProp) =>
                        <TableRow key={row.id}>
                            <TableCell>
                                <Typography>{row.condition}</Typography>
                            </TableCell>

                            <TableCell colSpan={row.cols.length}>
                                <RadioGroup row sx={{ columnGap: calculateColumnGap }}>
                                    {row.cols.map((col: ColProp) =>
                                        <Radio disabled key={col.id} value={col.id} name={`radio-group-${row.id}`} />
                                    )}
                                </RadioGroup>
                            </TableCell>
                        </TableRow>
                    )}

                </TableBody>
            </Table>
        </Box>
    )
}

const Likert = (props: { change: any, itemProp: ItemProp | null }) => {

    return (
        <LikertBoxWrapper>
            <TableContainer>
                <LikertTable {...props} />
            </TableContainer>
        </LikertBoxWrapper>
    )
}

export default Likert;
