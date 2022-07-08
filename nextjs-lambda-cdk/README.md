This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deploy on AWS

First, build the Next application in standalone mode (see `app/next.config.js`)

```bash
cd app
npm run build
```

Now, run CDK commands at the root of the project
```bash
cdk bootstrap
cdk synth
```

Deploy the application

```bash
cdk deploy
```
## Next.js Static Files Support

In order to support `public` directory being deployed to S3 bucket and CloudFront, must use `/static` prefix for assets inside the `public` directory.

# CDK TypeScript project

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
