class UserService {
    isLogged = false

    login({email, password}){
        return new Promise((res,rej) => {
            setTimeout(() => {
                this.isLogged = true
                res({
                    name: "Rémi"
                })
            },1000)
        })
    }

    getMe(){
        return new Promise((res,rej) => {
            setTimeout(() => {
                if(this.isLogged){
                    res({
                        name: "Rémi"
                    })
                } else {
                    rej({
                        err: "You're not logged"
                    })
                }
            },1000)
        })
    }

    logout(){
        return new Promise((res,rej) => {
            setTimeout(() => {
                this.isLogged = false
                res(true)
            },1000)
        })
    }
}

const userService = new UserService()

export {userService}