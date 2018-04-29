<template>
  <section class="main-container">
      <div class="img-container">
      </div>
      <div class="info-container" id="info">
        <div class="text-container-left">
          <p>A goldsmith originating from Lapland, Finland. My designs largely reflect elements and shapes from the rich,
               beautiful northern nature. To balance this, some of my designs get inspired from the rugged landscapes and
                shapes of the land.</p>
                <br>
                <br>
                <p>You can read more about my work and my life from my bio.</p>
        </div>
            <div class="text-container-right">
                <p>Keep scrolling to view my work. My contact information can be found from my bio. I also post images of
                     my work on my instagram account, check it by clicking the icon below.</p>

                     <a href="http://www.instagram.com/mattimikaeli/" target="_blank" id="insta-icon"><img src="~/static/insta-icon.svg" alt="instagram-icon"></a>


                    <!-- Testing out vuescroll!!! -->
                <div class="lorem">
                    <vue-scroll :ops="ops">
                        <div class="loremText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat sem a viverra consectetur.
                        Ut in elit metus. Nulla laoreet dui turpis, ut auctor mauris semper eget. Quisque nisl tortor, fermentum in tortor ac, faucibus euismod est.
                        Nullam mi lacus, pretium eget enim ac, pretium hendrerit risus. Maecenas ultrices metus eu aliquet interdum. In egestas libero orci, nec pharetra lacus ornare in.
                        Phasellus vitae erat eu nibh vulputate euismod eu id nunc. Vestibulum quis tellus non lacus bibendum dictum.
                            Pellentesque non neque eu ex rhoncus consequat in at sem. Cras a augue ex. Nunc ligula nunc, elementum eu ligula et, luctus pretium risus.
                        magna arcu bibendum arcu, eget posuere sapien libero in ante. Cras vitae nisl ac erat aliquet ullamcorper eu quis tortor. Curabitur eget augue ac eros posuere laoreet vitae at est.
                        Sed at turpis eu erat sodales egestas. Fusce id pharetra nulla, nec efficitur odio. Ut non semper lectus. Sed massa ex, gravida sit amet laoreet consequat, faucibus vitae ipsum.
                        Integer efficitur eros id magna efficitur vulputate eget bibendum ligula. Nam auctor dolor ut est ultrices dictum.</p>
                        </div>
                    </vue-scroll>
                </div>

            </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            ops: {
                vuescroll: {
                    mode: 'native'
                },
                scrollPanel: {
                    scrolllingX: true,
                    scrolllingY: true
                },
                scrollContent: {

                },
                vRail: {
                    width: "10px",
                    pos: "right",
                    background: "#000",
                    opacity: 1
                },
                vBar: {
                    background: "#FFF"
                }
            }
        }
    },
  methods: {
      scrollFix: function(hashbang) {
          location.href = hashbang;
      }
}
}
</script>



<style scoped>

.main-container {
    background-color: #fff;
    z-index: 1;
}

.img-container {
    min-height: 100vh;
    background-image: url('~/static/mm-sormus.jpg');
    background-size: 100vw;
    background-repeat: no-repeat;
    z-index: 1;
}

.info-container {
    display: flex;
    flex: 1;
    min-height: 100vh;
    padding: 1em;
}

.info-container, .text-container p {
    font-size: 1.2em;
    letter-spacing: 0.1em;
}
.text-container-left {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-self: center;
    align-items: flex-start;
    width: 50%;
    height: 60vh;
    /* padding: 0px 10px 0px 20px; */
    padding: 2em;

}

.text-container-right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-self: center;
    text-align: center;
    align-items: flex-end;
    width: 50%;
    height: 80vh;
    /* padding: 0px 20px 0px 10px; */
    padding: 2em;
}

#insta-icon {
    align-self: center;
    padding: 40px 5px 0px 5px;
}
/* for the vuescroll test div */

.lorem {
    width: 100%;
    height: 150px;
}
.loremText {
    width: 100%;
    height: 300px;
}

</style>
