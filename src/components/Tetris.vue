<template>
  <div id="Tetris">
    <div class="page-body-modal">
      <div
        class="project-youtube-video-container"
        v-bind:class="[
          this.$route.path == '/' ? 'card-top-round' : 'card-full-round'
        ]"
      >
        <iframe
          class="project-youtube-video"
          src="https://www.youtube.com/embed/kC6plYjMdA0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="project-content">
        <div class="project-title">Handheld Tetris Game</div>
        <div class="project-date">09/2013 - 02/2014</div>

        <div class="project-description">
          <p>
            Ever since I started working on DIY electronics projects, I have
            been fascinated with all the different LED matrix projects on the
            internet. After reading through the details on some of these
            projects, I realized that not only are they fun to work on, but they
            teach you a great deal about electronics. Being a huge Tetris fan, I
            decided to make a Tetris game console with an RGB LED matrix
            display.
          </p>
          <p>
            After a few breadboard iterations, a Tetris game packed with
            hardware features was born. It has a beautiful 16x8 RGB LED matrix
            display, two LED bargraphs that indicate the current level, and a 3D
            printed enclosure. It plays the Tetris theme while the game is in
            progress, allows you to control the game using the buttons or the
            accelerometer, and provides haptic feedback using the vibration
            motor.
          </p>
          <p>
            In the video, I show you what this device looks like on the inside,
            and give a demo showing all the hardware and software features.
            Check out the pictures below If you're interested in learning more
            about this project. The design files and source code for this
            project are available
            <a
              href="https://github.com/Jianan-Li/Handheld-Tetris-Game"
              target="_blank"
              rel="noreferrer"
              >here</a
            >.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">BREADBOARD V1</div>
          <img
            :src="require('@/assets/tetris/1.jpg')"
            alt="tetris-1"
            class="project-process-pic card-full-round"
          />
          <p>
            When I built the first version on the breadboard, I didn't know that
            these LED matrices are supposed to be driven by constant current LED
            drivers. I used the 74HC595 shift registers to both source and sink
            the current, which caused significant flickering on the display due
            to their limited output current.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">BREADBOARD V2</div>
          <img
            :src="require('@/assets/tetris/2.jpg')"
            alt="tetris-2"
            class="project-process-pic card-full-round"
          />
          <p>
            In order to enhance the gaming experience, I added an 8 ohm speaker
            for playing the Tetris theme. After spending way too much time
            trying to figure out how to play the music and refresh the display
            at the same time (both need timer interrupt), I reluctantly decided
            to use an ATtiny85 microcontroller to handle the music. Two pins on
            the ATmega328P are used to control the ATtiny85 so that when the
            game is paused/restarted, the music is also paused/restarted.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">BREADBOARD V3</div>
          <img
            :src="require('@/assets/tetris/3.jpg')"
            alt="tetris-3"
            class="project-process-pic card-full-round"
          />
          <p>
            I added a 10-segment LED bar graph, driven by a LM3914, to indicate
            the level. When the game is started, the first segment flashes and
            the other segments are off. After five lines are cleared, the first
            segment becomes solid, and the second segment starts flashing. For
            every five lines cleared, an additional segment on the LED bar graph
            becomes solid.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">BREADBOARD V4</div>
          <img
            :src="require('@/assets/tetris/4.jpg')"
            alt="tetris-4"
            class="project-process-pic card-full-round"
          />
          <p>
            I finally replaced the 74HC595 shift registers with a MIC5891 source
            driver and three STP16DP05 constant current sink drivers. The result
            is that the brightness of each LED is no longer affected by the
            number of LEDs turned on in the same column. I added an MMA8452Q
            accelerometer so that you can move the tetromino to the left/right
            with a gentle shake in that direction. I also added a vibration
            motor to provide vibration feedback when lines are cleared.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">THE ASSEMBLED PCB</div>
          <img
            :src="require('@/assets/tetris/5.jpg')"
            alt="tetris-5"
            class="project-process-pic card-full-round"
          />
          <p>
            This was my first time designing a PCB and using EAGLE. I used the
            surface mount package for the resistors, the capacitors, the diode,
            the voltage regulators, and the STP16DP05 LED drivers. The buttons
            are arranged in a similar way to the Game Boy. The programming
            ports, the power switch, and the sound switch are all placed near
            the bottom.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">BATTERY AND CHARGING</div>
          <img
            :src="require('@/assets/tetris/6.jpg')"
            alt="tetris-6"
            class="project-process-pic card-full-round"
          />
          <p>
            The system is powered by a 2S 7.4V 1300mAh LiPo battery. A 2S LiPo
            battery charger is needed for recharging. In order to make the
            device as thin as possible, I took apart the battery pack and
            arranged the two cells side by side. I also moved the piezo speaker
            to the back of the PCB because it didn't quite fit under the LED
            matrix.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">3D PRINTED ENCLOSURE</div>
          <img
            :src="require('@/assets/tetris/7.jpg')"
            alt="tetris-7"
            class="project-process-pic card-full-round"
          />
          <p>
            This was my first time using SolidWorks. The enclosure and the
            button caps were printed on a Stratasys 3D printer in ABS. Four M3
            screws are used to hold the two halves of the enclosure together.
            The device has a thickness of 25mm, which is about the same as the
            Game Boy Pocket.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">Game Control</div>
          <video
            class="project-process-pic card-full-round"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              :src="require('@/assets/tetris/8.webm')"
              type="video/webm"
            />
            <source :src="require('@/assets/tetris/8.mp4')" type="video/mp4" />
          </video>
          <p>Left/Right - Move the tetromino to the left/right</p>
          <p>Up - Rotate the tetromino</p>
          <p>Down - Drop the tetromino by one line</p>
          <p>A - Drop the tetromino to the bottom</p>
          <p>B - Pause/Resume the game</p>
          <p>Start - Restart the game</p>
        </div>

        <div class="project-section">
          <div class="project-section-title">GAME OVER</div>
          <video
            class="project-process-pic card-full-round"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              :src="require('@/assets/tetris/9.webm')"
              type="video/webm"
            />
            <source :src="require('@/assets/tetris/9.mp4')" type="video/mp4" />
          </video>
          <p>
            When the games ends, a scrolling "Game Over" message in a random
            color is displayed in the center of the screen. You can then restart
            the game by pressing the START button (below the A and B buttons).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tetris",
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
