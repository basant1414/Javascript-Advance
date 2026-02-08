const fruits = ["Aron", "Baron", "Craw", "Saron", "Faron"]; //array syntax
// const arr = new Array() //using a constructor to create array

// both uses same prototype

// console.log(fruits)
//index is used to store data, starts with 0

// console.log(fruits[0])
fruits.unshift("Doran"); // add new value in array at indwx 0
// fruits.push('Oran') // add new value at last of the array
// console.log(fruits)

// console.log(fruits.pop()) //popout the last element of an array

const first = fruits.shift();
// console.log(first)
// console.log(fruits.length)

// console.log(fruits[fruits.length-1]) // to get last value of an array

//ARRAY SEARCH

// console.log(fruits.includes('Craw')) //to saw if it is there

// console.log(fruits.indexOf('Baron')) // to findout at what number index it lies

// console.log(fruits.at(-3))

const index = fruits.indexOf("Baron");
// console.log(index)

const part = fruits.slice(2, 6);
// console.log(part)

//ARRAY METHODS

//LOOP
//foreach
//  fruits.forEach(function (num){
//     console.log(num)
//  })

// const doubled = fruits.map(function (fruits) {
//   // console.log(num,index,arr)
//   return num;
// });

// Filter
// fruits.filter(function(number){
//     if(number % 2 == 0)
//         return number
// }
// )

//reduce
const numbers = [1, 20, 30,2 ,6 ,8]

// const total = numbers.reduce((acc, num) => {
//    return acc += num;
// },0)
// console.log(total)

// const val = numbers.find((num) => num > 10)
// console.log(val)

// const find = numbers.findIndex((num) => num > 30)
// console.log(find)

// Array .splice

// Syntax = Array.sploce(start_index, delete_count,...first.at.apply.item)
  // numbers.splice(1,3) // removes the mentioned index of array
   //console.log(numbers)

// numbers.splice(3,0,25) // to add 25 at index 3
// console.log(numbers)

// sorting 

 