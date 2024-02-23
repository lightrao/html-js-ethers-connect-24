1.html-js-ethers-connect-24
A small html file to show how to connect with metamask from the front-end.

2.What's going on in the front end with wallets
If your chrome installed metamask, when you inspect your chrome and go over to sources, you can see MetaMask being injected from brower extention.
And in the console, window.ethereum object is append by metamask extention. Wallet can connect blockchain node(provider) by RPC URL, your browser connect to wallet :)

3. Requirements
vscode
git 
Nodejs & npm
Metamask
liveserver(vscode extention)

Install Nodejs & npm just run
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install node
```

4.How to do
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
yarn add ethers
```
or
```bash
npm install --save ethers
```
- use a deployed SimpleStorage contract to test, we need abi and contract address.
- we need to browserify our javascript, transpile js so front end can understand:
```bash
npm install -g browserify # install tool
yarn browserify index.js --standalone bundle -o ./dist/bundle.js # transplile index.js into browerified index.js
```








- add .gitignore file.
- initialize repository
- push to github

