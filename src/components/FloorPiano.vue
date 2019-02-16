<template>
  <div id="FloorPiano">
    <!-- <SiteHeader /> -->
    <div class="page-body-modal">
      <div class="project-youtube-video-container">
        <iframe
          class="project-youtube-video"
          src="https://www.youtube.com/embed/F218XC4n0WI"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="project-content">
        <div class="project-title">Wireless MIDI Floor Piano</div>
        <div class="project-date">11/2013</div>

        <div class="project-description">
          <p>
            Inspired by the many different DIY pressure plates that popped up on
            the internet right before Halloween, and the piano scene from the
            movie Big, I decided to make a big floor piano myself using pressure
            plates made out of cardboard and aluminum foil as the keys. In order
            to train myself to be spontaneous and not to overthink about all the
            details, I enlisted the help of my friends to build this piano
            within 24 hours at HackDuke 2013.
          </p>
          <p>
            As the team leader and the only ECE major on the team, I was
            responsible for organizing brainstorming sessions to come up with
            key system features, providing technical guidance to all team
            members, and designing all the electrical circuits. In the end, we
            successfully created a 25-key piano that functions as a wireless
            MIDI controller. While playing the piano, you can use the remote to
            easily shift up or down octaves, switch between different MIDI
            instruments, and enter the tutorial mode where the piano teaches you
            how to play songs by turning on the LED strips on the keys.
          </p>
          <p>
            The video shows my friend Jason Kim and I playing a few different
            songs on the piano. (I had to connect a power supply to the piano
            when shooting the video because the LiPo batteries powering the
            electronics in the box had just died.) Below are some pictures
            showing a revision of the pressure plate design, the major
            components of the system, and the communication scheme between these
            components. The source code for this project is available here.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PRESSURE PLATE V1</div>
          <img
            :src="require('@/assets/floor-piano/1.jpg')"
            alt="floor-piano-1"
            class="project-process-pic card-no-hover"
          />
          <p>
            Two sheets of aluminum foil are each taped to a piece of cardboard,
            and a strip of cardboard going around the edge is sandwiched in
            between. It turned out that there are two major problems with this
            design. First, the wrinkling of the aluminum foil allows the top and
            bottom to short even without any force applied. Second, the strip of
            cardboard sandwiched in the middle quickly becomes deformed after
            just a few minutes of playing, also leading to a short.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PRESSURE PLATE V2</div>
          <img
            :src="require('@/assets/floor-piano/2.jpg')"
            alt="floor-piano-2"
            class="project-process-pic card-no-hover"
          />
          <p>
            In redesigning the pressure plate, we addressed the two major issues
            with the previous version. To reduce the gap between the aluminum
            foil and the cardboard that it's attached to, we glued each sheet of
            aluminum foil to the cardboard. And to ensure the top and bottom
            remain separated after extended period of playing, we replaced the
            strip of cardboard sandwiched in the middle with four pieces of
            polyurethane foam.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">KEYBOARD ASSEMBLY</div>
          <img
            :src="require('@/assets/floor-piano/3.jpg')"
            alt="floor-piano-3"
            class="project-process-pic card-no-hover"
          />
          <p>
            We decided to assemble a total of 25 pressure plates, as a
            two-octave range is sufficient for playing lots of different songs.
            For visual appeal and the possibility of a tutorial mode, we taped a
            short LED strip to each key. Since we wanted to be able to carry it
            around easily, we split the keyboard into two halves - one with 12
            keys and the other 13 - and taped together the keys in each half
            with duct tape.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">KEYBOARD CONTROL UNIT</div>
          <img
            :src="require('@/assets/floor-piano/4.jpg')"
            alt="floor-piano-4"
            class="project-process-pic card-no-hover"
          />
          <p>
            The keyboard control unit consists of an Arduino Mega, an XBee
            module, 25 TIP120 Darlington Transistors, two strips of header pins,
            and a few LiPo batteries. Each half of the keyboard is connected to
            the corresponding header pins through a set of jumper wires. After
            detecting a key press/release, the Arduino Mega sends the
            information to the receiver through the XBee, and then turns on/off
            the TIP120 that drives the LED strip on that key.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">REMOTE CONTROL</div>
          <img
            :src="require('@/assets/floor-piano/5.jpg')"
            alt="floor-piano-5"
            class="project-process-pic card-no-hover"
          />
          <p>
            The remote control is built around an ATtiny85 microcontroller. By
            turning the potentiometer, you can switch between 16 MIDI tracks in
            Logic Pro that are each set to a different instrument. You can shift
            up/down octaves by pressing the black pushbuttons, and enter/exit
            the tutorial mode by pressing the white one. The instrument and
            octave information is sent to the receiver, while the tutorial mode
            information is sent to the keyboard control unit.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">RECEIVER</div>
          <img
            :src="require('@/assets/floor-piano/6.jpg')"
            alt="floor-piano-6"
            class="project-process-pic card-no-hover"
          />
          <p>
            The receiver is an Arduino Uno with an Xbee module attached to it.
            Based on the key press/release information received from the
            keyboard control unit, and the instrument and octave information
            from the remote control, the Arduino Uno sends MIDI messages over
            USB to Logic Pro to either start or end a note, or switch to a
            different track/instrument.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">SYSTEM DIAGRAM</div>
          <img
            :src="require('@/assets/floor-piano/7.jpg')"
            alt="floor-piano-7"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">TOP-VIEW</div>
          <img
            :src="require('@/assets/floor-piano/8.jpg')"
            alt="floor-piano-8"
            class="project-process-pic card-no-hover"
          />
        </div>

        <!-- <ProjectNavigation next="bus-stop-kiosk"></ProjectNavigation> -->
      </div>
    </div>
    <!-- <SiteFooter /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
// import SiteFooter from "@/components/SiteFooter.vue";
// import ProjectNavigation from "@/components/ProjectNavigation.vue";

export default {
  name: "FloorPiano",
  components: {
    // SiteHeader,
    // SiteFooter,
    // ProjectNavigation
  },
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
