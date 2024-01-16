import React from 'react'

/* Callback Hell:It means that Nested Callbacks stacked(Khde) below one another forming a pyramid structure.
This is called Pyramid Doom.

This style of programming becomes difficult to understand and manage 

const Api=(Dataid,nextData)=>{
    setTimeout(()=>{
        console.log(Dataid)
        if(nextData){
            nextData();
        }
       
    },2000);
}
console.log("Fetching Data1....")
console.log(Api(452,()=>{
    console.log("Fetching Data2....")
    Api(123,()=>{
        console.log("Fetching Data3....")
        Api(233)
    });
}));*/

/* Promises:Basically,it solves the problem occured by the callback hell,It is an object in Js.
 1.syntax is:let promise=new promise((resolve,reject)=>{....})

 2.It takes two argument resolve and reject.

 3.resolved:It is used when promise has been completed and state remains fullfilled

 4.reject:It is used when promise has been rejected and state remains unfullfilled

*/


/*let promise =new Promise((resolve,reject)=>{
    console.log("promise occured");
    resolve("success")
})  */


/*const Api=(Dataid,nextData)=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
       // console.log(Dataid)
        reject("Data can't come!")
        if(nextData){
            nextData();
        }
       
    },5000);
    })
} */
// then and catch in promise 

/*const getData=(data)=>{
  return new Promise((resolve,reject)=>{
     setTimeout(() => {
      //  console.log(data)
     reject("Network Error")
     }, 5000);
  })
}

console.log("Fetching data....")
let res=getData(112).then((error)=>{
    console.log("Data has not been gotten",error)
})


console.log(res); */

// promise chaining 

/*const getdata=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data :",data)
            resolve("success")
        },3000)
    })
    
}

console.log("Fetching Data1....")
let Data=getdata(1000).then(()=>{
    console.log("Fetching Data2...")
    let Data=getdata(1121).then(()=>{
        console.log("Fetching Data3...")
        let Data=getdata(1123).then((res)=>{
            console.log(res)
        })
    })
})

console.log(Data); */


// Easiest way to write promise chaining code

/*const getdata=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data :",data)
            resolve("success")
        },3000)
    })
}

console.log("Getting data1...")
getdata(12).then(()=>{
    console.log('Getting data2...')
    return getdata(2)
}).then(()=>{
    console.log("Getting data3...")
    return getdata(3)
}).then((res)=>{
    console.log(res)
}) */

/*
   Async-Await

   Async:It is a type of function and always return a promise.
   syntax is : async function(){...}.

   Await:It pauses the execution of its sorrounding async function until the promise is settled.
   imp:Await keyword must be used in async function.
   
*/

/*const getdata=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data :",data)
            resolve("success")
        },3000)
    })
}
console.log("Getting data1...")
 async function data(){
   await getdata(123);
   console.log("Getting data2...")
   await getdata(124);
   console.log("Getting data3...")
   await getdata(125)
}

data(); */

// run code with IIFE(Immediately Invoked Function)

/*const getdata=(data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data :",data)
            resolve("success")
        },3000)
    })
}
 // IIFE function syntax is (function(){...},())
/*console.log("Getting data1...")
 (async function(){
   await getdata(123);
   console.log("Getting data2...")
   await getdata(124);
   console.log("Getting data3...")
   await getdata(125)
}()); */











/*const Advancedjavascript = () => {
    return (
        <>
            <h1>Advanced Javascript </h1>
        </>
    )
}

export default Advancedjavascript */
