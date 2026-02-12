// SCOPE

// TYPES
// Global Scope
//  var x = 'global variable'
//  if(true){
//     console.log(x)
//  }

//  function y(){
//     console.log(x)
//  }

// function scope

// function scope() {
//   var x = " Function scope var";
//   const y = "function scope const";

//   console.log(x);
//   console.log(y);
// }

// Block scope
// if (true){
//   var x = " Function scope var";
//   const y = "function";
//   console.log(x);
//   console.log(y);
// }
//  console.log(x)


// function x(){
//     let y =30
//     if(true){
//         let a = 'inside block'
//         var z = 20

//         console.log(y)
//     }
//     console.log(z)
// }
// x()



//lexical scope

 function parent (){
    let parentVar = 'Parents Var'

    function children (){
        console.log(parentVar)
    }
 children()

 }

 parent()


 // scope chaining

 // module scope
  