import axios from "axios";

const baseURL = `https://social-network.samuraijs.com/api/1.0`;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        "API-KEY":'0ca925e4-9f59-4d59-ac63-6da41cf2f0df'
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
    //lesson 73, need fix
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto(photoFile: any) {
        let formData = new FormData()
        formData.append("image", photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const authAPI = {
    me() {
        return  instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: string) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login', )
    }
}



