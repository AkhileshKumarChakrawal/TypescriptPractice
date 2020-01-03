/*
import {subrtraction , Addition} from "./demo1";
var s = new subrtraction(87 , 97);
s.sub();

var ad = new Addition(4,6);
ad.sum();

/// <reference path = "./demo1.ts" />

let sss = calc.amtcalc(45,65);
console.log(sss);*/
var first = 12.354;
console.log(first);
var second = 0x45aedf;
console.log(second);
var thrd = 511;
var forth = 10;
console.log(thrd + " " + forth);
var empname = "akhil";
var cname = "semanticbits";
empname = "aman";
var output = empname + " work in " + cname;
console.log(output);
var vara = "sameer";
vara = 45;
vara = false;
console.log(vara);
var list = [1, 5, 6, 8];
var arr = ["aa", "bb", "cc", "dd"];
console.log(list + " " + arr);
var currentsymbol = "$";
function showmoney(amount) {
    var currentsymbol = "@";
    console.log(currentsymbol + amount);
}
showmoney(100);
var person = /** @class */ (function () {
    function person(firstname, lastname) {
        this.firstName = firstname;
        this.lastName = lastname;
    }
    person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return person;
}());
var person1 = new person('Aman', 'kumar');
//person1.firstName = "akhilesh";
//person1.lastName = "chakarawal";
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.getFullName());
var data;
data = 56;
data = "akhil";
if (typeof (data) == "number")
    console.log("data is aa number");
else if (typeof (data) == "string")
    console.log("data is a string");
var arrr;
var arrrr;
arrr = [3, 5, 6, 8];
arrr.forEach(function (item) {
    //console.log(item);
    //  arrrr.push(item);
});
/*
var  m = new Map();
m.set(1 ,"akhil");
m.set(2,"amar");
m.set(3,"raja");
console.log(m);
*/
function fiun(name) {
    if (name != null)
        return 4;
}
var check = fiun('ak');
console.log(check);
console.log(typeof (check));
/*function fun(name : string , rollno : number , address ?: string):number;*/ /*{
    console.log(name+" "+rollno);
    if(address!= undefined)
        console.log("address "+address);

    return rollno;
}*/
/*
var md = fun("akhilesh",101 , "sr nagar");
function fun(data: any , age: any, availability: any):string{
    return "data is::";
}
*/
/*let sum = (a: number , b: number): string=>{
    return `addition is ::${a+b}`;
}*/
/*
let fundata = fun(789, 45,true);
console.log(fundata);
*/
//console.log(sum(10 , 20));
var demo = /** @class */ (function () {
    function demo(fstname, lastname, age) {
        this.fname = fstname;
        this.lname = lastname;
        this.age = age;
    }
    demo.prototype.getAllDetails = function () {
        return "firstname::" + this.fname + " " + "age::" + this.age;
    };
    return demo;
}());
var Dem = new demo("shiva", "kumar", 24);
console.log(Dem.getAllDetails());
function re(a, b) {
    return "data";
}
console.log(re(45, 65));
//generic example
function getitems(items) {
    return new Array().concat(items);
}
var arrnumber = getitems([10, 20, 30]);
var arrstring = getitems(["aa", "bb", "cc"]);
arrnumber.push(89);
arrnumber.push(66);
console.log(arrnumber);
var empp = function (employe) {
    console.log(employe.name + " " + employe.desg + " " + employe.address + " " + employe.eid);
};
var or = { name: 'amar', desg: 'fullstack developer', address: 'ar nagar', eid: 101 };
//class example
var people = /** @class */ (function () {
    function people(lang, quant) {
        this.language = lang;
        this.quantinent = quant;
    }
    people.prototype.show = function () {
        console.log(this.quantinent + " " + this.language);
    };
    return people;
}());
var detailss = new people('indian', 'asia');
detailss.show();
function suma(num1, num2) {
    return num2 + num1;
}
var addd = suma(45, 55);
var arr69 = ['zz', 'zdd', 'dfr', 'r5tg'];
for (var x in arr69) {
    console.log(arr69[x]);
}
function test(data) {
    for (var y in data) {
        console.log(data[y]);
    }
}
test(arr69);
//generic examples
function makefun(id, name) {
    console.log("id::" + id + " name is:;" + name);
}
makefun("amar", 10001);
var Student = /** @class */ (function () {
    function Student(id, nam) {
        this.id = id;
        this.name = nam;
    }
    Student.prototype.display = function () {
        console.log("id::" + this.id + " name:: " + this.name);
    };
    return Student;
}());
var lis = new Student(102, "raja");
lis.display();
function deta(eid, ename) {
    console.log("id==" + eid + " and name==" + ename);
}
var d = new Date();
console.log(d);
