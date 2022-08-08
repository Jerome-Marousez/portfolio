<template>

  <button class="btn call-to-action">
    <slot>

    </slot>
  </button>


</template>


<script>
export default {
  name: "FancyButton",

  inject: [],

  components: {},

  props: {
    colorSolid: String,
    colorAlpha: String,
  },

  emits: [],

  data() {
    return {}
  },

  provide() {
    return {}
  },

  computed: {},

  methods: {},

  unmounted() {
  },

  mounted() {
  },

  created() {
  },

}
</script>


<style scoped>
.call-to-action {
  position: relative;
  outline: .1em solid v-bind(colorSolid);
  border-radius: .15em;
  width: fit-content;
  padding-inline: var(--responsive-spacing);
  padding-block: .5em;
  margin-block: 2em;
  align-self: flex-end;
  color: v-bind(colorSolid);
  overflow: hidden;
}
.call-to-action:focus-visible {
  color: var(--text-color);
  outline: .1em solid var(--text-color);
  outline-offset: .5em;
  transition: all .5s;
}
.call-to-action:hover,
.call-to-action:active  {
  color: var(--bg-primary);
  font-weight: bold;
  animation: glow .5s ease-out forwards;
}
.call-to-action:not(:hover) {
  animation: turn-off .5s ease-out forwards;
}
@keyframes glow {
  100% {
    box-shadow: 0 0 1.5em v-bind(colorAlpha);
  }
}
@keyframes turn-off {
  0% {
    box-shadow: 0 0 1.5em v-bind(colorAlpha);
  }
  100% {
    box-shadow: 0 0 0 v-bind(colorAlpha);
  }
}


.call-to-action::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: -.1em;
  transform: scaleY(0);
  opacity: .3;
  background-color: v-bind(colorSolid);
  color: v-bind(colorSolid);
  transform-origin: center;
  will-change: background-color, opacity;
  transition: transform .3s ease-in,
              opacity .3s ease-in;
}
.call-to-action:hover::after,
.call-to-action:active::after {
  transform: scaleY(1);
  opacity: 1;
}
</style>