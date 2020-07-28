/*
 * @Name: First Vue-Router
 * @Author: Max Base
 * @Repository: https://github.com/BaseMax/FirstVueRouter/new/master
 * @Date: 2020-07-27
*/
const HomePage = {
  template: '#home-page',
  data: function() {
    return {
      lang:this.$route.params.lang ? this.$route.params.lang : 'en',
    };
  },
}

const CategoryPage = {
  template: '#category-page',
}

const SearchPage = {
  template: '#search-page',
}

const ApplicationPage = {
  template: '#application-page',
}

const NotFoundComponent = {
  template: '#error-page',
}

const routes = [
  { path: '/:lang?', component: HomePage },
  { path: '/:lang/search', component: SearchPage },
  { path: '/:lang/:cat', component: CategoryPage },
  { path: '/:lang/:cat/:app', component: ApplicationPage },
  { path: '/:lang/*', component: NotFoundComponent },
  { path: '*', component: NotFoundComponent }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

const app = new Vue({
  el: '#app',
  router: router,
  mounted: function() {
    // console.log(this.$router.currentRoute);
  },
});
