<template >
<div class="DivList">


  <table>
    <tr>

      <td class="musicList">Title</td>
      <td class="musicList">Genre</td>
      <td class="musicList">Year</td>
      <td></td>
      <!-- <td></td> -->

    </tr>

    <tr v-for="(i,index) in list" @click="show(i)" :class="{editing: i == editedList}">
      <!-- <td>{{i.songName}}</td>
      <td>{{i.songGenre}}</td>
      <td>{{i.songYear}}</td> -->
      <div class="nr">
        {{index+1}}:
      </div>
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
          <img src="../../static/icons/edit.svg" @click="editData(i)" id="editBtn"/>
        </div>
        <div class="edit">
          <img src="../../static/icons/checked.svg" @click="saveData(i)" class="deleteInfo"/>
        </div>
        <img src="../../static/icons/rubbish-bin.svg" class="deleteInfo" @click="removeData(i,index)"/>
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
  right: 0;
  margin: 0;
  padding: 0;

}
.nr{
  position: absolute;
  left:0;
  font-size: 0.9em;
}

.DivList ul{
  list-style-type: none;
  text-align: center;
}


#listText{
  padding:5px;
}

table{
  position: relative;
  color:rgba(0,0,0,0.7);
  width: 600px;
    right: 30px;
}
.musicList{
  border-bottom: 2px solid rgba(0,0,0,0.6);

}

tr div{

}

td{
  width:10px;
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
  width:70px;
  margin:0;

}

#editBtn, .deleteInfo{
  float:right;
  width:20px;
  display:inline;
  margin-right: 5px;
}

</style>
