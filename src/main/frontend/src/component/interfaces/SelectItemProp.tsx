import {ItemProp} from '@component/interfaces/ItemProp'

export default interface SelectItemProp extends ItemProp{
    id: number,
    value: string,
    description: string
}

