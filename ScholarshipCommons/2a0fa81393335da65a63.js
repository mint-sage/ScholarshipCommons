(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{403:function(t,a,i){var n=i(642);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i(6).default)("69b7c1ed",n,!0,{sourceMap:!1})},641:function(t,a,i){"use strict";var n=i(403);i.n(n).a},642:function(t,a,i){(t.exports=i(5)(!1)).push([t.i,'\n@charset "UTF-8";\n.page-title[data-v-5d27f2fc]{margin-top:80px\n}\n.page-sub-title[data-v-5d27f2fc]{margin-top:20px;color:#636569;text-align:center;font-size:16px\n}\n.info-area[data-v-5d27f2fc]{font-size:16px;margin-top:80px\n}\n.info-area .info-title[data-v-5d27f2fc]{font-weight:500;margin-top:80px;font-size:18px\n}\n.info-area .info-msg[data-v-5d27f2fc]{margin-top:20px;margin-bottom:80px\n}\n.info-area .row[data-v-5d27f2fc]{margin-bottom:50px\n}\n.info-area .row .subject[data-v-5d27f2fc]{vertical-align:top;width:180px;margin-right:10px;display:inline-block;font-size:16px\n}\n.info-area .row .subject label[data-v-5d27f2fc]{margin-right:20px\n}\n.info-area .row .content[data-v-5d27f2fc]{position:relative;display:inline-block;width:780px;margin-right:20px\n}\n.info-area .row .content .el[data-v-5d27f2fc]{display:inline-block;margin-right:10px;margin-bottom:10px;position:relative\n}\n.info-area .row .content .sub-text[data-v-5d27f2fc]{font-size:14px\n}\n.info-area .row .content .color-darkgray[data-v-5d27f2fc]{color:#636569\n}\n.info-area .row .help-box[data-v-5d27f2fc]{display:inline-block;width:180px;padding:20px;box-sizing:border-box;border-radius:4px;background-color:hsla(0,0%,78.4%,.2);font-size:14px;color:#636569;vertical-align:top\n}\n.info-area .row .help-box[data-v-5d27f2fc]:before{content:"\\B3C4\\C6C0\\B9D0";color:#fd5d60;margin-bottom:10px;display:flex\n}\n.s[data-v-5d27f2fc]{width:120px\n}\n.m[data-v-5d27f2fc]{width:180px\n}\n.l[data-v-5d27f2fc]{width:570px\n}\n.xl[data-v-5d27f2fc]{width:780px\n}\n.disable[data-v-5d27f2fc]{opacity:.4\n}\ninput.disable[data-v-5d27f2fc]{background-color:hsla(0,0%,78.4%,.4)\n}\n.checklist-box[data-v-5d27f2fc]{display:inline-block;width:280px;box-sizing:border-box;border-radius:4px;border:1px solid #c8c8c8;margin-bottom:50px\n}\n.checklist-box .box-info[data-v-5d27f2fc]{width:100%;padding:20px;box-sizing:border-box;font-size:14px;background-color:hsla(0,0%,78.4%,.2)\n}\n.checklist-box .content[data-v-5d27f2fc]{width:100%;padding:30px;box-sizing:border-box\n}\n.checklist-box .content .check-item[data-v-5d27f2fc]:not(:last-child){margin-bottom:20px\n}\ntextarea[data-v-5d27f2fc]{width:100%;height:80px\n}\n.el-sub-subject[data-v-5d27f2fc]{display:inline-block;vertical-align:top;margin-right:40px;margin-bottom:30px;color:#636569\n}\n.requirements[data-v-5d27f2fc]{width:660px;height:100px\n}',""])},773:function(t,a,i){"use strict";i.r(a);var n=i(2),s=i.n(n),e=i(23),o={name:"RequiredDocuments",components:{checkListBoard:function(){return i.e(103).then(i.bind(null,729))}},computed:s()({},Object(e.c)("register/requiredDoc",{requiredDoc:function(t){return t.requiredDoc}}))},c=(i(641),i(1)),r=Object(c.a)(o,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"info-area"},[i("div",{staticClass:"info-title"},[t._v("기본서류")]),t._v(" "),i("div",{staticClass:"info-msg"},[t._v("지원자가 아래의 서류를 제출할 때 유의해야 할 사항이 있으면 입력해 주세요.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"subject"},[t._v("추천서")]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"el"},[i("sc-select",{attrs:{placeholder:"추천인유형 선택"}},[i("sc-option"),t._v(" "),i("sc-option")],1)],1),t._v(" "),i("textarea",{staticClass:"el"})])])]),t._v(" "),i("div",{staticClass:"info-area"},[i("div",{staticClass:"info-title"},[t._v("증빙서류")]),t._v(" "),i("div",{staticClass:"info-msg"},[t._v("아래의 박스에서 지원자가 제출해야 하는 증빙서류를 추가하고, 각 증빙서류의 요건 및 제출 방법을 설명해 주세요.")]),t._v(" "),i("div",{staticClass:"row"},[i("check-list-board")],1)]),t._v(" "),i("div",{staticClass:"info-area"},[t._l(t.requiredDoc.group1,function(a){return[a.isCheck?i("div",{staticClass:"row"},[i("div",{staticClass:"subject"},[t._v(t._s(a.name))]),t._v(" "),t._m(3,!0)]):t._e()]})],2)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"subject"},[this._v("장학금 신청서")]),this._v(" "),a("div",{staticClass:"content"},[a("textarea",{staticClass:"el"})]),this._v(" "),a("div",{staticClass:"help-box"},[this._v("\n        각 서류의 양식은 3단계에서 작성해 주세요.\n      ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"subject"},[this._v("자기소개서")]),this._v(" "),a("div",{staticClass:"content"},[a("textarea",{staticClass:"el"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"subject"},[this._v("학업계획서")]),this._v(" "),a("div",{staticClass:"content"},[a("textarea",{staticClass:"el"})])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content"},[i("div",{staticClass:"el xl"},[i("div",{staticClass:"el-sub-subject"},[t._v("제출시점")]),t._v(" "),i("label",[i("input",{attrs:{type:"radio",name:"radio"}}),t._v(" "),i("span",[t._v("라디오버튼")])]),t._v(" "),i("label",[i("input",{attrs:{type:"radio",name:"radio"}}),t._v(" "),i("span",[t._v("라디오버튼")])])]),t._v(" "),i("div",{staticClass:"el xl"},[i("div",{staticClass:"el-sub-subject"},[t._v("필수여부")]),t._v(" "),i("label",[i("input",{attrs:{type:"radio",name:"radio"}}),t._v(" "),i("span",[t._v("라디오버튼")])]),t._v(" "),i("label",[i("input",{attrs:{type:"radio",name:"radio"}}),t._v(" "),i("span",[t._v("라디오버튼")])])]),t._v(" "),i("div",{staticClass:"el xl"},[i("div",{staticClass:"el-sub-subject"},[t._v("서류 요건")]),t._v(" "),i("textarea",{staticClass:"requirements",attrs:{placeholder:"서류 요건 입력(선택)"}})])])}],!1,null,"5d27f2fc",null);r.options.__file="RequiredDocuments.vue";a.default=r.exports}}]);