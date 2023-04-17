import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../components/redux/redux-store";

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}


let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectType => ({

    isAuth: state.auth.isAuth
})

export function WithAuthRedirect  <T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mapStateToPropsForRedirectType) {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T}/>
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect )(RedirectComponent)

    return ConnectedAuthRedirectComponent
}