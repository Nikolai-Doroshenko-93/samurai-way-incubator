const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING '


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case TOGGLE_ISFETCHING:
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
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_ISFETCHING, isFetching})


export default usersReducer