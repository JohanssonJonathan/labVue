<template>
<div class="addContent">

  <!-- <button v-if="bool" v-on:click="showAdd" class="add">Add Song</button> -->
  <div class="add">
    <button v-on:click="publish" class="add">Add Song</button>
    <!-- <h3 id="x" @click="showAdd">x</h3> -->
  </div>

  <div class="showAddSong">
    <input type="text" placeholder="Album name..." v-model="currentSong.songAlbum">
    <input type="text" placeholder="Artist..." v-model="currentSong.songArtist">
    <input type="text" placeholder="Genre..." v-model="currentSong.songGenre">
    <input type="text" placeholder="Image URL" v-model="currentSong.imageUrl">


  </div>
  <h4 id="fill">{{fill}}</h4>
</div>
</template>

<script>
export default {
  data: function() {

    return {
      fill: "",
      bool: true,
      showAddSong: false,
      songList: [],
      currentSong: {
        songAlbum: "",
        songArtist: "",
        songGenre: "",
        imageUrl: ""
      }
    }

  },
  methods: {

    showAdd: function() {

      if (this.showAddSong) {
        this.showAddSong = false;
        this.bool = true;
      } else {
        this.showAddSong = true;
        this.bool = false;

      }
      this.fill = "";
    },
    publish: function() {
      console.log("hej")
      if (this.currentSong.songAlbum != "" && this.currentSong.songArtist != "" && this.currentSong.songGenre != "" && this.currentSong.imageUrl != "") {
        this.$emit("addNewSong", this.currentSong)
        this.showAdd();
        this.currentSong.songAlbum = "";
        this.currentSong.songArtist = "";
        this.currentSong.songGenre = "";
        this.currentSong.imageUrl = "";
        this.fill = "";
      } else {
        this.fill = "You missed to fill out the form";
      }
    }


  }
}
</script>

<style scoped lang="css">

div.addContent{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;
  top:90px;

}

div.showAddSong{
  position: absolute;
  width: 90%;
  margin: 0 auto;

  right: 0;
  left:0;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

#x{
  position: absolute;
  right: -350px;
  z-index: 10;
  width: 20px;
  height: 20px;
  bottom:5px;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
}
#fill{
  position: absolute;
  color:rgba(255,255,255,0.8);
  top:130px;
  z-index: 500;
}

div.showAddSong input{
  color:rgba(255,255,255,0.7);
  z-index: 5;
  width:10%;
  margin-top: 0px;
  border:none;
  font-size: 0.9em;
  text-align: center;
  background: rgb(31, 33, 31,0);
  border-bottom: 2px solid rgba(255,255,255,0.7);
}

.add{
  position: relative;
}

::placeholder{
  color:rgba(255,255,255,0.5);
  text-align: center;

}

button#publish{
  position: absolute;
  margin: 0 auto;
  top:55px;
  background: ;
  font-size: 0.8em;
  z-index: 2;



  outline: none;
  border: none;
  border-bottom: 3px solid rgba(0,0,0,0.6);
  color:rgb(5, 159, 92);
  z-index: -1;
  width: 100px;
  height: 40px;
}

button.add{
  outline: none;

  position: relative;
  top:-40px;
  font-size: 0.8em;
  background: rgba(255,255,255,0);
  z-index: 2;
  box-shadow: 0px -7px rgb(0, 185, 104);
  width: 80px;
  border-radius: 100%;
  height: 80px;
  border:none;
  color:rgba(255,255,255,0.7);
}
</style>
