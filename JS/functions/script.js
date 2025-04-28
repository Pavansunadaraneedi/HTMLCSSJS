function display()
{
    console.log("Hello world")
}
display()
// sum of 2 numbers 
function sum ()
{
    let a = 10, b = 20;
    console.log(a + b);
}
sum()
// sum of 2 numbers with parameters
function sum1 (a, b)
{
    console.log(a + b);
}
sum1(5, 6)
sum1("Pavan", "sandy")

//task - create a function that accepts a string as parameter and print its in console
 function printlen(a)
 {
    console.log(a.length);
 }
 printlen("PAVAN")

 // Sum with default value 
 function sum2 (a, b=20)
 {
    console.log(a+b)
 }
 sum2(10,50)
 sum2(10);

 //sum with rest 
 function sum3(...b)
 {
    let sum = 0;
    for(let i of b)
    {
        sum = sum + 1
    }
    console.log(sum);
 }
 sum3(10,5,4,6,3)

 // Take an array and pass the multiple values to function and print their product 
 function sum3(...b)
 {
    let sum = 0;
    for(let i of b)
    {
        sum = sum * 1
    }
    console.log(sum)
 }
 sum3(10,5,4,6,3)

 function sum4(a,...b)
 {
    console.log(a,b)
    let c = [a,...b];
    console.log(c.length)
 }
 sum4(5,4,3,2)

 let [a,...c]=[6,7,8,9,10]
 let b=[5,...[4,3],...[5,4],3]
 console.log(b)

 // add to arrays
 let arr=[5,4,6], arr2 = [1,2,3];
 let arr3 = [...arr,...arr2]
 console.log(arr3)