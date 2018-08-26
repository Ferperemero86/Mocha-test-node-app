const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db',db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled();
    
  });

  it('Should call saveUser with user object', () => {
    const email = 'fernandoperezmerono@gmail.com';
    const password = '123bc';

    app.handleSignup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
});