<template>
<div id="app">
  <h4 id="headText">Create your own music list below</h4>

  <div>
    <add-song v-on:addNewSong="updateList($event)"></add-song>
    <show-info v-bind:moreInfo="moreInfo" v-bind:list="list" ref="form" v-on:updateNr="updateNr($event)" v-bind:nr="nr"></show-info>
    <song-list v-bind:list="list" v-on:showInfo="showInfo($event)"></song-list>
  </div>
</div>
</template>

<script>
import AddSong from './AddSong.vue';
import ShowInfo from './showInfo.vue';
import SongList from './SongList.vue';
import defaultList from '../../static/defaultList.json'

export default {
  name: "add",
  components: {
    "add-song": AddSong,
    "show-info": ShowInfo,
    "song-list": SongList,

  },
  data: function() {
    return {
      list: defaultList,
      moreInfo: {},
      nr: 0,
    }
  }, //data
  methods: {
    updateList: function(e) {
      this.list.unshift({
        songAlbum: e.songAlbum,
        songArtist: e.songArtist,
        songGenre: e.songGenre,
        imageUrl: e.imageUrl
      });
      console.log(this.list)
      this.moreInfo.songAlbum = e.songAlbum;
      this.moreInfo.songArtist = e.songArtist;
      this.moreInfo.songGenre = e.songGenre;
      this.moreInfo.imageUrl = e.imageUrl;

      this.$refs.form.showObj("added")


    },
    showInfo: function(val) {

      this.nr = val[1]
      console.log(this.nr)
      if (val[0] !== "" && val[0] !== undefined) {
        this.moreInfo.songAlbum = val[0].songAlbum;
        this.moreInfo.songArtist = val[0].songArtist;
        this.moreInfo.songGenre = val[0].songGenre;
        this.moreInfo.imageUrl = val[0].imageUrl;
        this.$refs.form.showObj(this.nr)

      } else {
        this.moreInfo.songAlbum = "";
        this.moreInfo.songArtist = "";
        this.moreInfo.songGenre = "";
        this.moreInfo.imageUrl = "";
        this.$refs.form.showObj(this.nr)

      }

    },
    updateNr: function(i) {
      this.nr = i[1]
    }

  }, //methods
}
</script>

<!-- CSS libraries -->

<style src="normalize.css/normalize.css">
</style><!-- Global CSS --><style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');

body {
  font-family: 'Montserrat', sans-serif;
  /* background: rgba(76, 59, 87,0.8); */
  /* background: rgba(251, 225, 182,0.6); */
  background: rgb(31, 33, 31);
  /* border-top: 20px solid rgba(154, 128, 128, 0.4); */

}

h4#headText {
  color: rgba(255,255,255,0.7);
  display: inline-block;
  /* text-shadow: 0 0 70px ; */
  /* border-bottom: 2px solid rgb(40, 83, 102); */
  text-align: center;
  position: relative;
  top: 20px;
  /* width: 300px; */
  /* font-size: 0.8em; */
  padding: 10px 0px;
  z-index: 2;
}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
#app {
  text-align: center;
}

#app h1 {
  color: #2c3e50;
  font-weight: 300;
  margin: 0;
}

.banner {
  height: 200px;
  background-color: #f6f6f6;
  padding: 50px 10px;
}

.bottom {
  padding: 80px 10px;
  font-size: 24px;
  font-weight: 300;
}

.fade {
  font-size: 14px;
}

.logo {
  animation: spin 4s 1s infinite linear
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
