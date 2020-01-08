var _this = this;
var airasia = function (flight) {
    console.log(flight.noofwheels + " " + flight.noofengine);
};
var airasia1 = {
    noofwheels: 13,
    noofengine: 3
};
airasia(airasia1);
function makefun(id, name, luckynumber, gender) {
    if (luckynumber === 7) {
        console.log(name + " u won 11000rs");
    }
    else if (luckynumber === 9)
        console.log(name + " " + "u won 100000rs");
    else
        console.log(name + " " + "u did not won money");
}
makefun(101, 'ashish', 5);
function addnumbers(x, y) {
    var b = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        b[_i - 2] = arguments[_i];
    }
    var result = x + y;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    console.log(result);
}
addnumbers(4, 5, 6, 6, 5, 5, 7);
var user = {
    name: "akhil",
    fun: function () {
        console.log("hello " + this.name);
    },
    fun1: function () {
        console.log("hi " + _this.name);
    }
};
user.fun();
user.fun1();
var x = function (arg) {
    console.log(arg);
};
new x(123);
var y = function (arg) {
    console.log(arg);
};
new y(45);
/*
let myfun = {
    showargs(){
    console.log(arguments);
    }
};
myfun.showargs(1,2,3,7);
*/
var arr = [4, "akhil", true];
console.log(arr);
/*
var arr1 : <T> = [4,5,9,6];
console.log(arr1);
*/
function fun(arg) {
    return arg;
}
var fi = fun('akhil');
var fz = fun(45);
console.log(fi + " " + fz);
function getItems(items) {
    return new Array().concat(items);
}
var arrNumber = getItems([10, 20, 30]);
var arrString = getItems(["Hello", "JavaTpoint"]);
arrNumber.push(40);
//arrNumber.push("Hi! Javatpoint");
arrString.push("Hello TypeScript");
//arrString.push(50);
console.log(arrNumber);
console.log(arrString);
function displayDataType(id, name) {
    console.log("DataType of Id: " + typeof (id) + "  " + "DataType of Name: " + typeof (name));
}
displayDataType(101, "Abhishek");
