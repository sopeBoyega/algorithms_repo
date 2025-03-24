  import  Queue  from "./queue.js";

  
  const findSmallest = (arr) => {
    let smallest = arr[0];
    let smallest_index = 0;
    for (let index = 1; index < arr.length; index++) {
        if (arr[index] < smallest) {
            smallest = arr[index];
            smallest_index = index;
        }
    }
    return smallest_index;
};

const selectionSort = (arr) => {
    let newArr = [];
    let lengthofArray = arr.length;
    for (let i = 0; i < lengthofArray; i++) {
        let smallestIndex = findSmallest(arr);
        newArr.push(arr.splice(smallestIndex, 1)[0]); // Remove and push the smallest element
    }
    return newArr;
};

// const output = selectionSort([78, 16, 32, 91, 10]);
// console.log(output);

// const countdown = (i) => {
// console.log(i)
// if (i <=0) return
// else {
//     countdown(i - 1)
// }

// }

// // countdown(10)

const sum = (arr) => {
let total = 0;
arr.forEach(element => {
    total += element
});
return total;
}

// console.log(sum([2,4,6]));

// A recursive function is a function that calls itself 
// For a recursive function this is a base case then a recursive case 
// Below is an example of recursive function to count the number of items in list 
const countItems = (arr) => {
    if (arr.length === 0) {
        return 0; // Base case: empty array has 0 items
    }
    return 1 + countItems(arr.slice(1)); // Recursive case
};

// Hash Functions 
// A Hash Function is a function where you put in a string and get back a number
// Put a Hash function and an array table together you get a hash table
//  Hash tables are probably the most useful complex data structure 
// you’ll learn. They’re also known as hash maps, maps, dictionaries, and 
// associative arrays. And hash tables are fast! Remember our discussion 
// of arrays and linked lists back in chapter 2? You can get an item from an 
// array instantly. And hash tables use an array to store the data, so they’re 
// equally fast

const book = new Map()
book.set("apple", 0.67);
book.set("milk", 1.49);
book.set("avocado", 1.49);


// console.log(book.get("apple"))

const phone_book = new Map()


// How to use the breadth-first-search-algorithm (Find Fewest Segments)
// 1. Model the problem as a graph 
// 2. Solve the problem using breadth-first-search

// Data structures learned so far from the book arrays,linked lists,stack,hash tables,queues

// Queues are FIFO(First in ,First Out), Stacks are LIFO(Last in , First Out)





const person_is_a_mango_seller = (name) => {
    return name[name.length - 1] === 'm'
}

const graph = new Map()
graph.set("you",["alice","bob","claire"]);
graph.set("bob",["anuj","peggy"]);
graph.set("alice",["peggy"]);
graph.set("claire",["thom","jonny"]);
graph.set("anuj",[]);
graph.set("peggy",[]);
graph.set("thom",[]);
graph.set("jonny",[]);






// The below function is a function implementing the Breadth-First-Search Algorithm
// The functon uses Queues to search the whole network of friends for the shortest path to a Mango Seller
function searchMangoSeller(){let search_queue = new Queue()

graph.get("you").forEach(person => search_queue.enqueue(person));

while (search_queue) {
    const person = search_queue.dequeue();
    if (person_is_a_mango_seller(person)) {
        console.log(`${person} is a mango seller!`)
        return true
    }
    else {
        graph.get(person).forEach(friend => search_queue.enqueue(friend));
    }

   
}
console.log("No mango seller found.")
return false;
}

// searchMangoSeller();

// Dijkstra's Algorithm(Finds the path with the smallest total weight)



const graph2 = new Map()
const start = new Map()

start.set("a",6)
start.set("b",2)

graph2.set("start", start)

console.log(graph2.get("start").keys())
