// Given an array, find an element before which all elements are smaller than it, 
// and after which all are greater than it. 
// Return the index of the element if there is such an element, otherwise, return -1.

// Input: arr[] = {5, 1, 4, 3, 6, 8, 10, 7, 9}; 
// Output: 4 
// Explanation: All elements on left of arr[4] are smaller than it 
// and all elements on right are greater.

// Input: arr[] = {5, 1, 4, 4}; 
// Output: -1 
// Explanation : No such index exits.

const getElement = (arr,n) => {
    let leftMax = Array(n).fill(0);
    leftMax[0] = Number.MIN_VALUE;

    for(let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], arr[i - 1]);
    }

    let rightMin = Number.MAX_VALUE;
    for(let i = n - 1; i >= 0; i--){
        if(leftMax[i] < arr[i] && rightMin > arr[i]){
            return i;
        }

        rightMin = Math.min(rightMin, arr[i]);
    }
    
    return -1;
}

const ex = [5, 1, 4, 3, 6, 8, 10, 7, 9];
const len = ex.length;

console.log(getElement(ex,len));