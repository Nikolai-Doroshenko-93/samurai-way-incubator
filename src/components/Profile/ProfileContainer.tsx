import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {
        return (
            //@ts-ignore
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)