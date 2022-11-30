import React from 'react'
import {connect} from "react-redux";
import Users from "./UsersClass";
import {followAC, setUsersAC, unfollowAC} from "../redux/usersReducer";

// @ts-ignore
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Users)

