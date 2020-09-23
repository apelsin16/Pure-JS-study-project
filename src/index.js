import './scss/index.scss';

// eslint-disable-next-line require-jsdoc
async function start() {
  return await Promise.resolve('Async working');
}

start().then(console.log);

console.log('Hello, world');
