<template>
  <div class="contact">
    <div class="main-title">
      <h1>Contact</h1>
    </div>
    <div class="content">
      <div class="text">
        <p>Want to hire me or chat with me?</p>
        <p>Then write me an email at <strong>"hoaithuong14cntt@gmail.com"</strong></p>
        <p class="otherwise">Otherwise</p>
        <p>Let's be friend !</p>
      </div>
      <div class="social">
        <router-link to="https://www.facebook.com/thuong.huynh.1238/">
          <img src="../assets/images/logo-facebook.png" alt="facebook">
        </router-link>
        <router-link to="https://www.instagram.com/thuong.hth/">
          <img src="../assets/images/logo-instagram.jpeg" alt="instagram">
        </router-link>
        <router-link to="https://github.com/hoaithuong14cntt">
          <img src="../assets/images/logo-githug.png" alt="githug">
        </router-link>
        <router-link to="https://www.linkedin.com/in/thuong-huynh-thi-hoai-5615911b0/">
          <img src="../assets/images/logo-linkedIn.jpg" alt="linkedin">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Contact extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact {
  text-align: center;
  padding: 10px 0;

  .main-title {
    margin: 30px 0;

    h1 {
      font-size: 40px;
      margin: 0 100px;
      color: #a68173;
      font-weight: bold;
      padding: 20px 0;
      border-bottom: 2px solid #a68173;
    }
  }

  .content {
    .text {
      line-height: 30px;
      font-family: fantasy;

      p {
        strong {
          font-weight: bold;
          font-style: italic;
        }

        &.otherwise {
          font-weight: bold;
          font-size: 25px;
          font-style: italic;
          font-family: cursive;
          text-shadow: 0 0 black;
          margin: 25px 0;
        }
      }
    }

    .social {
      margin: 30px 0;
      img {
        width: 40px;
        margin: 0 20px;
      }
    }
  }
}
</style>
