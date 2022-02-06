// Given two strings, the task is to find if a string can be obtained by rotating another string two places. 

// Examples: 

// Input: string1 = “amazon”, string2 = “azonam” 
// Output: Yes 
// rotated anti-clockwise
// Input: string1 = “amazon”, string2 = “onamaz” 
// Output: Yes 
// rotated clockwise

function isRotated(str1, str2)
{
    if (str1.length != str2.length)
        return false;
        
    if (str1.length < 2)
    {
        return str1.localeCompare(str2);
    }
  
    let clock_rot = "";
    let anticlock_rot = "";
    let len = str2.length;
  
    // Initialize string as anti-clockwise rotation
    anticlock_rot = anticlock_rot +
                    str2.substring(len - 2, len + 1) +
                    str2.substring(0, len - 1) ;
  
    // Initialize string as clock wise rotation
    clock_rot = clock_rot +
                str2.substring(2, str2.length -  1) +
                str2.substring(0, 3);
  
    // Check if any of them is equal to string1
    return (str1.localeCompare(clock_rot) ||
            str1.localeCompare(anticlock_rot));
}


console.log(isRotated("amazon", "azonam") ?  
"Yes" : "No");