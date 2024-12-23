            // synchronous programming behaviour
// console.log('one');
// console.log('two');
// console.log('three')



            // Asynchronous programming behaviour
// function greet(){
//     console.log("Hello");
// }

// way-1 of writting setTimeout function
// setTimeout(greet, 2000); // cause delay

// way-2 of writting setTimeout function
// setTimeout(function greet(){
//     console.log("Hello")
// }, 2000)

// way-3 of writting setTimeout function
// setTimeout(()=>{
//     console.log("Hello!")
// },2000)


// console.log("one");
// console.log('two');
// // this will take time to execute
// setTimeout(() => {
//     console.log("Hello.!")
// }, 3000)

// console.log('three');
// console.log('four')



                    // callback function (function as an argument to another function)
// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b,sumCallback){
//     sumCallback(a,b)
// }

// cal(3,4,sum)


// function sum(a,b,callback){
//     callback(a,b);
// }

// sum(1,3, (a,b) => {
//     console.log(a+b);
// })



// function calculator(a,b, sumCallback){
//     sumCallback(a,b)
// }

// let sum = (a,b) =>{
//     console.log(a+b)
// }

// calculator(2,3, sum)





                // callback hell
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data", dataId)
//     }, 2000)
    
// }
// getData(1);
// getData(2);
// getData(3);




                // this code is known as callback hell
// function getData(dataId,nextData){
//     setTimeout(()=>{
//         console.log('Data',dataId);
//         if (nextData){
//             nextData()
//         }
//     },2000)
// }

// getData(1,()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4, ()=>{
//                 getData(5)
//             })
//         })
//     })
// })









                                // promises
// let promise = new Promise((resolve, reject) =>{
//     console.log("I am promise");
//     // resolve(200)
//     reject('error')
// })
// console.log(promise)



// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log('data', dataId)
//             // resolve('success')
//             reject('error')
//         }, 5000)
//     })
// }
// let promise = getData(122);
// console.log(promise)


// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         // console.log("I am a promise");
//         // resolve('success 200')
//         reject('network error')
//     });
// };



//          // handlling promise for resolve or fulfilled state
// let promise = getPromise();

// promise.then((res) => {
//     console.log('promise fulfilled')
//     console.log(res);
// })
            // rejected promise
// promise.catch((err) => {
//     console.log("promise rejected")
//     console.log(err)
// })




            // fetcing data from API function
// function asyncFunc1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data1")
//             resolve('success')
//         },3000)
//     })
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data2")
//             resolve('success')
//         },3000)
//     })
// }
        // returning data at same time
// console.log('Fatching Data1...')
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res)
// })

// console.log('Fatching Data2...')
// let p2 = asyncFunc2()
// p2.then((err) => {
//     console.log(err)
// })


            // returning data after one using promise chaining
// console.log("Fatching Data1...")
// asyncFunc1().then((res) => {
//     console.log(res)

//     console.log("Fatching Data2...")
//     asyncFunc2().then((res) => {
//         console.log(res)
//     })
// })




// example: of promise chaining
// function getData(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", data);
//             resolve('success')
//         },3000)
//     })
// }

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res)
    
//     let p2 = getData(2);
//     p2.then((res) => {
//         console.log(res)
//     })
// })

// getData(1).then((res) => {
//     return getData(2)
// }).then((res) => {
//     return getData(3)
// })







                    // Async-await 

// async function greet(){
//     console.log("hello")
// }
// greet()


// function api(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("weather Data")
//             resolve(200);
//         },2000)
//     });
// }

// async function getWeatherData(){
//     await api() // 1st call
//     await api() // 2nd call
// }

// getWeatherData()




function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data', dataId);
            resolve('success');
        }, 2000);
    });
};

// async function getallData(){
//     console.log("getting data 1...")
//     await getData(1);
//     console.log("getting data 2...")
//     await getData(2);
//     console.log("getting data 3...")
//     await getData(3);
// }

// getallData() // this function calling is useless. to resolve this we can use iife function


// IIFE
(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
})()



