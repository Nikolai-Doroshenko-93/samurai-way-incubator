import React from "react";
import s from "../Users/Users.module.css"
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";



let Users = ( props: any) => {
    return <div>
        <Paginator
            currentPage={props.currentPage}
            onPageChanged={props.onPageChanged}
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
        />
        <div className={s.usersUl}>
            {
                props.users.map((u: any) =>
                    <User key={u.id}
                          user={u}
                          followingInProgress={props.followingInProgress}
                          follow={props.follow}
                          unfollow={props.unfollow}
                    />)}
        </div>
    </div>
}
export default Users