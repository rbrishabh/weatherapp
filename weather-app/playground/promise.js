var addSync = (a,b) =>
{
 return new Promise((resolve, reject) =>
    {
        setTimeout(()=>{  if (typeof a === 'number' && typeof b=== 'number')
{resolve(a+b);}
else{
    reject("Incorrect input. please input numbers.")}}, 1500);

    }
);
};

addSync(2,7).then((res)=>{
    console.log(res);
return addSync(res,1)

}
).then((res)=>{
    console.log(res);

}).catch((errorMessage)=> {
    console.log(errorMessage);
});
















// somePromise = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//                    resolve("It's donee!");
//                    reject("it failed!")
//                },0);
//
// });
//
// somePromise.then((message)=>{
//     console.log("Success:", message);
// }, (errorMessage)=>{
//     console.log("Error:", errorMessage);
// }
//
// );