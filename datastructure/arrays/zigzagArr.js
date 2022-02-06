// Given an array of DISTINCT elements, rearrange the elements of array in zig-zag fashion in O(n) time. 
// The converted array should be in form a < b > c < d > e < f. 

// Input: arr[] = {4, 3, 7, 8, 6, 2, 1} 
// Output: arr[] = {3, 7, 4, 8, 2, 6, 1}

// Input: arr[] = {1, 4, 3, 2} 
// Output: arr[] = {1, 4, 2, 3}

const zigzagArray = (arr) => {
    // Flag true indicates relation "<" 
    // is expected, else ">" is expected. 
    // The first expected relation is "<"
    let flag = true;

    for (let i = 0; i < arr.length - 2; i++){
        // "<" relation expected 
        if(flag){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        // ">" relation expected 
        else{
            if(arr[i] < arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }

        flag = !flag;
    }

    return arr;
}

console.log(zigzagArray([4, 3, 7, 8, 6, 2, 1]))