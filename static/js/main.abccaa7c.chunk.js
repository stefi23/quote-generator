(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),s=(n(12),n(1)),c=n(2),u=n(4),l=n(3),h=(n(13),['"When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love." Marcus Aurelius ','"Courage doesn\u2019t mean you don\u2019t get afraid. Courage means you don\u2019t let fear stop you." Bethany Hamilton','"Before an intimidating conversation, I always remind myself that I will be the same person before and after the conversation, no matter the outcome." Olivia Fay',"\u201cLife shrinks or expands in proportion to one's courage.\u201d \u2013 Ana\xefs Nin",'"The time is always right to do what is right." \u2014Martin Luther King Jr.','The only truly safe thing you can do is to try over and over again. To go for it, to get rejected, to repeat, to strive, to wish. Without rejection there is no frontier, there is no passion, and there is no magic." \u2015 James Altucher, Choose Yourself','"We are what we repeatedly do. Excellence, then, is not an act, but a habit." \u2013 Aristotle','"The journey of a thousand miles begins with one step." \u2013 Lao Tzu','"In the long run, the sharpest weapon of all is a kind and gentle spirit." \n\u2015 Anne Frank, The Diary of Anne Frank',"\u201cWhomever you become, whatever you make yourself into, that is who you always were.\u201d\n\u2015 Tara Westover, Educated","",'"Most things\u2014including public speaking\u2014can be mastered if you\u2019re willing to put in the time and energy."\nTony Robbins\n']),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).generateQuote=function(){a.setState((function(e){var t=e.i;t===h.length&&(t=0),console.log(h.length);var n=h[t];return{i:++t,quoteGenerated:n}}))},a.state={quoteGenerated:"",i:1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.quoteGenerated;e.i;return o.a.createElement("div",{className:"content text-center position-relative"},o.a.createElement("div",{className:"row "},o.a.createElement("div",{className:"col-10 offset-1 p-4 rounded-corners"},o.a.createElement("div",{className:"mb-4 text-white quote"},t||h[0]),o.a.createElement("button",{className:"btn button !important",onClick:this.generateQuote},"Generate Quote"))))}}]),n}(a.Component),m=(n(14),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).tic=function(){var e=new Date;a.setState((function(){var t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear(),o=e.getHours(),r=e.getMinutes(),i=e.getSeconds();i<10&&(i="0"+e.getSeconds()),r<10&&(r="0"+e.getMinutes()),o<10&&(o="0"+e.getHours());var s=e.getDay();return{date:"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][s],"| ").concat(t,"/").concat(n,"/").concat(a),time:"".concat(o,":").concat(r,":").concat(i)}}))},a.state={date:"day",time:"Now"},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tic()}),1e3)}},{key:"render",value:function(){var e=this.state,t=e.date,n=e.time;return o.a.createElement("div",{className:"pt-5"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 offset-3 date"},t)),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-6 offset-3 text-white time"},n)),o.a.createElement("hr",{size:"30",color:"white"}))}}]),n}(a.PureComponent)),v=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null),o.a.createElement(d,null))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.abccaa7c.chunk.js.map