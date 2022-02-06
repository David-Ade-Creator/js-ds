// Consider an array of distinct numbers sorted in increasing order. 
// The array has been rotated (clockwise) k number of times. Given such an array, find the value of k.

// Input : arr[] = {15, 18, 2, 3, 6, 12}
// Output: 2

const rotation_count = (arr) =>{
var min = arr[0], min_index = -1;
for(i = 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
        min_index = i
    }
}

return min_index;
}

// console.log(rotation_count([15, 18, 2, 3, 6, 12]));


