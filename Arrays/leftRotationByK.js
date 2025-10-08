// Problem: Rotaion by K element

let arr = [1, 2, 3, 4, 5];
let move = null;
let move2 = null;
let n = 2
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