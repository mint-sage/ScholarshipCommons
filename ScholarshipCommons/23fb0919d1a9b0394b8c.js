(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{402:function(i,a,t){var e=t(640);"string"==typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);(0,t(6).default)("ac05a34c",e,!0,{sourceMap:!1})},639:function(i,a,t){"use strict";var e=t(402);t.n(e).a},640:function(i,a,t){(i.exports=t(5)(!1)).push([i.i,'\n@charset "UTF-8";\n.page-title[data-v-752c7c78]{margin-top:80px\n}\n.page-sub-title[data-v-752c7c78]{margin-top:20px;color:#636569;text-align:center;font-size:16px\n}\n.info-area[data-v-752c7c78]{font-size:16px;margin-top:80px\n}\n.info-area .info-title[data-v-752c7c78]{font-weight:500;margin-top:80px;font-size:18px\n}\n.info-area .info-msg[data-v-752c7c78]{margin-top:20px;margin-bottom:80px\n}\n.info-area .row[data-v-752c7c78]{margin-bottom:50px\n}\n.info-area .row .subject[data-v-752c7c78]{vertical-align:top;width:180px;margin-right:10px;display:inline-block;font-size:16px\n}\n.info-area .row .subject label[data-v-752c7c78]{margin-right:20px\n}\n.info-area .row .content[data-v-752c7c78]{position:relative;display:inline-block;width:780px;margin-right:20px\n}\n.info-area .row .content .el[data-v-752c7c78]{display:inline-block;margin-right:10px;margin-bottom:10px;position:relative\n}\n.info-area .row .content .sub-text[data-v-752c7c78]{font-size:14px\n}\n.info-area .row .content .color-darkgray[data-v-752c7c78]{color:#636569\n}\n.info-area .row .help-box[data-v-752c7c78]{display:inline-block;width:180px;padding:20px;box-sizing:border-box;border-radius:4px;background-color:hsla(0,0%,78.4%,.2);font-size:14px;color:#636569;vertical-align:top\n}\n.info-area .row .help-box[data-v-752c7c78]:before{content:"\\B3C4\\C6C0\\B9D0";color:#fd5d60;margin-bottom:10px;display:flex\n}\n.s[data-v-752c7c78]{width:120px\n}\n.m[data-v-752c7c78]{width:180px\n}\n.l[data-v-752c7c78]{width:570px\n}\n.xl[data-v-752c7c78]{width:780px\n}\n.disable[data-v-752c7c78]{opacity:.4\n}\ninput.disable[data-v-752c7c78]{background-color:hsla(0,0%,78.4%,.4)\n}\n.checklist-box[data-v-752c7c78]{display:inline-block;width:280px;box-sizing:border-box;border-radius:4px;border:1px solid #c8c8c8;margin-bottom:50px\n}\n.checklist-box .box-info[data-v-752c7c78]{width:100%;padding:20px;box-sizing:border-box;font-size:14px;background-color:hsla(0,0%,78.4%,.2)\n}\n.checklist-box .content[data-v-752c7c78]{width:100%;padding:30px;box-sizing:border-box\n}\n.checklist-box .content .check-item[data-v-752c7c78]:not(:last-child){margin-bottom:20px\n}\n.info-area .info-title[data-v-752c7c78]{font-size:20px;display:flex\n}\n.info-area .info-title .icon[data-v-752c7c78]{margin-right:10px\n}\n.info-area .info-title .thunder[data-v-752c7c78]{width:24px;height:30px\n}\n.info-area .row[data-v-752c7c78]{display:inline-block;width:900px\n}\n.info-area .row .content[data-v-752c7c78]{width:680px\n}\n.info-area .row .content textarea[data-v-752c7c78]{height:100px;width:100%\n}\n.dp-flex[data-v-752c7c78]{align-items:flex-start\n}\n.row-area[data-v-752c7c78]{width:900px;display:inline-block\n}',""])},771:function(i,a,t){"use strict";t.r(a);var e={name:"Qualification",data:function(){return{basic:[{name:"장학금 이중수혜",isCheck:!1},{name:"학업년한 초과",isCheck:!1},{name:"이중국적 및 국외영주권",isCheck:!1},{name:"학칙에 의한 징계",isCheck:!1},{name:"기타 징계",isCheck:!1}],disabled:{name:"자격제한요건 없음",isCheck:!1}}},computed:{basicList:function(){return this.basic.filter(function(i){return i.isCheck})}},methods:{disableCheckbox:function(){if(this.disabled.isCheck)this.disabled.isCheck=!1;else{this.disabled.isCheck=!0;for(var i=0;i<this.basic.length;i++)this.basic[i].isCheck=!1}}}},n=(t(639),t(1)),c=Object(n.a)(e,function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("div",[t("div",{staticClass:"info-area"},[t("div",{staticClass:"info-msg"},[i._v("장학금 지원자격을 제한하는 요건이 있다면, 관련 항목을 선택하고 제한 내용을 입력해 주세요.")]),i._v(" "),t("div",{staticClass:"dp-flex"},[t("div",{staticClass:"row-area"},[t("div",{staticClass:"row"},[i._l(i.basicList,function(a,e){return[t("div",{staticClass:"subject"},[i._v(i._s(a.name))]),i._v(" "),t("div",{staticClass:"content"},[t("textarea",{staticClass:"el",attrs:{placeholder:"설명 입력"}})])]}),i._v(" "),i.disabled.isCheck?[t("div",{staticClass:"subject"},[i._v("자격제한요건 없음")]),i._v(" "),i._m(0)]:i._e(),i._v(" "),i.basicList.length<1&&0==i.disabled.isCheck?t("div",{staticClass:"color-light-gray"},[i._v("\n            선택된 항목이 없습니다."),t("br"),i._v("\n            필요한 항목은 우측 박스에서 체크해 주세요.\n          ")]):i._e()],2)]),i._v(" "),t("div",{staticClass:"checklist-box"},[t("div",{staticClass:"content"},[i._l(i.basic,function(a,e){return t("div",{key:e,staticClass:"check-item"},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.isCheck,expression:"item.isCheck"}],attrs:{type:"checkbox",disabled:1==i.disabled.isCheck},domProps:{checked:Array.isArray(a.isCheck)?i._i(a.isCheck,null)>-1:a.isCheck},on:{change:function(t){var e=a.isCheck,n=t.target,c=!!n.checked;if(Array.isArray(e)){var s=i._i(e,null);n.checked?s<0&&i.$set(a,"isCheck",e.concat([null])):s>-1&&i.$set(a,"isCheck",e.slice(0,s).concat(e.slice(s+1)))}else i.$set(a,"isCheck",c)}}}),i._v(" "),t("span",[i._v(i._s(a.name))])])])}),i._v(" "),t("div",{staticClass:"check-item",staticStyle:{"margin-top":"60px"}},[t("label",[t("input",{directives:[{name:"model",rawName:"v-model",value:i.disabled.isCheck,expression:"disabled.isCheck"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(i.disabled.isCheck)?i._i(i.disabled.isCheck,null)>-1:i.disabled.isCheck},on:{click:i.disableCheckbox,change:function(a){var t=i.disabled.isCheck,e=a.target,n=!!e.checked;if(Array.isArray(t)){var c=i._i(t,null);e.checked?c<0&&i.$set(i.disabled,"isCheck",t.concat([null])):c>-1&&i.$set(i.disabled,"isCheck",t.slice(0,c).concat(t.slice(c+1)))}else i.$set(i.disabled,"isCheck",n)}}}),i._v(" "),t("span",[i._v(i._s(i.disabled.name))])])])],2)])])])])},[function(){var i=this.$createElement,a=this._self._c||i;return a("div",{staticClass:"content"},[a("textarea",{staticClass:"el",attrs:{readonly:""}},[this._v("명시된 지원자격 내용 외에 별도의 자격제한 요건은 없습니다.")])])}],!1,null,"752c7c78",null);c.options.__file="Qualification.vue";a.default=c.exports}}]);