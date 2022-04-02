<template>
  <div id="nav">
    <router-link to="/login" />
    <router-link to="/" />
  </div>
  <router-view />
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 color: #2c3e50;
}
body {
 background-color: #f0f2f5;
}
</style>
