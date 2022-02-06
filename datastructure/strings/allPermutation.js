// A permutation also called an “arrangement number” or “order,” 
// is a rearrangement of the elements of an ordered list S into a one-to-one correspondence with S itself.
//  A string of length n has n! permutation. 

// Below are the permutations of string ABC. 
// ABC ACB BAC BCA CBA CAB

const swap = (str,i,j)=>{
    let temp;
    let charArray = str.split("");
    temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
}

const allPerm = (str,start,end)=>{
    if(start==end){
        console.log(str)
    }else{
        for(let i=start; i<=end; i++){
            str = swap(str,start,i);
            allPerm(str,start + 1, end);
            str = swap(str,start,i);
        }
    }
}

const char = "ABC";
const len = char.length;

allPerm('ABC',0,len - 1);