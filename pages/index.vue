<template>
  <section class="main-container">
      <customHeader2/>
      <div class="img-container">
      </div>
      <div class="info-container">
        <div class="text-container-left">
          <a name="info" id="infoArea"></a><p>A goldsmith originating from Lapland, Finland. My designs largely reflect elements and shapes from the rich,
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
            </div>
      </div>
  </section>
</template>

<script>
export default {
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
}

.info-container p {
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
    padding: 0px 10px 0px 20px;

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
    padding: 0px 20px 0px 10px;
}

#insta-icon {
    align-self: center;
    padding: 40px 5px 0px 5px;
}

</style>
