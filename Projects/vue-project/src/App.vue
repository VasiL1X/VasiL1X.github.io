<template>
      <div class="container-fluid bg-light">
        <nav class="navbar navbar-expand-md navbar-toggleable-md navbar-dark bg-dark rounded-bottom px-100">
          <div class="navbar-collapse justify-content-between">
            <a class="navbar-brand title text-light">Test for You</a>
            <ul class="navbar-nav">
              <router-link tag='li' class="nav-item" to='/Users' exact active-class="active">
              <a class="nav-link">Users</a>
              </router-link>
              <router-link tag='li' class="nav-item" to='/Courses' exact active-class="active">
              <a class="nav-link">Courses</a>
              </router-link>
            </ul>
          </div>
        </nav>
        <router-view></router-view>
       </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
.title {
  font: 20pt sans-serif;
  font-family: 'Indie Flower';
}
.px-100 {
  padding: 0 100px;
}
</style>
