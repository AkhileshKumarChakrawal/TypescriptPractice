class employee{
    eid :number;
    ename : string;
    esal : number;
    constructor(id : number , name :string , sal : number){
        this.eid = id;
        this.ename =name;
        this.esal = sal;
    }
    employeeDetails(){
        console.log("employee is::"+this.eid+" employee name::"+this.ename+" salary::"+this.esal);
    }
}
let emp =new employee(101,"ramesh",13000);
emp.employeeDetails();


class Flight {
    seatno : number;
    nofopilots : number;
    noofengines : number
    constructor(seat : number , pilots : number , engines: number){
        this.seatno = seat;
        this.nofopilots = pilots;
        this.noofengines = engines;
    }
    details(){
        console.log("no of seats::"+this.seatno+" no of pilots ::"+this.nofopilots+" engines::"+this.noofengines);
    }
}
class AirAsia extends Flight{
    flightname : string;
    available : boolean;
    constructor(seat : number , pilots : number, engines: number, fname : string , abl : boolean){
        super(seat, pilots, engines);
        this.flightname = fname;
        this.available = abl;
    }
    showdetails(){
        console.log("flight name:;"+this.flightname+" available or not::"+this.available);
    }
}
let airasia = new AirAsia(239,3,2,"airasia",true);
airasia.showdetails();
airasia.details();