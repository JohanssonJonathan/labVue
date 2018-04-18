<template >
<div class="content">


  <div class="sliderContent">

    <div id="sliderContentChange" v-bind:style="{ marginLeft: '-' + mLeft + 'px'}">

      <div v-for="(x,index) in list " class="bild" v-on:click="PicClick(x, index)" v-bind:ref="ind">
        <img v-bind:src="x.imageUrl " alt=" ">
        <div class="info ">
          <h4>{{x.songAlbum}}</h4>
          <h4>{{x.songArtist}}</h4>
          <h4>{{x.songGenre}}</h4>
        </div>
        <div class="light">
        </div>
      </div>

    </div>

  </div>

  <!-- <div class="focus ">

    <img v-if="this.show.imageUrl.length> 0" v-bind:src="show.imageUrl" alt="">
      <div v-if="this.show.imageUrl.length > 0" class=" info ">
        <h4>{{show.songAlbum}}</h4>
        <h4>{{show.songArtist}}</h4>
        <h4>{{show.songGenre}}</h4>
      </div>
    </div> -->
</div>
</template>

<script>
export default {
  props: ["moreInfo", "list", "nr"],
  data: function() {
    return {
      show: {
        songAlbum: "",
        songArtist: "",
        songGenre: "",
        imageUrl: "",
      },
      newNr: this.nr,
      currentTag: "",
      ind: 0,
    }
  },

  computed: {
    mLeft: function() {
      return this.newNr * 300

    },
    theRef: function() {
      return ind++
    }



  },
  methods: {
    showObj: function(changeNr) {



      if (changeNr === "added") {
        this.newNr = 0;


      } else {

        this.newNr = changeNr

        for (let y = 0; y < this.list.length; y++) {

          if (y === changeNr) {
            this.$refs["0"][y].style.transform = "scale(1.4)";
            this.$refs["0"][y].style.zIndex = "100";


          } else {
            this.$refs["0"][y].style.transform = "scale(1)";
            this.$refs["0"][y].style.zIndex = "20";


          }


        }
      }

      this.show.songAlbum = this.moreInfo.songAlbum;
      this.show.songArtist = this.moreInfo.songArtist;
      this.show.songGenre = this.moreInfo.songGenre;
      this.show.imageUrl = this.moreInfo.imageUrl;
    },
    PicClick: function(i, index) {
      let val = [i, index]

      this.$emit("updateNr", val)
      this.newNr = val[1]
      console.log(this.list.length)
      for (let z = 0; z < this.list.length; z++) {
        if (z === index) {
          this.$refs["0"][z].style.transform = "scale(1.4)";
          this.$refs["0"][z].style.zIndex = "100";

          console.log(this.$refs["0"][z + 1])

        } else {
          this.$refs["0"][z].style.transform = "scale(1)";
          this.$refs["0"][z].style.zIndex = "20";
        }


      }
      // this.$refs["0"][index].style.transform = "scale(2)";
      // this.$refs["0"][index].style.transform = "scale(2)";

    },



  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 390px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
  /* background: rgba(154, 128, 128, 0.4);
  margin-left: 0px;
  margin-bottom: 0px;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.7); */
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#605252+0,605252+100&1+0,0+41,0+53,1+100 */
  background: -moz-linear-gradient(left, rgba(96, 82, 82, 1) 0%, rgba(96, 82, 82, 0) 41%, rgba(96, 82, 82, 0) 53%, rgba(96, 82, 82, 1) 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(left, rgba(96, 82, 82, 1) 0%, rgba(96, 82, 82, 0) 41%, rgba(96, 82, 82, 0) 53%, rgba(96, 82, 82, 1) 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, rgba(96, 82, 82, 1) 0%, rgba(96, 82, 82, 0) 41%, rgba(96, 82, 82, 0) 53%, rgba(96, 82, 82, 1) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#605252', endColorstr='#605252', GradientType=1);
  /* IE6-9 */
  /* IE6-9 */
  /* IE6-9 */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);

}



.sliderContent {
  width: 300px;
  height: 250px;
  white-space: nowrap;

}

#sliderContentChange {
  display: inline-block;
  margin-left: 0px;
  transition-property: margin-left;
  transition-duration: 0.5s;

}


.focus {

  /* align-items: center; */
  margin: 0;
  padding: 0;
  /* top: -120px; */
  /* right: 0; */
  display: inline-block;
  /* display: inline-block; */
  /* position: relative; */
  /* top: 180px; */
  /* color: black; */
}

/* .focus  */

img {
  position: relative;
  /* border: 2px solid black; */
  width: 300px;
  height: 250px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  z-index: 20;
  /* top: 250px; */
  /* left: 150px; */
  transition-property: transform;
  transition-duration: 1s;
  display: inline-block;
}

.light {
  position: absolute;
  width: 350px;
  height: 300px;
  border-radius: 100%;
  top: -25px;
  left: -25px;
  z-index: 25;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,7db9e8+100&0.36+0,0.08+20,0+57 */
  background: -moz-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 0.36) 0%, rgba(229, 241, 250, 0.08) 20%, rgba(181, 215, 242, 0) 57%, rgba(125, 185, 232, 0) 100%);
  /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, rgba(255, 255, 255, 0.36) 0%, rgba(229, 241, 250, 0.08) 20%, rgba(181, 215, 242, 0) 57%, rgba(125, 185, 232, 0) 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.36) 0%, rgba(229, 241, 250, 0.08) 20%, rgba(181, 215, 242, 0) 57%, rgba(125, 185, 232, 0) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5cffffff', endColorstr='#007db9e8', GradientType=1);
  /* IE6-9 fallback on horizontal gradient */
  /* IE6-9 fallback on horizontal gradient */
}


.bild {
  transition-property: transform;
  transition-duration: 0.5s;
  position: relative;
  display: inline-block;
}


.info {
  bottom: 20px;
  z-index: 21;
  word-wrap: break-word;
  position: absolute;
  /* bottom: -250px; */
  /* left: 150px; */
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
  padding: 10px 20px;
  width: 300px;
}

.info h4 {
  max-width: 300px;
  white-space: initial;
  /* word-wrap: break-word; */
  /* word-break: normal; */
  /* overflow: visible; */
}
</style>
