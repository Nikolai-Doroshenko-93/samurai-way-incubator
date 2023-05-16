import {createSelector} from "reselect";

const getUsers= (state: any) => {

    return state.usersPage.users
}
export const getUsersSelector = createSelector(getUsers,
    (users)=> {
//@ts-ignore
    return users.filter(u => true)
})
export const getPageSize = (state: any) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount= (state: any) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage= (state: any) => {
    return state.usersPage.currentPage
}
export const getIsFetching= (state: any) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress= (state: any) => {
    return state.usersPage.followingInProgress
}

