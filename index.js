/*Task*/

// Sum all the numbers of a given array ( cq. list ), 
// except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively 
// is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.


// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6



function sumArray(array) {
// let highest = Math.max(...array)
// let lowest = Math.min(...array)
// let Sum = 0
// for (let i = 0; i < array.length; i++) {
//     // const element = array[i];
//     Sum += array[i];
    
// }
// return Sum

// let newe = array.filter( e => e !== highest && e !==lowest)
// return newe
if(array == null ) return 0;
 let newArray = array.sort((a,b)=> a-b)
let tito = newARRay.slice(1,newArray.length-1)
return tito.reduce((ac,cr) => ac+cr,0 )
}
sumArray([6, 2, 1, 8, 10])
console.log(sumArray([6, 2, 1, 8, 10]))

// let arr =[6, 2, 1, 8, 10]
// Math.min(...arr)
// console.log(Math.max(...arr))