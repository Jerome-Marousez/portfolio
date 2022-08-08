<template>

  <nav>
    <router-link to="/" class="home-link">Home</router-link>
    <router-link to="/projects" class="projects-link">Projects</router-link>
    <router-link to="/contact" class="contact-link">Contact</router-link>
  </nav>

</template>


<script>
export default {
  name: "Nav",

}
</script>


<style scoped>

nav {
  position: absolute;
  right: var(--scrollbar-width);
  z-index: 100;
  width: fit-content;
  display: flex;
  align-self: flex-end;
  padding-inline: var(--responsive-spacing);
  font-size: var(--responsive-text);
  user-select: none;
  background: var(--bg-glass);
  -webkit-backdrop-filter: blur(.5em);
  backdrop-filter: blur(.5em);
  border-radius: 0 0 0 1em;
  border-left: .1em solid rgba(230, 230, 230, .1);
  border-bottom: .1em solid rgba(230, 230, 230, .1);
}

@supports (scrollbar-color: red blue) {
  nav {
    background-color: var(--bg-glass-firefox);
  }
}

nav a {
  position: relative;
  text-decoration: none;
  padding-inline: .5em;
  padding-block: 1em;
  transition: background-color .5s ease;
  color: var(--text-color);
  cursor: pointer;
}

.home-link:hover,
.home-link:active {
  color: var(--neon-solid);
}
.projects-link:hover,
.projects-link:active {
  color: var(--neon-solid-red);
}
.contact-link:hover,
.contact-link:active {
  color: var(--neon-solid-blue);
}

.home-link.router-link-exact-active {
  color: var(--neon-solid);
}
.projects-link.router-link-exact-active {
  color: var(--neon-solid-red);
}
.contact-link.router-link-exact-active {
  color: var(--neon-solid-blue);
}

nav a:focus-visible {
  color: var(--text-color);
  border-bottom: .3em solid var(--text-color);
}

nav a::before {
  content: '<';
}
nav a::after {
  content: '/>';
}
nav a.router-link-exact-active::after {
  content: '>';
}
</style>