const sortArr = (arr) =>{
    for(let i=0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

// console.log(sortArr([0, 1, 2, 0, 1, 2]));

const printKthElement = (arr,k)=>{
    let sortedArr = sortArr(arr);

    return sortedArr[k-1];
}

console.log(printKthElement([ 12, 3, 5, 7, 19 ],2));