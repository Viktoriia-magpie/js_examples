
function getDetails(housing_object){
    return "The "+ housing_object.name + " on " + housing_object.street + ", " + housing_object.city + " costs " + housing_object.price + " and has " + housing_object.rooms.length + " rooms in total."
}

const housing1 = {
    name: "appartment",
    city: "Ottawa",
    street: "220th Main St",
    price: "2000 dollars",
    rooms: ["bedroom1", "bedroom2", "bedroom3", "bath1", "bath2", "kitchen", "basement"],
    
}


const housing2 = {
    name: "appartment",
    city: "Vancouver",
    street: "1 Holstein Rd",
    price: "4000 dollars",
    rooms: ["bedroom1", "bedroom2", "bedroom3", "bath1", "bath2", "kitchen", "basement"],
    
}

console.log(getDetails(housing1));
console.log(getDetails(housing2));