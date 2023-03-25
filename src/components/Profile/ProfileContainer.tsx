import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getProfile} from "../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";




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
let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})
//@ts-ignore
AuthRedirectComponent = connect(mapStateToPropsForRedirect )(AuthRedirectComponent)


let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})
//@ts-ignore
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getProfile}) (WithUrlDataContainerComponent);