const User= require('./../models/user')

class UserServices {
    static create(id,username,name){
        return new User(id,username,name,"Sin bio")
    }
    static getInfo(user){
        const info=[user.id,user.username,user.name,user.bio]
        return info
    }
    static updateUserUsername(user,newUser){
          user.username=newUser
          return user
    }
    static getAllUsernames(usernames){
        const allUsernames=usernames.forEach(element => {
            element.usernames            
        });
        return allUsernames
    }
}

module.exports=UserServices