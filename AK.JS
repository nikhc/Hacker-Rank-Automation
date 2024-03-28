const nik=new Promise(function(resolve,reject){

    resolve("jhbf fvibkdsbviuvbkdsbssiuvbkdbsivbidsbvib")
    
})
 
async function nikhil(){
   const m= nik;
   m.then(function(data){
    console.log(data)

   });


   
   console.log(m)

   console.log("jhbddjvs hjdsjchbcjbdjhc")


}
nikhil();
console.log("hjbjbvjhbdshjsbvjhbdsv")










// function placeorder(drink){
//     return new Promise(function(resolve,reject){
//         if(drink==="coffee"){
//             resolve('order plcad')
//         }
//         else{
//             reject("ndfkjnvkjbdfkjnvkjdfbvkjbkjbf")
//         }
//     })
// }
// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log("order is being processed")
//         resolve(`coffee jkbkjbkkjdf nfnbknfflkn  ${order}`)

//     })
// }
// const nik=placeorder("coffee");
// nik.then(function(order){
//     console.log(order);
//    return processOrder(order)

// }).then(function (alla){
//     console.log(alla);

// })
// async function nikhil(){
//   const m=  await placeorder("coffee")
//   console.log(m);
//   const n=await processOrder(m);
//   console.log(n);
// }
// nikhil()

// let content=""
// const fs=require("fs")
// let nikhil=fs.createReadStream("../youtube/make.js")
// nikhil.on('data',function(chunk){
//     content+=chunk;

 
// })
// nikhil.on('end',function(){
//     console.log(content)
// })
// streams help read and write 
// data in form chunks instead of 
// loading full data set 
 

// const m=fs.readFileSync("../youtube/make.js");
// console.log(m+" ")

