/*
import {subrtraction , Addition} from "./demo1";
var s = new subrtraction(87 , 97);
s.sub();

var ad = new Addition(4,6);
ad.sum();

/// <reference path = "./demo1.ts" />

let sss = calc.amtcalc(45,65);
console.log(sss);*/
let first : number =12.354;
console.log(first);
let second : number = 0x45aedf;
console.log(second);
let thrd  : number = 0o777;
let forth : number = 0b1010;
console.log(thrd+" "+forth);

let empname : string = "akhil";
let cname : string = "semanticbits"

empname = "aman";
let output : string = `${empname} work in ${cname}`;
console.log(output);

let vara: any = "sameer";
vara = 45;
vara = false;
console.log(vara);
var list : number[]=[1,5,6,8];
var arr : Array<string> = ["aa","bb","cc","dd"];
console.log(list+" "+arr);

var currentsymbol ="$";
function showmoney(amount){
    var currentsymbol = "@"
    console.log(currentsymbol+amount);
}
showmoney(100);
class person{
    firstName : string;
    lastName : string;
    constructor(firstname : string , lastname : string){
        this.firstName = firstname;
        this.lastName = lastname;
    }
    getFullName(){
        return this.firstName+" "+this.lastName;
    }
}
var person1 = new person('Aman','kumar');
//person1.firstName = "akhilesh";
//person1.lastName = "chakarawal";
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.getFullName());

var data : string | number;

data = 56;
data = "akhil";
if(typeof(data) == "number")
    console.log("data is aa number");
else if (typeof(data) == "string")
    console.log("data is a string");

let arrr : number[];
let arrrr : number[];
arrr = [3,5,6,8];
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

function fiun(name : string){
    if(name!= null)
        return 4;
}
var check = fiun('ak');
console.log(check);
console.log(typeof (check));


/*function fun(name : string , rollno : number , address ?: string):number;*//*{
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
class demo{
     fname: string;
     lname : string;
     age : number;
    constructor(fstname: string , lastname: string , age: number){
        this.fname = fstname;
        this.lname = lastname;
        this.age = age;
    }
    getAllDetails(){
        return "firstname::"+this.fname+" "+"age::"+this.age;
    }

}
var Dem = new demo("shiva","kumar",24);
console.log(Dem.getAllDetails());

function  re(a:number,b : number) {
    return "data";
}
console.log(re(45,65));


//generic example
function getitems<t>(items : t[]): t[]{
    return new Array<t>().concat(items);
}
let arrnumber = getitems<number>([10,20,30]);
let arrstring = getitems<string>(["aa","bb","cc"]);
arrnumber.push(89);
arrnumber.push(66);
console.log(arrnumber);
/*

function setitem(items : any[]): any[]{
    return new Array().concat(items);
}
let arrsetnum = setitem([10,2,89]);
let arrsetstring = setitem(["aaa","bbb","vvv"]);
arrsetnum.push(56);
arrsetnum.push("efewfe");
console.log(arrsetnum);*/

//generic examples
function makefun<T ,U>(id : T , name : U) {
    console.log("id::"+id+" name is:;"+name);
}
makefun<string , number>("amar", 10001);

class Student<T , U>{
    private id : T;
    private name : U;
    constructor(id: T , nam: U){
        this.id = id;
        this.name = nam;
    }
    display():void{
        console.log(`id::${this.id} name:: ${this.name}`);
    }
}
let lis = new Student<number , string>(102,"raja");
lis.display();

interface empdetail<T , U> {
    id: T;
    name: U;
}
    function deta(eid : number, ename : string){
        console.log(`id==${eid} and name==${ename}`);
}
let d: Date = new Date();
console.log(d);

/*
interface  os {
    name : string;
    language : string;
}
let operatingsystem =(type: os):void =>{
    console.log("name::"+type.name+" "+type.language);
}
let oreo = {name : 'o', language : 'c'};
console.log(oreo);
function getDetails(namne , marks){
    console.log(namne+" "+marks);
}

@others
class upd{
    msg : string;
        constructor(message : string){
            this.msg = message;
        }

        @names
        show():void{
            console.log("hello "+this.msg);
        }
}

function others(){
    console.log("this msg dedicat to user");
    return  function () {
        console.log("seled is called");
    }
}
function names() {
console.log("method level decorators");
}

var cl = new upd('how r u?');
cl.show();*/
/*

// typescript decorators
class employee{
    name : string;
    age : number;
    sal : number;
    constructor(ename : string , eage : number , esal : number){
        this.name = ename;
        this.age = eage;
        this.sal = esal;
    }
    @configurable(false)
    getempdetail(){
        return`empname : ${this.name} age : ${this.age} salary : ${this.sal}`;
    }
}
function configurable(data){
    if(data == true)
        console.log("employee is exist");
    else
        console.log("employee does not exist");
}
var empdata = new employee('amar',24,20000);
console.log(empdata.getempdetail());

class student{
     //@param()
     sname : string;
     //@param()
     sage : number;
     rollno : number;
     constructor(@param()name : string, age: number){
         this.sname = name;
         this.sage = age;
     }


}
function param() {
    console.log("this field is mandatory");
}

var std = new student('jata',24);
console.log(std.sname + " "+ this.sage);
*/

//interface example
interface person {
    name : string;
    address : string;
 }
 interface employees extends person{
    desg : string;
    eid : number;
 }
 let empp = (employe: employees): void=>{
    console.log(employe.name+" "+employe.desg+" "+employe.address+" "+employe.eid);
 };
let or = {name : 'amar', desg : 'fullstack developer',address : 'ar nagar', eid:101};

//class example
class people{
    language : string;
    quantinent : string;
    constructor(lang : string , quant : string){
        this.language = lang;
        this.quantinent = quant;
    }
    show(){
        console.log(this.quantinent+" "+this.language);
    }
}
let detailss = new people('indian','asia');
detailss.show();
function suma(num1 : number , num2 : number){
    return num2+num1;
}
let addd : number = suma(45,55);

let arr69 : string[] = ['zz','zdd','dfr','r5tg'];
for(let x in arr69){
    console.log(arr69[x]);
}
function test(data) {
    for(let y in data){
        console.log(data[y]);
    }
}
test(arr69);