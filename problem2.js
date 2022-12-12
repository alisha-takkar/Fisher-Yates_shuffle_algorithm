// Write a function that takes an array of objects and randomly shuffles them using the Fisher-Yates shuffle.
// You can assume that the objects have a value property that you can use to compare their order.

function shuffleObjects(array){
    for(let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i-1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Test 1
const distinct_values =[
    {value:1},
    {value:2},
    {value:3},
]
shuffleObjects(distinct_values);
console.log(distinct_values);
console.assert(new Set(distinct_values), new Set([1,2,3]));

// Test 2
const repeated_values = [
    {value:1},
    {value:2},
    {value:1},
]
shuffleObjects(repeated_values);
console.log(repeated_values);
console.assert(new Set(repeated_values), new Set([1,2,1]));

//Test 3
const one_value = [
    {value:1},
]
shuffleObjects(one_value);
console.log(one_value);
console.assert(one_value , [1]);

//Test 4
const emptyArray = [];
shuffleObjects(emptyArray);
console.log(emptyArray);
console.assert(emptyArray, []);