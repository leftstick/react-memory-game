(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"03cA":function(e,t,a){e.exports=a.p+"static/kronos.f3aea374.png"},"0ohx":function(e,t,a){e.exports=a.p+"static/dinosaur.b27bcc48.png"},"11NV":function(e,t,a){e.exports={statusBar:"statusBar___3ZmOc",playAgain:"playAgain___2cHe1",elapsed:"elapsed___3mVIl"}},"198K":function(e,t){function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}e.exports=a},"6slR":function(e,t,a){"use strict";a.r(t);var n=a("vEW2"),r=a.n(n),c=(a("17x9"),a("MuoO")),o=a("vz4/"),s=a.n(o);function i(){return r.a.createElement("h1",{className:s.a.logo},r.a.createElement("a",{href:"https://github.com/leftstick/react-memory-game",target:"_blank",rel:"noopener noreferrer"},"Memory"))}var l=i,u=a("AiOm"),p=a.n(u);function f(e){var t=e.leftMatched;return r.a.createElement("div",{className:p.a.board},r.a.createElement("span",null,"Pairs Left To Match"),r.a.createElement("h2",null,t))}var d=Object(c["connect"])(e=>{var t=e.game;return{leftMatched:t.leftMatched}})(f),m=a("WF8O"),h=a.n(m);function g(e){var t=e.highestSpeed;return r.a.createElement("div",{className:h.a.score},r.a.createElement("span",null,"Highest Speed"),r.a.createElement("h2",null,t))}var _=Object(c["connect"])(e=>{var t=e.game;return{highestSpeed:t.highestSpeed}})(g),v=a("zUHe"),b=a.n(v);function y(e){var t=e.leftMatched,a=e.highestSpeed;return r.a.createElement("div",{className:b.a.statusBar},r.a.createElement(l,null),r.a.createElement(d,{leftMatched:t}),r.a.createElement(_,{highestSpeed:a}))}var E=Object(c["connect"])(e=>{var t=e.game;return{leftMatched:t.leftMatched,highestSpeed:t.highestSpeed}})(y),N=a("qIgq"),x=a.n(N),k=a("LrkU"),A=a("TSYQ"),M=a.n(A),O=a("trMO"),S=a.n(O);function R(e){var t=e.style,a=e.option,n=e.onFlipCard,c=a.flipped,o=a.cardName;function s(){if(!c)return n(a)}return r.a.createElement("div",{className:S.a.container,onClick:s,style:t},r.a.createElement("div",{className:M()(S.a.card,{[S.a.flipped]:c})},r.a.createElement("img",{className:S.a.front,src:Object(k["b"])(o),alt:"card"}),r.a.createElement("img",{className:S.a.back,src:Object(k["b"])("back"),alt:"back-card"})))}var P=R,U=a("cFoC"),L=a.n(U);function C(e){var t=e.cards,a=e.status,c=e.leftMatched,o=e.dispatch,s=Object(n["useState"])(null),i=x()(s,2),l=i[0],u=i[1];function p(e){if(o({type:"game/flipCards",payload:[e]}),a===k["a"].READY&&o({type:"game/startGame"}),!l)return u(e);if(l!==e&&l.cardName===e.cardName)return u(null),o({type:"game/markMatch"}),void(1===c&&o({type:"game/endGame"}));var t=l;u(null),setTimeout(()=>{o({type:"game/flipCards",payload:[t,e]})},1e3)}return r.a.createElement("div",{className:L.a.chessboard},t.map((e,t)=>{return t>0&&t%4===0?r.a.createElement(P,{key:e.id,style:{marginRight:0},option:e,onFlipCard:p}):r.a.createElement(P,{key:e.id,option:e,onFlipCard:p})}))}var j=Object(c["connect"])(e=>{var t=e.game;return{status:t.status,leftMatched:t.leftMatched,cards:t.cards}})(C),I=a("11NV"),w=a.n(I),Y=()=>r.a.createElement("span",null,"Ready"),T=()=>r.a.createElement("span",null,"Playing"),F=e=>{var t=e.onClick;return r.a.createElement("b",{className:w.a.playAgain,onClick:e=>{e.preventDefault(),e.stopPropagation(),t&&t()}},"Play again")};function K(e){var t=e.elapsedMs,a=e.status,c=e.dispatch,o=Object(n["useState"])(new Map([[k["a"].READY,Y()],[k["a"].PLAYING,T()],[k["a"].PASS,F({onClick:()=>c({type:"game/reset"})})]])),s=x()(o,1),i=s[0],l=Object(n["useMemo"])(()=>i.get(a),[a,i]);return r.a.createElement("div",{className:w.a.statusBar},l,r.a.createElement("span",{className:w.a.elapsed},t," s"))}var z=Object(c["connect"])(e=>{var t=e.game;return{elapsedMs:t.elapsedMs,status:t.status}})(K),B=a("PFr1"),G=a.n(B);class D extends r.a.Component{render(){return r.a.createElement("div",{className:G.a.memoryGame},r.a.createElement(E,null),r.a.createElement(j,null),r.a.createElement(z,null))}}t["default"]=D},AiOm:function(e,t,a){e.exports={board:"board___3dUNw"}},IuST:function(e,t){function a(e,t){var a=[],n=!0,r=!1,c=void 0;try{for(var o,s=e[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(a.push(o.value),t&&a.length===t)break}catch(e){r=!0,c=e}finally{try{n||null==s["return"]||s["return"]()}finally{if(r)throw c}}return a}e.exports=a},LrkU:function(e,t,a){"use strict";function n(e){for(var t=e.slice(),a=t.length;a;a-=1){var n=Math.floor(Math.random()*a),r=t[a-1];t[a-1]=t[n],t[n]=r}return t}function r(e){return`URL_${e.replace(/-/g,"_").toUpperCase(0)}`}function c(){var e,t,a;for(e="",a=0;a<32;a++)8!==a&&12!==a&&16!==a&&20!==a||(e+="-"),t=Math.floor(16*Math.random()).toString(16).toUpperCase(),e+=t;return e}var o=a("lmhW"),s=a.n(o),i=a("Y27i"),l=a.n(i),u=a("0ohx"),p=a.n(u),f=a("03cA"),d=a.n(f),m=a("Pg/X"),h=a.n(m),g=a("jNKe"),_=a.n(g),v=a("spR9"),b=a.n(v),y=a("P2Va"),E=a.n(y),N=a("M2y4"),x=a.n(N);a.d(t,"b",function(){return M}),a.d(t,"a",function(){return O}),a.d(t,"c",function(){return S});var k={URL_8_BALL:s.a,URL_BAKED_POTATO:l.a,URL_DINOSAUR:p.a,URL_KRONOS:d.a,URL_ROCKET:h.a,URL_SKINNY_UNICORN:_.a,URL_THAT_GUY:b.a,URL_ZEPPELIN:E.a,URL_BACK:x.a},A=["8-ball","kronos","baked-potato","dinosaur","rocket","skinny-unicorn","that-guy","zeppelin"];function M(e){return k[r(e)]}var O={READY:"READY",PLAYING:"PLAYING",PASS:"PASS"};function S(){return n([...A,...A]).map(e=>({id:c(),flipped:!1,cardName:e}))}},M2y4:function(e,t,a){e.exports=a.p+"static/back.6dba3655.png"},P2Va:function(e,t,a){e.exports=a.p+"static/zeppelin.cff45bff.png"},PFr1:function(e,t,a){e.exports={memoryGame:"memoryGame___32PeO"}},"Pg/X":function(e,t,a){e.exports=a.p+"static/rocket.aad63248.png"},TSYQ:function(e,t,a){var n,r;(function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=c.apply(null,n);o&&e.push(o)}else if("object"===r)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):(n=[],r=function(){return c}.apply(t,n),void 0===r||(e.exports=r))})()},WF8O:function(e,t,a){e.exports={score:"score___2zVFX"}},Wz2H:function(e,t){function a(e){if(Array.isArray(e))return e}e.exports=a},Y27i:function(e,t,a){e.exports=a.p+"static/baked-potato.77c1c93c.png"},cFoC:function(e,t,a){e.exports={chessboard:"chessboard___2Jyua"}},jNKe:function(e,t,a){e.exports=a.p+"static/skinny-unicorn.4a164a6f.png"},lmhW:function(e,t,a){e.exports=a.p+"static/8-ball.fef0ce08.png"},qIgq:function(e,t,a){var n=a("Wz2H"),r=a("IuST"),c=a("198K");function o(e,t){return n(e)||r(e,t)||c()}e.exports=o},spR9:function(e,t,a){e.exports=a.p+"static/that-guy.c59e1bcb.png"},trMO:function(e,t,a){e.exports={container:"container___3336w",card:"card___9DUZJ",flipped:"flipped___2frI8",back:"back___31JFJ",front:"front___39bRc"}},"vz4/":function(e,t,a){e.exports={logo:"logo___h8Xrs"}},zUHe:function(e,t,a){e.exports={statusBar:"statusBar___1K-dy"}}}]);