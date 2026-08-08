// 

// task 1 student details

const college = "Suguna college of engineering"
console.log(college);

let studentName = "Saravanan M"
console.log(studentName);

var age = 27
console.log(age);

// task 2 mobile price

let mobilePrice = 25000
let change = mobilePrice = 27000
console.log(mobilePrice); 


// task3 company name
function button(){
    const companyName = document.getElementById("input").value;

if (companyName == "Stackly"){
      console.log("Access Granted");

}
else{
    alert("check the company Name")
}
}

// task 4 console practice
 const login = "login successfully"
 console.log(login);
 const password = "password is weak"
 console.warn(password);
 const network = "network error"
 console.error(network);

//  task 5 data type

const name = "saravanan M"
console.log(typeof(name))

const ages = 27;
console.log(typeof ages);

const isStudent = true
console.log(typeof(isStudent))

// task shopping card

const shoppingCard = ["laptop" , "mouse" , "keyboard" , "headset" , "charger"]
console.log(shoppingCard[1]);
console.log(shoppingCard[2]);
console.log(shoppingCard[4]);

// task 7 movies name
const movieName = ["gilli" , "kgf" , "mersal" , "goat" , "leo" , "vikaram","sarkar" , "beast"]
console.log(movieName[4]);
console.log(movieName[6]);
console.log(movieName[7]);

// task 8 employee object

const employee = {
    name: "saravanan M",
    age: 27,
    department: "software developer",
    skills: "array",
    salery: 25000
}
console.log(employee.name);
console.log(employee.department);
console.log(employee.skills);
console.log(employee.salery);

// task 9 product details

const employees = {
    productName: "shoes ",
    brandName: "Adidas",
    price: 5000,
    color: "white",
    secondColor:"black"
    
}
console.log(employees.productName);
console.log(employees.brandName);
console.log(employees.price);
console.log(employees.secondColor);


// task 10 arithamatic operations

const num1 = 10;
const num2 = 5;

console.log("Additon:" , num1 +num2);
console.log("subtraction:" , num1 - num2);
console.log("multi:" , num1 * num2);
console.log("division:" , num1 / num2);
console.log("modulus:" , num1 % num2);
console.log("explosion:" , num1 ** num2);

// task 11 increment practice

let a = 5;

console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

// task 12 prdict the output

let a1 = 10;
let b = a1++;
let c = ++b;

console.log(a1);
console.log(b);
console.log(c);


// task13 predict the output


let x =7;
let y = --x;
let z = y++;

console.log(x);
console.log(y);
console.log(z);


// task14 school object

const  schoolDetails = {

    schoolName: "SES matriculation higher secondary school",
    principal:"Rameskumar",
    totalStudents: 1000,
    classesArray:["1st standard" , "2nd standard" , "3rd standard"]
}
console.log(schoolDetails.schoolName);
console.log(schoolDetails.principal);
console.log(schoolDetails.classesArray[2]);


// task15 grocery list

const groceryItems = ["rice", "sugar" , "salt" , "oil" , "milk" , "egg" , "vegetable" , "apple"]

console.log(groceryItems[0],groceryItems[3] , groceryItems[7]);


// rask 16 user profile

const userProfile = {

    username: "saravanan M",
    emailId: "manojchithar05@gmail.com",
    age: 27,
    IsPremium:true
}
console.log(typeof(userProfile.username),userProfile.username);
console.log(typeof(userProfile.emailId),userProfile.emailId);
console.log(typeof(userProfile.age),userProfile.age);
console.log(typeof(userProfile.IsPremium),userProfile.IsPremium);


// task17 varaibale rules

var firstName = "saravanan";

var firstName = "saravanan M"
console.log(firstName);

// let lastName = "M";

// let lastName = "Murugesan"
// console.log(lastName);  this will give the error 

// const fullName = "saravanan M"
//  const fullName = "Saravanan Murugesan"
// console.log(fullName); this also give the error cannot resign


// task 18 marks calculation

let tamil = 85;
let english = 90;
let maths = 95;

let totalMarks = tamil + english + maths;
 let Average = totalMarks /3;

 console.log("totalMarks:" , totalMarks);
 console.log('Average:' , Average);


//  task 19 company database

const database = {

    companyName:  "stackly",
    EmployeName:["saravanaan " , "akshay" , "vikas" , "naveen" , "christo" , "vicky"],
    locaton:"coimbatore",
    foundedYear: 2020,
    CEO:"Manoj"
}
console.log(database.CEO);
console.log(database.location);
console.log(database.EmployeName[0]);


// task 20 mini profile

const miniProfile = {
    

    name: "saravanan M",
    city: "coimbatore",
    hobbies: ["cricket", "reading books", "coding"],
    age: 27
}
console.log(miniProfile.name);
console.log(miniProfile.hobbies[0], miniProfile.hobbies[1], miniProfile.hobbies[2]);
console.log(miniProfile.age);
















