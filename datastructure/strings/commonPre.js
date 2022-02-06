// Given a set of strings, find the longest common prefix. 
// Examples: 
 

// Input  : {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
// Output : "gee"

// Input  : {"apple", "ape", "april"}
// Output : "ap"

const commonPrefixUtil = (str1,str2) => {
    let result = "";
    let n1 = str1.length, n2 = str2.length;
    for(let i = 0, j = 0; i <= n1 - 1, j <= n2 - 1; i++, j++) {
        if(str1[i] != str2[j]){
            break;
        }

        result += str1[i];
    }

    return result;
}


const commonPrefix = (arr,n)=>{
    let prefix = arr[0];

    for (let i= 1; i <= n - 1; i++) {
        prefix = commonPrefixUtil(prefix,arr[i]);
    }

    return (prefix);
}

let question = ["geeksforgeeks", "geeks", "geek", "geezer"];
let len = question.length;
let answer = commonPrefix(question,len)

console.log(answer);