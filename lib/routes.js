Accounts.onLogin(function (){
  FlowRouter.go ('recipe-book'); //requires package to work
});
Accounts.onLogout(function (){
  FlowRouter.go ('home');
});

FlowRouter.triggers.enter([function(context, redirect){
  if (!Meteor.userId()) {//if user does not exist
    FlowRouter.go('home'); //redirect to home
  }
}]);
FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()){
      FlowRouter.go ('recipe-book');//if user loged in go
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    // google analytics
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Recipes'}); //must be caps "Recipes"
  }
});

FlowRouter.route('/recipe/:id', { //can be _id
  name: 'recipe',
  action() {
    // google analytics
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'RecipeSingle'}); //publish content in main window
  }
});
FlowRouter.route('/shopping-list', { //can be _id
  name: 'shopping-list',
  action() {
    // google analytics
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'ShoppingList'}); //publish content in main window
  }
});

FlowRouter.route('/menu', { //can be _id
  name: 'menu',
  action() {
    // google analytics
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Menu'}); //publish content in main window
  }
});
