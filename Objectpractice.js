let person = {
  name: "Basant",
  address: {
    city: "Kanchanpur",
    provience: "Sudhurpaschim",
  },
};

//console.log(person.address)

// book object
// properties id, author, pages, edition

let book = {
  id: 101,
  author: "Leo",
  pages: 300,
  edition: "1st Edition",
};
// console.log(book.id);

book.id = 102;
// console.log(book.id);

const keys = Object.keys(book); // keys of the objects
// console.log(keys);

const value = Object.values(book); // values of the object
// console.log(value);

const entries = Object.entries(book); // each prorperty on different array
// console.log(entries);

let x = 10;
let y = 10;

// console.log(x,y)

const book2 = book; // reference is created so changes are made on both objects
// book2 is taking reference of book, changing book2 changes book's values
book2.author = "harry";

book2.edition = "2nd edition";

//  console.log(book2, book)

//solution of reference 

const book3 = Object.assign({},book) //new object created, assign copies the properties of booka(mentioned object) 
book3.id= 103
console.log(book3)
