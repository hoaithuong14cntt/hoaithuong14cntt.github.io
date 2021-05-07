<template>
  <div class="wrap-about-me">
    <div class="about-me">
      <div class="wrap-content">
        <div class="content">
          <h1>About me</h1>
          <p>Experienced Web Developer with a demonstrated history of working in the computer software industry. Skilled in Vue.js, PHP, jQuery, English, and Teamwork. Strong engineering professional with a Bachelor's degree focused in General Studies from Danang Education University</p>
          <div>
            <button
              class="more-info"
              @click="isOpen = true">More info</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <span class="icon-close" @click="isOpen = false"><i class="fas fa-times"></i></span>
        thuong

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Options({
})
export default class AboutMe extends Vue {
  isOpen: boolean = false;

  created() {
    library.add(faTimes);
    dom.watch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrap-about-me {
  padding: 60px;

  .modal {
    background: rgb(0 0 0 / 84%);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;

    .modal-content {
      width: 60%;
      height: 70%;
      background: #fff;
      margin: auto;
      margin-top: 15%;
      position: relative;
      span.icon-close {
        position: absolute;
        right: -10px;
        top: -15px;
        font-size: 30px;
        color: #a68173;
      }
    }
  }

  .about-me {
    height: 450px;
    background-image: url('../assets/images/bg-about-me.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 50px;
    display: flex;
    justify-content: flex-end;

    .wrap-content {
      background: #a68173;
      color: #fff;
      width: 50%;
      display: flex;
      justify-content: center;

      .content {
        margin: auto;
        padding: 50px;
        text-align: center;
        line-height: 30px;
        font-family: cursive;

        h1 {
          font-size: 40px;
          margin: 20px 0;
        }

        .more-info {
          border: 1px solid #fff;
          background: none;
          color: #fff;
          border-radius: 21px;
          padding: 10px 20px;
          margin-top: 17px;

          &:hover {
            background: #fff;
            color: #a68173;
          }
        }
      }
    }
  }
}
</style>
