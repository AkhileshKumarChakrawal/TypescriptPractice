var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee(id, name, sal) {
        this.eid = id;
        this.ename = name;
        this.esal = sal;
    }
    employee.prototype.employeeDetails = function () {
        console.log("employee is::" + this.eid + " employee name::" + this.ename + " salary::" + this.esal);
    };
    return employee;
}());
var emp = new employee(101, "ramesh", 13000);
emp.employeeDetails();
var Flight = /** @class */ (function () {
    function Flight(seat, pilots, engines) {
        this.seatno = seat;
        this.nofopilots = pilots;
        this.noofengines = engines;
    }
    Flight.prototype.details = function () {
        console.log("no of seats::" + this.seatno + " no of pilots ::" + this.nofopilots + " engines::" + this.noofengines);
    };
    return Flight;
}());
var AirAsia = /** @class */ (function (_super) {
    __extends(AirAsia, _super);
    function AirAsia(seat, pilots, engines, fname, abl) {
        var _this = _super.call(this, seat, pilots, engines) || this;
        _this.flightname = fname;
        _this.available = abl;
        return _this;
    }
    AirAsia.prototype.showdetails = function () {
        console.log("flight name:;" + this.flightname + " available or not::" + this.available);
    };
    return AirAsia;
}(Flight));
var airasia = new AirAsia(239, 3, 2, "airasia", true);
airasia.showdetails();
airasia.details();
