// Write a function shuffleInPlace(array) that shuffles an array in place, 
// without creating a new array. This means that the function should shuffle
// the elements of the given array and return the same array, rather than 
// creating a new array and returning that.

function shuffleInPlace(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j],array[i]];
    }
}

// Test 1: Empty array
const emptyArray = [];
shuffleInPlace(emptyArray);
console.log(emptyArray);
console.assert(emptyArray, []);

// Test 2: Array with one element
const oneElementArray = [1];
shuffleInPlace(oneElementArray);
console.log(oneElementArray);
console.assert(oneElementArray, [1]);

// Test 3: Array with two elements
const twoElementArray = [1, 2];
shuffleInPlace(twoElementArray);
console.log(twoElementArray);
console.assert(twoElementArray, [1,2] || [2,1]);

shuffleInPlace(twoElementArray);
console.log(twoElementArray);
console.assert(twoElementArray, [1, 2] || [2, 1]);

// Test 4: Array with three elements
const threeElementArray = [1, 2, 3];
shuffleInPlace(threeElementArray);
console.log(threeElementArray);
console.assert(threeElementArray, [1, 2, 3] || [1, 3, 2] || [2, 1, 3] || [2, 3, 1] || [3, 1, 2] || [3, 2, 1]);

// Test 5: Array with four elements
const fourElementArray = [1, 2, 3, 4];
shuffleInPlace(fourElementArray);
console.log(fourElementArray);
console.assert(fourElementArray.length, 4);
console.assert(new Set(fourElementArray), new Set([1, 2, 3, 4]));