import {createReadStream,createWriteStream} from 'fs';

export function copyFile(filePath,destFilePath) {
    // copy operation using streams

    const readStream = createReadStream(filePath, {
        encoding: 'utf-8',
        //highWaterMark: 1*1024
    });
    const writeStream = createWriteStream(destFilePath, {
        encoding: 'utf-8'
    });

readStream.on('data', (chunk) => {
    //console.log('********** reading chunk*******');
    //console.log(chunk);
    writeStream.write(chunk);
});

}

copyFile('multiple_clients.js','multiple_clients.js_copy')

