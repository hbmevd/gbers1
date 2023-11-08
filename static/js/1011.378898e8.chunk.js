"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1011],{31011:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var a=n(29439),r=n(53996),s=n(23132),c=n(47313),o=n(22408),i=n(58467),l=n(69649),u=n(17592),d=n(38768),x=n(5227),m=n(47131),f=n(56993),p=n(46417);var h,Z=function(e){return(0,o.I0)(),(0,p.jsxs)("div",{className:"flex flex-col flex-auto",children:[(0,p.jsx)(m.Z,{className:"absolute top-0 right-0 my-16 mx-32 z-10",sx:{color:"white"},component:x.Z,to:"/apps/contacts",size:"large",children:(0,p.jsx)(f.Z,{children:"heroicons-outline:x"})}),(0,p.jsx)(i.j3,{})]})},v=n(56605),y=n(61113),g=n(80380),j=n(24193),b=n(15743),N=n(4942),S=n(74165),w=n(15861),I=n(80827),A=n(76747),k=n(56573),C=n(34814),P=n(17432),T=(0,I.hg)("contactsApp/contacts/getContacts",function(){var e=(0,w.Z)((0,S.Z)().mark((function e(t,n){var a,r;return(0,S.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.getState,e.next=3,k.Z.get("/api/contacts");case 3:return a=e.sent,e.next=6,a.data;case 6:return r=e.sent,e.abrupt("return",{data:r});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),F=(0,I.HF)({}),O=function(e){return e.contactsApp.contacts.searchText},z=F.getSelectors((function(e){return e.contactsApp.contacts})),E=z.selectAll,L=(z.selectById,(0,A.P1)([E,O],(function(e,t){return 0===t.length?e:C.Z.filterArrayByString(e,t)}))),M=(0,A.P1)([L],(function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name,"es",{sensitivity:"base"})})).reduce((function(e,t){var n=t.name[0];return e[n]?e[n].children.push(t):e[n]={group:n,children:[t]},e}),{})})),R=(0,I.oM)({name:"contactsApp/contacts",initialState:F.getInitialState({searchText:""}),reducers:{setContactsSearchText:{reducer:function(e,t){e.searchText=t.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(h={},(0,N.Z)(h,P.Tk.fulfilled,F.upsertOne),(0,N.Z)(h,P.uK.fulfilled,F.addOne),(0,N.Z)(h,P.zY.fulfilled,(function(e,t){return F.removeOne(e,t.payload)})),(0,N.Z)(h,T.fulfilled,(function(e,t){var n=t.payload,a=n.data;n.routeParams;F.setAll(e,a),e.searchText=""})),h)}),W=R.actions.setContactsSearchText,_=R.reducer;var B=function(e){var t=(0,o.I0)(),n=(0,o.v9)(O),a=(0,o.v9)(L);return(0,p.jsxs)("div",{className:"p-24 sm:p-32 w-full border-b-1",children:[(0,p.jsxs)("div",{className:"flex flex-col items-center sm:items-start",children:[(0,p.jsx)(y.Z,{component:g.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Contacts"}),(0,p.jsx)(y.Z,{component:g.E.span,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},delay:500,className:"text-14 font-medium ml-2",color:"text.secondary",children:"".concat(a.length," contacts")})]}),(0,p.jsxs)("div",{className:"flex flex-col sm:flex-row space-y-16 sm:space-y-0 flex-1 items-center mt-16 -mx-8",children:[(0,p.jsxs)(b.Z,{component:g.E.div,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-1 w-full sm:w-auto items-center px-16 mx-8 border-1 rounded-full",children:[(0,p.jsx)(f.Z,{color:"action",size:20,children:"heroicons-outline:search"}),(0,p.jsx)(v.Z,{placeholder:"Search contacts",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:n,inputProps:{"aria-label":"Search"},onChange:function(e){return t(W(e))}})]}),(0,p.jsxs)(j.Z,{className:"mx-8",variant:"contained",color:"secondary",component:x.Z,to:"new/edit",children:[(0,p.jsx)(f.Z,{size:20,children:"heroicons-outline:plus"}),(0,p.jsx)("span",{className:"mx-8",children:"Add"})]})]})]})},U=n(48310),K=n(19536),Y=n(63585),H=n(60194),J=n(32600),q=n(83213);var D=function(e){var t=e.contact;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(H.ZP,{className:"px-32 py-16",sx:{bgcolor:"background.paper"},button:!0,component:x.Z,to:"/apps/contacts/".concat(t.id),children:[(0,p.jsx)(J.Z,{children:(0,p.jsx)(Y.Z,{alt:t.name,src:t.avatar})}),(0,p.jsx)(q.Z,{classes:{root:"m-0",primary:"font-medium leading-5 truncate"},primary:t.name,secondary:(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(y.Z,{className:"inline",component:"span",variant:"body2",color:"text.secondary",children:t.title})})})]}),(0,p.jsx)(K.Z,{})]})};var G=function(e){var t=(0,o.v9)(L),n=(0,o.v9)(M);return t?0===t.length?(0,p.jsx)("div",{className:"flex flex-1 items-center justify-center h-full",children:(0,p.jsx)(y.Z,{color:"text.secondary",variant:"h5",children:"There are no contacts!"})}):(0,p.jsx)(g.E.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},className:"flex flex-col flex-auto w-full max-h-full",children:Object.entries(n).map((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];return(0,p.jsxs)("div",{className:"relative",children:[(0,p.jsx)(y.Z,{color:"text.secondary",className:"px-32 py-4 text-14 font-medium",children:n}),(0,p.jsx)(K.Z,{}),(0,p.jsx)(U.Z,{className:"w-full m-0 p-0",children:r.children.map((function(e){return(0,p.jsx)(D,{contact:e},e.id)}))})]},n)}))}):null},Q=n(9038),V=n(27600),X=n(55303),$=(0,Q.UY)({tags:V.ZP,countries:X.ZP,contacts:_,contact:P.ZP}),ee=(0,u.ZP)(r.Z)((function(e){return{"& .FusePageSimple-header":{backgroundColor:e.theme.palette.background.paper}}}));var te=(0,s.Z)("contactsApp",$)((function(e){var t=(0,o.I0)(),n=(0,c.useRef)(null),r=(0,i.UO)(),s=(0,c.useState)(!1),u=(0,a.Z)(s,2),x=u[0],m=u[1],f=(0,d.Z)((function(e){return e.breakpoints.down("lg")}));return(0,l.KW)((function(){t(T()),t((0,X.ox)()),t((0,V.NJ)())}),[t]),(0,c.useEffect)((function(){m(Boolean(r.id))}),[r]),(0,p.jsx)(ee,{header:(0,p.jsx)(B,{pageLayout:n}),content:(0,p.jsx)(G,{}),ref:n,rightSidebarContent:(0,p.jsx)(Z,{}),rightSidebarOpen:x,rightSidebarOnClose:function(){return m(!1)},rightSidebarWidth:640,scroll:f?"normal":"content"})}))},32600:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(63366),r=n(87462),s=n(47313),c=n(83061),o=n(21921),i=n(51195),l=n(17592),u=n(77342),d=n(77430),x=n(32298);function m(e){return(0,x.Z)("MuiListItemAvatar",e)}(0,d.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var f=n(46417),p=["className"],h=(0,l.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,r.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),Z=s.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiListItemAvatar"}),l=n.className,d=(0,a.Z)(n,p),x=s.useContext(i.Z),Z=(0,r.Z)({},n,{alignItems:x.alignItems}),v=function(e){var t=e.alignItems,n=e.classes,a={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,o.Z)(a,m,n)}(Z);return(0,f.jsx)(h,(0,r.Z)({className:(0,c.default)(v.root,l),ownerState:Z,ref:t},d))}))}}]);