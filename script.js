// function alwaysHungry(arr) {
//     var count =0;
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i] !== "food"){
//             count ++;
//             if(count === arr.length){
//                 return console.log("I'm hungry");
//             }
//         }
//         if(arr[i] === "food"){
//             console.log("yummy")
//         }
//         else{
//             continue;
//         }
//     }
// }

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"

// =============================================================
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i]>cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]
// =============================================================
// function betterThanAverage(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     var count = 0
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i]>sum/arr.length){
//             count++
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4

// ===========================================================
// function reverse(arr) {
//     var temp;
//     for(var i = 0; i<arr.length/2; i++)
//     {
//         temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = temp;
//     }
//     return arr;

// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]
// =============================================================
// function flattenArr(arr){
//     var newArr=[];
//     for(var i = 0; i<arr.length; i++){ 
//         for(var j = 0; j<arr[i].length; j++){
//             newArr.push(arr[i][j]);
//         }
//     }
//     return newArr;
// }

// var twoDArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(flattenArr(twoDArr));
// ======================================
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i = 0; i<n; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]