<template>

  <section class="view" aria-label="Projects">

    <teleport to="#modal-root">
      <Modal v-if="isModalActive">
        <template v-slot:header>Modal</template>
        <template v-slot:default>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores esse id ipsa, iusto magni optio porro quam temporibus voluptatem.</template>
        <template v-slot:footer>That was great wasn't it!</template>
      </Modal>
    </teleport>

    <Fumes color="var(--neon-red)" opacity=".07"/>
    <Fumes color="var(--neon-red)" opacity=".05" :motion="true"/>

    <div class="scrollable-section">

      <div class="projects-large-container">

        <div class="arrow-down"><i class="fas fa-chevron-down"/></div>

        <div class="thumbnail-phone" :class="phoneClass">
          <div class="header-phone">
              <div>{{ new Date().toLocaleTimeString().slice(0, -3) }}</div>
            <div class="header-icons">
              <i class="fas fa-wifi"/>
              <i class="fas fa-signal"/>
              <i class="fas fa-battery-three-quarters"/>
            </div>
          </div>
          <iframe src="https://shinmeiko.co.uk/" frameborder="0" width="100%" height="100%"></iframe>
        </div>

        <section class="projects-container" aria-labelledby="shinmeikoUK-title">

          <header>
            <h2 id="shinmeikoUK-title">ShinMeiko.co.uk</h2>
            <h4>Subcription-based stories</h4>
          </header>

          <div class="project-body">

            <div class="tech-used">
              <h4>Technologies used</h4>
              <ul>
                <li>Vue3 (options API)</li>
                <li>Node-js</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>PM2</li>
                <li>VPS</li>
              </ul>
            </div>
          </div>

          <a href="https://shinmeiko.co.uk" target="_blank">
            <FancyButton
                colorAlpha="var(--neon-red)"
                colorSolid="var(--neon-solid-red)"
            >
              <template v-slot:default>
                Visit the site
              </template>
            </FancyButton>
          </a>

        </section>
      </div>

      <div class="projects-large-container">

        <div class="thumbnail-phone" :class="phoneClass">
          <div class="header-phone">
            <div>{{ new Date().toLocaleTimeString().slice(0, -3) }}</div>
            <div class="header-icons">
              <i class="fas fa-wifi"/>
              <i class="fas fa-signal"/>
              <div style="color: var(--neon-solid-red); opacity: .6;">
                <i class="fas fa-battery-quarter"/>
              </div>
            </div>
          </div>
          <iframe src="https://shinmeiko.com/" frameborder="0" width="100%" height="100%"></iframe>
        </div>

        <section class="projects-container" aria-labelledby="shinmeikoCOM-title">

          <header>
            <h2 id="shinmeikoCOM-title">ShinMeiko.com</h2>
            <h4>Author's page</h4>
          </header>

          <div class="project-body">

            <div class="tech-used">
              <h4>Technologies used</h4>
              <ul>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>

          <a href="https://shinmeiko.com" target="_blank">
            <FancyButton
                colorAlpha="var(--neon-red)"
                colorSolid="var(--neon-solid-red)"
            >
              <template v-slot:default>
                Visit the site
              </template>
            </FancyButton>
          </a>

        </section>
      </div>

    </div>

  </section>


</template>


<script>
import Modal from "@/components/Modal";
import Fumes from "@/components/tools/Fumes";
import Card from "@/components/Card";
import FancyButton from "@/components/tools/FancyButton";

export default {
  name: "Projects",

  inject: [],

  components: {
    Modal,
    Fumes,
    Card,
    FancyButton,
  },

  props: {},

  emits: [],

  data() {
    return {
      isModalActive: false,
      options: ['Cherry', 'strawberry', 'Apple', 'kiwi', 'Papaya', 'coconut', 'Pear', 'Grape', 'Cranberry', 'Lemon'],
      selected: [],
      phoneClass: '',
    }
  },

  provide() {
    return {}
  },

  computed: {
  },

  methods: {
    hidePhone(){
      if(window.innerWidth <= 900) {
        this.phoneClass = 'hidden'
      } else {
        this.phoneClass = ''
      }
    },
  },

  unmounted() {
    window.removeEventListener('resize', this.hidePhone)
  },

  mounted() {
    window.addEventListener('resize', this.hidePhone)
  },

  created() {
  },

}
</script>


<style scoped>
.arrow-down {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  color: var(--neon-solid-red);
  transform-origin: bottom;
  animation: goDown 2s linear infinite;
}
@keyframes goDown {
  0%{
    opacity: 0;
    transform: scale(1.5);
  }
  50% {
    opacity: .5;
    transform: scale(1.25);
  }
  100%{
    opacity: 0;
    transform: scale(1);
  }
}


.projects-large-container {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2em;
}
.hidden {
  display: none;
}
.projects-container {
  width: var(--responsive-width);
  padding-inline: var(--responsive-spacing);
  min-height: calc(100vh - 9em);
  max-width: 375px;
  min-width: 375px;
  margin-block: 4em;
  padding-block: 2em;
  background: var(--bg-glass);
  -webkit-backdrop-filter: blur(1em);
  backdrop-filter: blur(1em);
  border-radius: 1em;
  border-left: .1em solid rgba(230, 230, 230, .1);
  border-bottom: .1em solid rgba(230, 230, 230, .1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 4em;
}

@supports (scrollbar-color: red blue) {
  .projects-container {
    background-color: var(--bg-glass-firefox-light);
  }
}

.project-body {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2em;
  row-gap: 2em;
}

h2 {
  color: var(--neon-solid-red);
}
h3 {
  margin-bottom: 1em;
}
.tech-used {
  display: flex;
  flex-direction: column;
  column-gap: .5em;
  row-gap: .5em;
}
.tech-used ul {
  list-style: none;
  font-size: 1rem;
}
.tech-used ul li {
  padding-block: .3em;
  padding-left: 1em;
}



.thumbnail-phone {
  position: relative;
  flex: 1;
  max-width: 375px;
  min-width: 375px;
  height: 812px;
  background-color: white;
  border-radius: 1em;
  border: 8px solid rgb(25, 25, 25);
  outline: .1em solid rgba(255, 255, 255, .03);
  box-shadow: .5em .5em .3em rgba(0, 0, 0, .2);
}
.header-phone {
  height: 2em;
  color: hsla(0, 0%, 0%, .6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: .5em;
  padding-inline: .5em;
}
.header-icons {
  display: flex;
  align-items: center;
  column-gap: .5em;
}
.thumbnail-phone iframe {
  border-radius: 0 0 .5em .5em;
  height: calc(100% - 2em);
}
.thumbnail-phone::before {
  position: absolute;
  content: '';
  width: 8em;
  height: 1em;
  border-radius: 0 0 .8em .8em;
  border-bottom: .1em solid rgba(255, 255, 255, .2);
  background-color: rgb(25, 25, 25);
  left: 50%;
  transform: translateX(-50%);
  top: -.1em;
}

</style>