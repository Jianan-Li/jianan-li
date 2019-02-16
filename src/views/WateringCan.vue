<template>
  <div class="watering-can">
    <!-- <SiteHeader /> -->
    <div class="page-body">
      <img
        :src="require('@/assets/watering-can/1.jpg')"
        alt="watering-can-1"
        class="project-title-media card-no-hover"
      />
      <div class="project-content">
        <div class="project-title">20° Watering Can</div>
        <div class="project-date">02/2018 - 04/2018</div>

        <div class="project-description">
          <p>
            Design brief: create a functional watering device with a minimum
            capacity of 1/2 gallon.
          </p>
          <p>
            The 20° Watering Can gives you precise control over the pouring of
            water. The parallel relationship between the spout and handle
            provides intuitive handling, the long and narrow spout allows water
            to be poured slowly and steadily, and a shallow angle of 20° in the
            handle makes it easy to carry. The 20° Watering Can is made by slush
            casting urethane resin in a silicone mold.
          </p>
          <p>
            This is my second project for the IPD527 Industrial Design class at
            the University of Pennsylvania.
          </p>
        </div>

        <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Fusion360</p>
            <p class="project-detail-value">Rhino</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Tools</p>
            <p class="project-detail-value">CNC Router</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Materials</p>
            <a
              href="https://www.smooth-on.com/products/rebound-25/"
              target="_blank"
              rel="noreferrer"
              ><p class="project-detail-value">Rebound 25</p></a
            >
            <a
              href="https://www.smooth-on.com/products/plasti-paste-ii/"
              target="_blank"
              rel="noreferrer"
              ><p class="project-detail-value">Plasti‑Paste II</p></a
            >
            <a
              href="https://www.smooth-on.com/products/smooth-cast-65d/"
              target="_blank"
              rel="noreferrer"
              ><p class="project-detail-value">Smooth-Cast 65D</p></a
            >
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Processes</p>
            <p class="project-detail-value">Molding Making</p>
            <p class="project-detail-value">Slush Casting</p>
          </div>
        </div>

        <div class="project-section">
          <div class="project-section-title">SKETCH & CAD</div>
          <p>
            The fundamental idea behind my design is the parallel relationship
            between the handle and the spout. After experimenting with different
            angles for the handle, I decided on 20° due to its gentleness and
            ease of carrying. I created a CAD model of the watering can in
            Fusion 360. Then, instead of resorting to 3D printing, I decided to
            make a silicone mold for my watering can and use slush casting to
            produce the final physical model.
          </p>
          <img
            :src="require('@/assets/watering-can/2.jpg')"
            alt="watering-can-2"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/3.jpg')"
            alt="watering-can-3"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/4.jpg')"
            alt="watering-can-4"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">CNC CUTTING THE FOAM MASTER</div>
          <p>
            I imported the model into Rhino, and designed the master to be cut
            out on a CNC router in high density polyurethane foam. The master
            would later be used to create a brush-on silicone mold, so I added a
            fence surrounding the design to limit the flow of the silicone. I
            also added registration keys in the model so that the two halves of
            the silicone mold would self-align.
          </p>
          <img
            :src="require('@/assets/watering-can/5.png')"
            alt="watering-can-5"
            class="project-process-pic card-no-hover"
          />
          <p>
            After the CNC cutting is completed, I noticed a few defects on the
            master, which I fixed using some wood filler. I then carefully
            sanded out all the scallops left by the 1/4" ball end mill, and
            sealed the entire top surface using Smooth-on SuperSeal.
          </p>
          <img
            :src="require('@/assets/watering-can/6.jpg')"
            alt="watering-can-6"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/7.jpg')"
            alt="watering-can-7"
            class="project-process-pic card-no-hover"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">MOLD MAKING & SLUSH CASTING</div>
          <p>
            I used Smooth-On Rebound 25 for the brush-on silicone mold, and
            Smooth-On Plasti‑Paste II for the mother mold. One important thing
            when making the brush-on silicone mold is to make each layer a
            different color from the previous one. This helps ensure uniform
            thickness throughout the entire mold and prevent weak (thin) spots.
          </p>
          <img
            :src="require('@/assets/watering-can/8.jpg')"
            alt="watering-can-8"
            class="project-process-pic card-no-hover"
          />
          <p>
            After the silicone mold has cured and before making the mother mold,
            I laser cut a 1/4" MDF sheet and placed it flat on the foam master
            right outside the fence for the silicone mold. This MDF piece would
            later become part of the mother mold, and would allow the two halves
            of the mother mold to be easily bolted together.
          </p>
          <img
            :src="require('@/assets/watering-can/9.jpg')"
            alt="watering-can-9"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/10.jpg')"
            alt="watering-can-10"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/11.jpg')"
            alt="watering-can-11"
            class="project-process-pic card-no-hover"
          />
          <p>
            For slush casting, I used Smooth-On Smooth-Cast 65D. In my first
            attempt, I made the mistake of not calculating how much material I
            need beforehand, and ended up with a watering can that weighed over
            1 kilogram and was almost completely filled up. For the second
            attempt, I calculated how much material I need based on the volume
            information in Fusion 360, and achieved much better result.
          </p>
          <video
            class="project-process-pic card-no-hover"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              :src="require('@/assets/watering-can/12.webm')"
              type="video/webm"
            />
            <source
              :src="require('@/assets/watering-can/12.mp4')"
              type="video/mp4"
            />
          </video>
        </div>

        <div class="project-section">
          <div class="project-section-title">FINISHED MODEL</div>
          <img
            :src="require('@/assets/watering-can/13.jpg')"
            alt="watering-can-13"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/14.jpg')"
            alt="watering-can-14"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/15.jpg')"
            alt="watering-can-15"
            class="project-process-pic card-no-hover"
          />
          <img
            :src="require('@/assets/watering-can/16.jpg')"
            alt="watering-can-16"
            class="project-process-pic card-no-hover"
          />
        </div>

        <ProjectNavigation next="LetterOpener"></ProjectNavigation>
      </div>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
// @ is an alias to /src
// import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ProjectNavigation from "@/components/ProjectNavigation.vue";

export default {
  name: "WateringCan",
  components: {
    // SiteHeader,
    SiteFooter,
    ProjectNavigation
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
