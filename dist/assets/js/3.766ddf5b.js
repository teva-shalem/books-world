(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{24:function(t,e,n){"use strict";n.r(e);var r=n(25),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e.default=i.a},25:function(t,e,n){"use strict";e.__esModule=!0,e.default={props:{id:String,data:{type:Array,required:!0},columns:{type:Array,required:!0}}}},26:function(t,e,n){},31:function(t,e,n){"use strict";var r=n(26);n.n(r).a},53:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("b-field",{staticClass:"column-toggles",attrs:{grouped:"","group-multiline":""}},t._l(t.columns,(function(e,r){return n("div",{key:r,staticClass:"control"},[n("b-checkbox",{model:{value:e.visible,callback:function(n){t.$set(e,"visible",n)},expression:"column.visible"}},[t._v("\n                "+t._s(e.title)+"\n            ")])],1)})),0),t._v(" "),n("b-table",{attrs:{id:t.id||"",data:t.data,bordered:!0,striped:!0,narrowed:!1,hoverable:!0,focusable:!0,"sticky-header":!0},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.columns,(function(r,i){return n("b-table-column",{key:i,attrs:{label:r.title+":",visible:r.visible,numeric:r.numeric,centered:r.centered,sticky:r.sticky,"cell-class":r["cell-class"]}},[r.meta&&"latexImage"===r.meta.type?n("div",{staticClass:"field-type-latex-image"},[n("Latex",{attrs:{src:e.row[r.field][0]}}),t._v(" "),n("Img",{attrs:{path:e.row[r.field][1]}})],1):r.meta&&"latex"===r.meta.type?n("div",[n("Latex",{attrs:{src:e.row[r.field]}})],1):n("div",[t._v("\n                    "+t._s(null===e.row[r.field]?"-":e.row[r.field])+"\n                ")])])}))}}])})],1)},i=[]},54:function(t,e,n){"use strict";n.r(e);var r=n(53),i=n(24);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(31);var l=n(2),s=Object(l.a)(i.default,r.a,r.b,!1,null,null,null);e.default=s.exports}}]);