// My first Java script 

 let firstName = 'Biswash';
 let lastname = 'Chhetri';
 let mobileNumber = 9064346780;

 console.log(`My current name is ${firstName} ${lastname} ${mobileNumber}`)

// operator or calculations

 let x=11
 let y=10
 let z=x+y;
 console.log(x+y);
 console.log(x-y);
 console.log(x*y);
 console.log(x/y);
 console.log(x%y);

// Comparison Operator

let abc = 10 
 let xyz = 20
 console.log( abc>xyz);
console.log( abc<xyz);
 console.log( abc>=xyz);

//CONDITIONS

 let rating = 4 
 if (rating == 5) {
     console.log(`5 stars`);
 }
else if (rating == 4) {
     console.log(`4 stars`);
 }
 else if (rating == 3) {
     console.log(`3 stars`);
 }

 let gender = 'male'
 if (gender == 'female') {
     console.log(` Yes you are allowed`);
 }
 else if (gender == 'male') {
     console.log(`Please get lost`);
 }
 else if (gender == 'default') {
     console.log(`go away`)
 }

//switch Case

 let user = 'Admin'
 switch (user) {
    case "Admin":/     console.log("Redirect him to the admin Page");
     break;
   case "mentor":
     console.log("Redirect him  to the mentor page")
 }


  let month = 'June'
  switch(month) {
       case "June":
         console.log("6th Month");
         break;

        case "july":/             console.log("7th month");
  }

 // Ternary Operator 
 let raining = true
 raining ? console.log('It is raining') : console.log('it is not raining')

 let userlogin = false
 userlogin ? console.log('Logout') : console.log('Login')

 Array and Objects

let name = ['Bis', 'Ted', 'Makuri', 'Delhi', 'japan',];
 console.log(name[2]);

Object example

 let bankaccount = {
    firstName : 'Biswas',
     lastName :'chhetri',
  mobilenumber : '9064346780',
     balance : 100000,
 };
 console.log(bankaccount)
   
//Date :-
 const now = new Date();
 console.log(now);
 console.log(now.getFullYear());


const PI = Math.PI;
 console.log(PI);
 console.log(Math.round(PI));
 console.log(Math.round(7.53532))
 console.log(Math.floor(7.9))
 console.log(Math.ceil(8.45))


// MIN AND MAXIMUM 

 console.log(Math.min(10,1, 2, 4, 5, 6))
 console.log(Math.max(10,1, 2, 4, 5, 6))
 console.log(Math.pow(5,2))
 console.log(Math.sin(90))

// DO WHILE

 let i = 0
 do{console.log('value of i is',i);
 i++;
 } while (i<=5);

 let j=0 
 do{console.log('value of j is',j);/ j++;
 } while (j<=5);


// FOR LOOP 
