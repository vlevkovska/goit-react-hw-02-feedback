(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={box:"Statistics_box__3LGlj",item:"Statistics_item__1a6-0"}},,,,,,function(e,t,n){e.exports={box:"Section_box__1Xo6h"}},function(e,t,n){e.exports={container:"Container_container__3Bz3N"}},function(e,t,n){e.exports={btn:"FeedbackOptions_btn__12M7p"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),o=n.n(i),r=(n(17),n(5)),s=n(6),l=n(7),b=n(12),u=n(11),d=n(8),j=n.n(d),h=n(0);function x(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:j.a.box,children:[t&&Object(h.jsx)("h2",{children:t}),n]})}var f=n(9),O=n.n(f);function v(e){var t=e.children;return Object(h.jsx)("div",{className:O.a.container,children:t})}var g=n(2),m=n.n(g),k=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(h.jsxs)("ul",{className:m.a.box,children:[Object(h.jsxs)("li",{className:m.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:m.a.item,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:m.a.item,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:m.a.item,children:["Total: ",a]}),Object(h.jsxs)("li",{className:m.a.item,children:["Positive feedback: ",i,"%"]})]})};function p(e){var t=e.title;return Object(h.jsx)("section",{children:t&&Object(h.jsx)("h3",{children:t})})}var F=n(10),_=n.n(F),N=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:_.a.btn,type:"button",onClick:function(){return n(e)},children:e},e)}))})},P=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)})),console.log("\u041a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443")},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=Object.keys(this.state),i=this.onLeaveFeedback,o=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(h.jsxs)(v,{children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(N,{options:a,onLeaveFeedback:i})}),Object(h.jsx)("h2",{title:"Statistics",children:" "}),Object(h.jsx)(x,{title:"Statistics",children:o>0?Object(h.jsx)(k,{good:t,neutral:n,bad:c,total:o,positivePercentage:r}):Object(h.jsx)(p,{title:"No feedback given"})})]})}}]),n}(c.Component),S=P,L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),L()}],[[19,1,2]]]);
//# sourceMappingURL=main.52a1056b.chunk.js.map