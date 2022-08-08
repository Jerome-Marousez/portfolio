<template>

  <div class="modal-backdrop">

    <div
        class="modal-container"
        role="dialog"
        aria-labelledby="header"
        aria-modal="true"
    >

      <div class="modal-header">
        <slot name="header" id="header"></slot>
      </div>

      <div class="modal-body">
        <slot></slot>
      </div>

      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>

    </div>

  </div>


</template>


<script>
export default {
  name: "Modal",

  inject: [],

  components: {},

  props: {
    text: String,
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

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  margin-inline: var(--responsive-spacing);
  background: white;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding: 1em;
  box-shadow: 0 0 2em var(--shadow);
}

.modal-header {

}

.modal-body {

}

.modal-footer {

}

</style>