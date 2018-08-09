import Router from 'ampersand-router'

export default Router.extend({
  routes: {
    '': "public",
    "repos": "repos",
  },
  
  public () {
    console.log('PUBLIC PAGE');
  },
  
  repos (){
    console.log("REPOS PAGE");
  },
})