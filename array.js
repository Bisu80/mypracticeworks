
   // add an element to an array
const name = ['anurag','Bisu','Teedy',];
name.push('Bipul');
console.log(name) 

// Add an element at the beginning of the aray
const name = ['anurag','Bisu','Teedy',];
name.unshift('Temper');
console.log(name)


// remove elements from the araay
const name = ['anurag','Bisu','Teedy',];
name.pop();
console.log(name)


const name = ['anurag','Bisu','Teedy',];
name.shift();
console.log(name);

// clone and copy Array
const name = ['anurag','Bisu','Teedy',];
const namecopy = name.slice()
console.log(namecopy);

// How to determine if a value is array or not
Array.isArray(['anurag','Bisu','ted','Makuri',]);
Array.isArray([]);
console.log([]);

// Destructuring in JS 
let [Elephant,crow,Shark] = ['animal','bird','fish'];
console.log(Elephant);


// How to create remove update and access array in js
// The concat Array ; it is used to merged arrays
const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];
const numbers = num1.concat(num2, num3);
console.log(numbers); 
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]


// The join method :- This method joins all the elements of the array using a seperator and returns a string
const emotions = ['happy','sad','angry',];
const joined = emotions.join('<=>');
console.log(joined);


// The fill() method :- This method fills an array with static value

const colors = ['Red','Green','Purple','Blue',];
colors.fill('pink');
console.log(colors);

// This ex fills only the last two element of the arrays
const colors = ['Red','Green','Purple','Blue',];
colors.fill('pink' 1,2);
console.log(colors);

// The includes() array method 
const names = ['anurag','Ayush','Bisu','Ted',];
console.log(names.indexOf('Ted'));

// last index of 
const names = ['anurag','Ayush','Bisu','Ted','ayush'];
console.log(names.lastIndexOf('ayush'));


// The reverse Array

const names = ['anurag','Ayush','Bisu','Ted','ayush'];
console.log(names.reverse());

// THe sort array :- This method converts the array in strings and sorts them out in ascending or Descending Order
const names = ['Anurag','Ayush','Bisu','Ted','Ayush'];
console.log(names.sort());


const numbers = [23,5,100,56,9,13,37,10,1];
console.log(numbers.sort());        

//[ 1, 10, 100, 13, 23,37,  5,  56,  9] THis is the output

const numbers = [23,5,100,56,9,13,37,10,1];
function compareNumbers(a, b) {
    return a - b;
}
console.log(numbers.sort(compareNumbers)); // output is [1,5,9,10,13,23,37,56,100];

// THe splice array method :- Helps us to add and remov elemenets from array
const names = ['alex','bob','tom'];
names.splice(1,0,'Rahul');
console.log(names);

const names = ['alex','bob','tom'];
names.splice(1,2, 'Dipti');
console.log(names);

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]


// The Array of method 

console.log(Array.of(2, false, 'test'));


//Iterator methods in js

let Students = [
    {
        'id' : 001,
        'f_name' : 'Alex',
        'l_name': 'B',
        'gender' : 'M',
        'married' : false,
        'age' : 22,
        'paid' : 250,
        'courses' : ['javascript', 'React']
    },
    {
        'id' : 002,
        'f_name' : 'Ibrahim',
        'l_name': 'M',
        'gender' : 'M',
        'married' : true,
        'age' : 32,
        'paid' : 150,
        'courses' : ['javascript', 'PWA']
    },
    {
        'id' : 003,
        'f_name' : 'Rubi',
        'l_name': 'S',
        'gender' : 'F',
        'married' : false,
        'age' : 27,
        'paid' : 350,
        'courses' : ['Blogging', 'React','UX']
    },
    {
        'id' : 005,
        'f_name' : 'Zack',
        'l_name': 'F',
        'gender' : 'M',
        'married' : true,
        'age' : 36,
        'paid' : 250,
        'courses' : ['Git', 'React','Branding']
    },
]
// The filter array method

const femaleStudents = Students.filter((element, index)  => {
    return element.gender === 'F';
});

console.log(femaleStudents);

//The map method

const fullNames = Students.map((element) => {
    return {'fullName': element['f_name'] +' ' + element ['l_name']}
});
console.log(fullNames);

// The some Array method
let StudentsBelow30 = Students.some((element, index) => {
    return element.age < 30;
});
console.log(StudentsBelow30);

// The find Array method
const students = Students.find((element, index) => {
    return element.age < 30
});
console.log(students);

//The every method :- This method detects if every element of the array satisfies the condition passed in the function.
const atleastTwoCourses = Students.every((element, index) => {
    return element.courses.length >= 2
});
console.log(atleastTwoCourses);
 
