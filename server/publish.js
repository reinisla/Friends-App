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
