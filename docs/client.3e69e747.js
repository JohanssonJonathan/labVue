webpackJsonp([0],[,,,function(t,s,e){"use strict";var n=e(21),o=e(24),i=e(27),r=e(32),a=e.n(r);s.a={name:"add",components:{"add-song":n.a,"show-info":o.a,"song-list":i.a},data:function(){return{list:a.a,moreInfo:{},nr:0}},methods:{updateList:function(t){this.list.unshift({songAlbum:t.songAlbum,songArtist:t.songArtist,songGenre:t.songGenre,imageUrl:t.imageUrl}),console.log(this.list),this.moreInfo.songAlbum=t.songAlbum,this.moreInfo.songArtist=t.songArtist,this.moreInfo.songGenre=t.songGenre,this.moreInfo.imageUrl=t.imageUrl,this.$refs.form.showObj("added")},showInfo:function(t){this.nr=t[1],console.log(this.nr),""!==t[0]&&void 0!==t[0]?(this.moreInfo.songAlbum=t[0].songAlbum,this.moreInfo.songArtist=t[0].songArtist,this.moreInfo.songGenre=t[0].songGenre,this.moreInfo.imageUrl=t[0].imageUrl,this.$refs.form.showObj(this.nr)):(this.moreInfo.songAlbum="",this.moreInfo.songArtist="",this.moreInfo.songGenre="",this.moreInfo.imageUrl="",this.$refs.form.showObj(this.nr))},updateNr:function(t){this.nr=t[1]}}}},function(t,s,e){"use strict";s.a={data:function(){return{fill:"",bool:!0,showAddSong:!1,songList:[],currentSong:{songAlbum:"",songArtist:"",songGenre:"",imageUrl:""}}},methods:{showAdd:function(){this.showAddSong?(this.showAddSong=!1,this.bool=!0):(this.showAddSong=!0,this.bool=!1),this.fill=""},publish:function(){console.log("hej"),""!=this.currentSong.songAlbum&&""!=this.currentSong.songArtist&&""!=this.currentSong.songGenre&&""!=this.currentSong.imageUrl?(this.$emit("addNewSong",this.currentSong),this.showAdd(),this.currentSong.songAlbum="",this.currentSong.songArtist="",this.currentSong.songGenre="",this.currentSong.imageUrl="",this.fill=""):this.fill="You missed to fill out the form"}}}},function(t,s,e){"use strict";s.a={props:["moreInfo","list","nr"],data:function(){return{show:{songAlbum:"",songArtist:"",songGenre:"",imageUrl:""},newNr:this.nr,currentTag:"",ind:0}},computed:{mLeft:function(){return 300*this.newNr},theRef:function(){return ind++}},methods:{showObj:function(t){if("added"===t)this.newNr=0;else{this.newNr=t;for(var s=0;s<this.list.length;s++)s===t?(this.$refs[0][s].style.transform="scale(1.4)",this.$refs[0][s].style.zIndex="100"):(this.$refs[0][s].style.transform="scale(1)",this.$refs[0][s].style.zIndex="20")}this.show.songAlbum=this.moreInfo.songAlbum,this.show.songArtist=this.moreInfo.songArtist,this.show.songGenre=this.moreInfo.songGenre,this.show.imageUrl=this.moreInfo.imageUrl},PicClick:function(t,s){var e=[t,s];this.$emit("updateNr",e),this.newNr=e[1],console.log(this.list.length);for(var n=0;n<this.list.length;n++)n===s?(this.$refs[0][n].style.transform="scale(1.4)",this.$refs[0][n].style.zIndex="100",console.log(this.$refs[0][n+1])):(this.$refs[0][n].style.transform="scale(1)",this.$refs[0][n].style.zIndex="20")}}}},function(t,s,e){"use strict";s.a={name:"add",props:["list"],components:{},data:function(){return{editedList:null,showInformation:!0}},methods:{saveData:function(t){console.log(this.editedList),this.editedList=t,this.editData()},editData:function(t){this.beforEditCache=t,this.editedList=t},show:function(t,s){var e=[t,s];console.log(e),this.showInformation&&this.$emit("showInfo",e),this.showInformation=!0},removeData:function(t,s){console.log("delete"),this.showInformation=!1,this.list.splice(s,1),0===this.list.length&&this.$emit("showInfo",""),0===s?this.$emit("showInfo",this.list[s]):this.$emit("showInfo",this.list[s-1])}}}},function(t,s,e){e(8),e(10),t.exports=e(15)},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(9),o=e.n(n);o.a.install({onUpdateReady:function(){o.a.applyUpdate()}})},,function(t,s,e){window.Promise||(window.Promise=e(11)),Object.assign=e(14)},,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(16),o=e(17);n.a.config.productionTip=!1,new n.a({el:"#app",render:function(t){return t(o.a)}})},,function(t,s,e){"use strict";function n(t){e(18),e(19),e(20)}var o=e(3),i=e(33),r=e(0),a=n,l=r(o.a,i.a,!1,a,"data-v-ccf1c3a2",null);s.a=l.exports},,function(t,s){},function(t,s){},function(t,s,e){"use strict";function n(t){e(22)}var o=e(4),i=e(23),r=e(0),a=n,l=r(o.a,i.a,!1,a,"data-v-7a57adf2",null);s.a=l.exports},function(t,s){},function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"addContent"},[e("div",{staticClass:"add"},[e("button",{staticClass:"add",on:{click:t.publish}},[t._v("Add Song")])]),t._v(" "),e("div",{staticClass:"showAddSong"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSong.songAlbum,expression:"currentSong.songAlbum"}],attrs:{type:"text",placeholder:"Album name..."},domProps:{value:t.currentSong.songAlbum},on:{input:function(s){s.target.composing||t.$set(t.currentSong,"songAlbum",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSong.songArtist,expression:"currentSong.songArtist"}],attrs:{type:"text",placeholder:"Artist..."},domProps:{value:t.currentSong.songArtist},on:{input:function(s){s.target.composing||t.$set(t.currentSong,"songArtist",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSong.songGenre,expression:"currentSong.songGenre"}],attrs:{type:"text",placeholder:"Genre..."},domProps:{value:t.currentSong.songGenre},on:{input:function(s){s.target.composing||t.$set(t.currentSong,"songGenre",s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.currentSong.imageUrl,expression:"currentSong.imageUrl"}],attrs:{type:"text",placeholder:"Image URL"},domProps:{value:t.currentSong.imageUrl},on:{input:function(s){s.target.composing||t.$set(t.currentSong,"imageUrl",s.target.value)}}})]),t._v(" "),e("h4",{attrs:{id:"fill"}},[t._v(t._s(t.fill))])])},o=[],i={render:n,staticRenderFns:o};s.a=i},function(t,s,e){"use strict";function n(t){e(25)}var o=e(5),i=e(26),r=e(0),a=n,l=r(o.a,i.a,!1,a,"data-v-1a6e0a3c",null);s.a=l.exports},function(t,s){},function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("div",{staticClass:"sliderContent"},[e("div",{style:{marginLeft:"-"+t.mLeft+"px"},attrs:{id:"sliderContentChange"}},t._l(t.list,function(s,n){return e("div",{ref:t.ind,refInFor:!0,staticClass:"bild",on:{click:function(e){t.PicClick(s,n)}}},[e("img",{attrs:{src:s.imageUrl,alt:" "}}),t._v(" "),e("div",{staticClass:"info "},[e("h4",[t._v(t._s(s.songAlbum))]),t._v(" "),e("h4",[t._v(t._s(s.songArtist))]),t._v(" "),e("h4",[t._v(t._s(s.songGenre))])]),t._v(" "),e("div",{staticClass:"light"})])}))])])},o=[],i={render:n,staticRenderFns:o};s.a=i},function(t,s,e){"use strict";function n(t){e(28),e(29),e(30)}var o=e(6),i=e(31),r=e(0),a=n,l=r(o.a,i.a,!1,a,"data-v-3d4d4cff",null);s.a=l.exports},,function(t,s){},function(t,s){},function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"DivList"},[t._m(0),t._v(" "),e("table",{attrs:{id:"innehall"}},t._l(t.list,function(s,n){return e("tr",{class:{editing:s==t.editedList},on:{click:function(e){t.show(s,n)}}},[e("td",[e("div",{staticClass:"view"},[t._v("\n          "+t._s(s.songAlbum)+"\n        ")]),t._v(" "),e("div",{staticClass:"edit"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.songAlbum,expression:"i.songAlbum"}],attrs:{type:"text"},domProps:{value:s.songAlbum},on:{input:function(e){e.target.composing||t.$set(s,"songAlbum",e.target.value)}}})])]),t._v(" "),e("td",[e("div",{staticClass:"view"},[t._v("\n          "+t._s(s.songArtist)+"\n        ")]),t._v(" "),e("div",{staticClass:"edit"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.songArtist,expression:"i.songArtist"}],attrs:{type:"text"},domProps:{value:s.songArtist},on:{input:function(e){e.target.composing||t.$set(s,"songArtist",e.target.value)}}})])]),t._v(" "),e("td",[e("div",{staticClass:"view"},[t._v("\n          "+t._s(s.songGenre)+"\n        ")]),t._v(" "),e("div",{staticClass:"edit"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.songGenre,expression:"i.songGenre"}],attrs:{type:"text"},domProps:{value:s.songGenre},on:{input:function(e){e.target.composing||t.$set(s,"songGenre",e.target.value)}}})])]),t._v(" "),e("td",{staticClass:"buttons"},[e("div",{staticClass:"view"},[e("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/landingpage-46d25.appspot.com/o/edit.svg?alt=media&token=778da710-a707-4cf5-b083-356b3bdd7661",id:"editBtn"},on:{click:function(e){t.editData(s)}}})]),t._v(" "),e("div",{staticClass:"edit"},[e("img",{staticClass:"deleteInfo",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/landingpage-46d25.appspot.com/o/checked.svg?alt=media&token=cd2bd6d3-adc3-4f13-b4b0-67534388900a"},on:{click:function(e){t.saveData(s)}}})]),t._v(" "),e("img",{staticClass:"deleteInfo",attrs:{src:"https://firebasestorage.googleapis.com/v0/b/landingpage-46d25.appspot.com/o/rubbish-bin.svg?alt=media&token=b310ee71-3961-459e-8afc-ec3285231b76"},on:{click:function(e){t.removeData(s,n)}}})])])}))])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("tr",[e("td",{staticClass:"musicList"},[t._v("Album")]),t._v(" "),e("td",{staticClass:"musicList"},[t._v("Artist")]),t._v(" "),e("td",{staticClass:"musicList"},[t._v("Genre")]),t._v(" "),e("td")])])}],i={render:n,staticRenderFns:o};s.a=i},function(t,s){t.exports=[{songAlbum:"Nevermind",songArtist:"Nirvana",songGenre:"Grunge",imageUrl:"https://img.wennermedia.com/920-width/rs-108777-fa16db09cdb1b7f4393ca3dd56a914a5cb09451b.jpg"},{songAlbum:"Off the edge of the earth and into forever,forever",songArtist:"Art vs science",songGenre:"Electro house",imageUrl:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg"},{songAlbum:"Globalization",songArtist:"Pitbull",songGenre:"Hiphop",imageUrl:"https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/a2/e7/f2/a2e7f233-7407-609a-3cac-115046332f16/886444753852.jpg/1200x630bb.jpg"},{songAlbum:"In too Deep",songArtist:"The Naked Heroes",songGenre:"Electro",imageUrl:"https://marketplace.canva.com/MAB6qNBAV-0/1/0/thumbnail_large/canva-in-too-deep-diving-music-album-cover-MAB6qNBAV-0.jpg"},{songAlbum:"Tattoos",songArtist:"Jason Durelo",songGenre:"Hiphop",imageUrl:"https://i.pinimg.com/originals/24/ff/75/24ff75355ae47f9c2b22f394d3ca288b.jpg"},{songAlbum:"Reputation",songArtist:"Taylor Swift",songGenre:"Pop",imageUrl:"http://i.dailymail.co.uk/i/pix/2017/08/24/21/4383013F00000578-4821102-image-a-77_1503607864789.jpg"},{songAlbum:"Lilla London Brinner",songArtist:"Glenn Udéhn",songGenre:"Indiepop",imageUrl:"https://i.ytimg.com/vi/lKh9QBLyIMY/maxresdefault.jpg"},{songAlbum:"Maggot Brain",songArtist:"Funkadelic",songGenre:"Funk rock",imageUrl:"https://cps-static.rovicorp.com/3/JPG_500/MI0002/457/MI0002457513.jpg?partner=allrovi.com"},{songAlbum:"Wasting Light",songArtist:"Foo Fighters",songGenre:"Rock",imageUrl:"https://is5-ssl.mzstatic.com/image/thumb/Music/d1/46/64/mzi.coouewwt.jpg/1200x630bb.jpg"},{songAlbum:"Come Clairty",songArtist:"In Flames",songGenre:"Metal",imageUrl:"https://i.pinimg.com/originals/eb/80/20/eb80206cc2ac11348ecc7057d90254c8.jpg"},{songAlbum:"Road to Red Rocks",songArtist:"Mumford & Sons",songGenre:"Folk Rock",imageUrl:"http://www.resident-music.com/image/cache/data/universal/nov12/3721815-500x500.jpg"}]},function(t,s,e){"use strict";var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("h4",{attrs:{id:"headText"}},[t._v("Create your own music list below")]),t._v(" "),e("div",[e("add-song",{on:{addNewSong:function(s){t.updateList(s)}}}),t._v(" "),e("show-info",{ref:"form",attrs:{moreInfo:t.moreInfo,list:t.list,nr:t.nr},on:{updateNr:function(s){t.updateNr(s)}}}),t._v(" "),e("song-list",{attrs:{list:t.list},on:{showInfo:function(s){t.showInfo(s)}}})],1)])},o=[],i={render:n,staticRenderFns:o};s.a=i}],[7]);
//# sourceMappingURL=client.3e69e747.js.map