// The atoi() function in C takes a string (which represents an integer) as an argument and returns its value of type int. 
// So basically the function is used to convert a string argument to an integer.

function myAtoi(str)
{
    // Initialize result
        let res = 0;
 
        // Iterate through all characters
        // of input string and update result
        // take ASCII character of corresponding digit and
        // subtract the code from '0' to get numerical
        // value and multiply res by 10 to shuffle
        // digits left to update running total
        for (let i = 0; i < str.length; ++i)
            res = res * 10 + str[i].charCodeAt(0) - '0'.charCodeAt(0);
 
        // return result.
        return res;
}

// Driver code
let str = "89789";
       
         
// Function call
let val = myAtoi(str);