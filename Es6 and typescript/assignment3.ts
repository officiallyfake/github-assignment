
//q1
const p1 = new Promise((resolve, reject) => {
    if (1 > 0)
        resolve(5)
    else
        reject(4)
})
const p2 = new Promise((resolve, reject) => {
    if (1 > 0)
        resolve(5)
    else
        reject(4)
});

Promise.all([p1, p2])
    .then((result) => {
        console.log(result[0] + result[1]);
    });

//q2//
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}
class SavingsAccount extends Account {
    constructor(id, name, balance, interest) {
        super(id, name, balance);
        this.interest = interest;
    }
    totalBalance = () => {
        this.balance += this.interest;
        console.log(this.balance);
    };
}
class CurrentAccount extends Account {
    constructor(id, name, balance, cashCredit) {
        super(id, name, balance);
        this.cashCredit = cashCredit;
    }
    totalBalance = () => {
        this.balance += this.cashCredit;
        console.log(this.balance);
    };
}

let S1 = new SavingsAccount(1001, 'Sushmita', 40000, 4000);
let S2 = new CurrentAccount(10003, 'Riya', 30000, 3800);
S1.totalBalance();
S2.totalBalance();

//q3//
interface Printables {
    name?:string;
    id?:number;
    Area?: number;
}

var circle:Printables ={
    Area: 70 
}
var employe:Printables ={
    name: "Changu"
    
}

function printAll(circle, employe){
    circle.print()
    employe.print()
}

printAll(circle,employe)


