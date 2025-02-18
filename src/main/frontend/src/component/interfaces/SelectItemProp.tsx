import {ItemProp} from '@component/interfaces/ItemProp'

interface SelectItemProp extends ItemProp{
    question: string,
    checkBoxs: CheckBoxProp[]
}

interface CheckBoxProp {
    idx: number,
    value: string,
    description: string
}

export {SelectItemProp, CheckBoxProp}