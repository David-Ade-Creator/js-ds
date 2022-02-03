// Given n non-negative integers representing an elevation map where the width of each bar is 1, 
// compute how much water it is able to trap after raining.

// Input: arr[]   = {2, 0, 2}
// Output: 2

const rainWater = (arr)=>{

    let res = 0;
    let n = arr.length;

    for(let i = 1; i < n - 1; i++)
        {
 
            // Find maximum element on its left
            let left = arr[i];
            for(let j = 0; j < i; j++)
            {
                left = Math.max(left, arr[j]);
            }
 
            // Find maximum element on its right
            let right = arr[i];
            for(let j = i + 1; j < n; j++)
            {
                right = Math.max(right, arr[j]);
            }
 
            // Update maximum water value
            res += Math.min(left, right) - arr[i];
        }

    return res;
}

console.log(rainWater([ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ]));