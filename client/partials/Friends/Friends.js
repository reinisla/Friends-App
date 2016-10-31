Template.Friends.onCreated(function () {
  this.autorun(() => {
    this.subscribe('friendlist');
  });
});
Template.Friends.helpers ({
  userFriends(){
    let friend =  Meteor.userId();
    return FriendList.find({'friendOf' : friend});
  }
});
Template.Friends.events ({
  'click .remove-button': function () {
    let friend = FriendList.findOne({'id' : this._id });
    Meteor.call('removeFriend', friend);

    }
});
