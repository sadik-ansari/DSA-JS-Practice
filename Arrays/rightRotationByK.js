// Problem: Right Rotation by K

let arr = [1,2,3,4,5];
let k = 3;
for(let j = 1; j <= k; j++){
    let copy = arr[arr.length-1]
    for(let i = arr.length -1; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = copy
}
console.log(arr)