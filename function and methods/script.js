// var x = 10;
// console.log(x);
// a();
// b();

// function a() {
//    var x  = 40
//     console.log(x);
// }
// function b() {
//     var x  = 50
//     console.log(x);
// }
// const arr=["Ahemdabad","Mumbai","lonavala"];
// arr.forEach((element,index,arr) => {
//    console.log(element.toUpperCase(),index,arr);
    
// });
// function formatNumber(num) {
//     return num.toFixed(2);
//   }
  
//   formatNumber(2);
  
// print square of function 
//return an value for the modification if we need to do
// const number= [1,2,3,4,5,6,66,2,44]
// let newarr =  number.map((value)=>{
//     return value*2;

// })
// console.log(newarr);
// return the filter value that will be any thing 
//ex:- if we have an array and we want only even number so we filter it out
// let evennumber = number.filter((even)=>{
//     return even % 2 === 0;

// })
// let sumdata = number.reduce((res,cur)=>{
//     return res>cur?res:cur;
// })

// console.log(sumdata);
//practice question
// filter out the marks that above 90
// const marks = [89,44,90,98,94,67,87]

// const filtermarks = marks.filter((marks)=>{
//     return marks >= 90;

// })
// console.log(filtermarks);
// const usernumber = prompt('Enter an number for creat an array');
// const arr = []
// for (let index = 0; index <= usernumber; index++) {
//     arr[index-1] = index;
    
// }
// console.log(arr);
// give me factorial of given number 
const arr = [1,2,3,4,5,6,7,8,9,10];

const factorial = arr.reduce((res,cur)=>{
    return res*=cur;
})
console.log(factorial);
