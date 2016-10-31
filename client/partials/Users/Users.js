import moment from 'moment';

Template.Users.onCreated(function () {
  this.autorun(() => {
    this.subscribe('allUsers');
    this.subscribe('friendlist');
  });
});

Template.Users.helpers ({
  users()
  {
    return Meteor.users.find();
  },
  userEmail(){
    return this.emails[0].address;
  },
  isAdmin(){
    return Roles.userIsInRole(this._id, 'admin') ? 'admin' : '';
  },
  dateFormat() {
    return moment(this.createdAt).format('MMMM D/YYYY');
  },
  editMode() {
    return Session.get('currentUser') ? 'edit-mode' : '';
  },
  currentEdit(){
    let user = Session.get('currentUser');
    if(user == null){
      return false
    }
    return user._id == this._id;
  },
  isFriend(){
    return FriendList.findOne({'id' : this._id });
    if (friend == null){
      return false
    }

  }
});
Template.Users.events({
  'click .user_id': function () {
    Session.set('currentUser', this);
  },
  'click .toggle-admin': function() {
    Meteor.call('toggleAdmin',this._id);
  },
  'click .close-edit-mode': function() {
    Session.set('currentUser', null);
  },
  'click .insert-button': function () {
    let friend = FriendList.findOne({'id' : this._id });
    if(friend)
    {
      Meteor.call('removeFriend', friend);
    } else {
      Meteor.call('addFriend', this._id, this.profile.firstName, this.profile.lastName);
  }}
});
