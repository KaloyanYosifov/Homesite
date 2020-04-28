/**
 * External dependencies.
 */
const fs = require('fs');
const path = require('path');
const yarn = require('yarn-api');
const Aws = new require('aws-cli-js').Aws;

const runYarn = (args) => {
    return new Promise((resolve, reject) => {
        yarn(args, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        });
    });
};

const init = async () => {

    const deployerFile = path.resolve(__dirname, 'deployer-config.json');

    if (!fs.existsSync(deployerFile)) {
        throw new Error('No deployer env json file found. Please create one "deploye-config.json"');
    }

    const {
        s3AwsProfile,
        s3Bucket,
        cloudFroundInvalidatorProfile,
        cloudfrontDistributionId,
    } = JSON.parse(fs.readFileSync(deployerFile));

    // delete public folder
    fs.rmdirSync(path.resolve(__dirname, 'public'), { recursive: true });

    await runYarn(['install']);
    await runYarn(['clean']);
    await runYarn(['build']);

    const aws = new Aws();

    console.log('Removing old files from S3');
    await aws.command(`--profile ${s3AwsProfile} s3 rm "s3://${s3Bucket}/" --recursive`);

    console.log('Uploading new files to S3');
    await aws.command(`--profile ${s3AwsProfile} s3 cp --recursive ./public/ "s3://${s3Bucket}/"`);

    console.log('Invalidating cloudfront Cache');
    await aws.command(`--profile ${cloudFroundInvalidatorProfile} cloudfront create-invalidation --distribution-id ${cloudfrontDistributionId} --paths "/*"`);
};

void init();
