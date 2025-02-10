interface ItemProp{
}

interface TextFieldProp extends ItemProp{
    question: string,
    answer: string
}

export {ItemProp, TextFieldProp};