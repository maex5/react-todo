var person = ['Max', 24];
var personTwo = ['Alex', 2];

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

var names = ['Vicka', 'Alex'];
var final = [...names, 'Max'];

final.forEach(function(name) {
  console.log('Hej ' + name);
});
