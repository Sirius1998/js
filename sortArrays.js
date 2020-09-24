const minArrays = function(numArr) {

    // stores the length of numArr
    let numArrLength = numArr.length;
    // empty array
    let newMinArr = [];
    // container to store minNumber
    let minNumber;
    // container to store the index to be removed
    let valueToRemove;

    // loops based on the length of the array
    for(let i = 0; i < numArrLength ; i++){
        // find the min
        minNumber = Math.min(...numArr); 
    
        // push the current min num value into the new array
        newMinArr.push(minNumber); 
        
        // finds and stores the index of current minNumber
        valueToRemove = numArr.indexOf(minNumber);

        // removes the minNumber by its index
        numArr.splice(valueToRemove, 1);
    }
    return newMinArr;
};

const maxArrays = function(numArr2) {

    // stores the length
    let numArr2Length = numArr2.length;
    // container for the empty sorted max array
    let newArr2 = [];
    // container for max value
    let maxNumber;
    // constaier to remove the max number current value by its index
    let valueToRemove2;

    // loops based on the length of the array
    for(let i = 0; i < numArr2Length; i++) {

        // finds the max value in the array
        maxNumber = Math.max(...numArr2);

        // appends it to the new array
        newArr2.push(maxNumber);

        // finds the index of curretn max number
        valueToRemove2 = numArr2.indexOf(maxNumber);

        // removes the current max by its index out of the array
        numArr2.splice(valueToRemove2, 1);
    }
    return newArr2;
};

const summation = function(list) {

    // to track the sum of all array items
    let total = 0;

    // loops based on the length of the array(s)
    for(let i = 0; i < list.length; i++) {

        // adding current array item into the total 
        total += list[i];
    }

    return total;
};

const makeArr = function(){ 
    let generatesArr = [];
    
    for(let i = 0; i < 10; i ++) {
        // generates random number between 1 - 100
        let randNum = Math.ceil(Math.random () * 100);
        generatesArr.push(randNum);
    }
    
    return generatesArr;
};

const shallowCopy = function(someArr) {

    let copyArr = [];
    for(let i = 0; i < someArr.length; i++) {
        copyArr[i] = someArr[i];
    }
    return copyArr;
};

// container storing the array made using makeArr()
let arr1 = makeArr();
// stores the copy of arr1
let copyArr1 = shallowCopy(arr1);

console.log(`original array: ${arr1}`);
let minList = minArrays(arr1);
console.log(`smallest to largest order: ${minList}`);
let maxlist = maxArrays(copyArr1);
console.log(`largest to smallest order: ${maxlist}`);
console.log(`total: ${summation(minList)}`);







