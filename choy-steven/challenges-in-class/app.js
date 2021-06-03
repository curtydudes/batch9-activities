// Create a class named Player with the following:
// Add a name and country property.
// Add a function that when it runs should print into the console something like: "Messi/name was born in Argentina/country"
// Make sure to adapt this function to receive dynamic Names and Clubs.4

// Create a subclass called BasketballPlayer that extends from the class Player
// Add a new property age.
// Add a function that when it runs should print into the console something like: "Lebron James is 34 years old and knows how to play Basketball"
// Make sure the name and age are dynamic.

class Player {
    constructor(name, country){
        this.name = name;
        this.country = country;
    }
    display(){
        console.log(football.name + " lives in " + football.country)
    }
}

let football = new Player ("Gerrard", "UK")
football.display()

class BasketballPlayer extends Player {
    constructor (name, country, age) {
        super(name, country);
        this.age = age;
    }
    display() {
        console.log(basketball.name + " is " + basketball.age +" years old and lives in " + basketball.country)
    }
} //substantiate ??
let basketball = new BasketballPlayer ("Lebron", "US", 40)
basketball.display()