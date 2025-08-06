const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    core.notice('Hello from my custom JavaScript Action!');

}

run();


/* Install the node in your system and run the below 
npm init -y 
npm install @action/core @actions/github @actions/exec
then in the main.js import those packages. 