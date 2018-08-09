const requestPosts = require('./requestPosts');
const { insertPosts } = require('../database/posts');

const syncPosts = async ()  => {
  const { data: posts } = await requestPosts();
  await insertPosts(posts);

  console.log('process finished');
}

module.exports.syncPosts = syncPosts;