(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{315:function(t,e,a){var n=a(435);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(10).default)("0e805ebe",n,!0,{})},434:function(t,e,a){"use strict";var n=a(315);a.n(n).a},435:function(t,e,a){(t.exports=a(9)(!1)).push([t.i,"\n.close-cover[data-v-2570ebf4]{position:absolute;top:0;left:-1000px;opacity:0;width:3000px;height:2000px;background-color:#fff;z-index:1;cursor:default\n}\n.modal-body[data-v-2570ebf4]{position:absolute;top:80px;right:-10px;z-index:999;width:680px;height:750px;box-sizing:border-box;padding:40px;-webkit-animation:modal-open-data-v-2570ebf4 .5s 1;animation:modal-open-data-v-2570ebf4 .5s 1\n}\n@-webkit-keyframes modal-open-data-v-2570ebf4{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes modal-open-data-v-2570ebf4{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n.close-area[data-v-2570ebf4]{position:absolute;top:5px;right:5px;cursor:pointer\n}\n.title-area[data-v-2570ebf4]{text-align:center;font-size:20px\n}\n.receiver-area[data-v-2570ebf4]{text-align:center;margin-top:20px\n}\n.contact-title[data-v-2570ebf4]{margin-top:20px;width:600px\n}\n.contact-content[data-v-2570ebf4]{margin-top:10px;width:600px;height:400px\n}\n.text-size-area[data-v-2570ebf4]{text-align:right;width:600px;color:#636569\n}\n.btn-area[data-v-2570ebf4]{position:absolute;left:0;bottom:20px;width:100%;text-align:center\n}",""])},499:function(t,e,a){"use strict";a.r(e);var n={name:"ContactUsModal",props:{isShow:{default:!0}},data:function(){return{text:""}},methods:{close:function(){this.$emit("close")}},mounted:function(){}},i=(a(434),a(2)),o=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isShow?a("div",{staticClass:"close-cover",on:{click:t.close}}):t._e(),t._v(" "),t.isShow?a("div",{staticClass:"modal-body card-shadow"},[a("div",{staticClass:"close-area",on:{click:t.close}},[a("i",{staticClass:"icon close-gray xs"})]),t._v(" "),a("div",{staticClass:"title-area"},[t._v("\n      문의하기\n    ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"contact-content",attrs:{placeholder:"문의 내용을 입력해 주세요"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),a("div"),t._v(" "),a("div",{staticClass:"text-size-area"},[a("span",[t._v("글자수(공백포함)")]),t._v(" "),a("span",{staticStyle:{color:"#fd5d60"}},[t._v(t._s(t.text.length))]),t._v(" "),a("span",[t._v("/800자")])]),t._v(" "),t._m(2)]):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"receiver-area"},[e("div",{staticClass:"label-radius-gray outline"},[this._v("수신자: 스칼라십커먼즈")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("input",{staticClass:"contact-title",attrs:{type:"text",placeholder:"문의 제목을 입력해 주세요"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"btn-area"},[e("button",{staticClass:"btn sub outline"},[this._v("취소하기")]),this._v(" "),e("button",{staticClass:"btn primary"},[this._v("문의 등록하기")])])}],!1,null,"2570ebf4",null);o.options.__file="ContactUsModal.vue";e.default=o.exports}}]);