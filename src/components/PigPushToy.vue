<template>
  <div id="PigPushToy">
    <div class="page-body-modal">
      <video
        class="project-title-media"
        v-bind:class="[
          this.$route.path == '/' ? 'card-top-round' : 'card-full-round'
        ]"
        autoplay
        loop
        muted
        playsinline
      >
        <!-- <source
            :src="require('@/assets/pig-push-toy/0.webm')"
            type="video/webm"
          /> -->
        <source
          :src="require('@/assets/pig-push-toy/0.mp4')"
          type="video/mp4"
        />
      </video>

      <div class="project-content">
        <div class="project-title">Pig Push Toy</div>
        <div class="project-date">03/2018 - 04/2018</div>

        <div class="project-description">
          <p>
            Design brief: design and fabricate a kinetic toy for children. It
            should, through some mechanical means, provide some enhanced action
            that is more than the direct outcome of the input energy. This
            action should have some level of performance to capture and
            hopefully hold the child’s attention.
          </p>
          <p>
            My design is a pig push toy. When it's pushed, the rotation of the
            wheels causes the legs to move, thus allowing the pig to "walk".
          </p>
          <p>
            This is my third and final project for the IPD527 Industrial Design
            class at the University of Pennsylvania.
          </p>
        </div>

        <div class="project-details flex-container">
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Software</p>
            <p class="project-detail-value">Fusion360</p>
            <p class="project-detail-value">Illustrator</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Material</p>
            <p class="project-detail-value">Hard Maple</p>
            <p class="project-detail-value">Walnut</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Tools</p>
            <p class="project-detail-value">Nomad 883</p>
            <p class="project-detail-value">Table Saw</p>
            <p class="project-detail-value">Band Saw</p>
          </div>
          <div class="flex-container-item project-detail">
            <p class="project-detail-key">Finish</p>
            <p class="project-detail-value">Gel Stain</p>
          </div>
        </div>

        <div class="project-section">
          <div class="project-section-title">WHY A PIG PUSH TOY?</div>
          <p>
            I wanted to make an animal pull or push toy, so I did some research
            on the internet. After looking at hundreds of designs, I noticed an
            abundance of dogs, ducks, horses, elephants, turtles, and
            crocodiles, and a clear lack of pigs. So I decided to make a pig.
          </p>
          <p>
            I don't particularly like the image of putting an animal on a leash,
            and also want to direct the child to closely interact with the toy
            instead of dragging it around, so I decided to make a push toy
            instead of a pull toy.
          </p>
        </div>

        <div class="project-section">
          <div class="project-section-title">SKETCH & CAD</div>
          <p>
            I started the design process by drawing a rough sketch of the pig
            based on still images and youtube videos. Then I imported the sketch
            into Fusion 360, and created a 3D model based on the sketch. I
            defined all the joints in the model, and used motion study to verify
            that the mechanism worked correctly and was free of collisions.
          </p>
          <img
            :src="require('@/assets/pig-push-toy/1.jpg')"
            alt="pig-push-toy-1"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/pig-push-toy/2.jpg')"
            alt="pig-push-toy-2"
            class="project-process-pic card-full-round"
          />
          <video
            class="project-process-pic card-full-round"
            autoplay
            loop
            muted
            playsinline
          >
            <source
              :src="require('@/assets/pig-push-toy/3.mp4')"
              type="video/mp4"
            />
          </video>
        </div>

        <div class="project-section">
          <div class="project-section-title">PROTOTYPE</div>
          <p>
            Still feeling unsure the mechanism would work in real life, I
            decided to quickly make a rough MDF prototype. I laser cut the
            pieces out of 1/8" and 1/4" MDF sheets, and cut the various dowels
            to lengths on a band saw. I also wrapped the wheels in electrical
            tape to increase their friction. After seeing the prototyping
            working wonderfully, I felt much more confident about my design and
            more prepared to make the final hardwood version.
          </p>
          <img
            :src="require('@/assets/pig-push-toy/4.jpg')"
            alt="pig-push-toy-4"
            class="project-process-pic card-full-round"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">MAKE</div>
          <p>
            I used the Nomad 883 desktop CNC to cut out all the small parts for
            this project. I have never done any serious CAM programming before,
            but the intuitive graphical interface in Fusion 360 made it very
            easy to get started. A total of 37 parts were made on the Nomad,
            including the legs, ears, wheels, cart, and various dowel caps.
          </p>
          <img
            :src="require('@/assets/pig-push-toy/5.jpg')"
            alt="pig-push-toy-5"
            class="project-process-pic card-full-round"
          />
          <p>
            The main body is a little too big for the Nomad, so I decided to
            manually cut it on a band saw. In order to figure out the best way
            to use the wood blank, I scanned the grain, masked it with the body
            outline in Illustrator, and picked the orientation that looked the
            best. I then printed out the body outline together with all the
            holes that need to be drilled, and taped the sheet of paper to the
            wood blank. After marking out the location and depth for all the
            holes on all the surfaces, I drilled the holes and cut out the body
            shape on a band saw.
          </p>
          <img
            :src="require('@/assets/pig-push-toy/6.gif')"
            alt="pig-push-toy-6"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/pig-push-toy/7.jpg')"
            alt="pig-push-toy-7"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/pig-push-toy/8.jpg')"
            alt="pig-push-toy-8"
            class="project-process-pic card-full-round"
          />
        </div>

        <div class="project-section">
          <div class="project-section-title">FINISHED PIG PUSH TOY</div>
          <p>
            The pig push toy features adjustable ears, inlay eyes, twine tail,
            and high friction wheels.
          </p>
          <img
            :src="require('@/assets/pig-push-toy/9.jpg')"
            alt="pig-push-toy-9"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/pig-push-toy/10.jpg')"
            alt="pig-push-toy-10"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/pig-push-toy/11.jpg')"
            alt="pig-push-toy-11"
            class="project-process-pic card-full-round"
          />
          <img
            :src="require('@/assets/pig-push-toy/12.jpg')"
            alt="pig-push-toy-12"
            class="project-process-pic card-full-round"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PigPushToy",
  mounted() {
    this.$emit("mounted");
  }
};
</script>

<style scoped>
@import "../styles/projectPage.css";
</style>
