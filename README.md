# posts-function

Project created as a **Proof of Concept** for AWS Lambda integration. 
The idea is triggering a Lambda function via an API Gateway call and save the result at 
DynamoDB table.

## How it works
The lambda posts-function will get posts from a fake API and save it into a DynamoDB table whenever the lambda function is triggered via an API Gateway call

## Stack
- AWS DynamoDB
- AWS Lambda
- AWS API Gateway

## Diagram Flow
![Alt text](/image/workflow.png)

## AWS infrastructure provisioning
The AWS infrastructure was provided using Terraform for versioning/provisioning.
You can access the code clicking [on this link](https://github.com/Otavioensa/process-lambda-function-infrastructure).

