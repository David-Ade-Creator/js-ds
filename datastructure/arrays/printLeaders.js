// Write a program to print all the LEADERS in the array. 
// An element is leader if it is greater than all the elements to its right side. 
// And the rightmost element is always a leader. For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2. 
// Let the input array be arr[] and size of the array be size.

const printLeaders = (arr) => {
    let temp = [];

    for (let i = 0; i < arr.length; i++){
        let j;
        for (j = i + 1; j < arr.length; j++){
            if(arr[i] <= arr[j]){
                break
            }
        }
        if(j === arr.length) temp.push(arr[i]);
    }

    return temp;
}

console.log(printLeaders([16, 17, 4, 3, 5, 2]));