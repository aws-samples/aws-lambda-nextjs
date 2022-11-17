This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy on AWS

1. Clone git repository and navigate to CDK project

```bash
git clone https://github.com/aws-samples/aws-lambda-nextjs.git
cd nextjs-lambda-cdk
```

2. Install CDK

```bash
npm install

```

3. Install and build the Next application in standalone mode (see `app/next.config.js`)

```bash
cd app
npm install
npm run build
```

4. Now navigate back to root of the CDK project and run CDK commands

```bash
cd ..
cdk bootstrap
cdk synth
```

5. Deploy the application

```bash
cdk deploy
```

## Next.js Static Files Support

In order to support `public` directory being deployed to S3 bucket and CloudFront, must use `/static` prefix for assets inside the `public` directory.

## CDK TypeScript project

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Destroy CDK app resources

To clean up your CDK app run the below command:
```bash
cdk destroy --all
```

Please be aware that some resources aren't automatically deleted and either need a retention policy that allows deletes or you need to delete them manually in you AWS account.
