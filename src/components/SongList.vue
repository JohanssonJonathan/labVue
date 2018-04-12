<template >
<div class="DivList">


  <table>
    <tr>

      <td class="musicList">Title</td>
      <td class="musicList">Artist</td>
      <td class="musicList">Genre</td>
      <td></td>
      <!-- <td></td> -->

    </tr>

    <tr v-for="(i,index) in list" @click="show(i)" :class="{editing: i == editedList}">
      <!-- <td>{{i.songName}}</td>
      <td>{{i.songGenre}}</td>
      <td>{{i.songYear}}</td> -->
      <div class="view">
        {{i.songName}}
      </div>
      <div class="edit">
        <input type="text" v-model="i.songName" />
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
      <td>
        <div class="view">
          {{i.songYear}}
        </div>
        <div class="edit">
          <input type="text" v-model="i.songYear" />
        </div>
      </td>
      <td>
        <div class="view">
          <button @click="editData(i)">edit</button>
        </div>
        <div class="edit">
          <button @click="saveData(i)">save</button>
        </div>
        <button class="deleteInfo" @click="removeData(i,index)">delete</button>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
// import AddImage from './AddImage.vue';
// import SongList from './SongList.vue';

export default {
  name: "add",
  props: ["list"],
  components: {
    // "add-song": AddSong,
    // "add-image": AddImage,
    // "song-list": SongList,
  },
  data: function() {
    return {
      // editMode: false,
      editedList: null,
      hej: true,
    }
  }, //data
  methods: {
    saveData(i) {
      console.log(this.editedList)
      this.editedList = i;
      this.editData();
    },
    editData(i) {
      this.beforEditCache = i;
      this.editedList = i;
    },

    show(i){

      if(this.hej){
        this.$emit("showInfo",i)

        console.log("show")
      }

      this.hej = true;


    },
    removeData(i,index) {
      console.log("delete")

      this.hej = false;


        this.list.splice(index, 1);

      if(this.list.length ===0){
        this.$emit("showInfo", "")

      }

        if(index ===0){
          this.$emit("showInfo", this.list[index])

        }else{
          this.$emit("showInfo", this.list[index-1])

        }

    },
  } //methods
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
  position: relative;
  top:160px;
  float: right;
  width: 40%;
  right: 0;
  margin: 0;
  padding: 0;

}

.DivList ul{
  list-style-type: none;
  text-align: center;
}


#listText{
  padding:5px;
}

table{
  color:rgba(0,0,0,0.7);
  padding: 5px 0px;
  width: 100%;

}
.musicList{
  border-bottom: 2px solid rgba(0,0,0,0.6);

}
td{
  width:50px;
}
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
/* [v-cloak] {
  display: none;
} */

.edit {
  display: none;
}

.editing .edit {
  display: block;
}

.editing .view {
  display: none;
}

input {
  width:100px;
}

button {
  background: #059f5c;
  background-image: -webkit-linear-gradient(top, #059f5c, #1cc446);
  background-image: -moz-linear-gradient(top, #059f5c, #1cc446);
  background-image: -ms-linear-gradient(top, #059f5c, #1cc446);
  background-image: -o-linear-gradient(top, #059f5c, #1cc446);
  background-image: linear-gradient(to bottom, #059f5c, #1cc446);
  border-radius: 12px;
  color: #000000;
  width: 70px;
  padding: 2px 5px 2px 5px;
  text-decoration: none;
  float:right;
}

button:hover {
  background: #18d911;
  text-decoration: none;
}

.deleteInfo {
  background: #ed1d20;
  background-image: -webkit-linear-gradient(top, #ed1d20, #db515c);
  background-image: -moz-linear-gradient(top, #ed1d20, #db515c);
  background-image: -ms-linear-gradient(top, #ed1d20, #db515c);
  background-image: -o-linear-gradient(top, #ed1d20, #db515c);
  background-image: linear-gradient(to bottom, #ed1d20, #db515c);
}
button.deleteInfo:hover {
  background: #ff0000;
  text-decoration: none;
}
</style>
