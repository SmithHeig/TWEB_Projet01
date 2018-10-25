function getUserFriends(userContributors = [[]]){
  const friends = {};
  const countContribution = contributors => {
    contributors.forEach(values => {
      friends[values.login] !== undefined ? friends[values.login] += 1 : friends[values.login] = 1;
    });
  };
  userContributors.forEach(countContribution);
  return friends;
}

module.exports = {
  getUserFriends,
};