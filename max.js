// find maximum number

const num = [12, 15, 1, 78, 69,-10]

function FindMax(){
   const maximum = Math.max(...num);
   const minimum = Math.min(...num);
   return{maximum, minimum};
    
    
    
   
}

console.log(FindMax(num));