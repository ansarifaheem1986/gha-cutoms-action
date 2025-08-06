const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
    // 1) Get some input values 
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', {required: true });
    const distFolder = core.getInput('dist-folder', {required: true });

    //2) Upload the file
    const s3Uri = `s3://${bucket}`
    //exec.exec('aws s3 sync <local-fodler> <s3-bucket>')
    exec.exec(`aws s3 sync ${dist-folder} ${bucket} --region ${bucketRegion}`) 
    core.notice('Hello from my custom JavaScript Action!');

}

run();


/* Install the node in your system and run the below 
npm init -y 
npm install @action/core @actions/github @actions/exec
then in the main.js import those packages. */