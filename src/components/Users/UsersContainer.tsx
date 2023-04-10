import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow
} from "../redux/usersReducer";
import Users from './Users'
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";




class UsersContainer extends React.Component<any, any> {


    // constructor(props: any) { можно не писать если переадем управление толкьо этому конструктору
    //     super(props);
    // }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // ====>
        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.toggleIsFetching(false)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }


    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // usersAPI.getUsers(p, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                    followingInProgress={this.props.followingInProgress}
                />
               </>

    }
}


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: any) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }


export default compose<React.ComponentType> (
    WithAuthRedirect,
    connect (mapStateToProps,
            {
                follow,
                unfollow,
                setCurrentPage,
                toggleFollowingInProgress,
                getUsers: getUsers
            })
)(UsersContainer)