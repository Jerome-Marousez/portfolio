<template>

  <section class="view" aria-label="Home">

    <Fumes color="var(--neon)" opacity=".04"/>
    <Fumes color="var(--neon)" opacity=".02" :motion="true"/>

    <Card backgroundImage="var(--conic-neon)" animationSpeed="10s" edge="2em">
      <template v-slot:default>

        <h5>Hi, I'm</h5>
        <h1>Jerome Marousez</h1>
        <h4 class="typedText">F{{ typedText }}</h4>

        <FancyButton
            @click="$router.push('/projects')"
            @keyup.enter="$router.push('/projects')"
            colorAlpha="var(--neon)"
            colorSolid="var(--neon-solid)"
        >
          <template v-slot:default>
            See My Work
          </template>
        </FancyButton>

        <div class="technologies">

          <FancyIcon customClass="html" label="HTML">
            <template v-slot:icon>
                <i class="fab fa-html5"/>
            </template>
            <template v-slot:label>HTML</template>
          </FancyIcon>

          <FancyIcon customClass="css" label="CSS">
            <template v-slot:icon>
              <i class="fab fa-css3-alt"/>
            </template>
            <template v-slot:label>CSS</template>
          </FancyIcon>

          <FancyIcon customClass="js" label="Javascript">
            <template v-slot:icon>
              <i class="fab fa-js-square"/>
            </template>
            <template v-slot:label>JS</template>
          </FancyIcon>

          <FancyIcon customClass="vue" label="Vue 3">
            <template v-slot:icon>
              <i class="fab fa-vuejs"/>
            </template>
            <template v-slot:label>VUE3</template>
          </FancyIcon>

          <FancyIcon customClass="node" label="Node-JS">
            <template v-slot:icon>
              <i class="fab fa-node-js"/>
            </template>
            <template v-slot:label>NODE</template>
          </FancyIcon>

        </div>

      </template>
    </Card>

  </section>

</template>

<script>
import typeText from "@/mixins/typeText";
import Card from "@/components/Card";
import FancyIcon from "@/components/tools/FancyIcon";
import Fumes from "@/components/tools/Fumes";
import FancyButton from "@/components/tools/FancyButton";

export default {
  name: 'HomeView',
  components: {
    Card,
    FancyIcon,
    FancyButton,
    Fumes,
  },

  mixins: [typeText],

  inject: [],

  props: {},

  emits: [],

  data() {
    return {
      activeTab: 'TabA',
    }
  },

  provide() {
    return {}
  },

  computed: {},

  methods: {

  },

  unmounted() {
  },

  mounted() {
    setTimeout(() => {
      this.typeText('ront-end developer')
    }, 1000)
  },

  created() {
  },


}
</script>


<style scoped>

.typedText::after {
  content: "";
  position: absolute;
  width: .2em;
  height: 1em;
  margin-left: .1em;
  background-color: var(--text-color);
  animation: blink .6s ease infinite;
}

@keyframes blink {
  0% {opacity: 0;}
  100% {opacity: .5;}
}

.technologies {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;

  /*  ROOT SIZE OF ALL ICONS  */
  font-size: 1em;
}

</style>