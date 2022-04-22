const User = require('../../app/models/User');
const UserService = require('./../../app/services/UserServices')

describe("Test for UserServices", () => {
    test('1 Create a new user using the UserServices ', () => {
        const user = UserService.create(1,"LFelipe","Felipe")
        expect(user.username).toBe("LFelipe") 
        expect(user.name).toBe("Felipe")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
        });
    test('2 Get all user data in a list ', () => {
        const user = UserService.create(1,"LFelipe","Felipe")
        const userInfoInList=UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1) 
        expect(userInfoInList[1]).toBe("LFelipe")
        expect(userInfoInList[2]).toBe("Felipe")
        expect(userInfoInList[3]).toBe("Sin bio")
        });
    test('3 Update username ', () => {
        const user = UserService.create(1,"LFelipe","Felipe")
        UserService.updateUserUsername(user, "connor")
        expect(user.username).toBe("connor") 
        });
    test('4 Given a list of users give me the list of usernamer ', () => {
        const user1 = UserService.create(1,"LFelipe","Felipe")
        const usernames=UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("LFelipe1")
        expect(usernames).toContain("LFelipe2")
        expect(usernames).toContain("LFelipe3")
        });
  })