<template>

  <div class="modal-backdrop">
    <div class="modal-container">
      {{ text }}
      <slot></slot>
    </div>
  </div>


</template>


<script>
export default {
  name: "Modal",

  props: {
    text: String,
  },

}
</script>


<style scoped>
.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  margin-inline: 2em;
  background: white;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding: 1em;
  box-shadow: 0 0 2em rgba(0, 0, 0, .3);
}
</style>