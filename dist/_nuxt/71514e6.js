(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{544:function(t,e,n){t.exports=n.p+"img/room_18.6db4ec7.svg"},555:function(t,e,n){t.exports=n.p+"img/room_20.1a48d97.svg"},556:function(t,e,n){t.exports=n.p+"img/room_07.9a5fa30.svg"},558:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(94),c=n(11),o=n(0);function l(t){return o.default.extend({name:"intersectable",mounted:function(){r.a.inserted(this.$el,{name:"intersect",value:this.onObserve})},destroyed:function(){r.a.unbind(this.$el)},methods:{onObserve:function(e,n,r){if(r)for(var i=0,o=t.onVisible.length;i<o;i++){var l=this[t.onVisible[i]];"function"!=typeof l?Object(c.c)(t.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):l()}}}})}},582:function(t,e,n){t.exports=n.p+"img/room_29.c564443.svg"},583:function(t,e,n){t.exports=n.p+"img/room_30.1157566.svg"},588:function(t,e,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7f6d4ad6",content,!0,{sourceMap:!1})},589:function(t,e,n){var r=n(15)(!1);r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:4px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:4px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=r},591:function(t,e,n){t.exports=n.p+"img/room_24.4f774ce.svg"},662:function(t,e,n){var content=n(716);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("044fc2b2",content,!0,{sourceMap:!1})},705:function(t,e,n){"use strict";n(8),n(5),n(7),n(13),n(6),n(14);var r=n(153),c=n(1),o=(n(29),n(23),n(63),n(19),n(74),n(64),n(588),n(93)),l=n(228),v=n(27),d=n(558),_=n(34),h=n(10);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(h.a)(v.a,Object(d.a)({onVisible:["init"]}),_.a).extend({name:"v-pagination",directives:{Resize:l.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,c=Math.floor(e/2),o=this.length-c+1+n;if(this.value>c&&this.value<o){var l=this.length,v=this.value-c+2,d=this.value+c-2-n,_=d+1===l-1?d+1:"...";return[1,v-1==2?2:"..."].concat(Object(r.a)(this.range(v,d)),[_,this.length])}if(this.value===c){var h=this.value+c-1-n;return[].concat(Object(r.a)(this.range(1,h)),["...",this.length])}if(this.value===o){var m=this.value-c+1;return[1,"..."].concat(Object(r.a)(this.range(m,this.length)))}return[].concat(Object(r.a)(this.range(1,c)),["..."],Object(r.a)(this.range(o,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[t(o.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,c=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(c,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})},711:function(t,e,n){t.exports=n.p+"img/room_03.876546e.svg"},712:function(t,e,n){t.exports=n.p+"img/room_04.efce62b.svg"},713:function(t,e,n){t.exports=n.p+"img/room_05.d53b216.svg"},714:function(t,e,n){t.exports=n.p+"img/room_11.d9c7e00.svg"},715:function(t,e,n){"use strict";n(662)},716:function(t,e,n){var r=n(15)(!1);r.push([t.i,".search_project[data-v-3503f629]{margin-top:150px;padding:0 10%}.search_project .search_link[data-v-3503f629]{font-size:18px;margin-bottom:15px}.search_project .selection[data-v-3503f629]{justify-content:space-between}.search_project .filter_content[data-v-3503f629]{width:90%;margin:0 auto 40px}.footer[data-v-3503f629]{margin-top:-40px!important}.estate_img[data-v-3503f629]{width:25%;padding:20px}.estate_img img[data-v-3503f629]{width:100%;height:80%;display:block}.estate_img .add_detail img[data-v-3503f629]{width:15px;height:15px}.estate_img .add_detail .price[data-v-3503f629]{font-weight:700;font-size:16px;line-height:30px;color:#fbad18}.estate_img .add_detail .price .first_price[data-v-3503f629]{margin-right:15px;padding-right:15px;border-right:1px solid #000}.estate_img .add_detail .name[data-v-3503f629]{font-weight:500;font-size:16px;line-height:20px;color:#000;margin:5px 0 10px}.estate_img .add_detail .sex[data-v-3503f629]{font-size:16px;line-height:30px;margin-bottom:5px}.estate_img .add_detail .sex .v-icon[data-v-3503f629]{color:#c4c4c4;margin-right:15px}.estate_img .add_detail .address[data-v-3503f629]{font-size:16px;line-height:20px}.estate_img .add_detail .address .v-icon[data-v-3503f629]{color:#c4c4c4;margin-right:15px}.estate_img .clearfix[data-v-3503f629]{position:relative}.estate_img .clearfix .overlay_title[data-v-3503f629]{position:absolute;background:#fdd27f;border-radius:4px;padding:0 15px;height:25px;left:19px;bottom:-14px;font-weight:500;font-size:14px;line-height:24px;color:#7a7a7a;text-align:center}.special_project[data-v-3503f629]{margin:30px 0}.special_project .content_left img[data-v-3503f629]{width:96%}.special_project .highlight[data-v-3503f629]{font-weight:700}.special_project .name[data-v-3503f629]{font-weight:500;font-size:18px;line-height:24px;color:#000;margin-bottom:12px}.special_project .content[data-v-3503f629]{margin-bottom:-30px}.special_project .content .v-btn[data-v-3503f629]{background-color:#fdd27f;color:#7a7a7a;text-transform:capitalize;margin-top:20px;box-shadow:none;height:32px;font-size:12px}.special_project .special_content .address img[data-v-3503f629]{width:12px}.special_project .special_content .finish img[data-v-3503f629]{width:20px}.special_project .special_content img[data-v-3503f629]{margin-right:20px}.estateOfProject .estate_title[data-v-3503f629]{font-weight:500;font-size:24px;line-height:24px;color:#000;margin-bottom:20px;margin-left:10px}.estateOfProject .btn_group[data-v-3503f629]{margin-bottom:15px;margin-left:10px;display:flex;justify-content:space-between}.estateOfProject .btn_group .v-btn[data-v-3503f629]{text-transform:capitalize;border-radius:5px;box-shadow:none}.estateOfProject .btn_group .v-btn:not(.v-btn--round).v-size--default[data-v-3503f629]{min-height:30px;height:32px}.estateOfProject .btn_group .content .v-btn[data-v-3503f629]{background-color:#fdd27f;color:#7a7a7a;font-size:12px}.pagination[data-v-3503f629]{margin-top:20px}",""]),t.exports=r},759:function(t,e,n){"use strict";n.r(e);var r=n(534),c=n(226),o=n(653),l={components:{Services:r.default,Footer:c.default,SearchProject:o.default},mounted:function(){},data:function(){return{page:1}}},v=(n(715),n(55)),d=n(73),_=n.n(d),h=n(327),m=n(524),f=n(216),x=n(705),C=n(525),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"search_project"},[t._m(0),t._v(" "),r("SearchProject"),t._v(" "),r("v-row",{staticClass:"special_project"},["caykhe"==this.$route.params.id?r("v-col",{staticClass:"content_left",attrs:{cols:"6"}},[r("img",{attrs:{src:n(547),alt:""}})]):r("v-col",{staticClass:"content_left",attrs:{cols:"6"}},[r("img",{attrs:{src:n(658),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("div",{staticClass:"special_content"},["caykhe"==this.$route.params.id?r("div",{staticClass:"name"},[t._v("\n            KHU NHÀ Ở SÔNG CÂY KHẾ\n          ")]):r("div",{staticClass:"name"},[t._v("KHU BIỆT THỰ ĐỒI NGỌC TƯỚC II")]),t._v(" "),r("v-row",{staticClass:"address content"},[r("v-col",{attrs:{cols:"1"}},[r("img",{attrs:{src:n(543),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"11"}},[r("span",[t._v("Quốc lộ 51A, khu đô thị mới phía Bắc Tp.Vũng Tàu")])])],1),t._v(" "),r("v-row",{staticClass:"quymo content"},[r("v-col",{attrs:{cols:"1"}},[r("img",{attrs:{src:n(576),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"11"}},[r("span",[t._v("Quy mô:\n                "),r("span",{staticClass:"highlight"},[t._v(" 175 căn nhà liên kế và 100 căn biệt thự ")])])])],1),t._v(" "),r("v-row",{staticClass:"contractor content"},[r("v-col",{attrs:{cols:"1"}},[r("img",{attrs:{src:n(541),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"11"}},[r("span",[t._v("Chủ đầu tư:\n                "),r("span",{staticClass:"highlight"},[t._v("Công ty Cổ phần Đầu tư Xây dựng Sản xuất Tân Thành")])])])],1),t._v(" "),r("v-row",{staticClass:"price content"},[r("v-col",{attrs:{cols:"1"}},[r("img",{attrs:{src:n(577),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"11"}},[r("span",[t._v("Giá từ: "),r("span",{staticClass:"highlight"},[t._v("1.2-15 tỷ/căn")])])])],1),t._v(" "),r("v-row",{staticClass:"build content"},[r("v-col",{attrs:{cols:"1"}},[r("img",{attrs:{src:n(578),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"11"}},[r("span",[t._v("Năm xây dựng: "),r("span",{staticClass:"highlight"},[t._v("2018")])])])],1),t._v(" "),r("v-row",{staticClass:"finish content"},[r("v-col",{attrs:{cols:"1"}},[r("img",{attrs:{src:n(579),alt:""}})]),t._v(" "),r("v-col",{attrs:{cols:"11"}},[r("span",[t._v("Tiến độ: "),r("span",{staticClass:"highlight"},[t._v(" Đã hoàn thành")])])])],1),t._v(" "),r("v-row",{staticClass:"content"},[r("v-btn",[t._v("Xem chi tiết >>")])],1)],1)])],1),t._v(" "),r("div",{staticClass:"estateOfProject"},[r("div",{staticClass:"btn_group"},[r("div",[r("v-btn",[t._v("Cho thuê")]),t._v(" "),r("v-btn",{attrs:{color:"warning"}},[t._v("Mua bán")])],1),t._v(" "),r("div",{staticClass:"content"},[r("v-btn",[t._v("Xem Tất cả >>")])],1)]),t._v(" "),r("v-row",{attrs:{id:"img_estate"}},[r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(556),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(711),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("NHÀ CẤP 4 RỘNG RÃI")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Đông")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Thi Sách")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(712),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(657),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(544),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(582),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(583),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(555),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(713),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(714),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1),t._v(" "),r("v-col",{staticClass:"estate_img",attrs:{cols:"3"}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix hover14",attrs:{slot:"header"},slot:"header"},[r("figure",[r("img",{attrs:{src:n(591),alt:""}})]),t._v(" "),r("div",{staticClass:"overlay_title"},[t._v("Khu nhà ở sông Cây Khế")])]),t._v(" "),r("div",{staticClass:"add_detail"},[r("div",{staticClass:"price"},[r("span",{staticClass:"first_price"},[t._v("6 tỷ")]),t._v(" "),r("span",[t._v("60 m2")])]),t._v(" "),r("div",{staticClass:"name"},[t._v("LOREM IPSUM AMET SIT DOT")]),t._v(" "),r("div",{staticClass:"sex d-flex"},[r("v-icon",[t._v("mdi-near-me")]),t._v(" "),r("span",[t._v("Nam")])],1),t._v(" "),r("div",{staticClass:"address d-flex"},[r("v-icon",[t._v("mdi-map-marker")]),t._v(" "),r("span",[t._v("Nguyễn Hữu Cảnh")])],1)])])],1)],1)],1),t._v(" "),r("div",{staticClass:"text-center pagination"},[r("v-pagination",{attrs:{length:6,color:"warning"},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1),t._v(" "),r("div",{staticClass:"footer"},[r("Services"),t._v(" "),r("Footer")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search_link"},[t._v("\n      Căn hộ/Chung cư "),n("i",{staticClass:"el-icon-arrow-right"}),t._v(" HCM\n    ")])}],!1,null,"3503f629",null);e.default=component.exports;_()(component,{VBtn:h.a,VCol:m.a,VIcon:f.a,VPagination:x.a,VRow:C.a})}}]);