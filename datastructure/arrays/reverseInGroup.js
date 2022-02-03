// Given an array, reverse every sub-array formed by consecutive k elements.
// Input: 
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
// k = 3 
// Output: 
// [3, 2, 1, 6, 5, 4, 9, 8, 7]

// Input: 
// arr = [1, 2, 3, 4, 5, 6, 7, 8] 
// k = 5 
// Output: 
// [5, 4, 3, 2, 1, 8, 7, 6]

const reverseInGroup = (arr,k) => {
    for (let i = 0; i < arr.length; i +=k) {
        let left = i;

        // To handle case when k is not
        // multiple of n

        let right = Math.min(i+k-1,arr.length-1);
        let temp;

         // Reverse the sub-array [left, right]
        while (left < right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left += 1;
            right -= 1;
        }
    }

    return arr;
}

console.log(reverseInGroup([1, 2, 3, 4, 5, 6, 7, 8, 9],3))