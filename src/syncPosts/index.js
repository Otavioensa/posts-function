const requestPosts = require('./requestPosts');
const { insertPosts } = require('../database/posts');

const syncPosts = async ()  => {
  const { data: posts } = await requestPosts();
  await insertPosts(posts);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Job executed successfully',
    }),
  }
}

module.exports.syncPosts = syncPosts;