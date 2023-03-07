import{ readFile, writeFile} from 'fs/promises';
import EventEmitter  from 'stream';


/*
export default async function copyFile(f,d) {
    const filepath = f;
const destFilePath = d;
    try {
    const data = await readFile(filepath, {
        encoding: 'utf-8'
    });
    await writeFile(destFilePath, data);
    console.log('copy done!');
    }catch(err) {
        console.log(err);
    }
}*/

export function copyFile(filePath,destFilePath) {
    const eventEmitter = new EventEmitter();

    readFile(filePath, {
        encoding: 'utf-8'
    }).then((data) => {
        eventEmitter.emit('readDone',data);
        return writeFile(destFilePath,data);
    }).then(() => {
        eventEmitter.emit('copyDone');
    }).catch((err) =>  {
        eventEmitter.emit('error',err);
    });

    return eventEmitter;
}
