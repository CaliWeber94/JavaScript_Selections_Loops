console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//1. Create a `for` loop that evaluates numbers from 1 to 100.
//2. Inside the loop body, write an `if/else` selection statement that checks whether a number is odd
//3. If the number is odd, then print the number to the console, otherwise do nothing and continue to the next number

for(i = 1; i <=100; i++)
{
    if(i % 2 == 1)
    console.log(i)



}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//1. Create a `for` loop that evaluates numbers from 1 to 100 like the problem above.
//2. Write a `if/else` selection statement inside the body of the the loop that checks the following:
//- If the number is divisible by 3, then console.log `'FIZZ'`
//- If the number is divisible by 5, then console.log `'BUZZ'`
//- If the number is divisible by both 3 and 5, then console.log `'FIZZBUZZ'`

for(i = 1; i <= 100; i++)
{
    if(i % 3 == 0 && i & 5 == 0){
        console.log("fizzbuzz")
    }
    else if(i % 3 == 0){
        console.log("fizz")
    }
    else if(i % 5 == 0){
        console.log("buzz")
    }
    else{
        console.log
    }
    

}

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
let i = 1

while(i<=100)
{
    if(i % 2 == 1)
    console.log(i)
    i++

}
do{
    if(i % 2 == 1)
    console.log(i)
    i++

}while(i<=100)

while(i<=100)
{
    if(i % 3 == 0 && i & 5 == 0){
        console.log("fizzbuzz")
    }
    if(i % 3 == 0){
        console.log("fizz")
    }
    if(i % 5 == 0){
        console.log("buzz")
    }
    i++

}

do{
    if(i % 3 == 0 && i & 5 == 0){
        console.log("fizzbuzz")
    }
    if(i % 3 == 0){
        console.log("fizz")
    }
    if(i % 5 == 0){
        console.log("buzz")
    }
    i++

}while(i<=100)

//Exerise 4
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false  
for(let i = 1; i<= n; i++){
if(i === value){
    console.log("found value")
    found = true
    break
}
}
if(found = false){
    console.log("didn't find value")
}