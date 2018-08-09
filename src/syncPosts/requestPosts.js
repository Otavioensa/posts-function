
const axios = require('axios')

const config = require('../../config')

const requestPosts = () => {
  const requestPayload = {
    method: 'get',
    url: config.url,
  }

  return axios(requestPayload)
}

module.exports = requestPosts
