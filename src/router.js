import Vue from "vue";
import Router from "vue-router";
import Student from '@/views/Student'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Student",
      component: Student
    }
  ]
});
