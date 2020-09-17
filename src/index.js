import './scss/index.scss';

async function start() {
    return await Promise.resolve('Async working');
};

start().then(console.log);

console.log('Hello, world');
