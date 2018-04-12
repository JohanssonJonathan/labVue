<template>
  <div class="addContent">

		<button v-if="bool" v-on:click="showAdd" class="add">Add Song</button>
    <button v-else v-on:click="publish" class="add">Publish</button>

    <div v-if="showAddSong" class="showAddSong">
      <input type="text" placeholder="Song name..." v-model="currentSong.songName">
      <input type="text" placeholder="Genre..." v-model="currentSong.songGenre">
      <input type="text" placeholder="Release year..." v-model="currentSong.songYear">
      <input type="text" placeholder="Image URL" v-model="currentSong.imageUrl">


    </div>
	</div>
</template>

<script>
export default {
  data : function(){

    return {
      bool: true,
      showAddSong: false,
      songList: [],
      currentSong : {
        songName: "",
        songGenre: "",
        songYear: "",
        imageUrl: ""
      }
    }

  },
  methods : {

    showAdd : function(){

      if(this.showAddSong){
        this.showAddSong = false;
        this.bool = true;
      }
      else{
        this.showAddSong = true;
        this.bool = false;

      }

    },
    publish: function(){

      if (this.currentSong.songName != "" && this.currentSong.songGenre != "" && this.currentSong.songYear != "" && this.currentSong.imageUrl != "") {
        this.$emit("addNewSong", this.currentSong)
        this.showAdd();
        this.currentSong.songName = "";
        this.currentSong.songGenre = "";
        this.currentSong.songYear = "";
        this.currentSong.imageUrl = "";
      } else {
        console.log("you missed to fill out the form")
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
  top:60px;
  width: 60%;
  margin: 0 auto;
  right: 0;
  left:0;
  height: 50px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border-bottom:3px solid rgb(5, 159, 92);
}

div.showAddSong input{
  z-index: 5;
  width:10%;
  margin:10px  ;
  border:none;
  font-size: 0.8em;
  text-align: center;
  padding:5px;

}

::placeholder {
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
  top:-20px;
  font-size: 0.8em;
  background: rgba(255,255,255,0);
  z-index: 2;
  box-shadow: 0px -7px rgb(0, 185, 104);
  width: 100px;
  border-radius: 100%;
  height: 100px;
  border:none;
  color:rgba(0,0,0,0.7);
}
</style>
