import { emitKeypressEvents } from "node:readline";
const input = process.stdin, output = process.stdout;

if (input.isTTY) emitKeypressEvents(input);
else process.abort();

let debug = false;

const keypressHandler =(_,key)=> {
    const QUIT = '\x11', DEBUG = '\x04';
    switch (key.sequence) {
        case QUIT: process.exit(0);
        case DEBUG: debug = !debug; break;
    }
}
input.on('keypress',keypressHandler)

const frameHandler =$=> {
    const clear = '\x1b[2J\x1b[3J\x1b[H';
    output.write(clear);
}
setInterval(frameHandler,1)