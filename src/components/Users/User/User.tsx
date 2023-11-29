import React from "react";
import userNotFoto from "../../../assets/images/userNotFoto.png"
import s from "../User/User.module.css"
import {NavLink} from "react-router-dom";


let User = (props: any) => {
  return  <div className={s.userBlock}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + props.user.id}>
                                    <img src={props.user.photos.small != null ? props.user.photos.small : userNotFoto} className={s.img}/>
                                </NavLink>
                            </div>
                            <div>
                                {props.user.followed
                                    ? <button
                                        disabled={props.followingInProgress.some((id: any) => id === props.user.id)}
                                        onClick={() => {props.unfollow(props.user.id)}
                                        }>Unfollow</button>
                                    : <button
                                        disabled={props.followingInProgress.some((id: any) => id === props.user.id)}
                                        onClick={()=> {props.follow(props.user.id)}
                                        }>Follow</button>
                                }
                            </div>
                            <span>
                                <div>{props.user.name}</div>
                                <div className={s.userStatus}>{props.user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
  </div>
}
export default User