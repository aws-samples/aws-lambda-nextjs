# Running Next.js applications with Serverless services on AWS

This example walks you through how to run a Next.js application on Serverless services on AWS. There is a sample AWS Cloud Development Kit (CDK) application and AWS Serverless Application Model (SAM) application. Either CDK or SAM create a demo environment showing how you can use Amazon API Gateway, AWS Lambda, Amazon CloudFront, and Amazon S3 to run a Next.js application.

## Solution Architecture

![Next.js Serverless Architecture](nextjs-serverless-architecture.png)

## Requirements

- Node.js 16.x
- [AWS Lambda Web Adapter](https://github.com/awslabs/aws-lambda-web-adapter)
- AWS CDK 2.30.x
- AWS SAM CLI 1.53.x
- Configured AWS credentials

## Folder structure

- /nextjs-lambda-cdk - Next.js application deployed with AWS CDK
- /nextjs-lambda-sam - Next.js application deployed with AWS SAM

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This sample code is licensed under the MIT-0 License. See the LICENSE file.

