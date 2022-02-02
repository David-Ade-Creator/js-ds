// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.

// first save the first element of the array in a temporary storage
// for every loop of d the array elements are pushed forward and temporary element is saved at the end of the array

const rotate_arr = (arr, d) => {
    let n = arr.length;
    for (let i = 0; i < d; i++) {
        shift_arr(arr, n);
    }

    return arr;
}

const shift_arr = (arr, n) => {
    var i, temp
    temp = arr[0];
    for (i = 0; i < n; i++) {
        arr[i] = arr[i + 1];

    }
    arr[n - 1] = temp;

    return arr;
}

console.log(rotate_arr([1, 2, 3, 4, 5, 6, 7], 2));
// output = [3, 4, 5, 6, 7, 1, 2]