(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{1:function(t,e,n){t.exports={container:"App_container__1IMg8",hourse:"App_hourse__3S5K0",containeBbuttons:"App_containeBbuttons__2GKxl",button:"App_button__KQwfM",timer:"App_timer__FlB75"}},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(3),a=n.n(s),o=n(5),i=n.n(o),r=(n(14),n(6)),c=n(7),u=n(2),l=n(9),b=n(8),h=n(1),d=n.n(h),p=n(0),m=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={timer:null,hours:"00",counter:"00",seconds:"00",startDisabled:!0,stopDisabled:!1},s.onPageLoad=s.onPageLoad.bind(Object(u.a)(s)),s.onButtonStart=s.onButtonStart.bind(Object(u.a)(s)),s.onButtonStop=s.onButtonStop.bind(Object(u.a)(s)),s.onButtonWait=s.onButtonWait.bind(Object(u.a)(s)),s.onButtonReset=s.onButtonReset.bind(Object(u.a)(s)),s.start=s.start.bind(Object(u.a)(s)),s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.start()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"start",value:function(){var t=this,e=this,n=setInterval((function(){var n=(Number(t.state.seconds)+1).toString(),s=t.state.counter,a=t.state.hours;59===Number(t.state.seconds)&&(s=(Number(t.state.counter)+1).toString(),n="00"),59===Number(t.state.counter)&&(a=(Number(t.state.hours)+1).toString(),s=t.state.hours,n="00"),e.setState({hours:1===a.length?"0"+a:a,counter:1===s.length?"0"+s:s,seconds:1===n.length?"0"+n:n})}),1e3);this.setState({timer:n})}},{key:"onPageLoad",value:function(){this.start(),this.setState({startDisabled:!0,stopDisabled:!1})}},{key:"onButtonStart",value:function(){this.start(),this.setState({startDisabled:!0,stopDisabled:!1})}},{key:"onButtonStop",value:function(){clearInterval(this.state.timer),this.setState({startDisabled:!1,stopDisabled:!0}),this.setState({timer:null,hours:"00",counter:"00",seconds:"00"})}},{key:"onButtonWait",value:function(){clearInterval(this.state.timer),this.setState({startDisabled:!1,stopDisabled:!0})}},{key:"onButtonReset",value:function(){this.setState({timer:null,hours:"00",counter:"00",seconds:"00",startDisabled:!1,stopDisabled:!0})}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{className:d.a.container,children:[Object(p.jsxs)("div",{className:d.a.hourse,children:[Object(p.jsxs)("p",{className:d.a.timer,children:[this.state.hours?this.state.hours:"counter state is empty",":"]}),Object(p.jsxs)("p",{className:d.a.timer,children:[this.state.counter?this.state.counter:"counter state is empty",":"]}),Object(p.jsx)("p",{className:d.a.timer,children:this.state.seconds?this.state.seconds:"seconds state is empty"})]}),Object(p.jsxs)("div",{className:d.a.containeBbuttons,children:[Object(p.jsx)("button",{className:d.a.button,onClick:function(){return t.onButtonStart()},title:"Start",children:"Start"}),Object(p.jsx)("button",{className:d.a.button,onClick:function(){return t.onButtonStop()},title:"Stop",children:"Stop"}),Object(p.jsx)("button",{className:d.a.button,onDoubleClick:function(){return t.onButtonWait()},title:"Wait",children:"Wait"}),Object(p.jsx)("button",{className:d.a.button,onClick:function(){return t.onButtonReset()},title:"Reset",children:"Reset"})]})]})}}]),n}(s.Component);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b052205c.chunk.js.map