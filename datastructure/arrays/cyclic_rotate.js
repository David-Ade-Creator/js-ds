// Given an array, cyclically rotate the array clockwise by one. 

const rotate = (arr, n) => {
    var i, temp;
    temp = arr[n - 1];
    for (i = n - 1; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;

    return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 5));