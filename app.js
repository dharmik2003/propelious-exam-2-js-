// code-1 multiply

for(var i=0;i<3;i++){
    setTimeout(()=>{console.log(i)},1000)
}

function multiply(a){
    return function(b){
        return a*b;
    }
}
var ans=multiply(3)(6);
console.log(ans);
// output:18


//code-2 object convert in array 

var input={id:"1",name:"Siddharth",age:"23",role:"Full Stack Developer"}
var keys=Object.entries(input)
console.log(keys)
//output: [Array(2), Array(2), Array(2), Array(2)]



//code-3 Swap max and min value

var arr=[43,56,23,1,66,106,89,68,2]

//Find Max and Min number in array
var indmin=Math.min(...arr)
var indmax=Math.max(...arr)
//Find Index of min and max number
var a_min=arr.indexOf(indmax)
var b_max=arr.indexOf(indmin)
// Swap value 
arr[a_min]=indmin
arr[b_max]=indmax
//Print Output
console.log(arr);
//Output:[43, 56, 23, 106, 66,1, 89, 68, 43]



//code-4

//code-5

let empdetails=[
    {
        firstname:"Dharmik",
        lastname:"Kachhadiya",
        mobile:9913287874,
        email:"dharmik@123",
        salary:100000,
        address:{
            line1:1102,
            line2:"Apple",
            area:"mota varachha",
            pincode:394110,
            city:"Surat",
            state:"Gujarat",
        }
    },
    {
        firstname:"Meet",
        lastname:"Thummar",
        mobile:9978812121,
        email:"thummar@123",
        salary:460000,
        address:{
            line1:1502,
            line2:"silvasa",
            area:"yogichok",
            pincode:394111,
            city:"Surat",
            state:"Gujarat",
        }
    },
    {
        firstname:"nikunj",
        lastname:"Sonigara",
        mobile:9988776655,
        email:"nikunj@123",
        salary:404000,
        address:{
            line1:401,
            line2:"ramsita",
            area:"yogichok",
            pincode:394112,
            city:"Surat",
            state:"Gujarat",
        }
    }   
]

// create Id
function getid(){
    return getid.length+1
}

//add data
function adddata(newdata){
    newdata.id=getid()
    empdetails.push(newdata)
}

//read data
function readdata(){
    return empdetails;
}

//updatedata
function updatedata(userId,value){
    let index = empdetails.find((x)=> x.id == userId);
    if(index){
        empdetails=Object.assign(value)
    }
}

//delete
function deletedata(userId){
    empdetails=empdetails.filter((x)=>{
        return x.id != userId;
    })
}


//read data
console.log(readdata());

//add data
adddata({
    firstname:"rushik",
    lastname:"soni",
    mobile:1122334455,
    email:"rushik@123",
    salary:150501,
    address:{
        line1:101,
        line2:"meera",
        area:"amreli",
        pincode:394113,
        city:"Surat",
        state:"Gujarat",
    }
}  )
console.log(readdata());

updatedata(4,{name:"Propelious"});
console.log(readdata())

deletedata(4);
console.log(readdata())


//code-6 odd & even number

function oddeven(num){
    
    if (num % 2 == 0) {
        console.log(num + " is Even Number")
        } 
    else {
        console.log(num + " is Odd Number")
    }
}
var num=20;
var a=oddeven(num);
console.log(a);

//code-7 

//write code string middel character return if length even then return middel two character

function middelnumber(str){
    var len = str.length;
    var mid = Math.floor(len/2);
    if(len%2==0)
    return str[mid-1]+str[mid];
    else
    return str[mid];
}
console.log(middelnumber("HelloWorld")) //'oW'
console.log(middelnumber("HellWorld")) //'W'

//code-8 FizzBuzz

function fizzbuzz(){
    for(i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
            console.log("FizzBuzz");
        } 
        else if (i%3==0){
            console.log("Fizz");
        } else if (i%5==0) {
            console.log("Buzz");
        }
    }
}
fizzbuzz();

//code-9
//write a function that convert all the keys in an object from snake case to camel case.
function casepro(){
    let obj={
        first_name:"Dharmik",
        last_name:"kachhadiya",
    };
    
}
console.log(casepro())




//code-10

//write code you use a closure to create private counter

function outerfun(){
    let count = 0 ;
    return function innerFun(){
        count++;
        return count;
    }
}
var cnt=outerfun();
console.log(cnt()); //output: 1
console.log(cnt()); //output: 2
