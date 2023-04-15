import React from "react";


export const required= (value: any) => {
    if(value) {
        return undefined
    } else {
        return 'Field is required'
    }
}


export const maxLengthCreator = (maxLength: any) =>  (value: any) => {
    if(value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else {
        return undefined
    }
}

export const minLengthCreator = (minLength: any) =>  (value: any) => {
    if(value && value.length < minLength) {
        return `Max length is ${minLength} symbols`
    } else {
        return undefined
    }
}