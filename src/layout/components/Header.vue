<template>
  <header>
    <div class="header" id="main-navbar">
      <div class="avatar">
        <img src="../../assets/images/avatar-header.jpeg" alt="">
      </div>
      <div class="menu">
        <ul>
          <li v-scroll-to="'#home'">Home</li>
          <li v-scroll-to="'#about-me'">About me</li>
          <li v-scroll-to="'#experience'">Experience</li>
          <li v-scroll-to="'#education'">Education</li>
          <li v-scroll-to="'#skills'">Skills</li>
          <li v-scroll-to="'#instagram'">Instagram</li>
          <li v-scroll-to="'#quote'">Quote</li>
          <li v-scroll-to="'#contact'">Contact</li>
        </ul>
      </div>
      <span @click="drawer = true" class="ham-icon"><i class="fas fa-bars"></i></span>
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

@Options({

})
export default class Header extends Vue {
  drawer: boolean = false;

  created() {
    library.add(faBars);
    dom.watch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  .header {
    background: #fff;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;

    img {
      width: 60px;
      height: 80px;
      object-fit: contain;
      object-position: center center;
    }

    .menu {
      @media (max-width: 768px) {
        display: none;
        transition: all 0.2s ease-out;
      }

      margin: auto 0;
      ul {
        display: flex;
        li {
          color: #47312B;
          padding: 0 10px;

          &:hover {
            color: #65534e;
            cursor: pointer;
            transition: color 0.4s ease 0s;
          }
        }
      }
    }

    .ham-icon {
      display: none;
      margin: auto 0;
      @media (max-width: 768px) {
        display: block;
      }
    }

    &.navbar-scroll {
      .menu {
        background: green($color: #000000);
      }
    }
  }
}
</style>
