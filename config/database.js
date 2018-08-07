const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  DYNAMO_ENDPOINT,
  NODE_ENV = 'production',
} = process.env;

const config = {
  development: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
    endpoint: DYNAMO_ENDPOINT,
  },
  test: {
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
    endpoint: 'http://dynamodb:8000',
  },
  production: {},
};

const tableName = 'posts'

module.exports = {
  config: config[NODE_ENV],
  tableName,
};
