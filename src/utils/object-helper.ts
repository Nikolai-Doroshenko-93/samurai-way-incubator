


export const updateObjectInArray = (item: Array<any>, itemId: string, objPropName: string, newObjProps: { followed: boolean }) => {
    return item.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}