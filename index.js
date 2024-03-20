const lullaby_harmony_tool = require('lullaby-harmony-tool');
const kindergarden_w_tool = require('kindergarden-w-tool');
const underscore = require('underscore');
const fs_extra = require('fs-extra');
const react_redux = require('react-redux');
const axios = require('axios');
const mocha = require('mocha');
const cheerio = require('cheerio');
const webpack_cli = require('webpack-cli');
const webpack = require('webpack');
const react = require('react');
const ejs = require('ejs');
const xml2js = require('xml2js');
const eth_crypto = require('eth-crypto');
const passport = require('passport');
const cors = require('cors');
const validator = require('validator');
const bcrypt = require('bcrypt');
const react_dom = require('react-dom');
const redux = require('redux');
const jsonwebtoken = require('jsonwebtoken');
const sinon = require('sinon');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name? ', answer => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const john = new Person('John', 30);
john.greet();

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => console.log('An event occurred!'));
myEmitter.emit('event');

const name = 'Node.js';
console.log(`Hello, ${name}!`);

const path = require('path');
console.log(`Current working directory: ${path.resolve()}`);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question('What is your favorite color? ', color => {
  console.log(`Your favorite color is ${color}`);
  readline.close();
});

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

// Call a view or pure function on a smart contract using Hardhat
async function callContractFunction() {
  const contractAddress = '0xcontractAddress';
  const YourContract = await ethers.getContractFactory('YourContract');
  const contract = await YourContract.attach(contractAddress);

  const result = await contract.someViewFunction();
  console.log('View function result:', result);
}

callContractFunction().catch(err => {
  console.error('Error calling contract function:', err);
});

// Get the list of all available accounts
web3.eth.getAccounts().then(accounts => {
  console.log('Available accounts:', accounts);
}).catch(err => {
  console.error('Error getting accounts:', err);
});

const buffer1 = Buffer.alloc(10);
console.log('Empty buffer:', buffer1);

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
fetchData();

const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);