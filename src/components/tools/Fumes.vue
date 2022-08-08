<template>

  <div class="fumes-container" :class="motion ? 'animate' : ''" ref="fumes">
    <svg v-for="line in randomPolylines" :key="line" :height="height" :width="width">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color:${color}; stop-opacity:1`" />
          <stop offset="100%" :style="`stop-color:${color}; stop-opacity:1`" />
        </linearGradient>
      </defs>
      <polyline :points="line"
                style="
                  stroke: none;
                  stroke-width: 1;
                  fill-opacity: 1;
                "
                fill="url(#grad1)"
      />
    </svg>
  </div>


</template>

<script>
export default {
  name: "Fumes",

  props: {
    color: String,
    opacity: String,
    motion: Boolean,
  },

  data() {
    return {
      randomPolyline: '',
      randomPolylines: [],
      lines: 12,
      width: 2560,
      height: 2560,
      loopCount: 0,
      points: 6,
      deviation: 100,
    }
  },

  computed: {

    distancePoints(){
      return this.width / this.points
    },

  },

  methods: {

    createNewPattern(){
      this.randomPolylines = []
      for(let i = 0; i < this.lines; i++){
        this.generatePolyline(this.points, Math.floor(Math.random() * this.height))
        this.randomPolylines.push(this.randomPolyline)
        this.randomPolyline = ''
        this.loopCount = 0
      }
    },

    generatePolyline(limit, y){
      if(this.loopCount > limit) return
      const currentY = parseInt( y + Math.ceil(Math.random() * this.deviation) * (Math.round(Math.random()) ? -1 : 1))

      this.randomPolyline += this.loopCount * this.distancePoints + ',' + currentY + ' '

      this.loopCount ++
      this.generatePolyline(limit, currentY)
    },

  },

  created() {
    this.createNewPattern()
  },

}
</script>

<style scoped>

.fumes-container {
  position: absolute;
  z-index: -1;
  height: v-bind(height + 'px');
  width: v-bind(width + 'px');
  opacity: v-bind(opacity);
  transform: rotate(12deg);
}

svg {
  position: absolute;
  overflow: hidden;
}

.animate {
  animation: animate 90s ease infinite;
  perspective: 400px;
  transform-style: preserve-3d;
}

@keyframes animate {
  0%{
    transform: translateY(0) scaleY(1);
  }
  50%{
    transform: translateY(-25%) scaleY(.7);
  }
  100%{
    transform: translateY(0) scaleY(1);
  }
}

</style>