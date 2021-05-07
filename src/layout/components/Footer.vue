<template>
  <div class="footer">
    <p>
    ©2021 by Huynh Thi Hoai Thuong. Proudly created with Wix.com

    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Footer extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  height: 50px;
  text-align: center;
}
</style>
