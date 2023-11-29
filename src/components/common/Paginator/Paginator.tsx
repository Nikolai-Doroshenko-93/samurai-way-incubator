import React from "react";
import s from "../../common/Paginator/Paginator.module.css"



let Paginator = (props: any) => {
    let pagesCount = Math.ceil((props.totalUsersCount / props.pageSize))
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            <div className={s.pageNumberContainer}>
                {
                    pages.map(p => {
                        return <div
                            onClick={(e) => {props.onPageChanged(p)}}
                        >{p}</div>
                    })}
            </div>

        </div>
}
export default Paginator