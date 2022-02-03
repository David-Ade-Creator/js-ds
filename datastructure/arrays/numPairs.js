// Given an array of N elements, the task is to find all the unique pairs 
// that can be formed using the elements of a given array. 
// Examples: 

// Input: arr[] = {1, 1, 2} 
// Output: 4 
// (1, 1), (1, 2), (2, 1), (2, 2) are the only possible pairs.

const numberPairs = (arr,length) => {
const s = new Set();
for (let i = 0; i < length; i++) {
    for (let j = 0; j< length; j++) {
        s.add((arr[i],arr[j]));
    }

    return s;
}
};

let temp = [ 1, 2, 2, 4, 2, 5, 3, 5 ];

console.log(numberPairs(temp, temp.length));