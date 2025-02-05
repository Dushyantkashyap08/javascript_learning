//ERROR HANDLING IN JS

//we have to use try -catch block

try{
    console.log("inside try block..")
    console.log(x) //as soon as error is spotted, no code below this will be executed and flow shifts to catch block


    console.log("try block ends here..")


}catch(err){
    //log error 
    //fallback mechanism
    //retry logic
    //custom error display here
    console.log("i am inside catch block")
    console.log("here is your error", err) //printing error
}
finally{
    console.log("i will run every time as i am finally  block")
}


//CUSTOM ERROR : done using throw keyword
try{
    console.log("inside try block..")
    console.log(x) //as soon as error is spotted, no code below this will be executed and flow shifts to catch block


    console.log("try block ends here..")


}catch(err){
   throw new Error("bhai phele declare krlo fir print krna")
}


let statuscode = 100
if(statuscode == 100){
    throw new Error("invalid json")
}