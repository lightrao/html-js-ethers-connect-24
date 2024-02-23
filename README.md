# html-js-ethers-connect-24

A small html file to show how to connect with metamask from the front-end.

## What's going on in the front end with wallets

If your chrome installed metamask, when you inspect your chrome and go over to sources, you can see MetaMask being injected from brower extention.
And in the console, window.ethereum object is append by metamask extention. Wallet can connect blockchain node(provider) by RPC URL, your browser connect to wallet :)

## Requirements

- vscode
- git
- Nodejs & npm
- Metamask
- liveserver(vscode extention)
- browserify

Install Nodejs & npm just run:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install node
```

## How to do

- run command:

```bash
mkdir html-js-ethers-connect-24
cd html-js-ethers-connect-24
code .
```

- create index.html, index.js file.
- you can run html with js file using liveserver.
- for installing ethers:

```bash
npm init -y
npm install --save ethers@^5.5.3
```

- use a deployed SimpleStorage contract to test, we need abi and contract address(sepolia).
- we need to browserify our javascript, transpile js so front end can understand:

```bash
npm install -g browserify # install tool
browserify index.js --standalone bundle -o ./dist/bundle.js # transplile index.js into browerified index.js
```

## Use liveserver to run index.html to interact with contract SimpleStorage

## Put project to github

- add .gitignore file.
- initialize repository
- push to github
