
const book = {
    title: "Pride and Prejudice",
    pages: 400,
    tags: ["romance", "historical"]
}

const copy = { ...book, pages: 500 };

console.log(book);
console.log(copy);

const names = ["Red Dragon", "Fellowship of the Ring", 
    "The Gatsby", "Dracula"];

const namesCopy = [ ...names ];

console.log(names);
console.log(namesCopy.sort());
console.log(names);