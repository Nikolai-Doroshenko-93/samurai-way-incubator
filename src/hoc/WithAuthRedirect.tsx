import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})
//@ts-ignore
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            //@ts-ignore
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

    //@ts-ignore
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect )(RedirectComponent)

    return ConnectedAuthRedirectComponent
}