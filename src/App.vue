<template>

  <Nav/>

  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <Component :is="Component" :key="route.fullPath"/>
    </transition>
  </router-view>


</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "App",

  components: {
    Nav,
  },

}

</script>

<style>
@import './styles/normalize.css';
@import './styles/utility.css';
@import './styles/layout.css';
@import './styles/buttons.css';

@font-face {
  font-family: main;
  src: url('@/assets/fonts/main.ttf');
}
@font-face {
  font-family: orbitron;
  src: url('@/assets/fonts/orbitron.ttf');
}

</style>
