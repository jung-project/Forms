import React, { useEffect, useState, useRef } from 'react';
import {
    Box, BoxProps, styled, colors as Colors, RadioGroup, Radio, FormControlLabel, Typography, Button, Fab,
    TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
    InputLabel,
    TableFooter,
    TextField,
} from '@mui/material';

import { Add as AddIcon, BorderBottom, Preview } from '@mui/icons-material';
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

const ButtonTableCell = styled(TableCell)(() => ({
    '&': {
        borderBottom: 'none'
    }
}));

const LikertTable = (props: any) => {

    const createCols = (length: number, rowId: string | null) => {
        return Array.from({ length }, (_, index) => ({
            id: `col-${index + 1}`,
            rowId: rowId === null ? 'row-header' : rowId,
            option: `옵션${index + 1}`
        }));
    };

    const rowDefault = [
        { id: 'row-1', condition: '명령문 1', value: false, cols: createCols(5, null) }
    ]

    const [likert, setLikert] = useState<LikertProp>(props.itemProp === null ? { question: '질문', rows: rowDefault, order: props.order }
        : props.itemProp as LikertProp);

    const [editingRow, setEditingRow] = useState<RowProp | null>(null);
    const [editingCol, setEditingCol] = useState<ColProp | null>(null);

    const handleClickAddRowButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        updateRowCol(
            [...likert.rows, { id: `row-${likert.rows.length + 1}`, condition: `명령문 ${likert.rows.length + 1}`, value: false, 
                cols: createCols(likert.rows[0].cols.length, `row-${likert.rows.length + 1}`) }]
        )
    }
    const handleClickAddColButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateRowCol(
            likert.rows.map(row => ({
                ...row,
                cols: [...row.cols, { id: `col-${row.cols.length + 1}`, rowId: `row-${row.id}`, option: `옵션 ${row.cols.length + 1}` }]
            }))
        );
    }

    const handleChangeCondition = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, currnetRowId: string) => {
        updateRowCol(
            likert.rows.map(row => row.id === currnetRowId ? { ...row, condition: e.target.value } : row)
        );
    }


    const handleChangeOption = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, currnetColId: string) => {
        updateRowCol(likert.rows.map((row) => ({
            ...row,
            cols: row.cols.map((col) =>
                col.id === currnetColId
                    ? { ...col, option: e.target.value }
                    : col
            ),
        }))
        );
    }

    const updateRowCol = (rows: RowProp[]) => {
        setLikert((copiedLikert) => ({
            ...copiedLikert,
            rows: rows
        }))
    }

    const boxClickHandler = (e: any) => {
        props.change(likert);
    }

    const calculateColumnGap = () => {
        switch (likert.rows[0].cols.length) {
            case 5:
                return 15.5;
            case 6:
                return 13;
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

    const preventBubbling = (e: React.MouseEvent<HTMLTableElement | HTMLDivElement>) => {
        e.stopPropagation();
    }

    return (
        <Box sx={{ pl: 5, bgcolor: '#f5f5f5' }} onClick={(e) => boxClickHandler(e)}>
            <TextField fullWidth autoFocus
                sx={{ pt: 2 }}
                onClick={(e) => preventBubbling(e)}
                onChange={(e) => setLikert({ ...likert, question: e.target.value })}
                value={likert?.question}
            />
            <Table onClick={(e) => preventBubbling(e)}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ width: caculateColumnWidth }}></TableCell>
                        {likert.rows[0].cols.map((col: ColProp) =>
                            <TableCell key={col.id} sx={{ width: caculateColumnWidth }}>
                                {editingCol?.id === col.id ?
                                    <TextField autoFocus
                                        value={col.option}
                                        onBlur={() => setEditingCol(null)}
                                        onChange={(e) => handleChangeOption(e, col.id)} />
                                    : <Typography onClick={() => setEditingCol(col)}>{col.option}</Typography>}
                            </TableCell>
                        )}
                        {likert.rows[0].cols.length < 7 &&
                            <ButtonTableCell >
                                <Button onClick={(e) => handleClickAddColButton(e)} startIcon={<AddIcon />}>
                                </Button>
                            </ButtonTableCell>}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {likert.rows.map((row: RowProp) =>
                        <TableRow key={row.id}>
                            <TableCell>
                                {editingRow?.id === row.id ?
                                    <TextField autoFocus
                                        value={row.condition}
                                        onBlur={() => setEditingRow(null)}
                                        onChange={(e) => handleChangeCondition(e, row.id)} />
                                    : <Typography onClick={() => setEditingRow(row)}>{row.condition}</Typography>}
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
            <Button onClick={(e) => handleClickAddRowButton(e)} startIcon={<AddIcon />}>
                명령문 더하기
            </Button>
        </Box>

    )
}

const Likert = (props: { change: any, itemProp: ItemProp | null, order: number }) => {

    return (
        <LikertBoxWrapper>
            <TableContainer>
                <LikertTable {...props} />
            </TableContainer>
        </LikertBoxWrapper>
    )
}

export default Likert;
