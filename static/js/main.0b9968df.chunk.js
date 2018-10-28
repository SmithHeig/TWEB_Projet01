(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){e.exports=a(291)},185:function(e,t,a){},190:function(e,t,a){},192:function(e,t,a){},270:function(e,t,a){},272:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),s=a.n(i);a(185),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(294),c=a(293),l=a(79),h=a.n(l),u=a(18),d=a(19),p=a(21),f=a(20),m=a(22),b=(a(190),a(3)),g=a(37),v=a.n(g),y=(a(192),a(295)),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={username:""},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.changeRoot=a.changeRoot.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"handleChange",value:function(e){this.setState({username:e.target.value})}},{key:"changeRoot",value:function(){this.props.reload&&this.props.reload(this.state.username);var e="/friends/"+this.state.username;this.props.history.push(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{id:"filedUsername",className:"filedUsername",type:"text",placeholder:"Username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(v.a,{type:"submit",id:"searchButton",className:"searchButton",variant:"contained",color:"primary",onClick:this.changeRoot},"Search")))}}]),t}(r.a.Component),j=Object(y.a)(k),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).ref=r.a.createRef(),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-body"},r.a.createElement("h1",null,"Github Friends"),r.a.createElement("h2",null,"Find out who works the most on your repositories"),r.a.createElement(j,null)))}}]),t}(n.Component),E=a(5),w=a(82),x=a.n(w),S=a(1),C=a.n(S),D=(a(270),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).node=null,a.link=null,a.label=null,a.state={graph:void 0,minSize:a.props.height>a.props.width?a.props.width:a.props.height,user:""},a.dragstarted=a.dragstarted.bind(Object(b.a)(Object(b.a)(a))),a.dragended=a.dragended.bind(Object(b.a)(Object(b.a)(a))),a.dragged=a.dragged.bind(Object(b.a)(Object(b.a)(a))),a.ticked=a.ticked.bind(Object(b.a)(Object(b.a)(a))),a.createGraph=a.createGraph.bind(Object(b.a)(Object(b.a)(a))),a.changeRoot=a.changeRoot.bind(Object(b.a)(Object(b.a)(a))),a.simulation=E.f().force("link",E.d().id(function(e){return e.id})).force("charge",E.e().strength(-5e3).theta(.9).distanceMax(a.state.minSize/2)).force("center",E.c(a.props.width/2,a.props.height/2)),a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"createGraph",value:function(){if(this.state.graph){var e=this.state.graph.nodes,t=E.g("#svg").append("g");this.link=t.style("stroke","#aaa").selectAll("line").data(this.state.graph.links).enter().append("line"),this.node=t.append("g").attr("class","nodes").selectAll("circle").data(this.state.graph.nodes).enter().append("circle").attr("r",function(t,a){return 10*e[a].value}).on("click",function(e,t){var a=this;this.state.graph.nodes[t].username!==this.state.user&&this.setState({user:this.state.graph.nodes[t].username},function(){a.changeRoot()})}.bind(this)).on("mouseover",function(e){E.g("#tooltip").style("left",e.x+"px").style("top",e.y+100+"px").select("#value").text(e.value),E.g("#tooltip").classed("hidden",!1)}).on("mouseout",function(){E.g("#tooltip").classed("hidden",!0)}).call(E.a().on("start",this.dragstarted).on("drag",this.dragged).on("end",this.dragended)),this.label=t.append("g").attr("class","labels").selectAll("text").data(this.state.graph.nodes).enter().append("text").attr("class","label").style("stroke","#fff").style("fill","#fff").style("color","#fff").style("font-size","28px").on("click",function(e,t){var a=this;this.state.graph.nodes[t].username!==this.state.user&&this.setState({user:this.state.graph.nodes[t].username},function(){a.changeRoot()})}.bind(this)).on("mouseover",function(e){E.g("#tooltip").style("left",e.x+"px").style("top",e.y+100+"px").select("#value").text(e.value),E.g("#tooltip").classed("hidden",!1)}).on("mouseout",function(){E.g("#tooltip").classed("hidden",!0)}).text(function(e){return e.username}),E.h().on("zoom",function(){t.attr("transform",E.b.transform)})(t),this.simulation.nodes(this.state.graph.nodes).on("tick",this.ticked),this.simulation.force("link").links(this.state.graph.links)}}},{key:"componentDidMount",value:function(){var e=this;this.setState({graph:this.state.graph},function(){e.createGraph()})}},{key:"componentDidUpdate",value:function(){var e=this;this.props.graph!==this.state.graph&&this.setState({graph:this.props.graph},function(){e.createGraph()})}},{key:"changeRoot",value:function(){this.props.reload(this.state.user);var e="/friends/"+this.state.user;this.props.history.push(e)}},{key:"dragstarted",value:function(e){E.b.active||this.simulation.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}},{key:"dragged",value:function(e){e.fx=E.b.x,e.fy=E.b.y}},{key:"dragended",value:function(e){e.fx=E.b.x,e.fy=E.b.y,E.b.active||this.simulation.alphaTarget(0)}},{key:"ticked",value:function(){this.link.attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}),this.node.style("fill","#bababa").style("stroke","#424242").style("stroke-width","1px").attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}),this.label.attr("x",function(e){return e.x}).attr("y",function(e){return e.y})}},{key:"render",value:function(){return this.props.graph?r.a.createElement("div",null,r.a.createElement("svg",{className:"container",id:"svg",width:this.props.width,height:this.props.height}),r.a.createElement("div",{id:"tooltip",className:"hidden"},r.a.createElement("b",null,r.a.createElement("p",{id:"value"},"1")))):r.a.createElement(x.a,{type:"spin",width:this.state.minSize/2,height:this.state.minSize/2,color:"#fff"})}}]),t}(n.Component));D.contextTypes={router:C.a.object};var F=Object(y.a)(D),G=a(83),R=a.n(G),B=a(84),N=a.n(B),z=a(28),A=a(292),T=(a(272),function(e){function t(e,a){var n,r=e.match;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,{match:r},a))).state={username:r.params.username,collaborators:{},graph:void 0,searchFieldVisibile:!1},n.makeGraphFromData=n.makeGraphFromData.bind(Object(b.a)(Object(b.a)(n))),n.fetchData=n.fetchData.bind(Object(b.a)(Object(b.a)(n))),n.reload=n.reload.bind(Object(b.a)(Object(b.a)(n))),n.showSearchBar=n.showSearchBar.bind(Object(b.a)(Object(b.a)(n))),n.textInfo='\n    That is the "friends" of '+n.state.username+" !\n    The size of the bubbles represent the number of repositories \n    that this person had contribut to "+n.state.username+" repositories!\n    Click on a user to see his friends",n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(){}},{key:"reload",value:function(e){var t=this;this.setState({username:e,graph:void 0},function(){return t.fetchData()})}},{key:"fetchData",value:function(){var e=this,t="https://githubfriends.herokuapp.com/friends/"+this.state.username;fetch(t).then(function(e){return e.json()}).then(function(t){var a=e.makeGraphFromData(t,e.state.username);e.setState({graph:a})}).catch(function(e){return console.log("Erreur: "+e)})}},{key:"makeGraphFromData",value:function(e,t){var a,n={nodes:[],links:[]},r=[],i=[];Object.keys(e).map(function(n,i){var s={};return s.id=i,s.username=n,s.value=e[n],r[i]=s,s.username.toLowerCase()===t.toLowerCase()&&(a=s.id),r}),n.nodes=r;var s=0;return r.forEach(function(e){if(e.id!==a){var t={};return t.source=a,t.target=e.id,t.value=100,i[s++]=t,i}}),n.links=i,n}},{key:"showSearchBar",value:function(){this.setState({searchFieldVisibile:!this.state.searchFieldVisibile})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(A.a,{to:"/",id:"link"},"Friends"),r.a.createElement(z.b,{title:this.textInfo,placement:"bottom"},r.a.createElement(z.a,{style:{color:"white"}},r.a.createElement(R.a,{id:"info"}))),r.a.createElement(z.b,{title:"New research"},r.a.createElement(z.a,{style:{color:"white"},onClick:this.showSearchBar},r.a.createElement(N.a,null)))),this.state.searchFieldVisibile?r.a.createElement(j,{reload:this.reload}):null),r.a.createElement(F,{width:window.innerWidth,height:window.innerHeight-200,graph:this.state.graph,reload:this.reload}))}}]),t}(n.Component)),U=h()(),V=r.a.createElement(o.a,{basehistory:U,basename:"/TWEB_Projet01"},r.a.createElement("div",{className:"App-body"},r.a.createElement(c.a,{exact:!0,path:"/",component:O}),r.a.createElement(c.a,{exact:!0,path:"/friends/:username",component:T})));s.a.render(V,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[180,2,1]]]);
//# sourceMappingURL=main.0b9968df.chunk.js.map