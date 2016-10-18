FlowRouter.route('/', {
  name: 'home',
  action() {
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
