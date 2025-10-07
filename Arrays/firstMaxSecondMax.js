// Problem: First and Second Maximum Value 

let arr = [4, 5, 6, 9, 3, 40, 40]
arr.sort
console.log(arr)
let max = arr[0];
let secMax = arr[1]
for (let i = 2; i < arr.length; i++) {
    if (max < arr[i]) {
        secMax = max 
        max = arr[i]
    }
    else if (secMax < arr[i] && max != arr[i]) {
        console.log(arr[i])
        secMax = arr[i]
    }
}

console.log(max, secMax)