import * as readline from 'readline';
import {browser}     from './browser';
import {like}      from './like';

let page;
void async function f () {
    page = await browser();
}();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', async (input) => {
    if (!page) return console.log('Please wait for the browser to be ready.');
    await like(page, input);
});
