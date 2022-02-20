// Given a string, find the longest substring which is a palindrome. 
// For Example: 
// Input: Given string :"forgeeksskeegfor", 
// Output: "geeksskeeg".

// Input: Given string :"Geeks", 
// Output: "ee".

// brute force approach
function isPalindrome(str) {
    let l = 0,
      r = str.length - 1;
    while (l < r) {
      if (str[l] !== str[r]) return false;
      l++, r--;
    }
    return true;
  }

  var longestPal = function (s) {
    for (let j = s.length - 1; j >= 0; j--) {
      let i = 0,
        k = j;
      while (k < s.length) {
        let substr = s.substring(i, k + 1);
        if (isPalindrome(substr)) return substr;
        i++, k++;
      }
    }
    return "";
  };

// var longestPalindrome = function(s) {
//     const set = new Set();
//     let count = 0;
    
//     for (const char of s) {
//         if (set.has(char)) {
// 			count += 2;
//             set.delete(char);
//         } 
// 		else {
//             set.add(char);
//         }
//     }

//     return count + (set.size > 0 ? 1 : 0);
// };

console.log(longestPal("forgeeksskeegfor"))

var longestPalindrome = function(s) {
    let start, end, result = 0;
    
    for(let i=0; i < s.length; i++) {
        let tempStart = i;
        let tempEnd = i;
        
        while(s[tempEnd] === s[tempEnd+1]) tempEnd++;
        
        while(tempStart >= 0 && tempEnd < s.length && s[tempStart-1] == s[tempEnd+1]) {
            tempStart--;
            tempEnd++
        }
        
        if(result < tempEnd - tempStart+1) {
            result = tempEnd - tempStart+1;
            start = tempStart;
            end = tempEnd;
        }
    }
    return s.substring(start, end+1);
};
