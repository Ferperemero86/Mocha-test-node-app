const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

 describe('#add', ()=> {
   it('should add 2 numbers', () => {
     var res = utils.add(33,11);
  
     expect(res).toBe(44).toBeA('number');
   });
  
   it('Should async add two numbers', (done) => {
      utils.asyncAdd(4,3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
  })
});
  
 describe('#square', () => {
   it('It should square a number async', (done) => {
     utils.asyncSquare(3, (square) => {
        expect(square).toBe(9).toBeA('number');
        done();
     });
   });
   
    it('Should square a number', () => {
      var res = utils.square(3);
   
      expect(res).toBe(9).toBeA('number');
    });
 });
  
  
 describe('#values',() => {

   it('Should expect some values', () => {
     expect({name: 'Nando'}).toEqual({name: 'Nando'});
   });
  
   it('Should expect some values', () => {
     expect([2,3,4]).toExclude(1);  
   });
  
   it('Should expect some values', () => {
     expect({
        name: 'Nando',
        age: '32',
        location: 'Spain'
     }).toInclude({
        age: 32
     })
   });
  
   it('Should set firstName and lastName', () => {
     var user = {location: 'Spain', age: 25};
     var res = utils.setName(user, 'Fernando Perez');
  
     expect(user).toEqual(res);
   });
  
 });

});
  
