// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// 1. Appends a cat to the end of the cats array (Destructive)
function destructivelyAppendCat(name) {
    cats.push(name);
}
// destructivelyAppendCat('bob');
// console.log(cats);

// 2. Prepends a cat to the beginning of the cats array (Destructive)
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// 3. Removes the last cat from the cats array (Destructive)
function destructivelyRemoveLastCat() {
    cats.pop();
}
// destructivelyRemoveLastCat();
// console.log(cats);

// 4. Removes the first cat from the cats array (Destructive)
function destructivelyRemoveFirstCat() {
    cats.shift();
}
// 5. Appends a cat to the cats array and returns a new array (Non-Destructive)
function appendCat(name) {
    return [...cats, name];
}

// 6. Prepends a cat to the cats array and returns a new array (Non-Destructive)
function prependCat(name) {
    return [name, ...cats];
}

// 7. Removes the last cat in the cats array and returns a new array (Non-Destructive)
function removeLastCat() {
    return cats.slice(0, -1);
}

// 8. Removes the first cat from the cats array and returns a new array (Non-Destructive)
function removeFirstCat() {
    return cats.slice(1);
}