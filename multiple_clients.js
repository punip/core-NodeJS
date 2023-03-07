import { evenSeries, fibonacci} from "./lib/utility/series.js";
import {readFile, readFileSync} from 'fs';

// multiple clients making processing requests asynchronously
// processing a request from a client invlovles 
 // reading from a file whose path client passes
 // calculating the fibonacci series till n whose value the client passes

 let clientId = 0;

 function processRequest(file_path, n) {
   console.log(` ***************** process id for client id  ${clientId} ******* start`);

   // IO
   // Blocking the event loop - because it is written in a synchronous way 
   /*
    const data = readFileSync(file_path, {
      encoding: 'utf-8'
    });
    // IO 
    console.log(data);
    */

    // Asynchronous non blocking IO 
    // internally it creates a low level higly optimized OS level thread that starts 
    // reading from the file path 
    readFile( file_path, {
      encoding: 'utf-8'
    }, (err,data) => {
      // this callback will be placed in a IO callbacks queue when the thread has finished 
      // reading the contents of the file
      // after the timers queue, the event loop comes and checks IO callbacks queue
      if(err) {
         // if there was any error in reading from the file
         console.log(err);
      }else{
         console.log(data);
      }
    });


    // CPU
    const series = fibonacci(n);
    console.log(series);
    console.log(`**************** process id for client id  ${clientId}********* end`);
 }

function processAnotherTypeRequest(n) {
   //all CPU
   console.log(` ***************** process id for client id  ${clientId} ******* start`);
   //fibonacci series till n 
   console.log(fibonacci(n));
   // even series till n 
   console.log(evenSeries(n));
   console.log(`**************** process id for client id  ${clientId}********* end`);
 }

 

// 4 clients and their requests put in the timers queue
 setTimeout( () => {
   clientId++;
   processRequest('package.json', 10);
 },0);

 setTimeout( () => {
   clientId++;
   processRequest('play_fsmodule.js', 30);
 },0);

 setTimeout( () => {
   clientId++;
   processRequest('student_ops.js', 5);
 },0);

 setTimeout( () => {
   clientId++;
   processRequest('use_student_ops.js', 50);
 },0); 

 setTimeout( () => {
   clientId++;
   processAnotherTypeRequest(10);
 },0);