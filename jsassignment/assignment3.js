class Rectangle{
    constructor (width,height)
    {
        this.width = width;
        this.height = height;
        this.getArea = function()
        {
            document.write("Area = " + (this.width*this.height)+ "<br>");
        };
    }   
}
var R1 = new Rectangle(20,50);
var R2 = new Rectangle(90,60);
R1.getArea();
R2.getArea();
document.write("R1 width = " + R1.width +" <br> R1 height = " + R1.height + "<br>");
document.write("R2 width = " + R2.width +" <br> R2 height = " + R2.height + "<br>");

//q3//
class Person{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var P1 = new Person("Changu", "Vadapavwala");
var P2 = new Person("Mangu", "Misalwala");
document.write("P1 = " + P1.firstName  +" " + P1.lastName + "<br>");
document.write("P1 = " + P2.firstName  + " " + P2.lastName + "<br>");


class Person{}
var P1 = new Person();
P1.firstName ="Changu";
P1.middleName = "Mangu";
P1.lastName = "Vadapavwala";

document.write("P1 = " + P1.firstName  +" " + P1.middleName + " " + P1.lastName + "<br>");


//q6//
var string = '({"firstName":"Changu" , "lastName":"Vadapavwala"})';
var obj = eval(string);
document.write(obj.firstName + " " + obj.lastName);


//q7//
var string = '({"firstName":"Changu" , "lastName":"Vadapavwala"})';
var obj = eval(string);
document.write(obj.firstName + " " + obj.lastName);


//q8//
function person(fname,lname,age,skill,dateofbirth,address,married,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skill=skill;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;

}
person1=new person("nikhil", "goud",22,['c'],"24/10/1997",{city:"hyberabad",pincode:"521185"},"false","sr analyst")
person2=new person("harish", "chinna",21,['html'],"8/6/1997",{city:"ammeerpet",pincode:"500038"},"false","jr analyst")
print=function(){
    console.log(person1)
    console.log(person2)
}();


//q9//
function person(fname,lname,age,skill,dateofbirth,address,married,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skill=skill;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;

}
amitabh=new person("amitabh", "bachan",22,['c'],"24/10/1997",{city:"hyberabad",pincode:"521185"},"false","sr analyst")
abhishek=new person("abhishek",21,['html'],"8/6/1997","false","jr analyst")
var abhishek=Object.create(amitabh);
print=function(){
    console.log(amitabh);
    console.log(abhishek.lname);
    console.log(abhishek.address);
}();


//q10//
function person(fname,lname,age,skill,dateofbirth,address,married,profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skill=skill;
    this.dateofbirth=dateofbirth;
    this.address=address;
    this.married=married;
    this.profession=profession;

}
amitabh=new person("amitabh", "bachan",22,['c'],"24/10/1997",{city:"hyberabad",pincode:"521185"},"false","sr analyst")
abhishek=new person("abhishek",21,['html'],"8/6/1997","false","jr analyst")
aaradhya=new person("aaradhya",20,['python'],"10/5/2000","fresher")
var abhishek=Object.create(amitabh);
var aaradhya=Object.create(abhishek);
print=function(){
    console.log(amitabh);
    console.log(aaradhya.lname);
    console.log(aaradhya.address);
}();


//q11//
class SavingsAccount extends BankAccount{
    constructor(accountNumber, accountHolderName, accountBalance, isSalary){
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
        this.withdraw =function(amount)
        {
            this.accountBalance -= amount;
            if(accountBalance == 0)
            return -1;
        };
    }

}
class CurrentAccount extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit){
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
        this.withdraw = function(amount)
        {
            this.accountBalance -= amount;
            if(accountBalance < 0)
            return -1;
        };
    }
}

var s1 = new SavingsAccount(50201024, "Changu Vadapavwala", 25000, 1);
s1.withdraw(5000);
s1.getCurrentBalance()