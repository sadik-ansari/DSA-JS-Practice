// Problem: INRmination 

let value = 5234;
let fiveHunderedNotes = 0;
let twoHunderedNotes = 0;
let HunderedNotes = 0;
let fiftyNotes = 0;
let twentyNotes = 0;
let tenNotes = 0;
let fiveRupees = 0;
let twoRupees = 0;
let oneRupees = 0;

if(value >= 500){
   fiveHunderedNotes = Math.floor(value/500);
   value = value%500
}
if(value >= 200){
   twoHunderedNotes = Math.floor(value/200);
   value = value%200
}
if(value >= 100){
   HunderedNotes = Math.floor(value/100);
   value = value%100
}
if(value >= 50){
   fiftyNotes = Math.floor(value/50);
   value = value%50
}
if(value >= 20){
   twentyNotes = Math.floor(value/20);
   value = value%20
}
if(value >= 10){
   tenNotes = Math.floor(value/10);
   value = value%10
}
if(value >= 5){
   fiveRupees = Math.floor(value/5);
   value = value%5
}
if(value >= 2){
   twoRupees = Math.floor(value/2);
   value = value%2
}
if(value === 1){
   oneRupees = value
}
console.log("500: "+fiveHunderedNotes);
console.log("200: "+twoHunderedNotes);
console.log("100: "+HunderedNotes);
console.log("50: "+fiftyNotes);
console.log("20: "+twentyNotes);
console.log("10: "+tenNotes);
console.log("5: "+fiveRupees);
console.log("2: "+twoRupees);
console.log("1: "+oneRupees);
