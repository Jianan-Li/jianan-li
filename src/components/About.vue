<template>
  <div id="About">
    <div class="page-body-modal">
      <div class="about-content">
        <div class="about-intro">
          As an engineer and product designer, I hope to create things that
          would help people unlock their potential for personal growth and live
          more purposeful and fulfilling lives.

          <!-- This goal rests on three
         interconnected building blocks. 1) Help deliver the most relevant
         information to each individual at the right time, and help them
         organize that information. 2) Encourage individuals to reflect and
         help them organize their thinking. 3) Provide guidance for behavior
         change. -->
        </div>
        <div class="resume">
          <div class="flex-container about-section-flex-container">
            <div class="about-section-title">Education</div>
            <div class="about-section-content">
              <div class="about-section-item">University of Pennsylvania</div>
              <div class="about-section-item-detail">
                Master of Integrated Product Design
              </div>
              <div class="about-date">2017 — Present</div>
              <div class="about-section-item">Duke University</div>
              <div class="about-section-item-detail">
                Bachelor of Science in Electrical and Computer Engineering
              </div>
              <div class="about-date">2012 — 2016</div>
            </div>
          </div>
          <div class="flex-container about-section-flex-container">
            <div class="about-section-title">Experience</div>
            <div class="about-section-content">
              <div class="about-section-item">Apple</div>
              <div class="about-section-item-detail">
                Electrical Engineering Intern - testing, schematic design
              </div>
              <div class="about-date">2016</div>
              <div class="about-section-item">Lutron</div>
              <div class="about-section-item-detail">
                Electrical Engineering Intern - testing
              </div>
              <div class="about-date">2015</div>
              <!-- <div class="about-section-item">Duke University ECE Design Lab</div>
              <div class="about-section-item-detail">Teaching Assistant</div>
              <div class="about-date">2014 — 2015</div> -->
            </div>
          </div>
          <div class="flex-container about-section-flex-container">
            <div class="about-section-title">GIGS</div>
            <div class="about-section-content">
              <div class="about-section-item">Microsoft</div>
              <div class="about-section-item-detail">
                Designed the circuit for
                <a
                  class="underline-link"
                  href="https://www.youtube.com/watch?v=63WPc0BdxlI&feature=youtu.be&t=2h6m47s"
                  target="_blank"
                  rel="noreferrer"
                  >the piano demo at Build</a
                >
              </div>
              <div class="about-date">2014</div>
              <div class="about-section-item">Adafruit</div>
              <div class="about-section-item-detail">
                Designed
                <a
                  class="underline-link"
                  href="https://www.adafruit.com/product/2043"
                  target="_blank"
                  rel="noreferrer"
                  >this PCB</a
                >
                and wrote
                <a
                  class="underline-link"
                  href="https://learn.adafruit.com/diy-3d-printed-handheld-pocket-game-tiny-tetris-snake/overview"
                  target="_blank"
                  rel="noreferrer"
                  >this tutorial</a
                >
              </div>
              <div class="about-date">2014</div>
            </div>
          </div>
          <div class="flex-container about-section-flex-container">
            <div class="about-section-title">SKILLS</div>
            <div class="about-section-content">
              <div id="skills" class="flex-container">
                <div class="">
                  <div class="about-section-item">Processes</div>
                  <div class="about-section-item-detail">
                    User Research, Data Analytics and Visualization,
                    Wireframing, Prototyping, Software Development, CAD,
                    Electronics design
                  </div>
                </div>
                <div class="">
                  <div class="about-section-item">Tools</div>
                  <div class="about-section-item-detail">
                    Adobe CS, Figma, Xcode, Fusion 360, Rhino, KeyShot, EAGLE
                  </div>
                </div>
                <div class="">
                  <div class="about-section-item">Coding</div>
                  <div class="about-section-item-detail">
                    HTML5, CSS3, JavaScript, React, Vue.js, D3.js, Python,
                    pandas, Swift, C/C++
                  </div>
                </div>
              </div>
              <!-- <div class="flex-container">
                <div class="">
                  <div class="about-section-item">Processes</div>
                  <div class="about-section-item-detail">User research</div>
                  <div class="about-section-item-detail">Sketching</div>
                  <div class="about-section-item-detail">Prototyping</div>
                  <div class="about-section-item-detail">CAD</div>
                  <div class="about-section-item-detail">
                    Electronics design
                  </div>
                  <div class="about-section-item-detail">
                    Product photography
                  </div>
                </div>
                <div class="">
                  <div class="about-section-item">Tools</div>
                  <div class="about-section-item-detail">Adobe CS</div>
                  <div class="about-section-item-detail">Figma</div>
                  <div class="about-section-item-detail">Xcode</div>
                  <div class="about-section-item-detail">EAGLE</div>
                  <div class="about-section-item-detail">Fusion 360</div>
                  <div class="about-section-item-detail">Rhino</div>
                  <div class="about-section-item-detail">KeyShot</div>
                </div>
                <div class="">
                  <div class="about-section-item">Coding</div>
                  <div class="about-section-item-detail">HTML/CSS</div>
                  <div class="about-section-item-detail">JavaScript</div>
                  <div class="about-section-item-detail">Vue.js</div>
                  <div class="about-section-item-detail">Python</div>
                  <div class="about-section-item-detail">Swift</div>
                  <div class="about-section-item-detail">C/C++</div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/aboutPage.css";
.page-body-modal {
  margin: 0rem;
  padding: 3rem 0rem;
}
</style>
