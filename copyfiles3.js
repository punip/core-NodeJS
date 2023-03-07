import {copyFile} from "./copy_files2.js";

const filepath = 'package.json';
const destFilePath = './package.json_copy';

const eventEmiiter = copyFile(filepath,destFilePath);

//subscribing for the events
// subscribing for the events is an optional exercise
eventEmiiter.on('readDone', (data) => {
    console.log('i just saw read event done');
});
eventEmiiter.on('copyDone',() => {
    console.log('copyDone!');
});
eventEmiiter.on('error',(err) => {
    console.log(err);
});

// asynchronous  operation is required to send out intermediate events to its caller
// the caller of this utility function wants to be informed of the intermediate read event when done ??