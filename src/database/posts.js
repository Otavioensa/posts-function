const { DynamoDB } = require('aws-sdk')
const { tz: timezone } = require('moment-timezone')

const { config, tableName } = require('../../config/database')

const dynamo = new DynamoDB.DocumentClient(config)

module.exports.insertPosts = (posts) => {
  const date = timezone('America/Sao_Paulo')

  const curveDiTaxPayload = {
    TableName: tableName,
    Item: {
      day: date.format('YYYY-MM-DD'),
      posts,
    },
  }

  return dynamo.put(curveDiTaxPayload).promise()
}

module.exports.getPostsPerDate = day =>
  dynamo.get({
    TableName: tableName,
    Key: { day },
  }).promise()
