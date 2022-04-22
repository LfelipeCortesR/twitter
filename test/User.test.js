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
  })