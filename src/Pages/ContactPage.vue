<template>

  <section class="view" aria-label="Contact">

    <Fumes color="var(--neon-blue)" opacity=".05"/>
    <Fumes color="var(--neon-blue)" opacity=".03" :motion="true"/>

    <Card backgroundImage="var(--conic-neon-blue)" animationSpeed="10s" edge="2em">
      <template v-slot:default>

        <h1>Jerome Marousez</h1>
        <h4 class="typedText">
          <span class="icon"><i class="fas fa-map-marker-alt"/></span>

          <span>Y{{ typedText }}</span>
        </h4>

        <div class="contact-btn-container">
          <FancyButton
              @click="copyText"
              colorAlpha="var(--neon-blue)"
              colorSolid="var(--neon-solid-blue)"
          >
            <template v-slot:default>
              <input
                  v-on:focus="$event.target.select()"
                  ref="clone"
                  readonly
                  class="hidden-field"
                  :value="text"/>
              {{ contactBtn }}
            </template>
          </FancyButton>
          <span v-if="isCopied" class="email">{{ text }}</span>
        </div>

      </template>
    </Card>

  </section>

</template>


<script>
import Fumes from "@/components/tools/Fumes";
import Card from "@/components/Card";
import typeText from "@/mixins/typeText";
import FancyButton from "@/components/tools/FancyButton";

export default {
  name: "Contact",

  components: {
    Fumes,
    Card,
    FancyButton,
  },

  mixins: [typeText],

  data() {
    return {
      text: 'jeromemarousez@gmail.com',
      contactBtn: 'Contact Me',
      isCopied: false,
    }
  },

  methods: {
    copyText() {
      this.$refs.clone.focus();
      this.isCopied = true
      this.contactBtn = 'Copied to clipboard'
      document.execCommand('copy');
    },
  },

  mounted() {
    setTimeout(() => {
      this.typeText('ork, England')
    }, 1000)
  },

}
</script>


<style scoped>
.typedText .icon {
  color: var(--neon-solid-blue);
  margin-right: .3em;
}
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

.hidden-field {
  position: fixed;
  top: -100px;
  opacity: 0;
}

.contact-btn-container{
  align-self: flex-end;
  position: relative;
}
.email {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  font-size: .8em;
  user-select: all;
  cursor: text;
}
</style>