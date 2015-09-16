/**
 * javascript implementation of python range function
 * returns array of numbers iterated over
 * @param {Number} start - initial value
 * @param {Number} stop - destination value
 * @param {Number} increment - step by value
 * @returns {Array<Number>}
 */
function range(start,stop,increment){
    var arr=[];
    switch(arguments.length){
        case 1:
            increment=(start < 0) ? -1 : 1;
            for(var i=0; i < start; i+=increment){
                arr.push(i);
            }break;

        case 2:
            increment= (start > stop) ? increment=-1 : increment=1;
            for(var j=start; j != stop; j+=increment){
                arr.push(j);
            }break;

        case 3:

            if((start > 0) && (stop < 0) && (increment > 0) ||
            (start < 0) && (stop > 0) && (increment < 0))
                return arr;

            if(start < stop)
                for(var k=start; k < stop; k+=increment){
                     arr.push(k);
            }
            else if(start > stop){
                for(var k=start; k > stop; k+=increment){
                    arr.push(k);
                }
            }break;
    }
    return arr;
}
