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
    follow(userId: string) {
        return instance.post(`follow/${userId}`
        )
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    }
}



