//print sum of the numbers//
const N = parseInt(prompt('Enter a positive integer: '));
let sum = 0, i = 1;
while (i <= N) {
    sum += i;
    i++;
}
document.write('The sum of N numbers:', sum);


//prints only multiples of 3 or 5//
var n = 0;
var num = prompt("Enter a number");
for (i = 0; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        n += i
    }
}
document.write("Sum of " + num + " numbers is" + n);
document.write("<br>")

//print the even or odd number//
evenOdd(n);

function evenOdd(a) {
    if (a % 2 == 0)
        document.write("even <br>");
    else
        document.write("odd <br>");
}

//function for finding number of heads//
function getFraction() {
    var s = prompt("Enter a side");
    var n = prompt("Enter the number of flips")
    var p
    if (s === 'H') {
        p = Math.floor(n / 2.0)
    }
    else if (s === 'T') {
        p = Math.ceil(n / 2.0)
    }
    var f = p / n
    return f
}
var numHead = getFraction()
document.write("Head Fraction is" + numHead)

//function to find next 20 leap years//
function leapYear() {
    var y = 2021
    var i = 0
    while (i < 20) {
        if ((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) {
            document.write(y + "\n");
            y++
            i++
        }
        else {
            y++
        }
    }

}
document.write(leapYear());

//function to print words in a rectangular format//
function print_rectangle() {
    var b = prompt("Enter the number of words you want to enter")
    var i, j, c;
    const a = []
    for (c = 1; c <= b; c++) {
        a.push(prompt("enter a number"))
    }
    for (i = 1; i <= b; i++) {
        for (j = 1; j <= b; j++) {
            if (i == 1 || i == b || j == 1 || j == b)
                document.write("*");
            else
                document.write("  ");
        }
        for (i = 2; i < b; i++) {
            for (j = 2; j < b; j++) {
                document.write(a[c])
            }
        }
        document.write("<br>");

    }
}
document.write(print_rectangle())

//function that concatenates two arays//
function arrayCombo() {
    const a = []
    const b = []
    var n = prompt("Enter the number of elements in first array")
    var m = prompt("Enter the number of elements in second array")
    for (i = 0; i < n; i++) {
        a.push(prompt("Enter the elements"))
    }
    for (i = 0; i < m; i++) {
        b.push(prompt("Enter the elements"))
    }

    const c = a.concat(b)
    console.log(c)
}
document.write(arrayCombo())


//function to combine two arrays alternatingly//
const a = [5, 10, 15];
const b = ['A', 'B', 'C'];

function newArray(a, b) {
    var l = a.length + b.length;
    const r = [];
    var j = 0, k = 0;
    for (let i = 0; i < l; i++) {
        if (i % 2 == 0) {
            r[i] = a[j++];
        } else {
            r[i] = b[k++];
        }
    }
    return r;
}

console.log(newArray(a, b));

//function to print 100 fibonacci numbers//
function fibonacci() {
    let n1 = 0, n2 = 1, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= 100; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
console.log(fibonacci())

//function that reverses an array in place//
function revArray() {
    const a = [100]
    for (i = 0; i < 5; i++) {
        a.push(prompt("Enter the values"))
    }
    a.reverse()
    console.log(a)
}
console.log(revArray())


//function to find the longest token//
function findLongestWord(str) {
    // Step 1. Split the string into an array of strings
    var strSplit = str.split(' ');
    // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
    // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

    // Step 2. Initiate a variable that will hold the length of the longest word
    var longestWord = 0;

    // Step 3. Create the FOR loop
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) { // If strSplit[i].length is greater than the word it is compared with...
            longestWord = strSplit[i].length; // ...then longestWord takes this new value
        }
    }
}

//function to find sum of an array//
function forSum() {
    const array = [1, 2, 3, 4];
    let sum = 0;

    for (let i = 0; i < array.length; i++) { //for loop//
        sum += array[i];
    }
    console.log(sum);
}

function forSum() {
    const array = [1, 2, 3, 4];
    let sum = 0;
    i = 0;
    while (i < array.length) {             // while loop//
        sum += array[i];
        i++;
    }
    console.log(sum);
}

function forSum() {
    const array = [1, 2, 3, 4];
    let sum = 0;
    i = 0;
    do {                                 // do_while loop//
        sum += array[i];
        i++;
    } while (i <= array.length)
    console.log(sum);
}

//14.a- Largest Number//
var array = [];
var largest = 0;
// Bubble sort Implementation using Javascript


// Creating the bblSort function
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);
}


// This is our unsorted array
var arr = [234, 43, 55, 63, 5, 6, 235, 547];


// Now pass this array to the bblSort() function
bblSort(arr);
var array = []
var largest = 0
for (i = 0; i < 100; i++) {
    array.push(prompt("enter 100 numbers"))
}
for (i = 0; i <= array.length; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}
console.log(largest);

//14.b-smallest number//
var array = [];
var smallest = 0;
for (i = 0; i < 100; i++) {
    array.push(prompt("enter 100 numbers"))
}
for (i = 0; i <= array.length; i++) {
    if (array[i] < largest) {
        var smallest = array[i];
    }
}
console.log(largest);

//14.c-odd even count//
var array = [];
for (i = 0; i < 100; i++) {
    array.push(prompt("enter 100 numbers"))
}
for (i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log("Even Numbers:" + array[i])
    }
    else {
        console.log("Odd Numbers:" + array[i])
    }
}

//14.d sum and average value//
var array = [];
var sum = 0, avg = 0;
for (i = 0; i < 100; i++) {
    array.push(prompt("enter 100 numbers"))
}
for (i = 0; i <= array.length; i++) {
    sum += array[i];
    console.log(sum);
    avg = sum / array.length;
    console.log(avg);
}

//bubble sort//



function bblSort() {

    const a = [4, 6, 2, 1, 9, 67, 454, 34, 333]
    for (i = 0; i < a.length; i++) {

        for (j = 0; j < (a.length - i - 1); j++) {

            if (a[j] > a[j + 1]) {
                var temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
            }
        }
    }
    console.log(a);
}

console.log(bblSort())

//rotate a list by k elements//
function leftRotate(a, k, n) {
    for (i = 0; i < k; i++) {
        leftRotate_One(a, n);
    }
    console.log(a)
}

function leftRotate_One(a, n) {
    var i, temp;
    temp = a[0];
    for (i = 0; i < n - 1; i++)
        a[i] = a[i + 1];
    a[n - 1] = temp;
}
var a = [3, 6, 4, 1, 4, 6, 4, 9, 66]
leftRotate(a, 5, 9)
console.log(a)

//translate to pig latin//
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
        ? str
            .replace(consonantRegex, "")
            .concat(myConsonants)
            .concat("ay")
        : str.concat("way");
}

translatePigLatin("consonant");

//simple calculator//
<html>

    <body>
        <script>
            var operator , number1 , number2;
            if(operator == '+') {           // use + (addition) operator to add two numbers  //
                result = number1 + number2;  
}
            else if (operator == '-') {         // use -  (subtraction) operator to subtract two numbers  //
                result = number1 - number2;  
}
            else if (operator == '*') {         // use * (multiplication) operator to multiply two numbers  //
                result = number1 * number2;  
}
            else {
                result = number1 / number2;         // use / (division) operator to divide two numbers  //
}
            window.alert(" Result is" + result);
        </script>
    </body>
</html>

