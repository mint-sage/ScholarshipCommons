(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{272:function(t,a,n){var e=n(346);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,n(11).default)("69903f47",e,!0,{})},345:function(t,a,n){"use strict";var e=n(272);n.n(e).a},346:function(t,a,n){(t.exports=n(10)(!1)).push([t.i,"\n.apply-guide[data-v-0d01b3b4]{font-size:16px;margin-bottom:40px\n}\n.apply-container[data-v-0d01b3b4]{position:relative;width:100%;border:1px solid #c8c8c8;font-size:16px\n}\n.apply-container .title-area[data-v-0d01b3b4]{margin-top:60px\n}\n.apply-container .group-area[data-v-0d01b3b4]{padding:60px 100px;box-sizing:border-box\n}\n.apply-container .content-subject[data-v-0d01b3b4]{display:flex;font-weight:500;font-size:20px;line-height:30px\n}\n.apply-container .content-subject-sub[data-v-0d01b3b4]{font-size:14px;margin-top:10px;font-weight:400\n}\n.apply-container .content-row[data-v-0d01b3b4]{width:100%;margin-top:56px\n}\n.apply-container .content-row .subject[data-v-0d01b3b4]{display:inline-block;width:100px;margin-right:100px;font-weight:500\n}\n.apply-container .content-row .input-area[data-v-0d01b3b4]{display:inline-block;vertical-align:top\n}\n.apply-container .content-row .input-area .item[data-v-0d01b3b4]{display:inline-block;margin-right:10px\n}\n.apply-container .write-area[data-v-0d01b3b4]{margin-top:20px\n}\n.apply-container .write-area .text-size-block[data-v-0d01b3b4]{text-align:right;width:600px;color:#636569;float:right\n}\n.apply-btn-area[data-v-0d01b3b4]{display:flex;margin-top:200px\n}\n.apply-btn-area .btn[data-v-0d01b3b4]{margin:5px\n}\ntable[data-v-0d01b3b4]{width:1180px;border-collapse:collapse\n}\ntable thead[data-v-0d01b3b4]{background-color:hsla(0,0%,78.4%,.2);border-top:1px solid #c8c8c8;border-bottom:1px solid #c8c8c8\n}\ntable thead th[data-v-0d01b3b4]{height:60px;font-size:16px;font-weight:400\n}\ntable tbody tr[data-v-0d01b3b4]{border-bottom:1px solid #c8c8c8\n}\ntable tbody tr .text-gray[data-v-0d01b3b4]{color:#c8c8c8\n}\ntable tbody tr td[data-v-0d01b3b4]{text-align:center;height:60px\n}\n.info-area[data-v-0d01b3b4]{margin-top:80px;color:#636569\n}\n.info-area .info[data-v-0d01b3b4]{color:rgba(253,93,96,.85);margin-right:5px\n}",""])},440:function(t,a,n){"use strict";n.r(a);var e={name:"step1",data:function(){return{progress:0}},methods:{clickFile:function(t){document.getElementById(t).click()},openFileSizeOver:function(){this.createDialog({msg:"파일용량이 초과했습니다",subMsg:"파일 한 개의 최대 용량은 20MB입니다.\n20MB 이내의 파일로 다시 업로드 해주세요. "})}},mounted:function(){var t=this;setInterval(function(){t.progress<100&&(t.progress=t.progress+10)},200),this.openFileSizeOver()}},i=(n(345),n(2)),o=Object(i.a)(e,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("div",{staticClass:"apply-guide"},[t._v("제출할 증명서 파일을 업로드 해주세요")]),t._v(" "),n("div",[n("table",[t._m(0),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("기본증명서")]),t._v(" "),n("td",[t._v("가족관계증명서")]),t._v(" "),n("td",{staticClass:"text-gray"},[t._v("파일을 업로드 해주세요")]),t._v(" "),n("td"),t._v(" "),n("td",[n("button",{staticClass:"btn sub outline",on:{click:function(a){t.clickFile("family")}}},[t._v("파일 업로드")]),t._v(" "),n("input",{staticStyle:{display:"none"},attrs:{id:"family",type:"file"}})])]),t._v(" "),n("tr",[n("td",[t._v("기본증명서")]),t._v(" "),n("td",[t._v("가족관계증명서")]),t._v(" "),n("td",{staticClass:"text-gray"},[t._v("파일을 업로드 해주세요")]),t._v(" "),n("td"),t._v(" "),n("td",[n("div",{staticClass:"progress-bar",staticStyle:{width:"180px"}},[n("div",{staticClass:"progress red",style:"width:"+t.progress+"%;"})])])]),t._v(" "),t._m(1)])])]),t._v(" "),t._m(2)])},[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("thead",[n("th",[t._v("증명서유형")]),t._v(" "),n("th",[t._v("증명서명")]),t._v(" "),n("th",[t._v("파일명")]),t._v(" "),n("th",[t._v("파일정보")]),t._v(" "),n("th",[t._v("파일 업로드")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("tr",[n("td",[t._v("기본증명서")]),t._v(" "),n("td",[t._v("가족관계증명서")]),t._v(" "),n("td",[t._v("filename.jpg")]),t._v(" "),n("td",[t._v("38kbJPEG이미지")]),t._v(" "),n("td",[n("i",{staticClass:"icon close-circle-gray xs"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info-area"},[a("span",{staticClass:"info"},[this._v("안내.")]),this._v(" "),a("span",[this._v("20MB 이내의 이미지 및 PDF 파일만 업로드 가능합니다.")])])}],!1,null,"0d01b3b4",null);o.options.__file="step4.vue";a.default=o.exports}}]);