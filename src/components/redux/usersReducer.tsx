import {usersAPI} from "../../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../../utils/object-helper";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = 'TOGGLE_ISFETCHING '
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: state.users.map(u => {
                //     //@ts-ignore
                //     if (u.id === action.userId) {
                //         //@ts-ignore
                //         return {...u, followed : true}
                //     }
                // return u
                // })
                users: updateObjectInArray(state.users, action.userId, "id", {followed : true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed : false})

            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const followSuccess = (userId: string) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsers = (users: string) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: any) => {
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}
}
export const getUsers = (currentPage: any, pageSize: any) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
}}

export const followUnfollowFlow = async (dispatch: Dispatch, userId: string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch( actionCreator(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))

}


export const unfollow = (userId: string) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
        }}
export const follow = (userId: string) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowingInProgress(true, userId))
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)}}

export default usersReducer