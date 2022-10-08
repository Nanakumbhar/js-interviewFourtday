// Q.1 How many operators do we have in JS ?

// JavaScript operators are symbols that are used to perform operations on operands.

// There are following types of operators in JavaScript.

// 1. Arithmetic Operators .               eg . + , - , * , / , % etc.
// 2. Comparison (Relational) Operators .  Eg . == , >< ,>=, <= .
// 3. Bitwise Operators.                   Eg . & , / , ~ , ^ .
// 4. Logical Operators                    Eg . && , // , !=  .
// 5. Assignment Operators                 Eg . = , += , -= , *= , /= , %=
// 6. Special Operators                    Eg . delete , in, new,instanceof , void , yild. 

// Q.2 What are pure functions?

// Ans => It is a function that would give same or consistent output if same input is being passed . 
// it is nothing but a well defined function.

// Eg . 
       function test(a,b){
        console.log(a+b)
       }
       test(4,5)

// Q.3 What is callback hell

// Ans => It is function that will executed after execution of its parent function is ececuted completely 
// .it also form pyramid like structure that is difficult to understand and debug .
//we should avoid using callback hell as much as possible .

// Eg .
 function hell(){
setTimeout(()=> {console.log('3')

                         setTimeout(()=>{console.log('2')

                                setTimeout(()=>{console.log('1')
                                 
                            },1000)
 
                           },2000)

                      },3000)
                 } 

           hell()      



// Q.4 What are promises and why do we need them?

// Ans=> promises is like heaven for callback .it is introduced in ES6 version to handle asynchronuous 
//    operation in an efficient way . it debug and manage code we need promises.

// promises allows us to write cleaner code and allow error to pass down the chain and can be handle
//   in a common place.


// Q.5 What is promise chaining

// Ans=> multiple use of .then method will leads to promises chaining.

// Eg .=> 
 function test(time , value){
    return new promise((resolved , rejected)=>{
        setTimeout(()=>{
            console.log(value)
            resolved();
        },time) ;
    })
 }
test(5000 , '5').then(()=>test(4000,'4'))
                .then(()=>test(3000,'3'))


// Q.6  What is the purpose of async/await keywords? Give an example of async/await.

// Ans=> Async: An async keyword is a method that performs asynchronous tasks such as
//       fetching data from a database, reading a file,
    //   Await : Await key word used inside the async function,to wait for the asyncronous operation.
    // the use of await pauses the async function until the promises return a result value .

    async function f() {

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), 1000)
        });
      
        let result = await promise; // wait until the promise resolves (*)
      
        alert(result); // "done!"
      }
      
      f();