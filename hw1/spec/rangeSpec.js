describe("supplied range function tests",function(){
    it("single argument", function(){
        expect(range(5)).toEqual([ 0, 1, 2, 3, 4]);
    });
    it("double arguments", function(){
        expect(range(2,5)).toEqual([ 2, 3, 4]);
        expect(range(5,2)).toEqual([5,4,3]);
    });
    it("triple arguments", function(){
        expect(range(2,9,2)).toEqual([ 2, 4, 6, 8]);
        expect(range(5,0,-1)).toEqual([ 5, 4, 3, 2, 1]);
        expect(range(6,-1,-2)).toEqual([ 6, 4, 2, 0]);
        expect(range(6,-1,1)).toEqual([]);
    });
});
