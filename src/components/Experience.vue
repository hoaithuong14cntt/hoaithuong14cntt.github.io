<template>
  <div class="experience">
    <div class="avatar">
      <img src="../assets/images/avatar-header.jpeg" alt="">
    </div>
    <div class="main-title">
      <h1>Experience</h1>
      <p class="description">Work History</p>
    </div>
    <div id="content">
      <ul class="timeline">
        <li class="event" data-date="4/2020 - Now">
          <h3 class="title">VueJS Developer - NEOLAB VIỆT NAM Co.,ltd</h3>
          <div class="project">
            <p>
              <span class="title">Description: </span>
              Telemedicine management application for online medical advice. The project was born to cope with the situation of Covid19
disease. The Telemedicine project has lasted so far.
            </p>
            <div>
              <span class="title">Project scale:</span>
              <ul>
                <li><span class="title">Development team:</span> 20 - 25</li>
                <li><span class="title">Reference:</span> Not available</li>
                <li><span class="title">Specific task:</span> Javascript, Vue.js, Git, HTML, jQuery, Cascading Style Sheets (CSS), HTML5, Bootstrap, Nuxt.js</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="event" data-date="9/2019 - 4/2020">
          <h3 class="title">VueJS Developer - NEOLAB VIỆT NAM Co.,ltd</h3>
          <div class="project">
            <p>
              <span class="title">Description: </span>
              Masai management application for online medical consultation. The Masai project has lasted so far.
            </p>
            <div>
              <span class="title">Project scale:</span>
              <ul>
                <li><span class="title">Development team:</span> 20 - 25</li>
                <li><span class="title">Reference:</span> Not available</li>
                <li><span class="title">Specific task:</span> Javascript, Vue.js, Git, HTML, jQuery, Cascading Style Sheets (CSS), HTML5, Bootstrap, Nuxt.js</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="event" data-date="5/2019 - 9/2019">
          <h3 class="title">AngularJS Developer - NEOLAB VIỆT NAM Co.,ltd</h3>
          <div class="project">
            <p>
              <span class="title">Description: </span>
              Masai management application for online medical consultation. The Masai project lasted 4 months.
            </p>
            <div>
              <span class="title">Project scale:</span>
              <ul>
                <li><span class="title">Development team:</span> 20 - 25</li>
                <li><span class="title">Reference:</span> Not available</li>
                <li><span class="title">Specific task:</span>Using AngularJS, Javascript, Git, HTML, jQuery, Cascading Style Sheets (CSS), HTML5, Bootstrap.</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="event" data-date="7/2018 - 5/2019">
          <h3 class="title">PHP Developer - NEOLAB VIỆT NAM Co.,ltd</h3>
          <div class="project">
            <p>
              <span class="title">Description: </span>
              Cheers management application to schedule online parties. Project Cheers lasted 10 months.
            </p>
            <div>
              <span class="title">Project scale:</span>
              <ul>
                <li><span class="title">Development team:</span> 14 - 15</li>
                <li><span class="title">Reference:</span> https://app.cheers.style/</li>
                <li><span class="title">Specific task:</span>Use Laravel to write api for the project. Use external services like socket.io, MySQL, HTML, HTML5,
Javascript, Bootstrap</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="event" data-date="1/2018 - 7/2018">
          <h3 class="title">PHP Developer - NEOLAB VIỆT NAM Co.,ltd</h3>
          <div class="project">
            <p>
              <span class="title">Description: </span>
              Mikke management application sets schedules for Nails online. The Mikke project lasted 6 months.
            </p>
            <div>
              <span class="title">Project scale:</span>
              <ul>
                <li><span class="title">Development team:</span> 10 - 12</li>
                <li><span class="title">Reference:</span> Not yet available</li>
                <li><span class="title">Specific task:</span>Use Laravel to write api for the project. Use external services like socket.io, MySQL, HTML, HTML5,
Javascript, Bootstrap</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="event" data-date="9/2017 - 1/2018">
        <h3 class="title">Full-time Internship - NEOLAB VIỆT NAM Co.,ltd</h3>
          <div class="project">
            <p>
              <span class="title">Description: </span>
              During the internship, I have been trained in skills such as PHP, SQL, Git. Learn how to organize a project
            </p>
            <div>
              <span class="title">Achievements and skills gained:</span>
              <ul>
                <li>Be assessed positively by the team lead: active, extremely adaptable...</li>
                <li>Observe, learn and catch well.</li>
                <li>Make some products out of self-learning knowledge.</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Experience extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.experience {
  text-align: center;
  padding: 10px 0;

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
