class NewName{
  constructor(name, age, state){
    this.name = name || "Jedeo";
    this.age = age || 27;
    this.state = state || "Colorado";

  }
}

var newPerson = new NewName("Dani", 28, "Illinois");

console.log(newPerson);
