//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false
function checkCharacters(arr) {
    const filteredItems = arr.filter(item => item.length > 6);
    return filteredItems.every(item => item.length < 10);
  }
  
const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
const result = checkCharacters(array);

console.log(result);