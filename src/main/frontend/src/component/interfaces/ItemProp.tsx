// 최상위
interface ItemProp{
    order: number | null,
}

// 텍스트
interface TextFieldProp extends ItemProp{
    question: string,
    answer: string
}

// 양식 제목
interface FromsTileProp extends ItemProp{
    title: string,
    description: string
}

export {ItemProp, TextFieldProp, FromsTileProp};