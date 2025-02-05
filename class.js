//classes are blueprints for creating objects

class Human{
    //properties (by default , all properties/method are public)
    ht = 67
    #wt = 90 //# is used to declare a property or method as private
    age = 23


    constructor(Height, Weight, Age){
        this.ht = Height
        this.age = Age
        this.#wt = Weight
    }


    //behaviour/methods
    walking(){
        console.log("I am walking", this.#wt) //accesing private prop inside class
    }

    #running(){
        console.log("i am running")
    }

    //getters and setters are used to access and modify private properties. they implement encapsulation in code

    get getWeight(){ //getter
        return this.#wt
    }

    setWeight(weight){ //setter
        this.#wt = weight
    }
}

let obj = new Human(180, 72, 24);
obj.walking() //accessing methods
console.log(obj.age) //accessing properties

// console.log(obj.#running) //accessing private method outside the class will throw error
// console.log(obj.#wt) //accessing private prop outside the class will throw error

obj.setWeight(78) //modified the value of wt property
console.log(obj.getWeight) // when we write get or set infront of the function, then while calling them we don't write () 