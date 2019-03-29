<template>
  <div id="BusStopKiosk">
    <div class="page-body-modal">
      <div
        class="project-youtube-video-container"
        v-bind:class="[
          this.$route.path == '/' ? 'card-top-round' : 'card-full-round'
        ]"
      >
        <iframe
          class="project-youtube-video"
          src="https://www.youtube.com/embed/9zHf3e_IhcA"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <div class="project-content">
        <div class="project-title">Bus Stop Kiosk</div>
        <div class="project-date">09/2015 - 12/2015</div>

        <div class="project-description">
          <p>
            Taking buses to travel between the west, east, and central campuses
            is an essential part of students’ lives at Duke University. Every
            day, students rely on the bus arrival times and locations provided
            in the TransLoc app to either get to places on time or make changes
            to their schedules. While the TransLoc app is extremely useful, it’s
            not the most ideal way to get bus information for people waiting at
            bus stops. For those carrying things in their hands, wearing gloves,
            or engaged in meaningful conversations or other activities, checking
            the bus information on their phones could be quite inconvenient.
            There are also a lot of people, especially campus visitors, who
            don’t have the TransLoc app installed on their phones.
          </p>
          <p>
            Wanting to make it more convenient for people to get bus information
            and make the information available to everyone, I decided to build a
            WiFi-connected, solar-powered kiosk that shows real-time bus
            information that can potentially be installed at the Duke Chapel bus
            stop, the busiest bus stop at Duke. After pitching this idea to
            Victor Chen and Tze Kang Ng, they both decided to jump on board.
          </p>
          <p>
            As the team leader, I was responsible for setting the major goals
            for this project, distributing tasks among team members, and
            ensuring that we were making progress on a daily basis. As the team
            member with the most experience in electrical design, I was
            responsible for creating the proof of concept, the selection and
            testing of most of the electrical components, and the PCB design.
          </p>
          <p>
            All the design files and source code for this project are available
            <a
              href="https://github.com/Jianan-Li/Bus-Stop-Kiosk"
              target="_blank"
              rel="noreferrer"
              >here</a
            >.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PROOF OF CONCEPT</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/1.jpg')"
            alt="bus-stop-kiosk-1"
            class="project-process-pic card-full-round"
          />
          <p>
            To confirm that it’s possible to get real-time bus information using
            a WiFi module, I built a proof of concept using an Electric Imp, an
            Atmega328P, a 4x20 LCD, and a few other components. The code running
            on the Electric Imp server makes API requests to get the "next
            arrival time" for all the routes serving the Duke Chapel bus stop,
            and sends the processed data to the Electric Imp module. The Imp
            then relays the data to the ATmega328P, which drives the LCD.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">LED MATRIX DISPLAY</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/2.jpg')"
            alt="bus-stop-kiosk-2"
            class="project-process-pic card-full-round"
          />
          <p>
            Originally we wanted to use a flip-dot display due to its low
            standby power consumption and excellent visibility in direct
            sunlight. However, we soon discovered that the only flip-dot display
            available for purchase was about 15 times more expensive than an LED
            matrix of the same size. Due to our limited budget, we opted for the
            latter. We purchased four 32x16 LED matrices on eBay, and connected
            them together to form a 64x32 LED matrix display.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">3D PRINTED BACKPLATE</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/3.jpg')"
            alt="bus-stop-kiosk-3"
            class="project-process-pic card-full-round"
          />
          <p>
            We designed a backplate that the four LED matrices can be mounted
            on, and printed it on a Gigabot 3D printer. With a bed size of
            approximately two feet by two feet, the Gigabot allowed us to easily
            3D print the large structural pieces we needed for this project.
            Later on, we also printed the enclosure for both the LED matrix
            display and the bus location map on the Gigabot.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">AMBIENT LIGHT SENSOR</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/4.jpg')"
            alt="bus-stop-kiosk-4"
            class="project-process-pic card-full-round"
          />
          <p>
            One disadvantage of the LED matrix display is high power
            consumption. Hoping to create an energy self-sufficient system, we
            decided to use an ambient light sensor to measure the outdoor
            brightness so that the LED display brightness can be adjusted
            accordingly to save power. After doing some research, I decided on
            the TSL2561 light sensor due to its popularity among electronics
            hobbyists.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">BUS LOCATION MAP</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/5.jpg')"
            alt="bus-stop-kiosk-5"
            class="project-process-pic card-full-round"
          />
          <p>
            In addition to the LED display, we decided to create a dynamic map
            that shows real-time bus locations. The Transloc API provides bus
            locations in longitude and latitude, from which the distances
            between the bus and the two nearest bus stops can be calculated. The
            location of each bus can then be estimated based on these distances.
            In the picture, the locations of buses of three different routes are
            displayed on a strand of WS2811 LEDs arranged in the shape of the
            road.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PCB REV. 1</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/6.jpg')"
            alt="bus-stop-kiosk-6"
            class="project-process-pic card-full-round"
          />
          <p>
            I designed this PCB in EAGLE, ordered the components from Digi-Key,
            and assembled the PCB using a toaster oven. In addition to the
            Electric Imp module and the ATmega328P microcontroller, I used an
            LMZ12010 10W buck converter to power the 5V LED display, an LMZ21701
            1W buck converter to power the 3.3V components, and an INA226
            current sensor to monitor the power consumption of the entire
            system.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">
            ISSUES WITH THE PCB REV. 1 SETUP
          </div>
          <img
            :src="require('@/assets/bus-stop-kiosk/7.jpg')"
            alt="bus-stop-kiosk-7"
            class="project-process-pic card-full-round"
          />
          <p>
            The PCB Rev. 1 was designed to be used together with a solar charge
            controller that handled charging the battery. It didn't take long
            before I realized this setup was far from ideal. First, the
            off-the-shelf solar charge controller had a relatively high
            quiescent current (approximately 13mA), making it more difficult for
            the system to be self-sufficient. Second, the solar charge
            controller did not allow the power generated from the solar panel to
            be monitored remotely.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PCB REV. 2</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/8.jpg')"
            alt="bus-stop-kiosk-8"
            class="project-process-pic card-full-round"
          />
          <p>
            Because of the two issues with the solar charge controller, I
            decided to design my own solar charger circuit for PCB Rev. 2. I
            created a design using the LT3652 battery charger IC. I replaced the
            fuse box with SMD fuses, and added two more INA226 current sensors
            to monitor the power generated by the solar panel and the power
            going into the battery. I also added a terminal block for connecting
            the solar panel, and another for the LED strip.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">THE PCB REV. 2 SETUP</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/9.jpg')"
            alt="bus-stop-kiosk-9"
            class="project-process-pic card-full-round"
          />
          <p>
            The quiescent current of the solar charger circuit I designed was
            significantly lower than that of the off-the-shelf solar charge
            controller (&lt;100μA vs 13mA). Since both the battery and the solar
            panel plugged directly into the PCB, the wiring became a lot
            simpler. And with the additional current sensors, both the power
            generation and consumption of the system could be remotely monitored
            in the Electric Imp IDE.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PCB REV. 2 BLOCK DIAGRAM</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/10.png')"
            alt="bus-stop-kiosk-10"
            class="project-process-pic card-full-round"
          />
          <p>
            This block diagram shows how both on-board and off-board components
            are powered, and how they communicate with each other.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">PUTTING THINGS TOGETHER</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/11.jpg')"
            alt="bus-stop-kiosk-11"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/bus-stop-kiosk/12.jpg')"
            alt="bus-stop-kiosk-12"
            class="project-process-pic card-full-round"
          />
          <p>
            We constructed a stand for things to be mounted on. At the top, a
            50W solar panel was attached to a rotating mount. Below that, the
            LED display sat on a bar welded to the pole. A polycarbonate sheet
            was used as the back panel of the 3D printed enclosure. At the
            bottom, a 12V 35Ah battery was stored in the aluminum box. To
            waterproof the whole system, we covered the 3D printed pieces with
            AeroMarine epoxy, and filled all the gaps with silicone.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">MAKING THE BUS LOCATION MAP</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/13.jpg')"
            alt="bus-stop-kiosk-13"
            class="project-process-pic card-full-round"
          />
          <p>
            By cutting it into pieces and reconnecting them with thin enameled
            wires, we shaped an APA102 LED strip to cover all the bus routes
            that serve the Duke Chapel bus stop. During this process, we taped
            the LED strip to a plexiglass sheet to prevent it from moving. We
            then taped a printout of the map to the underside of an identical
            plexiglass sheet, and placed it on top of the LED strip. The two
            plexiglass sheets were then bolted together, and placed in a 3D
            printed enclosure.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">THE FINISHED BUS LOCATION MAP</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/14.jpg')"
            alt="bus-stop-kiosk-14"
            class="project-process-pic card-full-round"
          />
          <p>
            We cut a tiny hole near the upper-left corner of the map printout,
            and placed the light sensor between the two plexiglass sheets. We
            positioned the bus location map right below the LED matrix display,
            and bolted the enclosure to the aluminum pole. In this picture,
            locations of the C1 and C4 buses are displayed on the map. To avoid
            any confusion, we used the same colors as the ones in the TransLoc
            app to represent the four bus routes.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">FINAL PROJECT DEMO</div>
          <img
            :src="require('@/assets/bus-stop-kiosk/15.jpg')"
            alt="bus-stop-kiosk-15"
            class="project-process-pic card-full-round"
          />
          <!-- <p>The final project demo took place twelve weeks after we started working on this project. We carried the Bus Stop Kiosk to the Duke Chapel bus stop, and placed it there for almost an hour for some final testing, recording the power generation and consumption data, and showing it to other Duke students. It didn't take long before pictures of the device started popping up on Facebook, Instagram, and other social media.</p> -->
        </div>

        <!-- <div class="project-section">
          <div class="project-section-title">INSTALLING IT ON CAMPUS</div>
          <img :src="require('@/assets/bus-stop-kiosk/14.jpg')" alt="bus-stop-kiosk-14" class="project-process-pic card-full-round">
          <p>After a lengthy period of planning and negotiation, we finally got our Bus Stop Kiosk installed at the "Anderson at Lewis" bus stop on Central Campus. We removed the LED display and the bus location map from the stand, and mounted them to the frame of the bus stop shelter. The battery was stored in a metal box secured to the shelter frame, and the solar panel was mounted on top of the sloped roof, facing south.</p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusStopKiosk",
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
