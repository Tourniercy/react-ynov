class UserService {
    isLogged = false
    login({email, password}){
        return new Promise((resolve, reject) => {
            if (!localStorage.getItem('users')) {
                return setTimeout(
                    () => reject(new Error('users not found')),
                    250
                );
            }
            let users = JSON.parse(localStorage.getItem('users'));
            users = Object.values(users)

            const user = users.find(a => a.email === email)
            if (user.password !== password) {
                return setTimeout(
                    () => reject(new Error('Bad password')),
                    250
                );
            }
            this.isLogged = true;
            localStorage.setItem('user',JSON.stringify(user));
            setTimeout(() => resolve(user), 250);
        });
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