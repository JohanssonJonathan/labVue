<template >
<div class="DivList">

  <table>
    <tr>

      <td class="musicList">Album</td>
      <td class="musicList">Artist</td>
      <td class="musicList">Genre</td>
      <td></td>
    </tr>
  </table>

  <table id="innehall">

    <tr v-for="(i,index) in list" @click="show(i, index)" :class="{editing: i == editedList}">

      <td>
        <div class="view">
          {{i.songAlbum}}
        </div>
        <!-- </td> -->
        <div class="edit">
          <input type="text" v-model="i.songAlbum" />
        </div>
      </td>
      <td>
        <div class="view">
          {{i.songArtist}}
        </div>
        <div class="edit">
          <input type="text" v-model="i.songArtist" />
        </div>
      </td>
      <td>
        <div class="view">
          {{i.songGenre}}
        </div>
        <div class="edit">
          <input type="text" v-model="i.songGenre" />
        </div>
      </td>
      <td class="buttons">
        <div class="view">
          <img src="https://firebasestorage.googleapis.com/v0/b/landingpage-46d25.appspot.com/o/edit.svg?alt=media&token=778da710-a707-4cf5-b083-356b3bdd7661" @click="editData(i)" id="editBtn" />

        </div>
        <div class="edit">
          <img src="https://firebasestorage.googleapis.com/v0/b/landingpage-46d25.appspot.com/o/checked.svg?alt=media&token=cd2bd6d3-adc3-4f13-b4b0-67534388900a" @click="saveData(i)" class="deleteInfo" />
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/landingpage-46d25.appspot.com/o/rubbish-bin.svg?alt=media&token=b310ee71-3961-459e-8afc-ec3285231b76" class="deleteInfo" @click="removeData(i,index)" />
      </td>

      <!-- </div> -->
    </tr>

  </table>

</div>
</template>

<script>
// import AddImage from './AddImage.vue';
// import SongList from './SongList.vue';

export default {
  name: "add",
  props: ["list", "nr"],
  components: {

  },
  data: function() {
    return {
      editedList: null,
      showInformation: true,
    }
  }, //data
  methods: {
    saveData(i) {
      this.editedList = i;
      this.editData();
    },
    editData(i) {
      this.beforEditCache = i;
      this.editedList = i;
    },

    show(i, index) {

      let val = [i, index]
      if (this.showInformation) {
        this.$emit("showInfo", val)

      }
      this.showInformation = true;

    },
    removeData(i, index) {


      this.showInformation = false;


      if (this.nr === this.list.length - 1) {

        this.$emit("showInfo", this.list.length - 2)
      }

      this.list.splice(index, 1);

      if (this.list.length === 0) {
        this.$emit("showInfo", "")

      }

      if (index === 0) {
        this.$emit("showInfo", this.list[index])

      } else {
        this.$emit("showInfo", this.list[index - 1])
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

.DivList{
  display: flex;
  justify-content: center;
  flex-direction: column;

  /* height: 350px; */

}
.nr{
  position: absolute;
  left:0;
  font-size: 0.9em;
}

tbody {

  background: red;

}


#listText{
}

table{
  top:20px;
  position: relative;
  color:rgba(255,255,255,0.4);
    table-layout: fixed;
    margin-bottom: 20px;
    padding:0 40px;
    width: 85%;
    /* margin: 0 auto; */
    left:15%;


}



.musicList{
  border-bottom: 2px solid rgba(255,255,255,0.6);
  font-weight: 700;

}

td {
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  padding:5px 10px;
  /* max-width: 100px; */

  cursor: pointer;
  /* position: relative; */
  /* position: absolute; */

}


td:hover {
  text-decoration: underline;
  background: rgb(52, 55, 52);

}
td:hover:nth-child(4) {
  text-decoration: none;
  background: rgba(52, 55, 52,0);

}

td.buttons img{
  transition-property: transform;
  transition-duration: 0.3s;
}

td.buttons img:first-child:hover{
  transform: rotate(20deg);
}

td.buttons img:nth-child(2):hover{
  transform: rotate(20deg);
}

td.buttons img:last-child:hover{
  transform: rotate(20deg);
}

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
/* [v-cloak] {
  display: none;
} */

div.view {
  display: inline;
  /* margin-left: 5px; */
  /* right: 20px; */
  /* position: absolute;
  top: 0; */
  /* left: 10px; */
}



.edit {
  display: none;
}

.editing .edit {
  display: inline
}

.editing .view {
  display: none;
}

input {
  width: 220px;
  /* margin: 0; */
}

/* #editBtn,
.deleteInfo {
  float: right;
  width: 20px;
  display: inline;
  margin-right: 5px;
} */

img#editBtn {

  display: inline-block;
  margin-left: 4px;
  width: 20px;
}

img.deleteInfo {
  display: inline-block;
  margin-left: 4px;
  /* margin-left: -10px; */
  width: 20px;
}

.buttonRow {
  /* position: relative; */
  /* right: 0; */
  /* margin-left: 200px; */
}

td.buttons {
  position: absolute;
  /* position: relative; */
  /*   padding: 0; */
  opacity: 0.4;
  /* right: 5px; */
  z-index: 1000;
  /* margin-right: 200px; */
}
</style>
