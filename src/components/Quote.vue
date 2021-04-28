<template>
  <div class="quote">
    <div class="wrap-background"></div>
    <div class="content">
      <div>
        <p class="text">"If you want something you've never had, you must be willing to do something you've never done"</p>
        <p class="author">Thomas Jefferson</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Quote extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.quote {
  position: relative;

  .wrap-background {
    background-image: url(/img/bg-quote.931ddf53.jpeg);
    height: 550px;
    background-position: 0px -37px;
    filter: blur(2px);
  }

  .content {
    position: absolute;
    font-size: 35px;
    font-style: oblique;
    top: 190px;
    text-align: center;
    padding: 0 40px;

    .text {
      font-weight: bold;
      line-height: 50px;
    }

    .author {
      font-size: 20px;
    }
  }
}
</style>
