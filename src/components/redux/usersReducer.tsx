const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = 'TOGGLE_ISFETCHING '
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
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
                users: state.users.map(u => {
                    //@ts-ignore
                    if (u.id === action.userId) {
                        //@ts-ignore
                        return {...u, followed : true}
                    }
                return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    //@ts-ignore
                    if (u.id === action.userId) {
                        //@ts-ignore
                        return {...u, followed : false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            console.log('TOGGLE_IS_FOLLOWING_PROGRESS', action)
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ?[...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        case TOGGLE_IS_FETCHING:
            console.log('aaaaa')
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const follow = (userId: string) => ({type: FOLLOW, userId})
export const unfollow = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsers = (users: string) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingInProgress = (followingInProgress: boolean, userId: any) => {
    console.log('followac')
    return {type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId}
}


export default usersReducer