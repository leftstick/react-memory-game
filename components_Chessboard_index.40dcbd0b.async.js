(self.webpackChunkreact_memory_game=self.webpackChunkreact_memory_game||[]).push([[403,481],{13351:function(o,r,e){"use strict";e.r(r);var u=e(46338),d=e.n(u),l=e(73912),s=e(19803),a=e.n(s),t=e(93236),n=e(13254),i=e(71484),_=e(62086);function f(E){var v=E.style,m=E.value,M=m.flipped,P=m.name,D=(0,l.tT)("useGameModel",function(c){return(0,n.ei)(c,"flipCard")}),h=D.flipCard;return(0,_.jsx)("div",{className:"w-[100px] h-[121px] mr-[3px] cursor-pointer relative",onClick:function(){return h(m)},style:v,children:(0,_.jsxs)("div",{className:a()("w-full h-full transition-transform duration-1000 style-3d relative",d()({},"rotatey-180",M)),children:[(0,_.jsx)("img",{className:"absolute block w-full h-full backface-hidden bg-blue-600 rotatey-180",src:(0,n.gJ)(P),alt:"card"}),(0,_.jsx)("img",{className:"absolute block w-full h-full backface-hidden bg-blue-600 rotatey-0",src:(0,n.gJ)("URL_BACK"),alt:"back-card"})]})})}r.default=f},91983:function(o,r,e){"use strict";e.r(r);var u=e(73912),d=e(93236),l=e(13254),s=e(13351),a=e(62086);function t(){var n=(0,u.tT)("useGameModel",function(_){return(0,l.ei)(_,"cards")}),i=n.cards;return(0,a.jsx)("div",{className:"mt-[20px] w-full bg-white rounded-md py-[10px] px-[5px] flex flex-wrap justify-center items-center",children:i.map(function(_,f){return f>0&&f%4===0?(0,a.jsx)(s.default,{style:{marginRight:0},value:_},_.id):(0,a.jsx)(s.default,{value:_},_.id)})})}r.default=t},19803:function(o,r){var e,u;(function(){"use strict";var d={}.hasOwnProperty;function l(){for(var s=[],a=0;a<arguments.length;a++){var t=arguments[a];if(!!t){var n=typeof t;if(n==="string"||n==="number")s.push(t);else if(Array.isArray(t)){if(t.length){var i=l.apply(null,t);i&&s.push(i)}}else if(n==="object")if(t.toString===Object.prototype.toString)for(var _ in t)d.call(t,_)&&t[_]&&s.push(_);else s.push(t.toString())}}return s.join(" ")}o.exports?(l.default=l,o.exports=l):(e=[],u=function(){return l}.apply(r,e),u!==void 0&&(o.exports=u))})()}}]);
