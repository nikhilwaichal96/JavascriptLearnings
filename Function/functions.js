
function functionName(paramerters){
    //function body
}

function sayHello(){
    console.log("Hello")
}

//calling function
sayHello()


//Get no of arguments passed to method length
function bye(customerName,a,b,c,d){
    console.log("",bye.length)
}
console.log(bye.length)

//By default function returns undefined unless we are returning explicitly

function add(a,b){
    return a+b
}
console.log(add(100,200))
console.log("b"+"a"+ +"a"+"a")


//multiple return
function compare(a,b){
    if(a>b){
        return 1
    }
    else if (a<b){
        return -1
    }
    return 0;
}
console.log("After comparison"+compare(10,20))


function abc(){
    console.log("Arguments passed to functions are",arguments.length)
}
abc(10,20,40,20,40)
