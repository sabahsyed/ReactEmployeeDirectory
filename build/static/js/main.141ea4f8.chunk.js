(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(23),a(2)),s=a(13),u=a(14),m=a(17),i=a(16);a(24);var h=function(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"navbar navbar-dark bg-dark"},r.a.createElement("h1",{className:"h1"},"Employee Directory")))};a(25);var d=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",Object(o.a)({handleInputChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Name",id:"search"},"className","inputClass")),r.a.createElement("button",{onClick:e.handleFormSubmit,className:" btn-primary mt-3"},"Search")))};a(26);var p=function(e){return r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name",r.a.createElement("button",{className:"sortBtnStyle",onClick:function(){return e.sort()}}," Sort")),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,e.results.map((function(e){return console.log(e),r.a.createElement("tr",{key:e.phone},r.a.createElement("td",null,r.a.createElement("img",{alt:"employee",src:e.picture.thumbnail})),r.a.createElement("td",null,e.name.first+" "+e.name.last),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob.date))}))))},E=a(15),f=a.n(E),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={results:[],search:""},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(o.a)({},a,n));var r=e.state.results.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())}));e.setState({results:r})},e.handleSort=function(t){var a=e.state.results.sort((function(e,t){return e.name.last>t.name.lst?1:-1}));e.setState({results:a})},e.handleFormSubmit=function(t){return t.preventDefault(),e.searchFunc(e.state.results)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(t){return e.setState({results:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(d,{search:this.state.results,handleInputChange:this.handleInputChange,handleSubmitBtn:this.handleSubmitBtn}),r.a.createElement(p,{results:this.state.results,sort:this.handleSort}))}}]),a}(n.Component);a(44);var b=function(){return r.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.141ea4f8.chunk.js.map