// You are given a list of n-1 integers and these integers are in the range of 1 to n. 
// There are no duplicates in the list. One of the integers is missing in the list. 
// Write an efficient code to find the missing integer.

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}
// Output: 5
// Explanation: The missing number from 1 to 8 is 5

const missingNum = (arr)=>{
    let total = Math.floor(arr.length * (arr.length + 1)/2);
    for(let i=0; i<arr.length - 1; i++){
        total -= arr[i];
    }
    return total;
}

console.log(missingNum([1, 2, 4, 6, 3, 7, 8]));