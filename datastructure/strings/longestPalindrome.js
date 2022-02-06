// Given a string, find the longest substring which is a palindrome. 
// For Example: 
// Input: Given string :"forgeeksskeegfor", 
// Output: "geeksskeeg".

// Input: Given string :"Geeks", 
// Output: "ee".

// brute force approach
const isPalindrome = (str) => {
    let palindrome = false;
    for (let i = 0; i < str.length - 1/2; i++){
        if(str.charAt(i) !== str.charAt(str.length - i - 1)){
            return palindrome = false;
        }
    }

    return palindrome = true;
}

const brute = (str) => {
    let tempString = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            let temp = str.substring(i,j);
            if(isPalindrome(temp)){
                if(temp.length > tempString.length){
                    tempString = temp;
                }
            }
        }
    }

    return tempString;
}

const longestPal = (str) => {
    const temp = brute(str);
    return temp;
}

console.log(longestPal("forgeeksskeegfor"))