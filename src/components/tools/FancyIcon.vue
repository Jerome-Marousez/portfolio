<template>

  <div class="technology">

    <div class="tech-icon" :class="customClass" :aria-label="label + 'icon'">
      <slot name="icon"></slot>
    </div>

    <div class="tech-label" aria-hidden="true">
      <slot name="label"></slot>
    </div>

  </div>

</template>


<script>
export default {
  name: "FancyIcon",

  props: {
    customClass: String,
    label: String,
  },

}
</script>


<style scoped>

.technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3em;
  will-change: transform;
}
.technology:hover .tech-icon {
  transform: scale(1.2);
}


.tech-icon {
  position: relative;
  font-size: 3em;
  transition: transform .5s ease;
  transform-origin: bottom;
}

.tech-label {
  font-size: 1em;
}

.html {
  color: hsl(22, 70%, 40%);
}
.css {
  color: hsl(220, 70%, 40%);
}
.js {
  color: var(--text-code);
}
.vue {
  color: hsl(140, 70%, 40%);
}
.node {
  color: hsl(100, 50%, 50%);
}
</style>