<template >
  <div class="focus">

    <img v-bind:src="show.imageUrl" alt="">
    <h2>{{show.songName}}  {{show.songGenre}}  {{show.songYear}}</h2>

  </div>


</template>

<script>
export default {
  props:["moreInfo", "dell"],
  data: function(){
    return {

        show:{
          songName : "",
          songGenre: "",
          songYear: "",
          imageUrl: "",
        },

    }
  },
  methods :{
    showObj:function(del){




          this.show.songName = this.moreInfo.songName;
          this.show.songGenre = this.moreInfo.songGenre;
          this.show.songYear = this.moreInfo.songYear;
          this.show.imageUrl = this.moreInfo.imageUrl;




    },
  }
}
</script>

<style scoped>

.focus{
  display: inline-block;
  position:relative;
  padding: 10px;
  top:50px;
  width: 50%;
  color:black;
}

.focus img{
  width: 90%;
  box-shadow: 0 0 10px rgba(0,0,0,0.6);
}
</style>
