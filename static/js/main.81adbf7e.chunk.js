(this["webpackJsonptower-tool"]=this["webpackJsonptower-tool"]||[]).push([[0],{37:function(e,t,n){e.exports=n(61)},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),l=n(20),o=n.n(l),i=(n(42),n(16)),s=n(6),u=n(3),m=(n(48),function(e){return c.a.createElement("div",{className:"Block"},c.a.createElement("div",{className:"BlockHeader"},c.a.createElement("div",{className:"BlockHeader__title"},c.a.createElement(s.a,{icon:e.titleIcon,fixedWidth:!0})," ",e.title)),c.a.createElement("div",{className:"BlockContent"},e.children))}),h=(n(49),function(e){var t=Object(r.useRef)(null);return c.a.createElement(m,{title:"G-code Input",titleIcon:u.e},c.a.createElement("div",{className:"GCodeInputBlock"},c.a.createElement("input",{type:"file",accept:".gcode",onChange:function(t){var n=t.target.files[0];e.onChange(n)},ref:t}),c.a.createElement("div",{className:"GCodeInputBlock__fileName"},e.filename?e.filename:"No file selected."),c.a.createElement("button",{onClick:function(){var e;null===(e=t.current)||void 0===e||e.click()}},c.a.createElement(s.a,{icon:u.m,fixedWidth:!0})," Select File")))}),p=function(e){return c.a.createElement(m,{title:"G-code Output",titleIcon:u.d},c.a.createElement("div",{className:"BlockContent__text"},c.a.createElement("p",null,c.a.createElement("strong",null,"Make sure to inspect the G-code before running the print!"),c.a.createElement("br",null),c.a.createElement("br",null),"Any lines added or changed will end with"," ",c.a.createElement("span",{className:"InlineCode"},"; Tower Tool")," so you can find them easily."),c.a.createElement("button",{disabled:!e.enabled,onClick:e.onProcessClick},c.a.createElement(s.a,{icon:u.l,fixedWidth:!0})," Towerize!")))},d=n(9),f=n(11),g=(n(52),function(e){return c.a.createElement("div",{className:"FormContainer"},e.children)}),b=function(e){return c.a.createElement("label",null,c.a.createElement("div",{className:"FormContainer__labelText"},e.label),c.a.createElement("div",{className:"FormContainer__inputContainer"},c.a.createElement("div",{className:"FormContainer__inputIcon"},c.a.createElement(s.a,{icon:e.labelIcon,fixedWidth:!0})),c.a.createElement("input",{type:"number",value:e.value,step:e.step,min:e.min?e.min:0,onChange:function(t){e.onChange&&e.onChange(Number(t.target.value))},onBlur:e.onBlur}),c.a.createElement("div",{className:"FormContainer__inputUnits"},e.units)))},v=n(5),E=n(12),w=n(4),y=n(8),j=n(2),O=function e(){Object(j.a)(this,e)},R=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this)).lines=void 0,a.lines=e,a}return n}(O),k=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return n}(O),C=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return n}(O),S=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return n}(R),T=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return n}(R),x=n(7),N=function(){function e(){Object(j.a)(this,e)}return Object(x.a)(e,[{key:"onLine",value:function(e,t){return new k}},{key:"onLayer",value:function(e){return new k}}]),e}(),_=n(24);!function(e){e[e.Absolute=0]="Absolute",e[e.Relative=1]="Relative"}(a||(a={}));var F,B,L=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var r;return Object(j.a)(this,n),(r=t.call(this)).distanceRange=void 0,r.speedRange=void 0,r.retractMode=void 0,r.retractRegex=void 0,r.relativeRegex=void 0,r.absoluteRegex=void 0,r.distanceRange=e.distanceRange,r.speedRange=e.speedRange,r.retractRegex=e.retractRegex?e.retractRegex:Object(_.a)(/G(0|1) E((\x2D|[0-9]|\.)+) F(([0-9]|.)+)/,{distance:2,speed:4}),r.retractMode=a.Absolute,r.relativeRegex=/M83/,r.absoluteRegex=/M82/,r}return Object(x.a)(n,[{key:"onLine",value:function(e,t){if(e.match(this.absoluteRegex)?this.retractMode=a.Absolute:e.match(this.relativeRegex)&&(this.retractMode=a.Relative),null===t.chunk)return new k;var n=e.match(this.retractRegex);if(!n)return new k;var r=Number.parseFloat(n.groups.distance),c=r>0?1:-1,l=r,o=Number.parseFloat(n.groups.speed);if(this.distanceRange){if((l=this.distanceRange.start+t.chunk*this.distanceRange.step)>this.distanceRange.stop)return new C;l*=c}if(this.speedRange){if((o=this.speedRange.start+t.chunk*this.speedRange.step)>this.speedRange.stop)return new C;o*=60}return new S(["M83 ; Tower Tool","G1 E".concat(l.toFixed(3)," F").concat(o.toFixed(3)," ; Tower Tool"),this.retractMode===a.Absolute?"M82 ; Tower Tool":"M83 ; Tower Tool"])}},{key:"onLayer",value:function(e){if(null===e.chunk)return new k;if(this.distanceRange){var t=(this.distanceRange.stop-this.distanceRange.start)/this.distanceRange.step;if(e.chunk>t)return new C}if(this.speedRange){var n=(this.speedRange.stop-this.speedRange.start)/this.speedRange.step;if(e.chunk>n)return new C}return new k}}]),n}(N),A=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this)).tempRange=void 0,a.tempRange=e,a}return Object(x.a)(n,[{key:"onLayer",value:function(e){if(null===e.chunk)return new k;var t=Math.floor(this.tempRange.start+e.chunk*this.tempRange.step);return t>this.tempRange.stop?new C:new T(["M104 S".concat(t.toFixed(0)," ; Tower Tool")])}}]),n}(N),I=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this)).accelRange=void 0,a.accelRange=e,a}return Object(x.a)(n,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=Math.floor(this.accelRange.start+e.chunk*this.accelRange.step);return t>this.accelRange.stop?new C:new T(["M204 P".concat(t," ; Tower Tool")])}}]),n}(N),M=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this)).accelRange=void 0,a.accelRange=e,a}return Object(x.a)(n,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=Math.floor(this.accelRange.start+e.chunk*this.accelRange.step);return t>this.accelRange.stop?new C:new T(["M205 X".concat(t.toFixed(3)," Y").concat(t.toFixed(3)," Z").concat(t.toFixed(3)," ; Tower Tool")])}}]),n}(N),H=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this)).flowRange=void 0,a.flowRange=e,a}return Object(x.a)(n,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=Math.floor(this.flowRange.start+e.chunk*this.flowRange.step);return t>this.flowRange.stop?new C:new T(["M221 S".concat(t.toFixed(0)," ; Tower Tool")])}}]),n}(N),D=function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this)).accelRange=void 0,a.accelRange=e,a}return Object(x.a)(n,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=this.accelRange.start+e.chunk*this.accelRange.step;return t>this.accelRange.stop?new C:new T(["M900 K".concat(t," ; Tower Tool")])}}]),n}(N);!function(e){e[e.RetractDistance=0]="RetractDistance",e[e.RetractSpeed=1]="RetractSpeed",e[e.Temperature=2]="Temperature",e[e.Acceleration=3]="Acceleration",e[e.Jerk=4]="Jerk",e[e.Flow=5]="Flow",e[e.LinearAdvance=6]="LinearAdvance"}(F||(F={}));var G,P=(B={},Object(v.a)(B,F.RetractDistance,{start:1,step:.25,stop:5}),Object(v.a)(B,F.RetractSpeed,{start:10,step:10,stop:100}),Object(v.a)(B,F.Temperature,{start:180,step:10,stop:240}),Object(v.a)(B,F.Acceleration,{start:500,step:100,stop:2e3}),Object(v.a)(B,F.Jerk,{start:5,step:5,stop:50}),Object(v.a)(B,F.Flow,{start:95,step:1,stop:105}),Object(v.a)(B,F.LinearAdvance,{start:.1,step:.1,stop:1}),B),W={variable:{setType:Object(E.b)("variable/setType"),setRange:Object(E.b)("variable/setRange")},gcodeSettings:{set:Object(E.b)("gcodeSettings/set")}},U=Object(E.c)(function(){var e={variable:{type:F.RetractDistance,range:P[F.RetractDistance]},gcodeSettings:{baseHeight:.5,layerHeight:.25,stepHeight:4}};return Object(d.a)({},e)}(),(function(e){e.addCase(W.gcodeSettings.set,(function(e,t){e.gcodeSettings=t.payload})).addCase(W.variable.setType,(function(e,t){e.variable.type=t.payload,e.variable.range=P[e.variable.type]})).addCase(W.variable.setRange,(function(e,t){e.variable.range=t.payload}))})),J=n(10),K=Object(J.c)({gcode:U}),z=Object(E.a)({reducer:K}),Y=f.c,V=function(){var e=Object(f.b)(),t=Y((function(e){return e.gcode.gcodeSettings}));return c.a.createElement(m,{title:"G-code Settings",titleIcon:u.b},c.a.createElement("div",{className:"BlockContent__text"},c.a.createElement("p",null,"Customize your ",c.a.createElement("strong",null,"slicer")," and ",c.a.createElement("strong",null,"test shape")," ","settings. The defaults here are perfect for our test shapes.")),c.a.createElement(g,null,c.a.createElement(b,{label:"Layer Height",labelIcon:u.f,value:t.layerHeight,step:.05,min:0,units:"mm",onChange:function(n){e(W.gcodeSettings.set(Object(d.a)(Object(d.a)({},t),{},{layerHeight:n})))}}),c.a.createElement(b,{label:"Base Height",labelIcon:u.g,value:t.baseHeight,step:.25,min:0,units:"mm",onChange:function(n){e(W.gcodeSettings.set(Object(d.a)(Object(d.a)({},t),{},{baseHeight:n})))}}),c.a.createElement(b,{label:"Step Height",labelIcon:u.h,value:t.stepHeight,step:.25,min:0,units:"mm",onChange:function(n){e(W.gcodeSettings.set(Object(d.a)(Object(d.a)({},t),{},{stepHeight:n})))}})))},q=function(e){function t(t,n){e.onChange(Object(d.a)(Object(d.a)({},e.range),{},Object(v.a)({},t,n)))}return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{label:"Start",units:e.units,labelIcon:u.i,value:e.range.start,step:e.range.step,min:0,onChange:function(e){return t("start",e)},onBlur:e.onBlur}),c.a.createElement(b,{label:"Step",units:e.units,labelIcon:u.j,value:e.range.step,step:e.step,min:e.step,onChange:function(e){return t("step",e)},onBlur:e.onBlur}),c.a.createElement(b,{label:"Stop",units:e.units,labelIcon:u.k,value:e.range.stop,step:e.range.step,min:0,onChange:function(e){return t("stop",e)},onBlur:e.onBlur}))};var X=(G={},Object(v.a)(G,F.RetractDistance,{name:"Retraction Distance",units:"mm",step:.25}),Object(v.a)(G,F.RetractSpeed,{name:"Retraction Speed",units:"mm/s",step:10}),Object(v.a)(G,F.Temperature,{name:"Hotend Temperature",units:"\xb0C",step:5}),Object(v.a)(G,F.Acceleration,{name:"Acceleration",units:"mm/s\xb2",step:100}),Object(v.a)(G,F.Jerk,{name:"Jerk",units:"mm/s\xb2",step:5}),Object(v.a)(G,F.Flow,{name:"Flow",units:"%",step:1}),Object(v.a)(G,F.LinearAdvance,{name:"Linear Advance (Marlin)",units:"K",step:.1}),G),Z=function(e){var t=Object.entries(X).map((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];return c.a.createElement("option",{value:n,key:n},a.name)}));return c.a.createElement("label",null,c.a.createElement("div",{className:"FormContainer__labelText"},"Variable"),c.a.createElement("div",{className:"FormContainer__inputContainer"},c.a.createElement("div",{className:"FormContainer__inputIcon"},c.a.createElement(s.a,{icon:u.a,fixedWidth:!0})),c.a.createElement("select",{value:e.type,onChange:function(t){e.onChange(Number(t.target.value))}},t)))},$=function(){var e=Y((function(e){return e.gcode.variable})),t=Object(f.b)(),n=X[e.type];return c.a.createElement(m,{title:"Tower Settings",titleIcon:u.l},c.a.createElement("div",{className:"BlockContent__text"},c.a.createElement("p",null,"Configure your ",c.a.createElement("strong",null,"tower settings"),"."),c.a.createElement("p",null,"The print will begin with ",c.a.createElement("strong",null,"[variable]")," set to"," ",c.a.createElement("strong",null,"[start]"),", increasing by ",c.a.createElement("strong",null,"[step]")," each step. The print will finish early automatically after"," ",c.a.createElement("strong",null,"[stop]")," inclusive.")),c.a.createElement(g,null,c.a.createElement(Z,{type:e.type,onChange:function(e){t(W.variable.setType(e))}}),c.a.createElement(q,{range:e.range,units:n.units,step:n.step,onChange:function(e){t(W.variable.setRange(e))},onBlur:function(){t(W.variable.setRange(function(e){var t=e.start,n=e.step,a=e.stop;return t+n>a&&(a=t+n),{start:t,step:n,stop:a=Math.floor(a/n)*n}}(e.range)))}})))},Q=n(33);n(54);function ee(e){return c.a.createElement("tr",{className:"SummaryBlockStep"},c.a.createElement("td",{className:"SummaryBlockStep__step"},e.step),c.a.createElement("td",{className:"SummaryBlockStep__value"},Object(Q.round)(e.value,2)))}var te=function(){var e=Y((function(e){return e.gcode.variable})),t=e.type,n=function(e){if(e.step<=0)return[];for(var t=[],n=e.start,a=0;a<20&&!(n>e.stop);a++)t.push(n),n+=e.step;return t}(e.range);n.reverse();var a=X[t];return c.a.createElement("table",{className:"SummaryBlock__table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"SummaryBlock__stepHeader"},c.a.createElement(s.a,{icon:u.f,fixedWidth:!0})," Step"),c.a.createElement("td",{className:"SummaryBlock__valueHeader"},c.a.createElement(s.a,{icon:u.a,fixedWidth:!0})," ",a.name," (",a.units,")"))),c.a.createElement("tbody",null,n.map((function(e,t){return c.a.createElement(ee,{step:n.length-t,value:e,key:t})}))))},ne=n(34),ae=n.n(ne),re=(n(55),function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],l=n[1],o=ae()({CopyCodeStatusText:!0,"CopyCodeStatusText--visible":a});return c.a.createElement("code",{className:"CopyCode",onClick:function(){navigator.clipboard.writeText(e.children),l(!0),setTimeout((function(){l(!1)}),2500)}},c.a.createElement("div",{className:"CopyCodeStatus"},c.a.createElement("div",{className:o}," Copied!"),c.a.createElement(s.a,{icon:u.c,pull:"right"})),e.children)}),ce=(n(56),function(e){var t=Object(r.useRef)(null);return c.a.createElement("video",{src:e.path,ref:t,playsInline:!0,autoPlay:!0,muted:!0,loop:!0})}),le=function(e){return c.a.createElement("div",{className:"TestShapeContainer"},c.a.createElement("a",{className:"TestShape",href:"".concat("/tower-tool","/retraction_tower.stl")},c.a.createElement(ce,{path:"".concat("/tower-tool","/retraction_tower.webm")}),c.a.createElement("p",null,"Retraction")),c.a.createElement("a",{className:"TestShape",href:"".concat("/tower-tool","/edge_tower.stl")},c.a.createElement(ce,{path:"".concat("/tower-tool","/edge_tower.webm")}),c.a.createElement("p",null,"Edges")),c.a.createElement("a",{className:"TestShape",href:"".concat("/tower-tool","/overhang_tower.stl")},c.a.createElement(ce,{path:"".concat("/tower-tool","/overhang_tower.webm")}),c.a.createElement("p",null,"Overhangs")),c.a.createElement("a",{className:"TestShape",href:"".concat("/tower-tool","/temperature_tower.stl")},c.a.createElement(ce,{path:"".concat("/tower-tool","/temperature_tower.webm")}),c.a.createElement("p",null,"Temperature")))},oe=n(35),ie=(n(57),function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(s.a,{icon:u.l,fixedWidth:!0,transform:"down-1 grow-4"})," ","Tower Tool"),c.a.createElement("h2",null,c.a.createElement("a",{href:"https://github.com/Knifa/tower-tool"},c.a.createElement(s.a,{icon:oe.a,fixedWidth:!0,transform:"down-1 grow-4"}))," ",c.a.createElement("a",{href:"https://github.com/Knifa/tower-tool/tree/".concat("v1.2")},"v1.2")," by"," ",c.a.createElement("a",{href:"https://github.com/Knifa"},"@knifa")))}),se=(n(58),function(){return c.a.createElement("div",{className:"Intro"},c.a.createElement(ie,null),c.a.createElement("h2",null,"Hello!"),c.a.createElement("p",null,"This tool can generate sweet ",c.a.createElement("strong",null,"calibration towers")," for your 3D printer. All you need to do is slice your test shape, upload it here, configure your options, and hit go!"),c.a.createElement("p",null,"If you're a keen bean, please"," ",c.a.createElement("a",{href:"https://github.com/Knifa/tower-tool"},"check out Tower Tool on GitHub!")),c.a.createElement("h2",null,"Test Shapes"),c.a.createElement("p",null,"Try out these test shapes! They're compact and quick to print."),c.a.createElement(le,null),c.a.createElement("p",null,"They each have a ",c.a.createElement("strong",null,"0.5mm tall base")," with"," ",c.a.createElement("strong",null,"20x 4mm tall steps"),". Slice them with a layer height of"," ",c.a.createElement("strong",null,"0.25mm"),"."),c.a.createElement("h2",null,"Slicer Setup"),c.a.createElement("p",null,"We need to be able to figure out when a new layer starts and when the print is over. You'll need to make a couple of changes to your slicer to get going."),c.a.createElement("h3",null,"Layer Change"),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"Cura"),"? You're all set."),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"PrusaSlicer")," or ",c.a.createElement("strong",null,"Slic3r"),"? Add the line below to the start of the textbox under"," ",c.a.createElement("em",null,"Printer Settings \u27a4 Custom G-code \u27a4 Before Layer Change G-code"),"."),c.a.createElement(re,null,";LAYER:[layer_num]"),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"something else"),"? Something like the line above needs to appear after every layer change with the new layer number, starting from zero."),c.a.createElement("h3",null,"Print End"),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"Cura"),"? Add the line below to the start of the textbox under"," ",c.a.createElement("em",null,"Preferences \u27a4 Printers \u27a4 [your printer] \u27a4 Machine Settings \u27a4 End G-code"),"."),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"PrusaSlicer")," or ",c.a.createElement("strong",null,"Slic3r"),"? Add the line below to the start of the textbox under"," ",c.a.createElement("em",null,"Printer Settings \u27a4 Custom G-code \u27a4 End G-code"),"."),c.a.createElement(re,null,";PRINT_END"),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"something else"),"? Something like the line above needs to appear just as the print is about to end, before any actions like homing or turning off fans."))}),ue=n(25),me=n(36),he=n(17),pe=n.n(he),de=n(23);function fe(e){return ge.apply(this,arguments)}function ge(){return(ge=Object(de.a)(pe.a.mark((function e(t){return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=new FileReader;a.onload=function(t){e(t.target.result)},a.onerror=n,a.readAsText(t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(){function e(t,n){Object(j.a)(this,e),this.file=void 0,this.lines=void 0,this.file=t,this.lines=n}return Object(x.a)(e,null,[{key:"fromFile",value:function(){var t=Object(de.a)(pe.a.mark((function t(n){var a,r;return pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fe(n);case 2:return a=t.sent,r=a.split("\n"),t.abrupt("return",new e(n,r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}(),ve=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(j.a)(this,e),this.layer=void 0,this.z=void 0,this.chunk=void 0,this.layer=t,this.z=n,this.chunk=a}return Object(x.a)(e,null,[{key:"fromLayer",value:function(t,n,a,r){var c=n*(t+1);return new e(t,c,c>r?Math.floor((c-r)/a):null)}}]),e}(),Ee=function(){function e(t){Object(j.a)(this,e),this.layerRegex=void 0,this.location=void 0,this.settings=void 0,this.transformer=void 0,this.layerRegex=Object(_.a)(/;LAYER:([0-9]+)/,{layerNum:1}),this.location=new ve,this.settings=t.settings,this.transformer=t.transformer}return Object(x.a)(e,[{key:"process",value:function(e){var t,n=[],a=!1,r=Object(me.a)(e.lines);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(a){if(";PRINT_END"!==c)continue;a=!1}if(this.updateLocation(c)){var l=this.transformer.onLayer(this.location);l instanceof T?n.push.apply(n,Object(ue.a)(l.lines)):l instanceof C&&(a=!0)}var o=this.transformer.onLine(c,this.location);o instanceof k?n.push(c):o instanceof T?n.push.apply(n,[c].concat(Object(ue.a)(o.lines))):o instanceof S?n.push.apply(n,Object(ue.a)(o.lines)):o instanceof C&&(a=!0)}}catch(i){r.e(i)}finally{r.f()}return n}},{key:"updateLocation",value:function(e){var t=e.match(this.layerRegex);if(t){var n,a=Number.parseInt(t.groups.layerNum);if(a!==(null===(n=this.location)||void 0===n?void 0:n.layer))return this.location=ve.fromLayer(a,this.settings.layerHeight,this.settings.stepHeight,this.settings.baseHeight),!0}return!1}}],[{key:"fromVariable",value:function(t,n,a){var r;switch(t){case F.RetractDistance:r=new L({distanceRange:a});break;case F.RetractSpeed:r=new L({speedRange:a});break;case F.Temperature:r=new A(a);break;case F.Acceleration:r=new I(a);break;case F.Jerk:r=new M(a);break;case F.Flow:r=new H(a);break;case F.LinearAdvance:r=new D(a)}return new e({settings:n,transformer:r})}}]),e}(),we=(n(60),function(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],l=Y((function(e){return e})),o=null!==n,s=function(e){e.preventDefault()};return c.a.createElement("div",{className:"App",onDragEnter:s,onDragOver:s,onDrop:function(e){var t=e.dataTransfer.files[0];a(t),e.preventDefault()}},c.a.createElement("div",{className:"DarkSide"},c.a.createElement(se,null)),c.a.createElement("div",{className:"LightSide"},c.a.createElement(h,{filename:n?n.name:void 0,onChange:a}),c.a.createElement(V,null),c.a.createElement($,null),c.a.createElement(te,null),c.a.createElement(p,{onProcessClick:function(){be.fromFile(n).then((function(e){!function(e){var t=e.join("\n"),n=new Blob([t],{type:"text/plain"}),a=URL.createObjectURL(n),r=document.createElement("a");r.download="output.gcode",r.href=a,r.target="_blank",r.click()}(Ee.fromVariable(l.gcode.variable.type,l.gcode.gcodeSettings,l.gcode.variable.range).process(e))}))},enabled:o})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f.a,{store:z},c.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.81adbf7e.chunk.js.map