// console.log("one");
// console.log("two");

// function hello() {
//     console.log("hello world");
// }
// setTimeout(hello,2000)
// console.log("three");
// console.log("four");
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumcallback){ // callback function
//     sumcallback(a,b);
// }
// calculator(34,54,sum)//callback function doesnt have to print() because of its call back not function

// function getData(id, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", id);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res)=>{
//     return getData("success")
//   })

//callback hell and nested hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4)
//         })
//     })
// })
//promise
// let promise = new Promise((resolve,reject)=>{
//     console.log("this is a promise function");
//     reject("some error occured")

// })
// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am promise");
//         reject("123");
//     });
// };
// let promise1 = getPromise();

// promise1.then((res)=>{
//     console.log("Promise fullfullied",res);
// })
// promise1.catch((err)=>{
//     console.log("Promise erree",err);
// })

// function asyncFunc() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(" data2");
//       resolve("success");
//     }, 4000);
//   });
// }
// console.log("Fetchin data 1... ");
// asyncFunc().then((res) => {
//   console.log("Fetchin data 2... ");
//   asyncFunc1().then((res) => {});
// });

//async and await
//  function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getweatherData() {
//     await api()
//     await api()
// }
// getweatherData()

function getData(id, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", id);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}

(async function getnumericData() {
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
    await getData(8);
    await getData(9);
})();
