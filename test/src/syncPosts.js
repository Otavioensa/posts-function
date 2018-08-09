const { tz: timezone } = require('moment-timezone')
const { expect } = require('chai');

const { syncPosts } = require('../../src/syncPosts');
const { getPostsPerDate } = require('../../src/database/posts')

describe('Lambda function', () => {
    describe('when syncPosts is called', async () => {
    const date = timezone('America/Sao_Paulo').format('YYYY-MM-DD')
    
    it('should retun postsPerDate successfully', async () => {
      await syncPosts();
      const { Item: response } = await getPostsPerDate(date)
      expect(response.day).to.be.equal(date);
      expect(response).to.have.property('posts')
    });
  });
});
