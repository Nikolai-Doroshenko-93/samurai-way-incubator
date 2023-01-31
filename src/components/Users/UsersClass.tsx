import React from "react";
import s from "../Users/Users.module.css"
import axios from "axios";
import userNotFoto from "../../assets/images/userNotFoto.png"

class User extends React.Component<any, any>{

    // constructor(props: any) { можно не писать если переадем управление толкьо этому конструктору
    //     super(props);
    // }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
       return(
        <div>
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