<template >

  <div class="focus">

    <img v-bind:src="show.imageUrl" alt="">
    <div class="info">
      <h4>{{show.songName}} </h4>
      <h4>{{show.songGenre}}</h4>
      <h4>{{show.songYear}}</h4>
    </div>

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
  top:180px;
  color:black;

}
.info{
  position: absolute;
  bottom:5px;
  left:0;
  right: 0;
  background: rgba(0,0,0,0.6);
  color:rgba(255,255,255,0.7);
  text-align:left;
  padding:10px 0;
}

.info h4{
  margin-left: 20px;
}
.focus img{
  max-width: 500px;
  overflow: hidden;
  height: 350px;

  box-shadow: 0 0 10px rgba(0,0,0,0.6);
}
</style>
