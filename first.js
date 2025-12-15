// console.log("hello")
// a = 10
// console.log(a)

//let keyword
//let keyword introduced in ES6
//let keyword used to declare the variables

//var keyword breaks the "scope" rule
//let keyword "obeys" the scope rule

// console.log(data);                //var:undefined     //let:ReferenceError: Cannot access 'data' before initialization
// let data = 100;

//var:undefined      --> variable hoisting
//accessing the variable before its declaration and initilization with var keyword technically called as variable hoisting
//variable hoisting raised because of var keyword
//we can overcome variable hoisting with the help of let keyword

//global variable
// var data = 100;
// //block of code
// {
//     // local variable
//     data = 200;
// }
// console.log(data);                //var:200           //let:100

//var keyword raised the global polluting issue
//let keyword overcomes the global polluting issue

//effect of blocks of code on global members called as global polluting issue

// let data = 100;
// let data = 200;
// console.log(data);            //var:200       //let:SyntaxError: Identifier 'data' has already been declared
//var keyword allows the duplicate variables
//let keyword overcomes the duplicate variables

// let a;
// console.log(a);

// const a = 10;
// a = 100;       //  TypeError: Assignment to constant variable.
// {
//     console.log(a);
// }
// console.log(a);
// const a  //SyntaxError: Missing initializer in const declaration
// console.log(a);

//block of code
//re-use

// named function
// 1)defination
// function function-name(params1, params2, ...., paramsn) {
//     logic / code
// }
// // 2) calling
// function-name(arg1, arg2, ..., argn);

// function function_one() {
//     return "this is function_one";
// }

// function function_one(param1, param2, param3) {
//     console.log(param1, param2, param3);
// }
// function_one("one", 12);

// function function_one(param1, param2, param3) {
//     console.log(param1, param2, param3);
//     return "myReturn"
// }
// function_one(undefined, "Helllo");
// console.log(function_one)
// console.log(function_one(undefined, "Helllo"));

// function function_one() {
//     return function_two;
// }
// function function_two() {
//     return "this is function_two....";
// }
// console.log(function_one()());

// undefined
// console.log(function_one())
// VM441:1 ƒ function_two() {
//         return "this is function_two....";
//     }
// undefined
// console.log(function_one()())
// VM459:1 this is function_two....

// console.log(function_one());
// console.log(function_one);

// function doSqare(n) {
//     return n * n;
// }
// console.log(doSqare(4))

// function doSqare(n) {
//     console.log(n);
//     var n = 10
//     return n * n;
// }
// console.log(doSqare())

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// function function_one(param1, param2, param3) {
//     console.log(param1, param2, param3);
// }
// function_one("one", "two", "three");

// //... spread operator
// function function_one(param1, ...param2) {
//     console.log(param1, param2);
// }
// function_one("one", "two", "three", "four", "five", "six");
// function_one(undefined, "one", "two", "three", "four", "five", "six");

// function function_one(...param1) {
//     console.log(param1);
// }
// function_one(undefined, undefined, undefined)
// function_one(null, null, null)
// function_one(null, "hello2", null)
// function_one(); //[] empty array

// -----------

// function function_one(param1, ...param3) {
//     console.log(param1, param3);
// }

// function_one("hello1", "hello2", "hello3", "hello4")//SyntaxError: Rest parameter must be last formal parameter

// // ----- default parameter
// function function_one(param1 = "Hello-1", param2 = "Hello-2", param3 = "Hello-3") {
//     console.log(param1, param2, param3);
// }

// function_one();
// function_one("one");
// function_one(undefined, undefined, undefined);
// function_one(undefined, "hello");
// function_one(null, null, null);
// function_one(null, "hello-A", undefined);

// function function_one(param1 = "Hello-1", ...param2) {
//     console.log(param1, param2);
// }
// function_one()
// function_one("one", "two")
// function_one(null, "two", "three", "four", "five")
// function_one(undefined, undefined, undefined)
// function_one(null, null, null)
// function_one(null)
// function_one(undefined, undefined, null)
// function_one(null, undefined, null)

// function function_one(param1, param2 = "Hello-1", ...param3) {
//     console.log(param1, param2, param3);
// }
// function_one()

// function_one("one", "two", "three", "four", "five")
// function_one(undefined, undefined, undefined)
// function_one(null, null, null)
// function_one(null)
// function_one(undefined, undefined, null)

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// function
// 1) defination
// function function-name(params1, params2, ...., paramsn) {
//     logic / code
// }
// 2) calling
// function-name(arg1, arg2, ..., argn);

// function function_one() {
//     return "this is function_one";
// }

// anonymous function -- > arrow function
// --> function without name

// keyword variable = (param1, param2, param3, ..., paramn) => {
//     logic / code
// }

// let function_one = function () { } //anonynous function
// let function_two = () => { }        //arrow function

// function_one();
// ------------------------
// let function_one = function () { return " function_one called... " }
// let function_two = () => " function_two called... "

// console.log(function_one());
// console.log(function_two())

// let doSquare = (n) => n * n
// console.log(doSquare(4));
// ------------------------

// let function_one = (param1) => " function_two called... " + param1
// console.log(function_one("Hello"));

// let function_one = param1 => " function_two called... " + param1
// console.log(function_one("Hello"));

// ------------------------

// let function_one = (param1, param2, param3) => param1 + " " + param2 + " " + param3
// console.log(function_one("Hello 1", "Hello 2", "Hello 3"));

// ------------------------

// let function_one = (param1, param2, param3) => console.log(param1 + " " + param2 + " " + param3)
// function_one("Hello 1", "Hello 2", "Hello 3");                  //call_1
// console.log(function_one("Hello 1", "Hello 2", "Hello 3"));     //call_2
// let return_one = function_one("Hello 1", "Hello 2", "Hello 3");     //call_2
// console.log(return_one);

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

//passing "one function definition" to "another function" as a "parameter" called as "callback" function

// function fun_one(param1) {
//   console.log(param1());
// }
// let fun_two = () => "Hello";
// // fun_one(fun_two());
// fun_one(() => "Hello");
//Hello

// function fun_one(param1, param2, param3) {
//   // console.log(param1, param2, param3);
//   console.log(param1(), param2(), param3());
// }
// fun_one(
//   function fun_two() {
//     return "Hello_1";
//   },
//   function fun_three() {
//     return "Hello_2";
//   },
//   function fun_four() {
//     return "Hello_3";
//   }
// );

// fun_one(
//   () => "Hello_1",
//   () => "Hello_2",
//   () => "Hello_3"
// );
// let fun_two = () => "Hello_1";
// let fun_three = () => "Hello_2";
// let fun_four = (d) => "Hello_3";
// fun_one(fun_two, fun_three, fun_four);
//Hello_1 Hello_2 Hello_3

// function fun_one(param1) {
//   console.log(param1);
//   //   console.log(param1("Hello_1"));

//   return param1("Hello_1", "Hello_3", "Hello_3");
//   //   return "Hello_1";
// }
// let my_func = (arg1, arg2, arg3) => {
//   console.log(arg1, arg2, arg3);
//   return "ret-Myfun";
// };
// let my_func = (arg1) => {
//   console.log(arg1);
//   console.log(arg1);
//   return arg1;
// };
// console.log(fun_one(my_func));
//Hello_1 Hello_2 Hello_3

// function fun_one(param1) {
//     return param1("Hello_1", "Hello_2", "Hello_3");
// }
// fun_one((arg1, arg2, arg3) => {
//     console.log(arg1, arg2, arg3);
// });
//Hello_1 Hello_2 Hello_3

// function fun_one(param1) {
//   return param1("Hello_1");
// }
// fun_one((arg1) => {
//   console.log(arg1);
// });
// function fun_one(param1, param2, param3) {
//     return param1("Hello_1") + " - " + param2("Hello_2") + " - " + param3("Hello_3");
// }
// fun_one((arg1) => { console.log(arg1) }, (arg2) => { console.log(arg2) }, (arg3) => { console.log(arg3) })
/*
    function fun_one(param1,param2,param3){
        return param1("Hello_1")+"...."+param2("Hello_2")+"...."+param3("Hello_3");
    }
    fun_one( (arg1)=>{
        console.log( arg1 );                //Hello_1
    }, (arg1)=>{
        console.log( arg1 );                //Hello_2
    }, (arg1)=>{
        console.log( arg1 );                //Hello_3
    } );
*/
