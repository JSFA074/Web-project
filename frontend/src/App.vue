<template>
  <div>
    <MyHeader />
    <router-view />
    <MyFooter />
  </div>
</template>

<script>

import MyHeader from "./components/MyHeader.vue"
import MyFooter from "./components/MyFooter.vue"

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
}

</script>

<style>
body {
  margin: 0;
  font-family: 'Karla', sans-serif;
  font-size: 14px;
  color: #6c7279;
  background-color: #f4e285;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  opacity: 0;
}

::-webkit-scrollbar-thumb {
  background-color: #e99072;
  border-radius: 12px;
  transition: all .1s linear;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #bc4b51;
}
</style>
