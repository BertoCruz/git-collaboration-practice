class NewName{
  constructor(name, age, state){
    this.name = name || "Jedeo";
    this.age = age || 27;
    this.state = state || "Colorado";
    this.message = function(message) {
      return `Hey, what's up, my name is ${this.name} and I am ${this.age} years old. ${message}.`
    }
  }
}

var newPerson = new NewName("Dani", 28, "Illinois");

console.log(newPerson);
console.log(newPerson.message(" I Love Nature, as well"))
