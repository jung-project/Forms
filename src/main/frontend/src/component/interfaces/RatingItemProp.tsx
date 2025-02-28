import {ItemProp} from '@component/interfaces/ItemProp';

interface RatingItemProp extends ItemProp {
    question:string;
    value:number;
    type:string;
    count:number;
}

const RatingType = {
    STAR:'star',
    HEART:'heart',

} as const

const RatingTypeToArray = () => {
    return Array.from(Object.entries(RatingType), ([key, value]) => ({
        key:key,
        value:value
    }))
}
export {RatingItemProp, RatingType, RatingTypeToArray}