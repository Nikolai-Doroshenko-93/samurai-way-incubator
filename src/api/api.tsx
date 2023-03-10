import axios from "axios";

const baseURL = `https://social-network.samuraijs.com/api/1.0`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY":'837231db-6036-455b-8898-180b09b688b9'
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId: any) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`
        )
    },
    unfollow(userId: any) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    }
}



