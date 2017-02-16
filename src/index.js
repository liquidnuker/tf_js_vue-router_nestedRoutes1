import Vue from "./js/vendor/vue.min.js";
import VueRouter from "./js/vendor/vue-router.min.js";

Vue.use(VueRouter);

const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
};

const Admin = {
  template: `
    <div class="admin">
      <h2>Admin {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
};

const UserHome = {
  template: "<div>user-Home</div>"
};

const UserProfile = {
  template: "<div>user-Profile</div>"
};

const UserPosts = {
  template: "<div>user-Posts</div>"
};

const AdminHome = {
  template: "<div>admin-Home</div>"
};

const AdminProfile = {
  template: "<div>admin-Profile</div>"
};

const AdminPosts = {
  template: "<div>admin-Posts</div>"
};

const router = new VueRouter({
  routes: [{
    path: "/user/:id",
    component: User,
    children: [{
      path: "",
      component: UserHome
    }, {
      path: "profile",
      component: UserProfile
    }, {
      path: "posts",
      component: UserPosts
    }]
  }, {
    path: "/admin/:id",
    component: Admin,
    children: [{
      path: "",
      component: AdminHome
    }, {
      path: "profile",
      component: AdminProfile
    }, {
      path: "posts",
      component: AdminPosts
    }]
  }]
});

const app = new Vue({
  router
}).$mount("#app");