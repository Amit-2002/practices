console.log("hello Fatch API")

const url = "https://api.thecatapi.com/v1/images/0XYvRd7oD"


    // async-await
// const getData = async () => {
//     let response = await fetch(url);
//     // console.log(response.status);
//     console.log(response); // JSON format (which is not usable)

//     let usableData = await response.json(); // convert JSON data into js object (usable data)l
//     console.log(usableData[0]);
// }



    // using promise
// function getData(){
//     fetch(url).then((response) => {
//         return response.json(); 
//     }).then((data) => {
//         console.log(data);
//     });
// }


        // dog image API
const URL = 'https://dog.ceo/api/breeds/image/random'

// const dogData = async () => {
//     fetch(URL).then((response) => {
//         console.log(response);
//         console.log(response.status)
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//         console.log(data.status);
//         console.log(data.message)
//     })
//     .catch((err) => {
//         console.log("Error : ", err);
//     })


    // let response = await fetch(URL);
    // console.log(response) // json format
    
    // let data = await response.json();
    // console.log(data);
// }



            // sort of fatching data using above API
// fetch(URL).then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))






                // API-3 handling using promise chain
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data[0].body))


            // handling using async-await
// (async () => {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts') // fetching resource or response
//         console.log(response); // logging response here
//         console.log(response.status); // logging header success value.
//         data = await response.json(); // converting JSON formate into JS object.
//         console.log(data); // logging data
//     }
//     catch(err){
//         console.log('Error :', err)
//     }
// })();




// async function getData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts') // fetching resource or response
//         console.log(response); // logging response here
//         console.log(response.status); // logging header success value.
//         data = await response.json(); // converting JSON formate into JS object.
//         console.log(data); // logging data
//     }
//     catch(err){
//         console.log('Error :', err)
//     }
// };


// getData()



            // API-4 "https://jsonplaceholder.typicode.com/users"
// async function getAllusers(){
//    try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     const data = await response.json();
//     console.log(data)
//    }
//    catch(err){
//     console.log('E: ', err);
//    }
// }

// getAllusers();







                // promises creating using "Promise class"
// const myPromise = new Promise((resolve, reject) => {
    
//         let task = false;

//         if (task){
//             resolve("task successful.!!");
//         }
//         else{
//             reject("task rejected.!!");
//         }
// })

// console.log(myPromise);

// // promise handlling
// myPromise
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err)
// })

// console.log(myPromise);
// console.log(myPromise);
// console.log(myPromise);
// console.log(myPromise);
// console.log(myPromise);




// fetch('https://jsonplaceholder.typicode.com/posts')
// //   .then(d => console.log(d.status))
//   .then(response => response.json()) // Convert to JSON
//   .then(data => console.log(data))   // Log the data
//   .catch(error => console.error('Error:', error)); // Handle errors





// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       title: 'My New Post',
//       body: 'This is the content of the new post.',
//       userId: 1
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log('Post Created:', data))
//   .catch(error => console.error('Error:', error));




// async function fetchPosts() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//         title: 'My New Post',
//         body: 'This is the content of the new post.',
//         userId: 1
//         })
//       });
//     //   console.log(response.status);
      
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   }
  
// fetchPosts();
  





  

