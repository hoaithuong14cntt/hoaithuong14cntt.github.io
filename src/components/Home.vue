<template>
  <div class="home">
    <div class="say-hello">
      <div class="my-name">
        <p>Hi There!</p>
        <p>I'm Huynh</p>
        <p>Thi Hoai</p>
        <p>Thuong</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Home extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  margin-top: 123px;
  height: 450px;
  background-image: url('../assets/images/bg-home.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding: 50px;

  .say-hello {
    background: rgb(255 255 255 / 78%);
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 60px;

    .my-name {
      margin: auto;
    }
  }
}
</style>
