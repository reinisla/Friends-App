
Template.ShoppingList.onCreated(function(){
  var self = this;
  self.autorun(function() {
    self.subscribe('recipes');  //has to be small caps
  });
});
Template.ShoppingList.helpers ({
  shoppingList: ()=> {
    return Recipes.find({inMenu: true}); //subscribed menu items
  }
});
