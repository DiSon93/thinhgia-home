(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{564:function(e,t,n){var content=n(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("099f9884",content,!0,{sourceMap:!1})},573:function(e,t,n){"use strict";n.r(t);n(23),n(30);var o={data:function(){return{form:{name:"",phone:"",email:"",lich:"",title:"",textarea:""},fileList:[{name:"caykhe.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"},{name:"ngoctuoc.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}],rules:{name:[{required:!0,message:"Vui lòng gõ họ tên",trigger:"blur"},{min:3,message:"Length should be at least 3",trigger:"blur"}],phone:[{type:"number",required:!0,message:"Vui lòng gõ số điện thoại",trigger:"change"}],email:[{required:!0,message:"Vui lòng gõ email",trigger:"change"},{type:"email",required:!1,message:"Vui lòng gõ đúng định dạng",trigger:"change"}],textarea:[{required:!0,message:"Vui lòng gõ nội dung",trigger:"change"}]}}},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("The limit is 3, you selected ".concat(e.length," files this time, add up to ").concat(e.length+t.length," totally"))},beforeRemove:function(e,t){return this.$confirm("Cancel the transfert of ".concat(e.name," ?"))},submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},r=(n(584),n(55)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form_info"},[n("div",{staticClass:"form_title"},[e._v("Đăng ký xem BĐS")]),e._v(" "),n("div",{staticClass:"note"},[e._v("\n    * Vui lòng điền đầy đủ thông tin theo yêu cầu để chúng tôi có thể hỗ trợ quý khách\n    một cách tốt nhất\n  ")]),e._v(" "),n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{placeholder:"Họ tên*",required:"true","prefix-icon":"el-icon-user-solid"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"phone"}},[n("el-input",{attrs:{placeholder:"Số điện thoại*","prefix-icon":"el-icon-phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"email"}},[n("el-input",{attrs:{placeholder:"Email*","prefix-icon":"el-icon-message"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"lich"}},[n("el-input",{attrs:{placeholder:"01/07/2021 10:15","prefix-icon":"el-icon-date"},model:{value:e.form.lich,callback:function(t){e.$set(e.form,"lich",t)},expression:"form.lich"}})],1),e._v(" "),n("el-button",{staticClass:"datngay",attrs:{size:"small"},on:{click:function(t){return e.submitForm("form")}}},[e._v("ĐẶT NGAY")]),e._v(" "),n("div",{staticClass:"and"},[e._v("hoặc")]),e._v(" "),n("el-divider",{staticStyle:{margin:"0"}}),e._v(" "),n("div",{staticClass:"btn_group"},[n("el-button",{staticClass:"explain",attrs:{type:"danger",plain:""}},[e._v("Tư vấn thêm")]),e._v(" "),n("el-button",{staticClass:"explain",attrs:{type:"danger",plain:""}},[e._v("Gọi lại cho tôi")])],1)],1)],1)}),[],!1,null,"a36fc77e",null);t.default=component.exports},584:function(e,t,n){"use strict";n(564)},585:function(e,t,n){var o=n(15)(!1);o.push([e.i,".form_info[data-v-a36fc77e]{margin-top:10px;padding:20px;background-color:#ffeac2;border-radius:4px}.form_info .form_title[data-v-a36fc77e]{text-align:center;font-weight:700;font-size:18px;margin-bottom:10px}.form_info .note[data-v-a36fc77e]{margin-bottom:10px}.form_info .el-form-item[data-v-a36fc77e]{margin-bottom:20px}.form_info .el-button[data-v-a36fc77e]{margin-top:10px;border-radius:4px}.form_info .el-button[data-v-a36fc77e]:focus,.form_info .el-button[data-v-a36fc77e]:hover{color:#fbad18}.datngay.el-button[data-v-a36fc77e]{width:100%;background-color:#fb9318;color:#fff;border:none}.datngay.el-button[data-v-a36fc77e]:focus,.datngay.el-button[data-v-a36fc77e]:hover{color:#fff}.and[data-v-a36fc77e]{text-align:center;margin-top:10px;font-size:14px}.btn_group[data-v-a36fc77e]{display:flex;justify-content:space-around}.btn_group .explain.el-button[data-v-a36fc77e]{background-color:transparent;margin-top:0}.btn_group .explain.el-button[data-v-a36fc77e]:focus,.btn_group .explain.el-button[data-v-a36fc77e]:hover{color:#fe6262}.el-divider--horizontal[data-v-a36fc77e]{margin:5px 0!important;background:hsla(0,0%,50.2%,.555);height:1px}@media screen and (max-width:1080px){.form_info .form_title[data-v-a36fc77e]{font-size:16px}.form_info .note[data-v-a36fc77e]{font-size:14px}.btn_group .explain.el-button[data-v-a36fc77e]{padding:6px 8px}}@media screen and (max-width:600px){.form_info .note[data-v-a36fc77e]{font-size:12px}}",""]),e.exports=o}}]);