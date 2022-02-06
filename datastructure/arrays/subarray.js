// Given an unsorted array A of size N that contains only non-negative integers, 
// find a continuous sub-array which adds to a given number S.
// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.


const subArray = (arr,n,s) => {
    let sum = 0;
    for(let i = 0; i < n - 1; i++){
        sum = arr[i];
        for(let j = i + 1; j < n - 1; j++){
            if(sum === s){
                return [i+1];
            }
            if(sum < s){
                sum = sum + arr[j]
            }
            if(sum > s){
                break;
            }
            if(sum === s){
                return [i+1,j+1];
                
            }
        }
    }
}

// console.log(subArray([1,2,3,4,5,6,7,8,9,10],10,15));