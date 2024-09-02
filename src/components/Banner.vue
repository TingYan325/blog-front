<script setup lang="ts">

</script>

<template>
  <div id="banner">
    <div class="container">
      <div id="title_container">
        <div id="banner-title">
          <div id="site_title">
            <router-link to="/">TingYan & Rahkah</router-link>
          </div>

          <div id="blog_index">
            <router-link to="/">Blog</router-link>
            <router-link to="/">Index</router-link>
          </div>

          <div id="social">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding:0 25% 0 25%  ;
}

#banner {
  width: 100%;
  background: black;
  padding: 0 0 0.7rem 0;
  overflow: hidden;
}

#title_container {
  max-width: 44rem;
  padding: 0 5em 0 5em;
}

#banner-title {
  margin: 0;
}

#site_title {
  padding: 1em 0 0.5em 0;
  font-size: 2.5em;
}

#site_title a {
  color: #F8F8F8;
  text-decoration: none;
  font-weight: 700;
}

#blog_index {
  float: left;
  padding: 0.3em 0;
}

#blog_index a {
  font-size: 1.0em;
  line-height: 1.5em;
  padding-right: 1.5em;
  text-decoration: none;
  color: #F8F8F8;
  transition: 0.15s;
  transition-property: opacity;
  opacity: 0.75;
}
</style>