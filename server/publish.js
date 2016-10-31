Meteor.publish ('recipes', function(){
  return Recipes.find({
      author: this.userId // finds only user recipes
  });
});

Meteor.publish ('singleRecipe', function(id){
  check(id, String);
  return Recipes.find({
      _id: id // subscribes only for one recipe
  });
});

Meteor.publish ('allUsers', function(){
  if(Roles.userIsInRole(this.userId, 'admin')){
    return Meteor.users.find({});
  }
})
Meteor.publish('friendlist', function() {
  return FriendList.find({
    friendOf : this.userId
  });
});
