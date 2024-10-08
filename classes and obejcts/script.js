//use proto
// const employee = {
//     calcTax(){
//         console.log("The tax is 10 %");
//     }
// }
// const karanArjun = {
//     salary :50000,
//     calcTax(){
//         console.log("The tax is 20 %");
//     }
// }
// karanArjun.__proto__ = employee;
// use constructor for car for directly inovek class 
// class Car {
//     constructor(brand,milage){
//         console.log("creat new object");
//         this.brandName = brand;
//         this.Mymilage = milage;
//     }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
  
// }
// let Toyota = new Car("Cambry",11);
// let Mercedes = new Car("Gwagon",4);

// class person {
//     constructor(name){
//         this.spices = "Homo sapience";
//         this.name = name 
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("seelp");
//     }

// }
// class enginner extends person{
//     constructor(name){
//         super(name);// to invoke parents constructor
//     }
//     work(){
//         super.eat()
//         console.log("solved multiple problems");
//     }
// }

// let akbarobj = new enginner("Akbar husain");
// let data = "secrt information";
// class user{
//     constructor(name,email){
//         this.name1 = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log('Information',data);
//     }
// }
// class Admin extends user{
//     viewData(){
//         console.log("this informain is change by anoter class");
//     }

// }
// let classA = new Admin("Akbar husain","bhoraniya4429@gmail.com")
