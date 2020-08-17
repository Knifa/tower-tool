(this["webpackJsonptower-tool"]=this["webpackJsonptower-tool"]||[]).push([[0],{37:function(e,t,a){e.exports=a(61)},42:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(20),i=a.n(l),o=(a(42),a(12)),s=a(4),u=a(2),m=(a(48),function(e){return c.a.createElement("div",{className:"Block"},c.a.createElement("div",{className:"BlockHeader"},c.a.createElement("div",{className:"BlockHeader__title"},c.a.createElement(s.a,{icon:e.titleIcon,fixedWidth:!0})," ",e.title)),c.a.createElement("div",{className:"BlockContent"},e.children))}),h=(a(49),function(e){var t=Object(r.useState)("No file selected."),a=Object(o.a)(t,2),n=a[0],l=a[1],i=Object(r.useRef)(null);return c.a.createElement(m,{title:"G-code Input",titleIcon:u.e},c.a.createElement("div",{className:"GCodeInputBlock"},c.a.createElement("input",{type:"file",accept:".gcode",onChange:function(t){var a=t.target.files[0];l(a.name),e.onChange(a)},ref:i}),c.a.createElement("div",{className:"GCodeInputBlock__fileName"},n),c.a.createElement("button",{onClick:function(){var e;null===(e=i.current)||void 0===e||e.click()}},c.a.createElement(s.a,{icon:u.m,fixedWidth:!0})," Select File")))}),p=function(e){return c.a.createElement(m,{title:"G-code Output",titleIcon:u.d},c.a.createElement("div",{className:"BlockContent__text"},c.a.createElement("p",null,c.a.createElement("strong",null,"Make sure to inspect the G-code before running the print!"),c.a.createElement("br",null),c.a.createElement("br",null),"Any lines added or changed will end with"," ",c.a.createElement("span",{className:"InlineCode"},"; Tower Tool")," so you can find them easily."),c.a.createElement("button",{disabled:!e.enabled,onClick:e.onProcessClick},c.a.createElement(s.a,{icon:u.l,fixedWidth:!0})," Towerize!")))},d=a(9),f=a(11),g=(a(52),function(e){return c.a.createElement("div",{className:"FormContainer"},e.children)}),b=function(e){return c.a.createElement("label",null,c.a.createElement("div",{className:"FormContainer__labelText"},e.label),c.a.createElement("div",{className:"FormContainer__inputContainer"},c.a.createElement("div",{className:"FormContainer__inputIcon"},c.a.createElement(s.a,{icon:e.labelIcon,fixedWidth:!0})),c.a.createElement("input",{type:"number",value:e.value,step:e.step,min:e.min?e.min:0,onChange:function(t){e.onChange&&e.onChange(Number(t.target.value))},onBlur:e.onBlur}),c.a.createElement("div",{className:"FormContainer__inputUnits"},e.units)))},v=a(6),E=a(13),y=a(5),w=a(8),j=a(3),O=function e(){Object(j.a)(this,e)},R=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this)).lines=void 0,n.lines=e,n}return a}(O),k=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return a}(O),C=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return a}(O),S=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return a}(R),T=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return a}(R),_=a(7),N=function(){function e(){Object(j.a)(this,e)}return Object(_.a)(e,[{key:"onLine",value:function(e,t){return new k}},{key:"onLayer",value:function(e){return new k}}]),e}(),x=a(24);!function(e){e[e.Absolute=0]="Absolute",e[e.Relative=1]="Relative"}(n||(n={}));var F,B,I=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var r;return Object(j.a)(this,a),(r=t.call(this)).distanceRange=void 0,r.speedRange=void 0,r.retractMode=void 0,r.retractRegex=void 0,r.relativeRegex=void 0,r.absoluteRegex=void 0,r.distanceRange=e.distanceRange,r.speedRange=e.speedRange,r.retractRegex=e.retractRegex?e.retractRegex:Object(x.a)(/G1 E((\x2D|[0-9]|\.)+) F(([0-9]|.)+)/,{distance:1,speed:3}),r.retractMode=n.Absolute,r.relativeRegex=/M83/,r.absoluteRegex=/M82/,r}return Object(_.a)(a,[{key:"onLine",value:function(e,t){if(e.match(this.absoluteRegex)?this.retractMode=n.Absolute:e.match(this.relativeRegex)&&(this.retractMode=n.Relative),null===t.chunk)return new k;var a=e.match(this.retractRegex);if(!a)return new k;var r=Number.parseFloat(a.groups.distance),c=r>0?1:-1,l=r,i=Number.parseFloat(a.groups.speed);if(this.distanceRange){if((l=this.distanceRange.start+t.chunk*this.distanceRange.step)>this.distanceRange.stop)return new C;l*=c}if(this.speedRange){if((i=this.speedRange.start+t.chunk*this.speedRange.step)>this.speedRange.stop)return new C;i*=60}return new S(["M83 ; Tower Tool","G1 E".concat(l.toFixed(3)," F").concat(i.toFixed(3)," ; Tower Tool"),this.retractMode===n.Absolute?"M82 ; Tower Tool":"M83 ; Tower Tool"])}},{key:"onLayer",value:function(e){if(null===e.chunk)return new k;if(this.distanceRange){var t=(this.distanceRange.stop-this.distanceRange.start)/this.distanceRange.step;if(e.chunk>t)return new C}if(this.speedRange){var a=(this.speedRange.stop-this.speedRange.start)/this.speedRange.step;if(e.chunk>a)return new C}return new k}}]),a}(N),M=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this)).tempRange=void 0,n.tempRange=e,n}return Object(_.a)(a,[{key:"onLayer",value:function(e){var t=Math.floor(this.tempRange.start+e.chunk*this.tempRange.step);return t>this.tempRange.stop?new C:new T(["M104 S".concat(t.toFixed(0)," ; Tower Tool")])}}]),a}(N),H=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this)).accelRange=void 0,n.accelRange=e,n}return Object(_.a)(a,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=Math.floor(this.accelRange.start+e.chunk*this.accelRange.step);return t>this.accelRange.stop?new C:new T(["M204 P".concat(t," ; Tower Tool")])}}]),a}(N),L=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this)).accelRange=void 0,n.accelRange=e,n}return Object(_.a)(a,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=Math.floor(this.accelRange.start+e.chunk*this.accelRange.step);return t>this.accelRange.stop?new C:new T(["M205 X".concat(t.toFixed(3)," Y").concat(t.toFixed(3)," Z").concat(t.toFixed(3)," ; Tower Tool")])}}]),a}(N),A=function(e){Object(y.a)(a,e);var t=Object(w.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this)).flowRange=void 0,n.flowRange=e,n}return Object(_.a)(a,[{key:"onLayer",value:function(e){if(null==e.chunk)return new k;var t=Math.floor(this.flowRange.start+e.chunk*this.flowRange.step);return t>this.flowRange.stop?new C:new T(["M221 S".concat(t.toFixed(0)," ; Tower Tool")])}}]),a}(N);!function(e){e[e.RetractDistance=0]="RetractDistance",e[e.RetractSpeed=1]="RetractSpeed",e[e.Temperature=2]="Temperature",e[e.Acceleration=3]="Acceleration",e[e.Jerk=4]="Jerk",e[e.Flow=5]="Flow"}(F||(F={}));var G,P=(B={},Object(v.a)(B,F.RetractDistance,{start:1,step:.25,stop:5}),Object(v.a)(B,F.RetractSpeed,{start:10,step:10,stop:100}),Object(v.a)(B,F.Temperature,{start:180,step:10,stop:240}),Object(v.a)(B,F.Acceleration,{start:500,step:100,stop:2e3}),Object(v.a)(B,F.Jerk,{start:5,step:5,stop:50}),Object(v.a)(B,F.Flow,{start:95,step:1,stop:105}),B),D={variable:{setType:Object(E.b)("variable/setType"),setRange:Object(E.b)("variable/setRange")},gcodeSettings:{set:Object(E.b)("gcodeSettings/set")}},W=Object(E.c)(function(){var e={variable:{type:F.RetractDistance,range:P[F.RetractDistance]},gcodeSettings:{baseHeight:.5,layerHeight:.25,stepHeight:4}};return Object(d.a)({},e)}(),(function(e){e.addCase(D.gcodeSettings.set,(function(e,t){e.gcodeSettings=t.payload})).addCase(D.variable.setType,(function(e,t){e.variable.type=t.payload,e.variable.range=P[e.variable.type]})).addCase(D.variable.setRange,(function(e,t){e.variable.range=t.payload}))})),J=a(10),U=Object(J.c)({gcode:W}),Y=Object(E.a)({reducer:U}),z=f.c,V=function(){var e=Object(f.b)(),t=z((function(e){return e.gcode.gcodeSettings}));return c.a.createElement(m,{title:"G-code Settings",titleIcon:u.b},c.a.createElement("div",{className:"BlockContent__text"},c.a.createElement("p",null,"Customize your ",c.a.createElement("strong",null,"slicer")," and ",c.a.createElement("strong",null,"test shape")," ","settings. The defaults here are perfect for the test shapes above.")),c.a.createElement(g,null,c.a.createElement(b,{label:"Layer Height",labelIcon:u.f,value:t.layerHeight,step:.05,min:0,units:"mm",onChange:function(a){e(D.gcodeSettings.set(Object(d.a)(Object(d.a)({},t),{},{layerHeight:a})))}}),c.a.createElement(b,{label:"Base Height",labelIcon:u.g,value:t.baseHeight,step:.25,min:0,units:"mm",onChange:function(a){e(D.gcodeSettings.set(Object(d.a)(Object(d.a)({},t),{},{baseHeight:a})))}}),c.a.createElement(b,{label:"Step Height",labelIcon:u.h,value:t.stepHeight,step:.25,min:0,units:"mm",onChange:function(a){e(D.gcodeSettings.set(Object(d.a)(Object(d.a)({},t),{},{stepHeight:a})))}})))},q=function(e){function t(t,a){e.onChange(Object(d.a)(Object(d.a)({},e.range),{},Object(v.a)({},t,a)))}return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{label:"Start",units:e.units,labelIcon:u.i,value:e.range.start,step:e.range.step,min:0,onChange:function(e){return t("start",e)},onBlur:e.onBlur}),c.a.createElement(b,{label:"Step",units:e.units,labelIcon:u.j,value:e.range.step,step:e.step,min:e.step,onChange:function(e){return t("step",e)},onBlur:e.onBlur}),c.a.createElement(b,{label:"Stop",units:e.units,labelIcon:u.k,value:e.range.stop,step:e.range.step,min:0,onChange:function(e){return t("stop",e)},onBlur:e.onBlur}))};var K=(G={},Object(v.a)(G,F.RetractDistance,{name:"Retraction Distance",units:"mm",step:.25}),Object(v.a)(G,F.RetractSpeed,{name:"Retraction Speed",units:"mm/s",step:10}),Object(v.a)(G,F.Temperature,{name:"Hotend Temperature",units:"\xb0C",step:5}),Object(v.a)(G,F.Acceleration,{name:"Acceleration",units:"mm/s\xb2",step:100}),Object(v.a)(G,F.Jerk,{name:"Jerk",units:"mm/s\xb2",step:5}),Object(v.a)(G,F.Flow,{name:"Flow",units:"%",step:1}),G),X=function(e){var t=Object.entries(K).map((function(e){var t=Object(o.a)(e,2),a=t[0],n=t[1];return c.a.createElement("option",{value:a,key:a},n.name)}));return c.a.createElement("label",null,c.a.createElement("div",{className:"FormContainer__labelText"},"Variable"),c.a.createElement("div",{className:"FormContainer__inputContainer"},c.a.createElement("div",{className:"FormContainer__inputIcon"},c.a.createElement(s.a,{icon:u.a,fixedWidth:!0})),c.a.createElement("select",{value:e.type,onChange:function(t){e.onChange(Number(t.target.value))}},t)))},Z=function(){var e=z((function(e){return e.gcode.variable})),t=Object(f.b)(),a=K[e.type];return c.a.createElement(m,{title:"Tower Settings",titleIcon:u.l},c.a.createElement("div",{className:"BlockContent__text"},c.a.createElement("p",null,"Configure your ",c.a.createElement("strong",null,"tower settings"),"."),c.a.createElement("p",null,"The print will begin with ",c.a.createElement("strong",null,"[variable]")," set to"," ",c.a.createElement("strong",null,"[start]"),", increasing by ",c.a.createElement("strong",null,"[step]")," each step. The print will finish early automatically after"," ",c.a.createElement("strong",null,"[stop]")," inclusive.")),c.a.createElement(g,null,c.a.createElement(X,{type:e.type,onChange:function(e){t(D.variable.setType(e))}}),c.a.createElement(q,{range:e.range,units:a.units,step:a.step,onChange:function(e){t(D.variable.setRange(e))},onBlur:function(){t(D.variable.setRange(function(e){var t=e.start,a=e.step,n=e.stop;return t+a>n&&(n=t+a),{start:t,step:a,stop:n=Math.floor(n/a)*a}}(e.range)))}})))},$=a(33);a(54);function Q(e){return c.a.createElement("tr",{className:"SummaryBlockStep"},c.a.createElement("td",{className:"SummaryBlockStep__step"},e.step),c.a.createElement("td",{className:"SummaryBlockStep__value"},Object($.round)(e.value,2)))}var ee=function(){var e=z((function(e){return e.gcode.variable})),t=e.type,a=function(e){if(e.step<=0)return[];for(var t=[],a=e.start,n=0;n<20&&!(a>e.stop);n++)t.push(a),a+=e.step;return t}(e.range);a.reverse();var n=K[t];return c.a.createElement("table",{className:"SummaryBlock__table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",{className:"SummaryBlock__stepHeader"},c.a.createElement(s.a,{icon:u.f,fixedWidth:!0})," Step"),c.a.createElement("td",{className:"SummaryBlock__valueHeader"},c.a.createElement(s.a,{icon:u.a,fixedWidth:!0})," ",n.name," (",n.units,")"))),c.a.createElement("tbody",null,a.map((function(e,t){return c.a.createElement(Q,{step:a.length-t,value:e,key:t})}))))},te=a(34),ae=a.n(te),ne=(a(55),function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),n=a[0],l=a[1],i=ae()({CopyCodeStatusText:!0,"CopyCodeStatusText--visible":n});return c.a.createElement("code",{className:"CopyCode",onClick:function(){navigator.clipboard.writeText(e.children),l(!0),setTimeout((function(){l(!1)}),2500)}},c.a.createElement("div",{className:"CopyCodeStatus"},c.a.createElement("div",{className:i}," Copied!"),c.a.createElement(s.a,{icon:u.c,pull:"right"})),e.children)}),re=(a(56),function(e){var t=Object(r.useRef)(null);return c.a.createElement("video",{src:e.path,ref:t,playsInline:!0,autoPlay:!0,muted:!0,loop:!0})}),ce=function(e){return c.a.createElement("div",{className:"TestShapeContainer"},c.a.createElement("a",{className:"TestShape",href:"/retraction_tower.stl"},c.a.createElement(re,{path:"retraction_tower.webm"}),c.a.createElement("p",null,"Retraction")),c.a.createElement("a",{className:"TestShape",href:"/edge_tower.stl"},c.a.createElement(re,{path:"edge_tower.webm"}),c.a.createElement("p",null,"Edges")),c.a.createElement("a",{className:"TestShape",href:"/overhang_tower.stl"},c.a.createElement(re,{path:"overhang_tower.webm"}),c.a.createElement("p",null,"Overhangs")),c.a.createElement("a",{className:"TestShape",href:"/temperature_tower.stl"},c.a.createElement(re,{path:"temperature_tower.webm"}),c.a.createElement("p",null,"Temperature")))},le=(a(57),function(){return c.a.createElement("div",{className:"Intro"},c.a.createElement("h2",null,"Hello!"),c.a.createElement("p",null,"This tool can generate sweet ",c.a.createElement("strong",null,"calibration towers")," for your 3D printer. All you need to do is slice your test shape, upload it here, configure your options, and hit go!"),c.a.createElement("p",null,"If you're a keen bean, please"," ",c.a.createElement("a",{href:"https://github.com/"},"check out Tower Tool on GitHub!")),c.a.createElement("h2",null,"Test Shapes"),c.a.createElement("p",null,"Try out these test shapes! They're compact and quick to print."),c.a.createElement(ce,null),c.a.createElement("p",null,"They each have a ",c.a.createElement("strong",null,"0.5mm tall base")," with"," ",c.a.createElement("strong",null,"20x 4mm tall steps"),". Slice them with a layer height of"," ",c.a.createElement("strong",null,"0.25mm"),"."),c.a.createElement("h2",null,"Slicer Setup"),c.a.createElement("p",null,"We need to be able to figure out when a new layer starts and when the print is over. You'll need to make a couple of changes to your slicer to get going."),c.a.createElement("h3",null,"Layer Change"),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"Cura"),"? You're all set."),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"PrusaSlicer"),"? Add this line to the start of the textbox under"," ",c.a.createElement("em",null,"Printer Settings \u27a4 Custom G-code \u27a4 Before Layer Change G-code"),"."),c.a.createElement(ne,null,";LAYER:[layer_num]"),c.a.createElement("h3",null,"Print End"),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"Cura"),"? Add this line to the start of the textbox under"," ",c.a.createElement("em",null,"Preferences \u27a4 Printers \u27a4 [your printer] \u27a4 Machine Settings \u27a4 End G-code"),"."),c.a.createElement("p",null,"Using ",c.a.createElement("strong",null,"PrusaSlicer"),"? Add this line to the start of the textbox under ",c.a.createElement("em",null,"Printer Settings \u27a4 Custom G-code \u27a4 End G-code"),"."),c.a.createElement(ne,null,";PRINT_END"))}),ie=a(25),oe=a(35),se=a(17),ue=a.n(se),me=a(23);function he(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(me.a)(ue.a.mark((function e(t){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.onerror=a,n.readAsText(t)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=function(){function e(t,a){Object(j.a)(this,e),this.file=void 0,this.lines=void 0,this.file=t,this.lines=a}return Object(_.a)(e,null,[{key:"fromFile",value:function(){var t=Object(me.a)(ue.a.mark((function t(a){var n,r;return ue.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,he(a);case 2:return n=t.sent,r=n.split("\n"),t.abrupt("return",new e(a,r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}(),fe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(j.a)(this,e),this.layer=void 0,this.z=void 0,this.chunk=void 0,this.layer=t,this.z=a,this.chunk=n}return Object(_.a)(e,null,[{key:"fromLayer",value:function(t,a,n,r){var c=a*(t+1);return new e(t,c,c>r?Math.floor((c-r)/n):null)}}]),e}(),ge=function(){function e(t){Object(j.a)(this,e),this.layerRegex=void 0,this.location=void 0,this.settings=void 0,this.transformer=void 0,this.layerRegex=Object(x.a)(/;LAYER:([0-9]+)/,{layerNum:1}),this.location=new fe,this.settings=t.settings,this.transformer=t.transformer}return Object(_.a)(e,[{key:"process",value:function(e){var t,a=[],n=!1,r=Object(oe.a)(e.lines);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(n){if(";PRINT_END"!==c)continue;n=!1}if(this.updateLocation(c)){var l=this.transformer.onLayer(this.location);l instanceof k?a.push(c):l instanceof T?a.push.apply(a,[c].concat(Object(ie.a)(l.lines))):l instanceof C&&(n=!0)}var i=this.transformer.onLine(c,this.location);i instanceof k?a.push(c):i instanceof T?a.push.apply(a,[c].concat(Object(ie.a)(i.lines))):i instanceof S?a.push.apply(a,Object(ie.a)(i.lines)):i instanceof C&&(n=!0)}}catch(o){r.e(o)}finally{r.f()}this.save(a)}},{key:"save",value:function(e){var t=e.join("\n"),a=new Blob([t],{type:"text/plain"}),n=URL.createObjectURL(a),r=document.createElement("a");r.download="output.gcode",r.href=n,r.target="_blank",r.click()}},{key:"updateLocation",value:function(e){var t=e.match(this.layerRegex);if(t){var a,n=Number.parseInt(t.groups.layerNum);if(n!==(null===(a=this.location)||void 0===a?void 0:a.layer))return this.location=fe.fromLayer(n,this.settings.layerHeight,this.settings.stepHeight,this.settings.baseHeight),!0}return!1}}],[{key:"fromVariable",value:function(t,a,n){var r;switch(t){case F.RetractDistance:r=new I({distanceRange:n});break;case F.RetractSpeed:r=new I({speedRange:n});break;case F.Temperature:r=new M(n);break;case F.Acceleration:r=new H(n);break;case F.Jerk:r=new L(n);break;case F.Flow:r=new A(n)}return new e({settings:a,transformer:r})}}]),e}(),be=(a(59),function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],l=z((function(e){return e})),i=null!==a;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"IntroContainer"},c.a.createElement(le,null)),c.a.createElement("div",{className:"ToolContainer"},c.a.createElement(h,{onChange:n}),c.a.createElement(V,null),c.a.createElement(Z,null),c.a.createElement(ee,null),c.a.createElement(p,{onProcessClick:function(){de.fromFile(a).then((function(e){ge.fromVariable(l.gcode.variable.type,l.gcode.gcodeSettings,l.gcode.variable.range).process(e)}))},enabled:i})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(36),Ee=(a(60),function(e){return c.a.createElement("div",{className:"Skyline"},c.a.createElement("div",{className:"Skyline__cloud Skyline__cloud--a"}),c.a.createElement("div",{className:"Skyline__cloud Skyline__cloud--b"}),c.a.createElement("div",{className:"Skyline__back"}),c.a.createElement("div",{className:"Skyline__front"}))});i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Ee,null),c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(s.a,{icon:u.l,fixedWidth:!0,transform:"down-1 grow-4"})," ","Tower Tool"),c.a.createElement("h2",null,c.a.createElement("a",{href:"https://github.com/"},c.a.createElement(s.a,{icon:ve.a,fixedWidth:!0,transform:"down-1 grow-4"}))," ",c.a.createElement("a",{href:"https://github.com/"},"v1.0")," by"," ",c.a.createElement("a",{href:"https://github.com/Knifa"},"@knifa"))),c.a.createElement(f.a,{store:Y},c.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.77348da0.chunk.js.map