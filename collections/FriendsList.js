FriendList = new Mongo.Collection('friendlist');

FriendList.allow ({
  insert(userId, doc) {
    return !!userId;
  },
  update(userId, doc) {
    return !!userId;
  }
});

Meteor.methods({
  addFriend(id, firstName, lastName) {
    FriendList.insert({
      'id' : id,
      'firstName': firstName,
      'lastName': lastName,
      'friendOf': Meteor.userId()});
  },
  removeFriend(friend) {
    FriendList.remove(friend);
  }
});
