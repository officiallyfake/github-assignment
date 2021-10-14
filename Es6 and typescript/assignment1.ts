const a= 5;


//q3//
let Order = {
    id: 100,
    title:'Pav Bhaji',
    price: 250,
    printOrder()
    {
        console.log(this.id);
    },
    getPrice()
    {
        console.log(this.price);
    }
}
const copyobj = Object.assign({},Order);
console.log(copyobj);


//q4//
let array= ['hello', 'this', 'is','arraystring','to','object'];
let newArr = array.map(item => {
   return {
     'name': item,
     'length':item.length
   }
 })

 console.log(newArr);


 //q5.a//
 let add=function(value=10)
{
    return value;
}
console.log('Default value of parameter is '+ (add()));


 //q5.b//
 let userFriends= function(username, ...userFrnd){
     this.username=username;
     this.userFrnd=userFrnd;
     console.log(username, userFrnd);
 }
 var b=["ked","sush","bhar"]
 userFriends("kedkrish",b);

 //qb.c//
 let printCapital= function(...name){
   
    for(let i in name){
        console.log(name[i].toUpperCase())
    }
}
var h=["ked","sush","bhar","abc","efg"];
printCapital(...h);


//q6//
let myname = "Sushmita";
 let laptopmodel = 'Ideapad L340';
 let deskno = 10001;

 console.log(`Dear Sysnet, I am facing an issue with my pc I kindly request you to look into it.
 My details are as follows: Name : ${name}, LaptopModel: ${laptopmodel}, Deskno: ${deskno} `);


//7.a//
let employee =['zero','one','two','three'];

let [zero,first,second,third] = employee;
console.log(third);


// question 7.b

let org ={name:'thor',address:{city:'asgard',pincode:12345}};

let {name,address.city,address.pincode}= org;

 console.log(address.pincode);

 //q8//
 class Account{
    constructor(id,name,balance)
    {
        this.id = id;
        this.name = name;
        this.balance = balance; 
    }
}
class SavingsAccount extends Account{
    constructor(id,name,balance,interest)
    {
        super(id,name,balance);
        this.interest = interest;
    }
    totalBalance = () => { this.balance += this.interest;
        console.log(this.balance);};
}
class CurrentAccount extends Account{
    constructor(id,name,balance,cashCredit)
    {
        super(id,name,balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => { this.balance += this.cashCredit;
        console.log(this.balance);};
}

let S1 = new SavingsAccount(1001,'Sushmita',40000,4000);
let S2 = new CurrentAccount(10003, 'Riya', 30000,3800);
S1.totalBalance();
S2.totalBalance();
 