const {divide}=require('./maths');
const should=require('should');

describe('Division Tests',()=>{

    it('should divide with valid dr',()=>{
        let x=10;
        let y=2;
        //let result=divide(x,y);
        //expect(result).toBe(x/y);  //jasmine builtin assertion

        divide(x,y).should.be.equal(x/y); //should assertion model
    });



    it('should return floor integer for non exact division',()=>{

        expect(divide(99,10)).toBe(9);

    });



    it('should throw excepton for 0 division',()=>{

        expect(()=>divide(1,0)).toThrow();

        

    });
});