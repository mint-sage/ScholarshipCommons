(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{321:function(t,e,s){var i=s(523);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(6).default)("24742027",i,!0,{sourceMap:!1})},522:function(t,e,s){"use strict";var i=s(321);s.n(i).a},523:function(t,e,s){(t.exports=s(5)(!1)).push([t.i,"\n.page-content[data-v-03ebee2e]{margin-top:100px\n}\n.info-area[data-v-03ebee2e]{margin-bottom:80px;position:relative\n}\n.info-area .stat-btn[data-v-03ebee2e],.sort-area[data-v-03ebee2e]{position:absolute;top:0;right:0\n}\n.search-wrap[data-v-03ebee2e]{display:inline-block;position:relative\n}\n.search-wrap input[type=text][data-v-03ebee2e]{padding-left:35px\n}\n.search-wrap .find-gray[data-v-03ebee2e]{position:absolute;top:10px;left:10px\n}\n.info-title[data-v-03ebee2e]{font-size:20px;font-weight:500;margin:0 0 30px\n}\n.sc-table[data-v-03ebee2e]{font-size:16px\n}\n.sc-table td .sub-text[data-v-03ebee2e]{font-size:12px;color:#636569\n}\n.sc-table td .doc-like[data-v-03ebee2e]{width:40px;height:50px\n}\n.judge-detail[data-v-03ebee2e]{margin-top:100px\n}\n.judge-detail .sc-table thead td[data-v-03ebee2e]{padding:0;height:60px\n}\n.doc-item .icon[data-v-03ebee2e]{width:40px;height:50px;cursor:pointer\n}\n.student-info-wrap[data-v-03ebee2e]{display:inline-block;position:relative;margin-top:10px\n}\n.student-info-box[data-v-03ebee2e]{z-index:1;height:285px;padding:70px 30px 0;text-align:left\n}\n.student-info-box[data-v-03ebee2e],.student-info-box .top-area[data-v-03ebee2e]{font-size:14px;position:absolute;width:440px;top:0;left:0\n}\n.student-info-box .top-area[data-v-03ebee2e]{height:40px;background-color:hsla(0,0%,78.4%,.4);display:flex;justify-content:center;align-items:center\n}\n.student-info-box .top-area .icon[data-v-03ebee2e]{position:absolute;top:14px;right:10px;cursor:pointer\n}\n.student-info-box .student-info-box-row .subject[data-v-03ebee2e]{width:80px;display:inline-block;color:#646569;margin-bottom:20px;margin-right:20px\n}\n.student-info-box .student-info-box-row .content[data-v-03ebee2e]{display:inline-block\n}",""])},830:function(t,e,s){"use strict";s.r(e);var i={name:"index",data:function(){return{isShowStudentInfo:!1}},methods:{goJudgement:function(){this.$router.push("/judge/view")}}},a=(s(522),s(1)),n=Object(a.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container page"},[s("div",{staticClass:"page-title"},[t._v("추천 내역")]),t._v(" "),s("div",{staticClass:"page-content"},[s("div",{staticClass:"info-area"},[s("h2",{staticClass:"info-title"},[t._v("추천 내역 (0)")]),t._v(" "),s("div",{staticClass:"sort-area"},[t._m(0),t._v(" "),s("sc-select",{attrs:{width:"280px",placeholder:"옵션선택"}},[s("sc-option",{attrs:{label:"옵션1",value:"A"}}),t._v(" "),s("sc-option",{attrs:{label:"옵션2",value:"B"}})],1)],1),t._v(" "),s("div",[s("table",{staticClass:"sc-table"},[t._m(1),t._v(" "),s("tbody",[s("tr",[s("td",[s("div",[t._v("김장학")]),t._v(" "),s("div",{staticClass:"student-info-wrap"},[s("button",{staticClass:"btn sub outline",on:{click:function(e){t.isShowStudentInfo=!0}}},[t._v("심사위원 정보")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowStudentInfo,expression:"isShowStudentInfo"}],staticClass:"student-info-box card-shadow"},[s("div",{staticClass:"top-area"},[t._v("\n                    김장학\n                    "),s("i",{staticClass:"icon close-gray xxs",on:{click:function(e){t.isShowStudentInfo=!1}}})]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])])]),t._v(" "),s("td",[t._v("민트세이지(주)")]),t._v(" "),s("td",[t._v("어학연수장학금")]),t._v(" "),s("td",[t._v("2018. 5. 11.(금)  17:59")]),t._v(" "),s("td",[s("nuxt-link",{attrs:{to:"/preview/recommend"}},[s("i",{staticClass:"icon doc-like"})])],1),t._v(" "),s("td",[t._v("접수중")])])])])]),t._v(" "),t._m(7)])]),t._v(" "),t._m(8)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-wrap"},[e("input",{staticStyle:{width:"280px"},attrs:{type:"text",placeholder:"검색"}}),this._v(" "),e("i",{staticClass:"icon find-gray xs"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("td",{attrs:{width:"180"}},[t._v("학생")]),t._v(" "),s("td",{attrs:{width:"180"}},[t._v("운영기관")]),t._v(" "),s("td",{attrs:{width:"180"}},[t._v("장학금")]),t._v(" "),s("td",{attrs:{width:"180"}},[t._v("제출일시")]),t._v(" "),s("td",{attrs:{width:"180"}},[t._v("추천서")]),t._v(" "),s("td",{attrs:{width:"180"}},[t._v("선발결과")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"student-info-box-row"},[e("div",{staticClass:"subject"},[this._v("소속학교")]),this._v(" "),e("div",{staticClass:"content"},[this._v("KAIST(본교)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"student-info-box-row"},[e("div",{staticClass:"subject"},[this._v("학위과정")]),this._v(" "),e("div",{staticClass:"content"},[this._v("학사")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"student-info-box-row"},[e("div",{staticClass:"subject"},[this._v("전공")]),this._v(" "),e("div",{staticClass:"content"},[this._v("산업디자인학과")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"student-info-box-row"},[e("div",{staticClass:"subject"},[this._v("학년")]),this._v(" "),e("div",{staticClass:"content"},[this._v("3학년")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"student-info-box-row"},[e("div",{staticClass:"subject"},[this._v("이메일주소")]),this._v(" "),e("div",{staticClass:"content"},[this._v("janghak.kim@kaist.ac.kr")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pagination-area"},[s("div",{staticClass:"pagination"},[s("span",{staticClass:"item"},[s("i",{staticClass:"icon prev-circle-teal xs"})]),t._v(" "),s("span",{staticClass:"item current"},[t._v("1")]),t._v(" "),s("span",{staticClass:"item"},[t._v("2")]),t._v(" "),s("span",{staticClass:"item"},[t._v("3")]),t._v(" "),s("span",{staticClass:"item"},[t._v("4")]),t._v(" "),s("span",{staticClass:"item"},[t._v("5")]),t._v(" "),s("span",{staticClass:"item"},[t._v("...")]),t._v(" "),s("span",{staticClass:"item"},[s("i",{staticClass:"icon next-circle-teal xs"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"none-area"},[this._v("\n    심사 내역이 없습니다   "),e("span",{staticClass:"color-danger"},[this._v(":(")]),e("br"),this._v("\n    심사평가서를 제출하면 여기에 심사 기록이 보관됩니다.\n  ")])}],!1,null,"03ebee2e",null);n.options.__file="index.vue";e.default=n.exports}}]);