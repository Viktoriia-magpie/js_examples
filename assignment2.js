

const housing = {
    name: "appartment",
    city: "Ottawa",
    street: "220th Main St",
    price: "2000 dollars",
    rooms: ["bedroom1", "bedroom2", "bedroom3", "bath1", "bath2", "kitchen", "basement"],
    getDetails: function(){
        return "The "+ this.name + " on " + this.street + ", " + this.city + " costs " + this.price + " and has " + this.rooms.length + " rooms in total."
    }
}

console.log(housing.getDetails());

