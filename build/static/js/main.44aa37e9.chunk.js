(this["webpackJsonptailormoon-generator"]=this["webpackJsonptailormoon-generator"]||[]).push([[0],{24:function(e,n,t){e.exports=t(42)},29:function(e,n,t){},38:function(e,n){},39:function(e,n){},40:function(e,n){},42:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),c=t(19),o=t.n(c),i=(t(29),t(7)),u=t(3),s=t.n(u),f=t(4),l=t(8),d=t(9),m=t(23);function p(){var e=Object(l.a)(["\n    display: none;\n"]);return p=function(){return e},e}function b(){var e=Object(l.a)(["\n    width: 640px;\n    height: 480px;\n"]);return b=function(){return e},e}var v=d.a.video(b()),h=d.a.canvas(p());var w=function(e){var n=e.onLoad,t=Object(a.useRef)(null),c=Object(a.useRef)(null),o=Object(a.useState)(null),u=Object(i.a)(o,2),l=u[0],d=u[1];return Object(a.useEffect)((function(){var e=!1,n=new m.a(t.current,"user",c.current);return d(n),Object(f.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.start();case 2:e=!0;case 3:case"end":return t.stop()}}),t)})))(),function(){e&&n.stop()}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{ref:t,autoPlay:!0,playsinline:!0}),r.a.createElement(h,{className:"d-none",ref:c}),l&&r.a.createElement("button",{onClick:function(){var e=l.snap(),t=new Image;t.src=e,t.onload=function(){n(t)}}},"Snap"))},j=t(5);function O(){var e=Object(l.a)([""]);return O=function(){return e},e}function g(){var e=Object(l.a)(["\n    color: #ffffff;\n    font-size: 20px;\n    margin: 100px auto;\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    position: relative;\n    text-indent: -9999em;\n    -webkit-animation: load 1.3s infinite linear;\n    animation: load 1.3s infinite linear;\n    -webkit-transform: translateZ(0);\n    -ms-transform: translateZ(0);\n    transform: translateZ(0);\n"]);return g=function(){return e},e}var x=d.a.canvas(g()),E=d.a.div(O());var k=function(e){var n=e.faces,t=Object(a.useState)(!1),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(a.useRef)(null);return Object(a.useEffect)((function(){Object(f.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([j.d.faceRecognitionNet.loadFromUri("/models"),j.d.faceLandmark68Net.loadFromUri("/models"),j.d.ssdMobilenetv1.loadFromUri("/models")]);case 2:u(!0);case 3:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){if(o){var e=j.a(n);j.c(e,{width:770,height:443});var t=e.getContext("2d"),a=new Image;a.src="/sailor-moon.png",a.onload=Object(f.a)(s.a.mark((function r(){var c,o;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.b(n).withFaceLandmarks().withFaceDescriptors();case 2:c=r.sent,o=c[0].detection.box,t.drawImage(n,o.topLeft.x,o.topLeft.y,o.width,o.height,330,85,160,160),t.drawImage(a,0,0,a.width,a.height,0,0,a.width,a.height),l.current.append(e);case 7:case"end":return r.stop()}}),r)})))}}),[n,o]),o?r.a.createElement(E,{ref:l}):r.a.createElement(x,null)};var F=function(){var e=Object(a.useState)(null),n=Object(i.a)(e,2),t=n[0],c=n[1];return t?r.a.createElement(k,{faces:t}):r.a.createElement(w,{onLoad:c})};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.44aa37e9.chunk.js.map