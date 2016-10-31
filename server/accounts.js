var postSignUp = function(userId, info) {
  Roles.addUsersToRoles(userId, ['normal-user', info.profile.proffesion])
}
AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
