// Given an array of numbers, arrange them in a way that yields the largest value. 
// For example, if the given numbers are {54, 546, 548, 60}, the arrangement 6054854654 gives the largest value. 
// And if the given numbers are {1, 34, 3, 98, 9, 76, 45, 4}, 
// then the arrangement 998764543431 gives the largest value.

const getLargestNum = (arr) => {
    return arr.map(String).sort((a, b) => (b + a) - (a + b)).join('');
}

console.log(getLargestNum([54, 546, 548, 60]));