<template>
  <div class="education">
    <div class="avatar">
      <img src="../assets/images/avatar-education.jpeg" alt="">
    </div>
    <div class="main-title">
      <h1>Educational Background</h1>
      <p class="description">What I've Learned</p>
    </div>
    <div id="content">
      <ul class="timeline">
        <li class="event" data-date="10/2014 - 6/2018">
          <h3 class="title">DANANG EDUCATION UNIVERSITY</h3>
          <div class="project">
            <p>
              <span class="title">Highest Degree Level: </span> Bachelor
            </p>
            <p>
              <span class="title">Completion date: </span> 6-2018
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Education extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.education {
  text-align: center;
  padding: 60px 0;

  .avatar {
    img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .main-title {
    margin: 30px 0;

    h1 {
      font-size: 40px;
      margin: 20px 0;
      color: #a68173;
      font-weight: bold;
    }

    .description {
      font-size: 20px;
    }
  }
}
</style>
