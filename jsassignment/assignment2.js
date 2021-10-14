function composedValue()
{
    var n = prompt("Enter the value:");
     var value = square(double(n));
     document.write(value);
}



function composedValue()
{
    var n= prompt("enter a number")
     var value = newFunc(n);
     document.write(value);
}

function square(n)
{
    return n*n;
}

function double(n)
{
   return n*2;
}

function newFunc(n){
   n= square(double(n))
   return n;
}
console.log(composedValue())


function isEven(n){
    if( n%2==0)
        return true;
    else 
        return false;
}
var a = [1,3,5,4,2];
find(a,isEven);
function find(a,isEven)
{   
    for(i=0;i<a.length; i++)
    {
        if(isEven(a[i]) == true)
        {
            document.write(a[i]);
            break;
        }
    }
    
}

// basic q2//
var a=[1,2,3,4,5];
nomap(a,square);
function nomap(a,f1)
{
    var b =[];
    for(i=0;i<a.length;i++)
    b.push(f1(a[i]));
    document.write(b);
}

//basic q3//

find(a,0,test);
function find(a,i,isEven)
{
    if(isEven(a[i])== true)
    {
        document.write(a[i]);
        return;
    }
    else{
        i++;
        find(a,i,isEven);
    }
}
function isEven(n){
    if( n%2==0)
        return true;
    else 
        return false;
}
// advanced q2//
i=0;
f1 =square;
console.log(map());
function map()
{
    if(i == a.length)
    return;
    else{ 
           document.write(f1(a[i]));
    i++;
    map();
    }
}
