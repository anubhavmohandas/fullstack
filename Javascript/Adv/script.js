const d = new Date();
document.getElementById("Date").innerHTML = d;

// Constructor 
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "."; 


// Prototype

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  //Person.nationality = "English" => INVALID
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
}; // VALID