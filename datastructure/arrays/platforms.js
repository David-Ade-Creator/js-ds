// Given the arrival and departure times of all trains that reach a railway station, 
// the task is to find the minimum number of platforms required for the railway station so that no train waits. 
// We are given two arrays that represent the arrival and departure times of trains that stop.

const printPlatform = (arr,dep,n) => {
    let platform = 1;
    let result = 1;

    for(let i=0; i < n; i++){
        platform = 1;

        for(let j = i + 1; j < n; j++){
            if(arr[i] >= arr[j] && arr[i] <= dep[j] || arr[j] >= arr[i] && arr[j] <= dep[i]){
                platform++;
            }
        }

        result = Math.max(result, platform);
    }

    return result;
}

var arr = [ 900, 940, 950, 1100, 1500, 1800 ];
var dep = [ 910, 1200, 1120, 1130, 1900, 2000 ];
var n =6;

console.log(printPlatform(arr,dep,n))
