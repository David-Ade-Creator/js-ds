// Given a sorted array of positive integers, rearrange the array alternately 
// i.e first element should be maximum value, second minimum value, third second max, 
// fourth second min and so on.

// Input: arr[] = {1, 2, 3, 4, 5, 6, 7} 
// Output: arr[] = {7, 1, 6, 2, 5, 3, 4}

const arrAlternate= (arr) =>{
    let temp = new Array(arr.length);
    let small = 0, large = arr.length - 1;
    let flag = true;
    for (let i = 0; i < arr.length; i++){
        if(flag){
            temp[i] = arr[large--];
        }else{
            temp[i] = arr[small++];
        }

        flag = !flag;
    }
    for(let i = 0; i < temp.length; i++){
        arr[i] = temp[i]
    }

    return arr;
}

console.log(arrAlternate([1, 2, 3, 4, 5, 6, 7]));