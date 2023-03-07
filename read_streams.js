import {createReadStream} from 'fs';
import { fileURLToPath } from 'url';

const filePath= './multiple_clients.js';
const readStream = createReadStream(filePath, {
    encoding: 'utf-8',
    highWaterMark: 1*1024
});

//readStream is a event emitter

readStream.on('open', () => {
    console.log('Reading to start....');
});

readStream.on('data', (chunk) => {
    console.log('********** reading chunk*******');
    console.log(chunk);
});

readStream.on('error', (err) => {
    console.log(err);
});

readStream.on('end', () => {
    console.log('reading to end...');
});

readStream.on('close', () => {
    console.log('reading closed');
});