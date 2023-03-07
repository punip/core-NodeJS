import { rejects } from 'assert';
import {readFile, writeFile} from 'fs';
import { resolve } from 'path';

const filepath = 'package.json';
const destFilePath = './package.json_copy';


/*readFile(filePath, {
    encoding: 'utf-8'
}, (err,data) => {
    if(err) {
        console.log(err);
    }else {
        writeFile(destFilePath, data, (err) => {
            if(err) {
                console.log(err);
            }else {
                console.log('copy done!!!');
            }
        });
    }

}); */

let d;

function readingFile () {
    return new Promise ((resolve, reject) => {
        // fork a os level thread to perform the IO operation
        readFile( filepath, {
            encoding: 'utf-8'
        }, (err,data) => {
            // this callback will be placed on the IO callbacks queue
            if(err) {
                reject(err);
                // the callback passed to the catch function will be placed in the promises callback queue
             }else {
                d=data;
                resolve(data);
                // the callback passed to the then function will be placed in the promises callback queue
             }
            }
        )}
    )};

    function writingFile () {
        return new Promise ((resolve, reject) => {
            // os level thread which will perform the IO operations
            writeFile(destFilePath, d, (err) =>  {
                // this callback will be placed in the IO callback queue when IO is done
                if(err) {
                    reject(err);
                    // the callback passed to the catch function will be placed in the promises callback queue
                }else{
                    resolve();
                   // the callback passed to the second then function will be placed in the promises callback queue
                }
            }
            )}
        )};

        /*
 async function copyFile() {
    try {
        const data = await readingFile();
        await writingFile(data);
        console.log('copy done!');
    }catch(err) {
        console.log(err);
    }
    }
    copyFile(); */

readingFile()
.then ((data) => {
    return writingFile(data);
})
.then( () => {
    console.log('copy done!');
})
.catch( () => {
    conasole.log(err);
});

