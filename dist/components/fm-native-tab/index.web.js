// { "framework": "Vue" }

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["npm/weex-flymeui/components/fm-native-tab/index"]=e():t["npm/weex-flymeui/components/fm-native-tab/index"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=144)}({0:function(t,e){t.exports=function(t,e,n,i,o){var r,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,a=t.default);var c,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),i&&(l._scopeId=i),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):n&&(c=n),c){var d=l.functional,u=d?l.render:l.beforeCreate;d?l.render=function(t,e){return c.call(e),u(t,e)}:l.beforeCreate=u?[].concat(u,c):[c]}return{esModule:r,exports:a,options:l}}},1:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(i),r=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(r).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&i[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(145);Object.defineProperty(e,"default",{enumerable:!0,get:function(){return function(t){return t&&t.__esModule?t:{default:t}}(i).default}})},145:function(t,e,n){var i=!1;var o=n(0)(n(148),n(149),function(t){i||n(146)},"data-v-c6e0f338",null);o.options.__file="/Users/suen/Documents/develop/project/weex-flymeui/packages/fm-native-tab/index.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},146:function(t,e,n){var i=n(147);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("632198f4",i,!1,{})},147:function(t,e,n){(t.exports=n(1)(!1)).push([t.i,"\n.fm-tab-page[data-v-c6e0f338] {\n  width: 10rem;\n}\n.tab-title-list[data-v-c6e0f338] {\n  width: 10rem;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  border-bottom-width: 0.01852rem;\n  border-color: rgba(0,0,0,0.10);\n}\n.tab-title-wrap[data-v-c6e0f338] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  padding: 0 0.44444rem;\n}\n.title-item[data-v-c6e0f338] {\n  border-color: #198DED;\n  padding: 0.25rem 0.16667rem;\n  margin-right: 0.38889rem;\n}\n.item-title[data-v-c6e0f338] {\n  font-family: sans-serif-medium;\n  font-weight: 500;\n  font-size: 0.38889rem;\n  line-height: 0.52778rem;\n}\n.border-bottom[data-v-c6e0f338] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 0.02778rem;\n  width: 1.22222rem;\n}\n.tab-page-wrap[data-v-c6e0f338] {\n  width: 10rem;\n  overflow: hidden;\n}\n.tab-container[data-v-c6e0f338] {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  position: absolute;\n}\n.tab-item[data-v-c6e0f338] {\n  width: 10rem;\n}\n",""])},148:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=weex.requireModule("animation"),o=weex.requireModule("dom"),r="Web"===weex.config.env.platform;e.default={name:"FmNativeTab",props:{tabTitles:{type:Array,default:function(){return[]}},panDist:{type:Number,default:200},duration:{type:[Number,String],default:300},tabPageHeight:{type:[String,Number],default:1854},tabStyles:{type:Object,default:function(){return{}}},timingFunction:{type:String,default:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},selectIndex:{type:Number,default:0}},watch:{selectIndex:function(t){this.loaded&&this.setPage(this.selectIndex,!1)}},computed:{isCreator:function(){return weex.supports&&weex.supports("@component/FmTab")},maxPage:function(){return this.tabTitles.length-1},cTabTitles:function(){var t=this.tabStyles,e={paddingStart:18,paddingEnd:18,minWidth:120,textunSelectColor:t.activeTitleColor||"#99000000",textSelectColor:t.titleColor||"#198DED"};return this.tabTitles.map(function(t){return Object.assign({},e,t)})},cTabStyles:function(){return Object.assign({},{titleColor:"rgba(0, 0, 0, 0.6)",activeTitleColor:"#198DED",height:102,padding:18,fontSize:42,activeBottomColor:"#198DED"},this.tabStyles)}},data:function(){return{loaded:!1,currentPage:0,gesToken:0,isMoving:!1,startTime:0,deltaX:0,translateX:0,startPosX:0,startPosY:0,judge:"INITIAL"}},methods:{next:function(){var t=this.currentPage;t<this.maxPage&&t++,this.setPage(t)},prev:function(){var t=this.currentPage;t>0&&t--,this.setPage(t)},_onTouchStart:function(t){r&&(this.startPosX=this._getTouchXPos(t),this.startPosY=this._getTouchYPos(t),this.deltaX=0,this.startTime=(new Date).getTime())},_onTouchMove:function(t){r&&(this.deltaX=this._getTouchXPos(t)-this.startPosX,this.deltaY=Math.abs(this._getTouchYPos(t)-this.startPosY+1),"INITIAL"===this.judge&&Math.abs(this.deltaX)/this.deltaY>1.73&&(this.judge="SLIDE_ING"))},_onTouchEnd:function(t){r&&("SLIDE_ING"===this.judge&&(this.deltaX<-50?this.next():this.deltaX>50&&this.prev()),this.judge="INITIAL")},setPage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!(!0===this.isMoving||this.tabTitles.length<=0)){this.isMoving=!0;var n=this.$refs["fm-tab-title-"+t][0],i=this.$refs["fm-tab-title-"+t][0].$el.clientWidth,r=this.$refs["fm-tab-title-"+t][0].$el.offsetLeft;r>=540?o.scrollToElement(n,{offset:i/2-540,animated:e}):o.scrollToElement(n,{offset:-r,animated:e}),this.currentPage=t,this._animateTransformX(t,e),this.$emit("fmTabPageTabSelected",{page:t})}},nativeTabSlided:function(t){this.$emit("fmTabPageTabSelected",{page:t.position})},_animateTransformX:function(t){var e=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.duration,r=this.timingFunction,a=this.$refs["tab-container"],s=1080*t;i.transition(a,{styles:{transform:"translateX("+-s+"px)"},duration:n?o:1e-5,timingFunction:r,delay:0},function(){e.isMoving=!1})},_getTouchXPos:function(t){return t.changedTouches[0].pageX},_getTouchYPos:function(t){return t.changedTouches[0].pageY}},mounted:function(){var t=this;this.isCreator||(this.setPage(this.selectIndex,!1),setTimeout(function(){t.loaded=!0},50))}}},149:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isCreator?n("FmTab",{staticStyle:t.$processStyle(void 0),style:t.$processStyle({height:t.tabPageHeight+"px"}),attrs:{container:{viewpagepaddingLeft:0,viewpagepaddingRight:0,viewpagepaddingTop:t.cTabStyles.height+12,viewpagepaddingBottom:0,tabpaddingLeft:48,tabpaddingRight:48,tabpaddingTop:0,tabpaddingBottom:0},tab:t.cTabTitles},on:{tabPosition:t.nativeTabSlided}},t._l(t.tabTitles,function(e,i){return n("div",{key:i,staticClass:"tab-item",staticStyle:t.$processStyle(void 0),style:t.$processStyle({height:t.tabPageHeight-t.cTabStyles.height-12+"px"})},[t._t("tab-item-"+i)],2)})):n("div",{staticClass:"fm-tab-page",staticStyle:t.$processStyle(void 0),style:t.$processStyle({height:t.tabPageHeight+"px",opacity:t.loaded?1:0})},[n("scroller",{ref:"tab-title-list",staticClass:"tab-title-list",staticStyle:t.$processStyle(void 0),style:t.$processStyle({height:t.cTabStyles.height+"px"}),attrs:{"show-scrollbar":!1,"scroll-direction":"horizontal"}},[n("div",{ref:"tab-title-wrap",staticClass:"tab-title-wrap",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},t._l(t.tabTitles,function(e,i){return n("div",{key:i,ref:"fm-tab-title-"+i,refInFor:!0,staticClass:"title-item",staticStyle:t.$processStyle(void 0),style:t.$processStyle({borderBottomWidth:t.currentPage===i?"3px":"0px"}),on:{click:function(e){t.setPage(i)}}},[n("text",{staticClass:"item-title",staticStyle:t.$processStyle(void 0),style:t.$processStyle({fontSize:t.cTabStyles.fontSize+"px",color:t.currentPage===i?t.cTabStyles.activeTitleColor:t.cTabStyles.titleColor,paddingLeft:t.cTabStyles.padding+"px",paddingRight:t.cTabStyles.padding+"px"})},[t._v(t._s(e.text))])])}))]),t._v(" "),n("div",{ref:"tab-page-wrap",staticClass:"tab-page-wrap",staticStyle:t.$processStyle(void 0),style:t.$processStyle({height:t.tabPageHeight-t.cTabStyles.height+"px"}),on:{panstart:t._onTouchStart,panmove:t._onTouchMove,panend:t._onTouchEnd}},[n("div",{ref:"tab-container",staticClass:"tab-container",staticStyle:t.$processStyle(void 0),style:t.$processStyle(void 0)},t._l(t.tabTitles,function(e,i){return n("div",{key:i,staticClass:"tab-item",staticStyle:t.$processStyle(void 0),style:t.$processStyle({height:t.tabPageHeight-t.cTabStyles.height+"px"})},[t._t("tab-item-"+i)],2)}))])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},2:function(t,e,n){var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(3),r={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,d=function(){},u=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(b(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:a}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function b(t){var e,n,i=document.querySelector("style["+f+'~="'+t.id+'"]');if(i){if(l)return d;i.parentNode.removeChild(i)}if(p){var o=c++;i=s||(s=g()),e=v.bind(null,i,o,!1),n=v.bind(null,i,o,!0)}else i=g(),e=function(t,e){var n=e.css,i=e.media,o=e.sourceMap;i&&t.setAttribute("media",i);u.ssrId&&t.setAttribute(f,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}t.exports=function(t,e,n,i){l=n,u=i||{};var a=o(t,e);return h(a),function(e){for(var n=[],i=0;i<a.length;i++){var s=a[i];(c=r[s.id]).refs--,n.push(c)}e?h(a=o(t,e)):a=[];for(i=0;i<n.length;i++){var c;if(0===(c=n[i]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete r[c.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function v(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=m(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},3:function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],a=r[0],s={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]})}return n}}})});