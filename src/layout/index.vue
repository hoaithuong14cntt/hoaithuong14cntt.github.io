<template>
  <div class="layout">
    <Header/>
    <Home id="home"/>
    <AboutMe id="about-me"/>
    <Experience id="experience"/>
    <Education id="education"/>
    <Skills id="skills"/>
    <Instagram id="instagram"/>
    <Quote id="quote"/>
    <Contact id="contact"/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from './components/Header.vue';
import Home from '@/components/Home.vue';
import AboutMe from '@/components/AboutMe.vue';
import Experience from '@/components/Experience.vue';
import Education from '@/components/Education.vue';
import Skills from '@/components/Skills.vue';
import Instagram from '@/components/Instagram.vue';
import Quote from '@/components/Quote.vue';
import Contact from '@/components/Contact.vue';
import Footer from './components/Footer.vue';

@Options({
  components: {
    Header,
    Home,
    AboutMe,
    Experience,
    Education,
    Skills,
    Instagram,
    Quote,
    Contact,
    Footer
  }
})
export default class Layout extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.layout {
  background: #fff;
}
</style>
