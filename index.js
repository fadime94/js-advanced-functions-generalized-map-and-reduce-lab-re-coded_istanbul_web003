// Add your functions here
/* function mapToNegativize(sourceArray){
    const negativeNums=[];
    for(const el of sourceArray){
        negativeNums.push(-1*el);
    }
    return negativeNums;
} 

function mapToDouble(sourceArray){
    const double=[];
    for(const el of sourceArray){
        double.push(2*el);
    }
    return double;
}
*/

function map(sourceArray,doSomeWork){
    const newArr=[];
    for(const el of sourceArray){
       newArr.push(doSomeWork(el));
    }
    return newArr;
}

/*
function reduceToTotal(sourceArray,acc=sourceArray[0]){
    let total=startingPoint;
    for(const el of sourceArray){
        total+=el;
    }
    return total;
}
function reduceToAllTrue(sourceArray){
    let result= sourceArray.every(el=> el? true:false);
    return result;
} 
arr.reduce(function(acc,el){} , startValue)
*/

 function reduce(sourceArray,doSomeWork, startingPoint){
    let accumulator;
    if (startingPoint !== undefined) {
        accumulator = startingPoint;
        for (const el of sourceArray) {
            accumulator = doSomeWork(accumulator, el);
        }
    } else {
        accumulator = sourceArray[0]; 
        sourceArray= sourceArray.slice(1);
        for (const el of sourceArray) {
            accumulator = doSomeWork(accumulator, el);
        }
    }
    return accumulator;
} 

/* function reduceToTotal(sourceArray,acc=sourceArray[0]){
    let total=acc;
    for(const el of sourceArray){
        total+=el;
    }
    return total;
} */