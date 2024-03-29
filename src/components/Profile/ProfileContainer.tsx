import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

// type PathParamsType = {
//     userId: string
// }

// type MapStateToPropsType = {
//     profile: ProfileType | null
// }

// type MapDispatchToPropsType = {
//     getUserProfile: (userId: number) => void
// }


class ProfileContainer extends React.Component<any, any> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        // userId=26498
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        // if(this.props.match.params.userId === undefined) {
        //     this.refreshProfile()
        // }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)