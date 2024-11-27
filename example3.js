// let myShoppingList = ["milk","bread", "candies"];
// // console.log(myShoppingList[1]);
// // console.log(myShoppingList.length);
// // console.log(myShoppingList[myShoppingList.length-1]);
// console.log(myShoppingList);
// myShoppingList.sort();
// console.log(myShoppingList);


const cat = {
    name:"Holly",
    gender: "Female",
    age:2,
    color: "grey",
    favourite_food: ["fish", "meat", "mouse"],
    say_miyau: function(){
        return this.name + " said miyau"
    }
}

console.log(cat.name);
console.log(cat.color);
console.log(cat.favourite_food[0]);
console.log(cat.say_miyau());