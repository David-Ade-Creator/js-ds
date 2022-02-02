// Equilibrium index of an array is an index such that the sum of elements at 
// lower indexes is equal to the sum of elements at higher indexes. 
// For example, in an array A: 


// Input: A[] = {-7, 1, 5, 2, -4, 3, 0} 
// Output: 3 
// 3 is an equilibrium index, because: 
// A[0] + A[1] + A[2] = A[4] + A[5] + A[6]

// Input: A[] = {1, 2, 3} 
// Output: -1 

const equilibrumIndex = (arr) =>{
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++){

        // calculate the leftSum
        leftSum  = 0;
        for (let j = 0; j < i; j++){
            leftSum += arr[j];
        }

        // calculate the rightSum
        rightSum = 0;
        for (let j = i + 1; j < arr.length; j++){
            rightSum += arr[j];
        }

        if(leftSum == rightSum){
            return i
        }
    }

    return -1;
}

// console.log(equilibrumIndex([-7,1,5,2,-4,3,0]))

const equilibrumIndex2 = (arr) => {
    let sum = 0;
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];

        if(leftSum === sum){
            return i
        }

        leftSum += arr[i]
    }

    return -1;
}

console.log(equilibrumIndex2([-7,1,5,2,-4,3,0]))