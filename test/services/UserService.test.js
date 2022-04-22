const UserService = require('./../../app/services/UserServices')

describe("Test for UserServices", () => {
    test('1 Create a new user using the UserServices ', () => {
        const user = UserService.create(1,"LFelipe","Felipe")
        expect(user.username).toBe("LFelipe") 
        expect(user.name).toBe("Felipe")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
        });

  })