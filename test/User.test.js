const User = require('./../app/models/User')

const Spiderman= require('./../app/spiderman')
describe("Unit Test for User class", () => {
    test('Create an user object ', () => {
    const user = new User(1,"LFelipe","Felipe","Bio","dateCreated","lastUpdate")
    expect(user.id).toBe(1)
    expect(user.username).toBe("LFelipe") 
    expect(user.name).toBe("Felipe")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdate") 
    });
  })