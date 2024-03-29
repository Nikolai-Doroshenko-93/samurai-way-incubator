import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow, getUsers
} from "../redux/usersReducer";
import Users from './Users'
import Preloader from "../common/Preloader/Preloader";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSelector
} from "../redux/usersSelectors";




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


    onPageChanged = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize);
        this.props.setCurrentPage(currentPage)
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
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


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