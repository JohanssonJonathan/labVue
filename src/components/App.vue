<template>
<div id="app">
  <h5 id="headText">Create your own music list below</h5>

  <div>
    <add-song v-on:addNewSong="updateList($event)"></add-song>
    <show-info v-bind:moreInfo="moreInfo" ref="form"></show-info>
    <song-list v-bind:list="list" v-on:showInfo="showInfo($event)"></song-list>
  </div>
</div>
</template>

<script>
import AddSong from './AddSong.vue';
import ShowInfo from './showInfo.vue';
import SongList from './SongList.vue';

export default {
  name: "add",
  components: {
    "add-song": AddSong,
    "show-info": ShowInfo,
    "song-list": SongList,
  },
  data: function() {
    return {
      list: [],
      moreInfo: {},
    }
  }, //data
  methods: {
    updateList: function(e) {

      this.list.unshift({
        songTitle: e.songTitle,
        songArtist: e.songArtist,
        songGenre: e.songGenre,
        imageUrl: e.imageUrl
      });

      this.moreInfo.songTitle = e.songTitle;
      this.moreInfo.songArtist = e.songArtist;
      this.moreInfo.songGenre = e.songGenre;
      this.moreInfo.imageUrl = e.imageUrl;
      this.$refs.form.showObj()


    },
    showInfo: function(i) {

      if (i !== "" && i !== undefined) {
        this.moreInfo.songTitle = i.songTitle;
        this.moreInfo.songArtist = i.songArtist;
        this.moreInfo.songGenre = i.songGenre;
        this.moreInfo.imageUrl = i.imageUrl;
        this.$refs.form.showObj()

      } else {
        this.moreInfo.songTitle = "";
        this.moreInfo.songArtist = "";
        this.moreInfo.songGenre = "";
        this.moreInfo.imageUrl = "";
        this.$refs.form.showObj()

      }




    },

  }, //methods
}
</script>

<!-- CSS libraries -->

<style src="normalize.css/normalize.css">
</style><!-- Global CSS --><style>* {
  margin: 0;
  padding: 0;
}

@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans');

body {
  font-family: 'Montserrat', sans-serif;
  /* background: rgba(76, 59, 87,0.8); */
  /* background: rgba(251, 225, 182,0.6); */
}

h5#headText {
  color: black;
  display: inline-block;
  /* border-bottom: 2px solid rgb(40, 83, 102); */
  text-align: center;
  position: relative;
  top: 40px;
  width: 300px;
  font-size: 0.8em;
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
