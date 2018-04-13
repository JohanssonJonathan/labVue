<template >
<div class="focus">

  <img v-if="this.show.imageUrl.length > 0" v-bind:src="show.imageUrl" alt="">
  <div v-if="this.show.imageUrl.length > 0" class=" info ">
    <h4>{{show.songAlbum}}</h4>
    <h4>{{show.songArtist}}</h4>
    <h4>{{show.songGenre}}</h4>
  </div>
</div>
</template>

<script>
export default {
  props: ["moreInfo", "dell"],
  data: function() {
    return {
      show: {
        songAlbum: "",
        songArtist: "",
        songGenre: "",
        imageUrl: "",
      },
    }
  },
  methods: {
    showObj: function() {
      this.show.songAlbum = this.moreInfo.songAlbum;
      this.show.songArtist = this.moreInfo.songArtist;
      this.show.songGenre = this.moreInfo.songGenre;
      this.show.imageUrl = this.moreInfo.imageUrl;
      console.log(this.show.imageUrl.length)
      console.log(this.show.imageUrl)
    },
  }
}
</script>

<style scoped>
.focus {
  /* display: inline-block; */
  /* position: relative; */
  /* top: 180px; */
  /* color: black; */
}

/* .focus  */

.focus img {
  position: absolute;
  /* border: 2px solid black; */
  width: 400px;
  overflow: hidden;
  height: 350px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  z-index: -1;
  top: 300px;
  left: 150px;
}

.info {
  z-index: 10;
  position: absolute;
  bottom: 84px;
  left: 150px;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.7);
  text-align: left;
  padding: 10px 0;
  width: 400px;
}

.info h4 {
  margin-left: 20px;
}
</style>
