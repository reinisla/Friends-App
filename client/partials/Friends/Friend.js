Template.Friend.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = FlowRouter.getParam('id'); // get the id of recipe id is in url
    self.subscribe('friend', id);  //has to be small caps
  });
});
Template.Friend.helpers ({
  friend: ()=> {
    var id = FlowRouter.getParam('id'); // get the id of recipe id is in url
    return Friends.findOne({_id: id});
  }
});
