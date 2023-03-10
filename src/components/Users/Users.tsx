import React from "react";
import userNotFoto from "../../assets/images/userNotFoto.png";
import s from "../Users/Users.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";



let Users = (props: any) => {
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize))
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let firstPageInPagination
    let lastPageInPagination

    const dispatch = useDispatch()

    switch (props.currentPage) {
        case 1:
            firstPageInPagination = 1
            lastPageInPagination = props.currentPage + 4
            break;
        case 2:
            firstPageInPagination = 1
            lastPageInPagination = props.currentPage + 3
            break;
        case 3:
            firstPageInPagination = 1
            lastPageInPagination = props.currentPage + 2
            break;
        case pages[pages.length-1]:
            firstPageInPagination = props.currentPage - 3
            lastPageInPagination = props.currentPage
            break;
        case pages[pages.length-2]:
            firstPageInPagination = props.currentPage - 3
            lastPageInPagination = props.currentPage + 1
            break;
        case pages[pages.length-3]:
            firstPageInPagination = props.currentPage - 3
            lastPageInPagination = props.currentPage + 2
            break;
        default :
            firstPageInPagination = props.currentPage - 2
            lastPageInPagination = props.currentPage + 2
    }

    let pagesVisible = pages.slice(firstPageInPagination-1, lastPageInPagination)
    return <div>
            <div className={s.pageNumberContainer}>
                {
                    pagesVisible.map(p => {

                        return <div
                            className = {s.pageNumber + ' ' + (props.currentPage === p && s.selectedPage)}
                            onClick={(e) => {props.onPageChanged(p)}}
                        >{p}
                        </div>
                    })}
            </div>
            {
                props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ?u.photos.small : userNotFoto} className={s.img}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button
                                disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                onClick={() => {props.unfollow(u.id)}
                            }>Unfollow</button>
                            : <button
                                disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                onClick={()=> {props.follow(u.id)}
                            }>Follow</button>
                        }
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
}
export default Users