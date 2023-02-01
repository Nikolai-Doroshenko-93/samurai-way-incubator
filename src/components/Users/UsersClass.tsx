import React from "react";
import s from "../Users/Users.module.css"
import axios from "axios";
import userNotFoto from "../../assets/images/userNotFoto.png"



class User extends React.Component<any, any>{

    // constructor(props: any) { можно не писать если переадем управление толкьо этому конструктору
    //     super(props);
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
        });
    }
    onPageChanged = (p: any) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        let pagesCount = Math.ceil((this.props.totalUsersCount / this.props.pageSize))
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        let firstPageInPagination
        let lastPageInPagination
        // if(this.props.currentPage == 1 || this.props.currentPage == 2 || this.props.currentPage == 3) {
        //     firstPageInPagination = 1
        // } else {
        //     firstPageInPagination = this.props.currentPage - 2
        // }

        switch (this.props.currentPage) {
            // @ts-ignore
            case 1:
                 firstPageInPagination = 1
                 lastPageInPagination = this.props.currentPage + 4
                break;
            // @ts-ignore
            case 2:
                firstPageInPagination = 1
                lastPageInPagination = this.props.currentPage + 3
                break;
            case 3:
                firstPageInPagination = 1
                lastPageInPagination = this.props.currentPage + 2
                break;
            // @ts-ignore
            case pages[pages.length-1]:
                firstPageInPagination = this.props.currentPage - 3
                lastPageInPagination = this.props.currentPage
                break;
            // @ts-ignore
            case pages[pages.length-2]:
                firstPageInPagination = this.props.currentPage - 3
                lastPageInPagination = this.props.currentPage + 1
                break;
            // @ts-ignore
            case pages[pages.length-3]:
                firstPageInPagination = this.props.currentPage - 3
                lastPageInPagination = this.props.currentPage + 2
                break;
            default :
                firstPageInPagination = this.props.currentPage - 2
                lastPageInPagination = this.props.currentPage + 2
        }



        // if (this.props.currentPage == pages[pages.length-1]) {
        //     lastPageInPagination = this.props.currentPage
        // } else {
        //     lastPageInPagination = this.props.currentPage + 2
        // }

        let pages2 = pages.slice(firstPageInPagination-1, lastPageInPagination)


       return(
        <div>
            <div className={s.pageNumberContainer}>
                {
                    pages2.map(p => {

                    return <div
                        // @ts-ignore
                        className = {s.pageNumber + ' ' + (this.props.currentPage === p && s.selectedPage)}
                        onClick={(e) => {this.onPageChanged(p)}}
                    >{p}
                    </div>
                })}
            </div>
            {
                this.props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ?u.photos.small : userNotFoto} className={s.img}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
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
       )
    }
}
export default User