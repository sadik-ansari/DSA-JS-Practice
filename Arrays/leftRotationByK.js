// Problem: Left Rotaion by K element

let arr = [1, 2, 3, 4, 5];
let move = null;
let move2 = null;
let n = 3
for (let i = 1; i <= n; i++) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i > 0 && move === null) {
            move = arr[i - 1]
            arr[i - 1] = arr[i]
        }
        else if (i > 0 && move != null) {
            move2 = arr[i - 1]
            arr[i - 1] = move
            move = move2
        }
        else if (i === 0) {
            arr[arr.length - 1] = move
        }
    }
}
console.log(arr)

// Output using deffrent method

let arr1 = [1, 2, 3, 4, 5];
let newArr = new Array(arr1.length)
let k = 3 % arr1.length
for (let i = arr1.length - 1; i >= 0; i--) {
    let value = arr1[i]
    let j = i
    j = j - k;
    if(j >= 0){
        newArr[j] = value
    }
    else if(j < 0){
        j = newArr.length - (-1 * j)
        newArr[j] = value
    }
}
console.log(newArr)