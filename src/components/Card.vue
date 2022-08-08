<template>

    <div class="card-bg">
      <div class="card">
        <slot>

        </slot>
      </div>
    </div>

</template>


<script>
export default {
  name: "Card",

  props: {
    backgroundImage: String,
    background: String,
    animationSpeed: String,
    edge: String,
  },


}
</script>


<style scoped>

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: .5em;
  padding: 2.5em;
  width: var(--responsive-width);
}

.card::before {
  position: absolute;
  z-index: -1;
  content: '';
  inset: 1px;
  background-color: var(--bg-primary);

  clip-path: polygon(
      var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
      calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
      calc(100% - var(--border-width)) var(--border-width),
      calc(100% - var(--border-width))
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
      calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
      calc(100% - var(--border-width)),
      calc(var(--border-width)) calc(100% - var(--border-width))
  );
}

.card-bg {
  position: relative;

  --border-width: 0.5em;
  --edge-size: v-bind(edge);

  clip-path: polygon(
    var(--border-width) calc(var(--edge-size) + var(--border-width) * 0.5),
    calc(var(--edge-size) + var(--border-width) * 0.5) var(--border-width),
    calc(100% - var(--border-width)) var(--border-width),
    calc(100% - var(--border-width))
    calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5)),
    calc(100% - calc(var(--edge-size) + var(--border-width) * 0.5))
    calc(100% - var(--border-width)),
    calc(var(--border-width)) calc(100% - var(--border-width))
  );
}

.card-bg::before {
  content: '';
  position: absolute;
  z-index: -1;
  inset: -150%;
  background: v-bind(background);
  background-image: v-bind(backgroundImage);

  transform-origin: center;
  animation: spin v-bind(animationSpeed) linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>