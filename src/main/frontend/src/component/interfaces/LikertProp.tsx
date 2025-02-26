import {ItemProp} from '@component/interfaces/ItemProp'

interface LikertProp extends ItemProp {
    question: string;
    rows: RowProp[];
}

interface RowProp {
    id: string;
    condition: string;
    value: boolean;
    cols: ColProp[];
}

interface ColProp {
    id: string;
    rowId: string;
    option: string;
}



export {LikertProp, RowProp, ColProp};