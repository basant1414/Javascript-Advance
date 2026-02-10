//Syntax

// Named Function
// function functionName(){
//      //body
//       console.log("Good mrng")
//  }  // funstion declare

//  functionName() // function call

// function expression (anonymous)
// const greet = function(){
//     console.log(' Good Mrng')
// }

// greet()

//PARAMETER & ARGUMENTS

// const greet = function (name = 'Guest') {    // placeholder is parameter
//   console.log(" Good Mrng", name);
// };

// greet('Basant');  // actually passed data in a funtion call is argument, value is argument
// greet();

// RETURN TYPE

// const add = (a,b) => {
//         const sum =  a + b;
//         return sum
// }

// const sum = add(20,4)
// console.log(sum)

// const add = (a,b) => {

//             return a + b
//     }

//     const sum = add(20,4)
//     console.log(sum)

//HIGHER ORDER FUNCTION

// const greet = (name, func) => {
//     console.log('Good Morning' , name)
//     func(name)
// }
// const goodBye = () =>{
//     console.log('Good bye!!!!!')
// }

// const sayHello = (name) => {
//     console.log('Hello', name)
// }
//  greet ('Basant', goodBye)
//  greet ('Basant', sayHello)

// const add = function (a){
//     return  function(b) {
//         return a * b
//     }
// }

// const add5 = add(5)
// console.log(add5(10))

// const age = 86;
// if (age < 18) {
//   console.log("Minor");
// } else if (age >= 18 && age < 55) {
//   console.log("Adult");
// } else {
//   console.log("Major");
// }

// const day = 2;

// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");

//     break;
//   default:
//     console.log("Enter day between 1-7");
// }

// fuction day
// switch (day)
// day 1 7 sunday , sat -> weekend
//2 -> workday start
// 6 -> weekend is near

// const checkweekdays = (day) => {
//   switch (day) {
//     case 1:
//       console.log("Sunday");
//       break;
//     case 2:
//       console.log("Monday, Working day started");
//       break;
//     case 3:
//     case 4: 
//     case 5:
//       console.log("Working Day");

//       break;
//     case 6:
//       console.log("Friday, Weekend is near");

//       break;
//     case 7:
//       console.log("Weekend day");

//       break;
//     default:
//       console.log("Enter day between 1-7");
//   }
// };

// checkweekdays(2);


// LOOPS (used to perform repetetive task )
// For loop
// while loop
//do while loop

//for loop

// for (let i = 0; i<=10; i++){
//     console.log(i)
// }

// for (let i = 10; i>=0; i--){
//     console.log(i)
// }

//while

// let count = 20

// while(count > 0){
//     if(count % 2==0){
//    console.log(count)

//     }
//     count--
// }


// do {
//     console.log(count)
//     count++
// } while (count <== 40)


const person = {
    name:'john',
    age:20,
    isStudent : false
}

for (let key in person){
    console.log('key', key)
}

