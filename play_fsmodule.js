// read the contents from any file on the file system and display on the console
import{ readFileSync, mkdirSync, readdirSync, writeFileSync} from 'fs';

//absolute path
//const path = 'package.jsonD:\full stack aug2022\core-nodejs\package.json'; 

//relative path
const path = 'package.json';
//IO
// read all json files
const data = readFileSync(path, {
    encoding: 'utf-8'
});
console.log(data);

// create a new directory in the current project
// lib/utility 
//IO
const r = mkdirSync('lib/utility', {
    recursive: true
});
console.log(r);

//read the files in a driectory 
//IO
const files = readdirSync('.'); // . -> current directory 
//console.log(files);
//write the above directory contents in another file
const d = files.join(',');
//IO
writeFileSync('./files', d);

// all the above IO operations are done on the single thread (event loop) in a synchronous way 