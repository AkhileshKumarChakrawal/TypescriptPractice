
interface flight{
    noofwheels : number ;
    noofengine : number ;
}
var airasia = (flight: flight)=>{
    console.log(flight.noofwheels+" "+flight.noofengine);
}
var airasia1 = {
    noofwheels :13,
    noofengine : 3
}
airasia(airasia1);

function makefun(id : number , name : string , luckynumber : number , gender? : string){
    if(luckynumber === 7){
        console.log(name+ " u won 11000rs" );
    }
    else if(luckynumber === 9)
        console.log(name +" "+"u won 100000rs");

    else
        console.log(name+" "+"u did not won money");
}
makefun(101 ,'ashish',5);

function addnumbers(x:number , y: number , ...b :number[]){
    var result = x+y;
    for(var i= 0 ;i< b.length ; i++){
        result += b[i];
    }
    console.log(result);
}
addnumbers(4,5,6,6,5,5,7);

let user ={
    name :"akhil",
    fun(){
        console.log("hello "+this.name);
    },
    fun1 : ()=>{
        console.log("hi "+this.name);
    }

}
user.fun();
user.fun1();

let x = function(arg){
    console.log(arg);
}
new x(123);

let y = (arg)=>{
    console.log(arg);
}
new y(45);
/*
let myfun = {
	showargs(){
	console.log(arguments);
	}
};
myfun.showargs(1,2,3,7);
*/
var arr : any = [4,"akhil",true];
console.log(arr);
/*
var arr1 : <T> = [4,5,9,6];
console.log(arr1);
*/
function fun<T>(arg : T): T{
    return arg;
}

let fi = fun('akhil');
let fz = fun(45);
console.log(fi + " "+fz);

function getItems<T>(items : T[] ) : T[] {
    return new Array<T>().concat(items);
}

let arrNumber = getItems<number>([10, 20, 30]);
let arrString = getItems<string>(["Hello", "JavaTpoint"]);
arrNumber.push(40);
//arrNumber.push("Hi! Javatpoint");

arrString.push("Hello TypeScript");
//arrString.push(50);

console.log(arrNumber);
console.log(arrString);

function displayDataType<T,U>(id: T , name: U): void {
    console.log("DataType of Id: "+typeof(id) +"  "+ "DataType of Name: "+ typeof(name));
}
displayDataType<number , string>(101 , "Abhishek");