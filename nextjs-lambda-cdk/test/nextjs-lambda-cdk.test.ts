import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as NextjsLambdaCdk from '../lib/nextjs-lambda-cdk-stack';

test('SQS Queue and SNS Topic Created', () => {
  // Arrange
  const app = new cdk.App();
  
  // Act
  const stack = new NextjsLambdaCdk.NextjsLambdaCdkStack(app, 'MyTestStack');
  
  // Assert
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::S3::Bucket', 1);
  template.resourceCountIs('AWS::CloudFront::Distribution', 1);
});
