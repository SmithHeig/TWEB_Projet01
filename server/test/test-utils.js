var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
const utils = require('../src/utils');

chai.use(chaiHttp);

// data test of schranzgu
const test1 = [ [],
[ { login: 'schranzgu',
    id: 26298925,
    node_id: 'MDQ6VXNlcjI2Mjk4OTI1',
    avatar_url: 'https://avatars3.githubusercontent.com/u/26298925?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/schranzgu',
    html_url: 'https://github.com/schranzgu',
    followers_url: 'https://api.github.com/users/schranzgu/followers',
    following_url:
     'https://api.github.com/users/schranzgu/following{/other_user}',
    gists_url: 'https://api.github.com/users/schranzgu/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/schranzgu/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/schranzgu/subscriptions',
    organizations_url: 'https://api.github.com/users/schranzgu/orgs',
    repos_url: 'https://api.github.com/users/schranzgu/repos',
    events_url: 'https://api.github.com/users/schranzgu/events{/privacy}',
    received_events_url: 'https://api.github.com/users/schranzgu/received_events',
    type: 'User',
    site_admin: false,
    contributions: 1 } ],
[ { login: 'schranzgu',
    id: 26298925,
    node_id: 'MDQ6VXNlcjI2Mjk4OTI1',
    avatar_url: 'https://avatars3.githubusercontent.com/u/26298925?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/schranzgu',
    html_url: 'https://github.com/schranzgu',
    followers_url: 'https://api.github.com/users/schranzgu/followers',
    following_url:
     'https://api.github.com/users/schranzgu/following{/other_user}',
    gists_url: 'https://api.github.com/users/schranzgu/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/schranzgu/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/schranzgu/subscriptions',
    organizations_url: 'https://api.github.com/users/schranzgu/orgs',
    repos_url: 'https://api.github.com/users/schranzgu/repos',
    events_url: 'https://api.github.com/users/schranzgu/events{/privacy}',
    received_events_url: 'https://api.github.com/users/schranzgu/received_events',
    type: 'User',
    site_admin: false,
    contributions: 8 },
  { login: 'raphaelracine',
    id: 11057872,
    node_id: 'MDQ6VXNlcjExMDU3ODcy',
    avatar_url: 'https://avatars2.githubusercontent.com/u/11057872?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/raphaelracine',
    html_url: 'https://github.com/raphaelracine',
    followers_url: 'https://api.github.com/users/raphaelracine/followers',
    following_url:
     'https://api.github.com/users/raphaelracine/following{/other_user}',
    gists_url: 'https://api.github.com/users/raphaelracine/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/raphaelracine/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/raphaelracine/subscriptions',
    organizations_url: 'https://api.github.com/users/raphaelracine/orgs',
    repos_url: 'https://api.github.com/users/raphaelracine/repos',
    events_url:
     'https://api.github.com/users/raphaelracine/events{/privacy}',
    received_events_url: 'https://api.github.com/users/raphaelracine/received_events',
    type: 'User',
    site_admin: false,
    contributions: 4 },
  { login: 'walliserkase',
    id: 11021507,
    node_id: 'MDQ6VXNlcjExMDIxNTA3',
    avatar_url: 'https://avatars0.githubusercontent.com/u/11021507?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/walliserkase',
    html_url: 'https://github.com/walliserkase',
    followers_url: 'https://api.github.com/users/walliserkase/followers',
    following_url:
     'https://api.github.com/users/walliserkase/following{/other_user}',
    gists_url: 'https://api.github.com/users/walliserkase/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/walliserkase/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/walliserkase/subscriptions',
    organizations_url: 'https://api.github.com/users/walliserkase/orgs',
    repos_url: 'https://api.github.com/users/walliserkase/repos',
    events_url: 'https://api.github.com/users/walliserkase/events{/privacy}',
    received_events_url: 'https://api.github.com/users/walliserkase/received_events',
    type: 'User',
    site_admin: false,
    contributions: 2 },
  { login: 'Yannis100',
    id: 3008631,
    node_id: 'MDQ6VXNlcjMwMDg2MzE=',
    avatar_url: 'https://avatars3.githubusercontent.com/u/3008631?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Yannis100',
    html_url: 'https://github.com/Yannis100',
    followers_url: 'https://api.github.com/users/Yannis100/followers',
    following_url:
     'https://api.github.com/users/Yannis100/following{/other_user}',
    gists_url: 'https://api.github.com/users/Yannis100/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/Yannis100/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Yannis100/subscriptions',
    organizations_url: 'https://api.github.com/users/Yannis100/orgs',
    repos_url: 'https://api.github.com/users/Yannis100/repos',
    events_url: 'https://api.github.com/users/Yannis100/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Yannis100/received_events',
    type: 'User',
    site_admin: false,
    contributions: 2 },
  { login: 'andreheig',
    id: 36642479,
    node_id: 'MDQ6VXNlcjM2NjQyNDc5',
    avatar_url: 'https://avatars3.githubusercontent.com/u/36642479?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/andreheig',
    html_url: 'https://github.com/andreheig',
    followers_url: 'https://api.github.com/users/andreheig/followers',
    following_url:
     'https://api.github.com/users/andreheig/following{/other_user}',
    gists_url: 'https://api.github.com/users/andreheig/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/andreheig/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/andreheig/subscriptions',
    organizations_url: 'https://api.github.com/users/andreheig/orgs',
    repos_url: 'https://api.github.com/users/andreheig/repos',
    events_url: 'https://api.github.com/users/andreheig/events{/privacy}',
    received_events_url: 'https://api.github.com/users/andreheig/received_events',
    type: 'User',
    site_admin: false,
    contributions: 1 } ],
[],
[ { login: 'schranzgu',
    id: 26298925,
    node_id: 'MDQ6VXNlcjI2Mjk4OTI1',
    avatar_url: 'https://avatars3.githubusercontent.com/u/26298925?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/schranzgu',
    html_url: 'https://github.com/schranzgu',
    followers_url: 'https://api.github.com/users/schranzgu/followers',
    following_url:
     'https://api.github.com/users/schranzgu/following{/other_user}',
    gists_url: 'https://api.github.com/users/schranzgu/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/schranzgu/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/schranzgu/subscriptions',
    organizations_url: 'https://api.github.com/users/schranzgu/orgs',
    repos_url: 'https://api.github.com/users/schranzgu/repos',
    events_url: 'https://api.github.com/users/schranzgu/events{/privacy}',
    received_events_url: 'https://api.github.com/users/schranzgu/received_events',
    type: 'User',
    site_admin: false,
    contributions: 10 } ],
[ { login: 'schranzgu',
    id: 26298925,
    node_id: 'MDQ6VXNlcjI2Mjk4OTI1',
    avatar_url: 'https://avatars3.githubusercontent.com/u/26298925?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/schranzgu',
    html_url: 'https://github.com/schranzgu',
    followers_url: 'https://api.github.com/users/schranzgu/followers',
    following_url:
     'https://api.github.com/users/schranzgu/following{/other_user}',
    gists_url: 'https://api.github.com/users/schranzgu/gists{/gist_id}',
    starred_url:
     'https://api.github.com/users/schranzgu/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/schranzgu/subscriptions',
    organizations_url: 'https://api.github.com/users/schranzgu/orgs',
    repos_url: 'https://api.github.com/users/schranzgu/repos',
    events_url: 'https://api.github.com/users/schranzgu/events{/privacy}',
    received_events_url: 'https://api.github.com/users/schranzgu/received_events',
    type: 'User',
    site_admin: false,
    contributions: 1 } ] ];

describe('Transform Github list of repos into object with the number of collab', () => { 
  it('should have 4 friends + him with 1 value each and him value 4', function(done) {
    let result = utils.getUserFriends(test1);
    result.should.be.an('object');
    result.should.have.property('schranzgu').equal(4);
    result.should.have.property('andreheig').equal(1);
    result.should.have.property('walliserkase').equal(1);
    result.should.have.property('Yannis100').equal(1);
    result.should.have.property('raphaelracine').equal(1);
    done();
  }),
  it('try with an empty array', function(done) {
    let result = utils.getUserFriends([]);
    let resultExpected={}; 
    result.should.be.an('object');
    result.should.be.empty;
    done();
  })
});