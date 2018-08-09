const { DynamoDB } = require('aws-sdk')

const { config, tableName } = require('../../../config/database')

const dynamodb = new DynamoDB(config)

const createPostsSchema = {
  AttributeDefinitions: [
    {
      AttributeName: 'day',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'day',
      KeyType: 'HASH',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  TableName: tableName,
}

const listTables = async () => {
  const { TableNames: tables } = await dynamodb.listTables().promise()
  return tables
}

const isExistingTable = tables => tables.length > 0

const createCurveDiTable = (tables) => {
  if (!isExistingTable(tables)) {
    return dynamodb.createTable(createPostsSchema).promise().catch()
  }

  return true
}

(async () => {
  const tables = await listTables()
  await createCurveDiTable(tables)
})()
