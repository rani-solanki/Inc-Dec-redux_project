export const InNumber = (num)=>{
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const DicNumber = (num)=>{
    return {
        type: "DECREMENT",
        payload : num
    }
}


