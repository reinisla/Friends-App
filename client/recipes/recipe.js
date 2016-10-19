Template.Recipe.onCreated ( function (){
  this.editMode = new ReactiveVar(false);
});
Template.Recipe.events ({ //update delete recipes
  'click .toggle-menu'() {
    Meteor.call ('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash'(){
    Meteor.call('deleteRecipe', this._id);
  },
  'click .fa-pencil'(event, template){
    // Session.set('editMode', !Session.get('editMode')); //if session edit mode is on show edit
    template.editMode.set(!template.editMode.get()); //complex stuff about adding reactive var to edit
  }
});

Template.Recipe.helpers ({
  updateRecipeId: function() {
    return this._id;
  },
  editMode(){
    return Template.instance().editMode.get(); // reactive stuff
  }

});
