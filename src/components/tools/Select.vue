<template>
  <div class="select-container">

    <legend v-if="modelValue.length" class="legend">
      {{ legend }}
    </legend>

    <input
        type="text"
        :placeholder="modelValue.length ? '' : proxy"
        :value="value" :id="'select-' + uid"
        class="select" role="listbox"
        readonly
        aria-readonly="true"
        @click.self="toggleMenu"
    />
      <div v-if="modelValue.length" class="select-cross" @click="removeSelection"><i class="fas fa-times"/></div>
      <div :id="'select-arrow-' + uid" class="select-arrow" @click="toggleMenu"><i class="fas fa-chevron-down"/></div>

    <div v-show="menuOpen" :id="'menu-container-' + uid" class="glass">
      <div v-for="option in options" :key="option">
        <div class="option" role="option" @click="selectOption">{{ option.charAt(0).toUpperCase() + option.slice(1) }}</div>
      </div>
    </div>


  </div>

</template>

<script>
export default {
  name: "Select",

  props: {
    modelValue: Array,
    placeholder: String,
    options: Array,
    multi: Boolean,
    uid: String,
  },

  data() {
    return {
      menuOpen: false,
      selected: [],
    }
  },

  computed: {
    proxy(){
      return 'Select ' + this.placeholder.charAt(0).toLowerCase() + this.placeholder.slice(1) + (this.multi ? '(s)' : '') + '...'
    },
    legend(){
      return this.placeholder.charAt(0).toUpperCase() + this.placeholder.slice(1) + (this.multi ? '(s)' : '')
    },
    value(){
      return this.selected.toString().split(',').join(', ')
    },
  },

  methods: {

    removeSelection() {
      document.querySelectorAll('.selected').forEach(opt => {
        opt.classList.remove('selected')
      })
      this.selected = []
      this.$emit ('update:modelValue', [])
    },

    handleClick(e){
      if(!e.path.some(div => div.className === 'select-container')){
        this.menuOpen = false
        const arrow = document.getElementById('select-arrow-' + this.uid)
        arrow.classList.remove('select-arrow-up')
      }
    },

    selectOption(e){
      const option = e.target
      if(!this.multi) {
        this.menuOpen = false
        this.selected = []
      } else {
        option.classList.add('selected')
      }
      if(!this.selected.some(item => item === option.innerText)){
        this.selected.push(option.innerText)
      } else {
        this.selected = this.selected.filter(item => item !== option.innerText)
        option.classList.remove('selected')
      }

      const arrow = document.getElementById('select-arrow-' + this.uid)
      arrow.classList.remove('select-arrow-up')
      this.$emit ('update:modelValue', this.selected)
    },

    toggleMenu(){
      this.menuOpen = !this.menuOpen

      if(this.menuOpen) {
        const menuContainer = document.getElementById('menu-container-' + this.uid)
        menuContainer.classList.remove('menu-container-bottom')
        menuContainer.classList.remove('menu-container-up')
        const select = document.getElementById('select-' + this.uid)
        const viewportOffset = select.getBoundingClientRect()
        const offsetTop = parseInt(viewportOffset.top.toFixed(0))

        const arrow = document.getElementById('select-arrow-' + this.uid)

        if(offsetTop < (window.innerHeight / 2).toFixed(0)) { // Open to bottom
          menuContainer.classList.remove('menu-container-top')
          menuContainer.classList.add('menu-container-bottom')
          menuContainer.scrollTop = 0
          arrow.classList.add('select-arrow-up')
        } else { // Open to top
          menuContainer.classList.remove('menu-container-bottom')
          menuContainer.classList.add('menu-container-top')
          arrow.classList.add('select-arrow-up')
        }

      } else {
        const menuContainer = document.getElementById('menu-container-' + this.uid)
        menuContainer.classList.remove('menu-container-up')
        menuContainer.classList.remove('menu-container-bottom')
        const arrow = document.getElementById('select-arrow-' + this.uid)
        arrow.classList.remove('select-arrow-up')
      }
    },
  },

  mounted(){
    document.addEventListener('click', this.handleClick)
  },

  unmounted(){
    document.removeEventListener('click', this.handleClick)
  },

  created() {

  },

}
</script>

<style scoped>
.select-container {
  margin: 1em;
  display: flex;
  width: 18em;
  flex-direction: column;
  position: relative;
  user-select: none;
}
.legend {
  position: absolute;
  top: -.6em;
  font-size: .8rem;
  display: flex;
  width: fit-content;
  height: fit-content;
  margin-left: 0.5em;
  padding-inline: .8em;
  border-radius: .5em;
  user-select: none;
  animation: grow-left .2s linear forwards;
  transform-origin: left;
  z-index: 1;
}
@keyframes grow-left {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
.select {
  box-sizing: border-box;
  font-size: inherit;
  padding: .7em;
  border: none;
  outline: none;
  overflow: hidden;
  color: inherit;
  position: relative;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 2.8em;
}
.select:focus-visible{
  border-color: var(--blue);
  box-shadow: 0 0 .3em var(--blue);
}
.select-arrow{
  cursor: pointer;
  position: absolute;
  right: .5em;
  top: .6em;
  opacity: .3;
  user-select: none;
  transition: transform .2s linear;
  transform-style: preserve-3d;
}
.select-arrow:hover{
  color: var(--text-light);
}
.select-cross{
  cursor: pointer;
  position: absolute;
  right: 2em;
  top: .6em;
  color: var(--text-disabled);
  user-select: none;
}
.select-cross:hover{
  color: var(--red-light);
}
.select-arrow-up {
  transform: rotateX(180deg);
  transition: transform .2s linear;
  transform-style: preserve-3d;
}
.menu-container-bottom {
  width: 100%;
  position: absolute;
  top: 3.2em;
  padding: .6em;
  border: none;
  animation: grow-top .2s ease-out forwards;
  transform-origin: top;
  max-height: clamp(25vh, 30vh, 50vh);
  overflow-y: auto;
  z-index: 2;
}
@keyframes grow-top {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
.menu-container-top {
  width: 100%;
  position: absolute;
  bottom: 4.6em;
  padding: .6em;
  animation: grow-bottom .2s ease-out forwards;
  transform-origin: bottom;
  max-height: clamp(25vh, 30vh, 50vh);
  overflow-y: auto;
  z-index: 2;
}
@keyframes grow-bottom {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
.option {
  padding: .6em;
  cursor: pointer;
}
.option:hover {
  font-weight: bold;
}
.selected {
  font-weight: bold;
}
</style>