import { expect } from 'chai';
import hello, { goodbye, myMult } from '../src/myfunc.js';

describe('MyModule', () => {
   describe('myFunc (multiply) happy path', () => {
       it('return 6 when given 2 and 3', () => {
	   expect(myMult(2,3)).to.equal(6);
       });
   });
   describe('myFunc (multiply) fail case', () => {
       it('return 26 when given 4 and 5', () => {
	   expect(myMult(4,5)).to.equal(26);
       });
   });
});
