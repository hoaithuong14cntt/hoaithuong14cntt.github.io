<template>
  <div class="instagram">
    <div class="content">
      <img src="../assets/images/instagram1.jpeg" alt="">
      <img src="../assets/images/instagram2.jpeg" alt="">
      <img src="../assets/images/instagram3.jpeg" alt="">
      <img src="../assets/images/instagram4.jpeg" alt="">
      <img src="../assets/images/instagram5.jpeg" alt="">
      <img src="../assets/images/instagram6.jpeg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Instagram extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.instagram {
  padding: 70px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      width: 30%;
      object-fit: cover;
      margin: 15px;
    }
  }
}
</style>
