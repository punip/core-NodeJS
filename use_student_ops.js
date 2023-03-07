// Every nodejs program runs on a single thread (event loop)
// executes in a Synchronous way 

import { getDetails, getGrade} from "./student_ops.js"

const name = 'puneeth';
const gender = 'm';
const roll = 10;
const marks = 90;

 /* console.log(getDetails(name,gender,roll,marks));
console.log(getGrade(marks)); */

// Asynchronicity 
// calculation of grade of the student is a time consuming process and will take min 10s
// emulating

//Timers queue
// setTimeout callback function is placed in the timers queue
setTimeout(() =>  {
    console.log(getGrade(marks));
}, 5000);

setTimeout(() =>  {
    console.log(getGrade(45));
}, 6000);

// in the mean time, the details of the student must be displayed
console.log(getDetails(name,gender,roll,marks));


