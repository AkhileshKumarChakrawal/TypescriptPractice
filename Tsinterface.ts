interface person {
    name : string;
    age : number;
}
let  person1  = (person:person)=>{
    console.log("person name::"+person.name+" age::"+person.age);
}
let persondata = {name : 'aman', age : 24};
person1(persondata);

interface Bike {
    nuberofyear : number;
    avgspeed : string;
}
interface Honda extends Bike{
    model : string;
    capacity : number;
}
let Honda1 = (Honda : Honda)=>{
    console.log("numer of yrs::"+Honda.nuberofyear+" average speed::"+Honda.avgspeed+" model::"+Honda.model+" tank capacity::"+Honda.capacity);
}
let Honda2 ={nuberofyear : 12, avgspeed : '49', model : 'passonpro plus',capacity : 20};
Honda1(Honda2);