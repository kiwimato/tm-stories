(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f37d5e80"],{"2aa2":function(t,r,e){},"3dbd":function(t,r,e){"use strict";var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"overview-container"},[t._t("title-container",[e("div",{staticClass:"title-container"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text-white animate__animated animate__slideInLeft"},[t._v(" "+t._s(t.title)+" ")])])])]),e("div",{staticClass:"stories-container"},t._l(t.stories,(function(r,i){return e("story-card",{key:i,attrs:{story:r},on:{"open-story":function(r){return t.$emit("open-story",r)}}})})),1)],2)},s=[],n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"story-card pointer",on:{click:function(r){return t.$emit("open-story",t.story.path)}}},[t._t("title",[e("div",{staticClass:"title"},[t._v(" "+t._s(t.story.title)+" ")])]),t._t("intro",[e("div",{staticClass:"intro mt-1",domProps:{innerHTML:t._s(t.intro)}})])],2)},o=[],a=function(t,r){return t.length>r?t.substr(0,r-1)+"&hellip;":t},l={name:"StoryCard",props:{story:{type:Object,required:!0}},data:function(){return{intro:""}},mounted:function(){this.intro=a(this.story.intro,230)}},c=l,u=(e("843a"),e("2877")),d=Object(u["a"])(c,n,o,!1,null,null,null),p=d.exports,y={name:"PeriodOverview",components:{storyCard:p},props:{color:{type:String,default:"hotpink"},stories:{type:Array,required:!0},title:{type:String,default:""}}},f=y,h=Object(u["a"])(f,i,s,!1,null,null,null);r["a"]=h.exports},4950:function(t,r,e){},"843a":function(t,r,e){"use strict";var i=e("2aa2"),s=e.n(i);s.a},b063:function(t,r,e){"use strict";var i=e("4950"),s=e.n(i);s.a},c839:function(t,r,e){"use strict";e.r(r);var i=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("period-overview",{attrs:{stories:t.stories},on:{"open-story":function(r){return t.openStory(r)}},scopedSlots:t._u([{key:"title-container",fn:function(){return[e("div",{staticClass:"title-container"},[e("div",{staticClass:"title"},[e("h2",{staticClass:"text-white animate__animated animate__slideInLeft"},[t._v(" "+t._s(t.$t("worldWars.title"))+" ")])])])]},proxy:!0}])})},s=[],n=(e("99af"),e("3dbd")),o={name:"WorldWars",components:{periodOverview:n["a"]},data:function(){return{stories:[{title:this.$t("worldWars.stories.story1.title"),intro:this.$t("worldWars.stories.story1.intro"),path:"story1"},{title:this.$t("worldWars.stories.story2.title"),intro:this.$t("worldWars.stories.story2.intro"),path:"story2"},{title:this.$t("worldWars.stories.story3.title"),intro:this.$t("worldWars.stories.story3.intro"),path:"story3"}]}},methods:{openStory:function(t){this.$router.push("".concat(this.$route.path,"/").concat(t))}}},a=o,l=(e("b063"),e("2877")),c=Object(l["a"])(a,i,s,!1,null,"5293640c",null);r["default"]=c.exports}}]);