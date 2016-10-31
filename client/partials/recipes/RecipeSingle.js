Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id'); // get the id of recipe id is in url
    self.subscribe('singleRecipe', id);  //has to be small caps
  });
});
Template.RecipeSingle.helpers ({
  recipe: ()=> {
    var id = FlowRouter.getParam('id'); // get the id of recipe id is in url
    return Recipes.findOne({_id: id});
  }
});
