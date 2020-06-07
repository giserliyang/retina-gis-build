(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{361:function(t,v,_){"use strict";_.r(v);var e=_(41),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"lmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lmap"}},[t._v("#")]),t._v(" LMap")]),t._v(" "),_("blockquote",[_("p",[t._v("基本组件，包含并包装所有其他组件。")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("提示：如果"),_("code",[t._v("<l-map>")]),t._v("不在根节点上会报错")]),t._v(" "),_("h2",{attrs:{id:"demo"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),_("ClientOnly",[_("Common-code-format",[_("div",{attrs:{slot:"description"},slot:"description"},[_("hr")]),t._v(" "),_("div",{staticClass:"vi-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[_("l-map")],1),t._v(" "),_("section",{staticClass:"vi-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[_("p",{staticClass:"vi-paraStyle-wrapper"},[_("span",{staticClass:"vi-paraStyle"},[t._v("`LMap`展示")])])]),t._v(" "),_("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v('<vi-icon vi-icon-name="left" vi-icon-size="medium"></vi-icon>\n<vi-icon vi-icon-name="right" vi-icon-size="medium"></vi-icon>\n<vi-icon vi-icon-name="download" vi-icon-size="medium"></vi-icon>\n<vi-icon vi-icon-name="upload" vi-icon-size="medium"></vi-icon>\n<vi-icon vi-icon-name="search" vi-icon-size="medium"></vi-icon>\n<vi-icon vi-icon-name="setting" vi-icon-size="medium"></vi-icon>   \n')])])])])],1)],1),t._v(" "),_("h2",{attrs:{id:"props"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Prop name")]),t._v(" "),_("th",[t._v("Description")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Values")]),t._v(" "),_("th",[t._v("Default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("options")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("{}")])]),t._v(" "),_("tr",[_("td",[t._v("center")]),t._v(" "),_("td",[t._v("地图的中心，支持 .sync 修饰符")]),t._v(" "),_("td",[t._v("object|array")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("() => [0, 0]")])]),t._v(" "),_("tr",[_("td",[t._v("bounds")]),t._v(" "),_("td",[t._v("地图的边界，支持 .sync 修改器")]),t._v(" "),_("td",[t._v("array|object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("null")])]),t._v(" "),_("tr",[_("td",[t._v("maxBounds")]),t._v(" "),_("td",[t._v("地图的最大边界")]),t._v(" "),_("td",[t._v("array|object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("null")])]),t._v(" "),_("tr",[_("td",[t._v("zoom")]),t._v(" "),_("td",[t._v("地图的缩放，支持 .sync 修改器")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("0")])]),t._v(" "),_("tr",[_("td",[t._v("minZoom")]),t._v(" "),_("td",[t._v("地图的最小缩放")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("null")])]),t._v(" "),_("tr",[_("td",[t._v("maxZoom")]),t._v(" "),_("td",[t._v("地图的最大缩放")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("null")])]),t._v(" "),_("tr",[_("td",[t._v("paddingBottomRight")]),t._v(" "),_("td",[t._v("地图的填充底部右侧")]),t._v(" "),_("td",[t._v("array")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("null")])])])]),t._v(" "),_("h2",{attrs:{id:"events"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Event name")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ready")]),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("当地图 ready 时触发")])]),t._v(" "),_("tr",[_("td",[t._v("update:zoom")]),t._v(" "),_("td",[t._v("number,string")]),t._v(" "),_("td",[t._v("当地图 center 更新时(updated)时触发")])]),t._v(" "),_("tr",[_("td",[t._v("update:center")]),t._v(" "),_("td",[t._v("object,array")]),t._v(" "),_("td",[t._v("当地图 center 更新时(updated)时触发")])]),t._v(" "),_("tr",[_("td",[t._v("update:bounds")]),t._v(" "),_("td",[t._v("object")]),t._v(" "),_("td",[t._v("当地图 bounds 更新时(updated)时触发")])])])]),t._v(" "),_("h2",{attrs:{id:"slots"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slots"}},[t._v("#")]),t._v(" Slots")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Description")]),t._v(" "),_("th",[t._v("Bindings")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("default")]),t._v(" "),_("td"),t._v(" "),_("td")])])])],1)}),[],!1,null,null,null);v.default=a.exports}}]);