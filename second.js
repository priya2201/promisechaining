const multiply=((a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a===0 & b===0){
                return reject;
                console.log("number 0 how can multiply with another number");
            }
            else{
                resolve(a*b);
                console.log("Go Ahead!")

            }
        },2000);
    });
})

multiply(5,10).then((result) =>{
    console.log(result);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve( multiply(result,15))
            
        })
       
});
}).then((result) =>{
    console.log(result);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(multiply,20)
        })
    })
})