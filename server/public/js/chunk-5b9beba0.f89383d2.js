(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b9beba0"],{"2abb":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"new-room"},[t.isReady?["admin"===t.role?[n("player-list",{attrs:{players:t.players}})]:[n("div",{staticClass:"warning-count"},[n("warning-count-icon",{staticClass:"warning-coun__icon",attrs:{warningCount:t.warningCount}})],1),n("card",{attrs:{role:t.role}})]]:[n("waiting-bar")]],2)},r=[],i=(n("d3b7"),{components:{waitingBar:function(){return n.e("chunk-7b40b280").then(n.bind(null,"4211"))},card:function(){return n.e("chunk-2fb35641").then(n.bind(null,"ff86"))},playerList:function(){return n.e("chunk-2d0a4c28").then(n.bind(null,"088b"))},warningCountIcon:function(){return n.e("chunk-488d4b13").then(n.bind(null,"ee47"))}},data:function(){return{socket:this.$store.getters["Game/GetSocket"]}},computed:{isReady:function(){return this.$store.getters["Game/IsReadyRoom"]},role:function(){return this.$store.getters["Game/GetRole"]},players:function(){return this.$store.getters["Game/GetList"]},warningCount:function(){return this.$store.getters["Game/GetWarningCount"]}},watch:{"$store.state.Game.WarningCount":function(){this.$dialog.alert({text:"Դուք ստանում եք նկատողություն"})},"$store.state.Game.GameState":function(t){if(t){var e="red"===t?"կարմիրները":"սևերը",n="Խաղում հաղթեցին ".concat(e);this.$dialog.alert({text:n})}}},created:function(){this.$store.commit("Game/SetBackRoute",{name:"main"})},beforeRouteLeave:function(t,e,n){var a=this;this.$dialog.confirm({text:"Ցանկանու՞մ եք դուրս գալ խաղից"}).then((function(t){t&&(a.socket.emit("leaveRoom"),a.$store.commit("Game/ResetGame"),n())}))}}),o=i,s=(n("db98"),n("2877")),c=Object(s["a"])(o,a,r,!1,null,"df337acc",null);e["default"]=c.exports},db98:function(t,e,n){"use strict";n("de13")},de13:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5b9beba0.f89383d2.js.map