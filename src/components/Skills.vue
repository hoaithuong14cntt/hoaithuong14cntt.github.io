<template>
  <div class="skills">
    <div class="main-title">
      <h1>My Skills</h1>
    </div>
    <div class="content">
      <div class="skill">
        <h3>SKILLS</h3>
        <ul>
          <li>
            <p>Git</p>
            <div class="progress">
              <div class="progress-value git"></div>
            </div>
          </li>
          <li>
            <p>HTML5</p>
            <div class="progress">
              <div class="progress-value html"></div>
            </div>
          </li>
          <li>
            <p>CSS</p>
            <div class="progress">
              <div class="progress-value css"></div>
            </div>
          </li>
          <li>
            <p>jQuery</p>
            <div class="progress">
              <div class="progress-value jquery"></div>
            </div>
          </li>
          <li>
            <p>PHP</p>
            <div class="progress">
              <div class="progress-value php"></div>
            </div>
          </li>
          <li>
            <p>VueJs</p>
            <div class="progress">
              <div class="progress-value vuejs"></div>
            </div>
          </li>
          <li>
            <p>Javascript</p>
            <div class="progress">
              <div class="progress-value javascript"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="languages">
        <h3>LANGUAGES</h3>
        <ul>
          <li>
            <p>English</p>
            <div class="progress">
              <div class="progress-value english"></div>
            </div>
          </li>
          <li>
            <p>Japanese</p>
            <div class="progress">
              <div class="progress-value japanese"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Skills extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.skills {
  text-align: center;
  padding: 30px 0;
  background-image: url('../assets/images/bg-skills.png');
  background-size: 100%;

  .main-title {
    margin: 30px 0;

    h1 {
      font-size: 40px;
      margin: 20px 0;
      color: #39473f;
      font-weight: bold;
    }

    .description {
      font-size: 20px;
    }
  }

  .content {
    display: flex;
    justify-content: space-evenly;
    h3 {
      font-weight: bold;
      font-style: oblique;
    }

    ul {
      width: 400px;
      li {
        display: flex;
        margin: 15px 0;
        p {
          margin: auto 0;
          width: 20%;
          text-align: right;
          font-weight: bold;
          font-style: oblique;
        }
        .progress {
          width: 80%;
          height: 20px;
          margin-left: 10px;
          border: 1px solid #a2a2a2;
          border-radius: 15px;

          .progress-value {
            text-align: center;
            width: 30%;
            height: 100%;
            background: #6d928a;
            border-radius: 15px;
            &.git {
              width: 60%;
            }
            &.html {
              width: 85%;
            }
            &.css {
              width: 85%;
            }
            &.jquery {
              width: 50%;
            }
            &.php {
              width: 60%;
            }
            &.vuejs {
              width: 75%;
            }
            &.javascript {
              width: 65%;
            }
            &.english {
              width: 50%;
            }
            &.japanese {
              width: 65%;
            }
          }
        }
      }
    }
  }
}
</style>
