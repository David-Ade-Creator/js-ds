//1. given an array of integers, return indices of the two numbers such that they add up to a specific target

// iterate through the array and subtract target number from the array and then save it's  index in an obj, check next iteration to see if this
// ekement exist in the array then return the index that was saved in the object and also the present index
const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return console.log([storage[num], index]);
    storage[target - num] = index;
  }
};

twoSum([2, 3, 5, 7, 8], 8);

//2. given an array nums and a value val, remove all instances of the value in-place and return the new length
// Do not allocate extra space for another array, do this with 0(1) extra memory

const removeElement = (nums, val) => {
  if (!nums) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums.length);
};
// removeElement([3,1,2,3],3);

// Or

const removeElement2 = (nums, val) => {
  if (!nums) return 0;
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      pointer++;
    }
  }
  console.log(pointer);
};
//  removeElement2([3,1,1,1,2,9,7,3],1);

// reverse integer
const reverse = (x) => {
  if (x < 0) console.log(-1 * reverse(-x));
  const reversedInteger = (x + "").split("").reverse().join("");
  return reversedInteger > 2 ** 31 - 1
    ? console.log(0)
    : console.log(reversedInteger);
};
// reverse(7321);

const reverse2 = (str) => {
    let reverse = "";
    for(x of str){
      reverse = x + reverse;
    }
    console.log({ is_palindrome : str === reverse});
    console.log(reverse);
};

console.log(reverse2("hannah yeah"));

//2. check if integer is a palindrom without convertin to a string
const isIntegerPalindrome = (x) => {
  if (x < 0) return false;
  let reverse = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10))
    reverse = reverse * 10 + (i % 10);
  console.log({ is_palindrome: reverse === x });
};

// isIntegerPalindrome(723);

const unique_characters = (str) => {
  let characters = {};
  for (let i = 0; i < str.length; i++) {
    if (characters[str[i]]) {
      return false;
    } else {
      characters[str[i]] = 1;
    }
  }
  return true;
};

/* check is two string are permutaton of each other */

const permutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let n1 = str1.split("");
  let n2 = str2.split("");
  /* sort both string */
  n1.sort();
  n2.sort();

  /* compare sorted string */
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) return false;
  }

  return true;
};

/* console.log(permutation("david","avadd")); */

const urlify = (str, strLng) => {
  newStr = "";
  for (let i = 0; i < strLng; i++) {
    if (str[i] === " ") newStr += "%20";
    else newStr += str[i];
  }
  return newStr;
};

/* console.log(urlify("My name is david", 16)); */

/* palindrom permutation */
const char_obj = (str) => {
  let obj = {};
  for (i of str) {
    obj[i] ? obj[i]++ : (obj[i] = 1);
  }
  return obj;
};

const palindrome_permutation = (str) => {
  str = str.replace(/ +/g, "");
  let obj = char_obj(str);

  if (str.length % 2 === 1) {
    let counter = 0;
    for (let i of str) {
      if (obj[i] % 2 === 1 || obj[i] === 1) {
        counter++;
        if (counter > 1) {
          return false;
        }
      }
    }
  } else {
    for (let i of str) {
      if (obj[i] % 2 !== 0) {
        return false;
      }
    }
  }
  return true;
};

/* console.log(palindrome_permutation("tact coa")); */

//    check if an array is a palindrome

function palindrome(arr, n) {
  // Initialise flag to zero.
  let flag = 0;

  // Loop till array size n/2.
  for (let i = 0; i <= n / 2 && n != 0; i++) {
    // Check if first and last element are different
    // Then set flag to 1.
    if (arr[i] != arr[n - i - 1]) {
      flag = 1;
      break;
    }
  }

  // If flag is set then print Not Palindrome
  // else print Palindrome.
  if (flag == 1) console.log("Not Palindrome");
  else console.log("Palindrome");
}

let arr = [1, 2, 3, 2, 1];
let n = arr.length;

palindrome(arr, n);
