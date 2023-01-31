import React from 'react'
import {connect} from "react-redux";
import Users from "./UsersClass";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../redux/usersReducer";

// @ts-ignore
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
// @ts-ignore
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: any) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: any) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users)

