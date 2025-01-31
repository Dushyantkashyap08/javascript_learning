//for loop
for(let i = 2; i <= 20; i+=2){ //print 2 table
    console.log(i)
}


console.log("another way")
for(let i = 2; i <= 20; i++){ //print 2 table
    if(i % 2 == 0){
        console.log(i)
    }
}


console.log("another way")
for(let i = 2; i <= 20; i++){ //print 2 table
    if(i % 2 != 0){
        continue;
    }else{
        console.log(i)
    }
}

//while loop
console.log("while loop")
let i = 1;
while(i<=10){
    console.log(i)
    i++;
}


//do while loop
console.log("do while loop")
let j = 1;
do{
    console.log(j)
    j++;
}
while(j<=10)

 