var person1 = function (person) {
    console.log("person name::" + person.name + " age::" + person.age);
};
var persondata = { name: 'aman', age: 24 };
person1(persondata);
var Honda1 = function (Honda) {
    console.log("numer of yrs::" + Honda.nuberofyear + " average speed::" + Honda.avgspeed + " model::" + Honda.model + " tank capacity::" + Honda.capacity);
};
var Honda2 = { nuberofyear: 12, avgspeed: '49', model: 'passonpro plus', capacity: 20 };
Honda1(Honda2);
