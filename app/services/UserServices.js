const User= require('../models/user')

class UserServices {
    static create(id,username,name,bio){
        return new User(id,username,name,"sin bio")
    }
}

module.exports=UserServices