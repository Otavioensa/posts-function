# lambda-posts-function

Project created as a **Proof of Concept** for AWS Lambda integration.

## How it works
The lambda-posts-function will get posts from a fake API and save it into a DynamoDB table whenever the lambda function is triggered

## Stack
- AWS DynamoDB
- AWS Lambda

## Diagram Flow
![Alt text](/image/diagram.png)

## AWS infrastructure provisioning
The AWS infrastructure was provided using Terraform for versioning/provisioning.
You can access the code clicking [on this link](https://github.com/Otavioensa/process-lambda-function-infrastructure).

