# First Vue-Router

Some sample codes for using VueJs + vue-router in webpage just for fun.

Good example for starter and learning **Vue Js** easily and fastly.

### VueRouter

```
const routes = [
  { path: '/:lang?', component: HomePage },
  { path: '/:lang/search', component: SearchPage },
  { path: '/:lang/:cat', component: CategoryPage },
  { path: '/:lang/:cat/:app', component: ApplicationPage },
  { path: '/:lang/*', component: NotFoundComponent },
  { path: '*', component: NotFoundComponent }
]
```

https://github.com/BaseMax/FirstVueRouter/blob/master/asset/script.js

### Using

```
$ node serve.js
```

And open `http://localhost:8282/` in the Browser.

### Similar Repositories

https://github.com/BaseMax/FirstVuejs

---------

# Max Base

My nickname is Max, Programming language developer, Full-stack programmer. I love computer scientists, researchers, and compilers. ([Max Base](https://maxbase.org/))

<a target="_blank" href="https://www.paypal.com/donate/?cmd=_donations&business=maxbasecode@gmail.com&currency_code=USD&source=url&item_name=Donate:+Supporting+my+open+source+activities+GitHub.com/basemax&item_number=GitHub,+Inc">
<img src="https://raw.githubusercontent.com/BaseMax/BaseMax/master/donate.gif">
</a>
