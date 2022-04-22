const User = require('./../app/models/User')

describe("Unit Test for User class", () => {
    test('Create an user object ', () => {
        const user = new User(1,"LFelipe","Felipe","Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("LFelipe") 
        expect(user.name).toBe("Felipe")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
        });
    test('Add getters', () => {
        const user = new User(1,"LFelipe","Felipe","Bio")
        expect(user.getusername).toBe("LFelipe") 
        expect(user.getbio).toBe("Bio")
        expect(user.getdateCreated).not.toBeUndefined()
        expect(user.getlastUpdated).not.toBeUndefined()
        });
    test('Add setters', () => {
        const user = new User(1,"LFelipe","Felipe","Bio")
        user.setUsername="Connor"
        expect(user.username).toBe("Connor")
        user.setBio="New Bio"
        expect(user.bio).toBe("New Bio")
        });
  })