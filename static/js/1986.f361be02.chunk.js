"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[1986],{81986:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(29439),s=n(53996),a=n(23132),i=n(47313),c=n(22408),o=n(58467),l=n(69649),d=n(17592),u=n(38768),x=n(46417);var p,f=function(e){return(0,x.jsx)("div",{className:"flex flex-col flex-auto",children:(0,x.jsx)(o.j3,{})})},m=n(61113),h=n(80380),Z=n(24193),g=n(5227),j=n(56993),v=n(4942),y=n(74165),k=n(15861),b=n(80827),w=n(76747),N=n(56573),I=n(43850),S=n(28520),P=(0,b.hg)("tasksApp/tasks/getTasks",function(){var e=(0,k.Z)((0,y.Z)().mark((function e(t,n){var r,s;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.getState,e.next=3,N.Z.get("/api/tasks");case 3:return r=e.sent,e.next=6,r.data;case 6:return s=e.sent,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A=(0,b.hg)("tasksApp/tasks/reorder",function(){var e=(0,k.Z)((0,y.Z)().mark((function e(t,n){var r,s,a,i,c;return(0,y.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.startIndex,s=t.endIndex,a=n.dispatch,n.getState,e.next=4,N.Z.post("/api/tasks/reorder",{startIndex:r,endIndex:s});case 4:return i=e.sent,e.next=7,i.data;case 7:return c=e.sent,a((0,I.PV)({message:"List Order Saved",autoHideDuration:2e3,anchorOrigin:{vertical:"top",horizontal:"right"}})),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),O=(0,b.HF)({}),z=O.getSelectors((function(e){return e.tasksApp.tasks})),D=z.selectAll,C=(z.selectById,(0,w.P1)([D],(function(e){return e.filter((function(e){return"task"===e.type&&!e.completed})).length}))),F=(0,b.oM)({name:"tasksApp/tasks",initialState:O.getInitialState(),extraReducers:(p={},(0,v.Z)(p,A.fulfilled,O.setAll),(0,v.Z)(p,S.xJ.fulfilled,O.upsertOne),(0,v.Z)(p,S.gI.fulfilled,O.addOne),(0,v.Z)(p,S.F6.fulfilled,(function(e,t){return O.removeOne(e,t.payload)})),(0,v.Z)(p,P.fulfilled,O.setAll),p)}),T=(F.actions.setTasksSearchText,F.reducer);var _=function(e){var t=(0,c.v9)(C);return(0,x.jsxs)("div",{className:"flex flex-col sm:flex-row item-center sm:items-start space-y-16 sm:space-y-0 p-24 sm:p-32 w-full border-b-1 flex items-center justify-between",children:[(0,x.jsxs)("div",{className:"flex flex-col sm:flex-row items-center sm:space-x-12",children:[(0,x.jsx)(m.Z,{component:h.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-24 md:text-32 font-extrabold tracking-tight leading-none",children:"Tasks"}),(0,x.jsx)(m.Z,{component:h.E.span,initial:{y:-20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},delay:500,className:"text-14 font-medium ml-2",color:"text.secondary",children:"".concat(t," remaining tasks")})]}),(0,x.jsxs)("div",{className:"flex items-center -mx-8",children:[(0,x.jsxs)(Z.Z,{className:"mx-8 whitespace-nowrap",component:g.Z,to:"new/section",children:[(0,x.jsx)(j.Z,{size:20,children:"heroicons-outline:plus"}),(0,x.jsx)("span",{className:"mx-8",children:"Add Section"})]}),(0,x.jsxs)(Z.Z,{className:"mx-8 whitespace-nowrap",variant:"contained",color:"secondary",component:g.Z,to:"new/task",children:[(0,x.jsx)(j.Z,{size:20,children:"heroicons-outline:plus"}),(0,x.jsx)("span",{className:"mx-8",children:"Add Task"})]})]})]})},L=n(48310),R=n(46468),E=n(1413),H=n(60194),J=n(83213),B=n(19536),K=n(74748),U=n(47131),W=n(89600),M=n(83061);var V=function(e){var t=e.data,n=e.index,r=(0,c.I0)();return(0,x.jsx)(R._l,{draggableId:t.id,index:n,type:"list",children:function(e,n){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(H.ZP,(0,E.Z)((0,E.Z)({className:(0,M.default)(n.isDragging?"shadow-lg":"shadow","px-40 py-12 group"),sx:{bgcolor:"background.paper"},button:!0,component:g.Z,to:"/apps/tasks/".concat(t.id),ref:e.innerRef},e.draggableProps),{},{children:[(0,x.jsx)("div",(0,E.Z)((0,E.Z)({className:"md:hidden absolute flex items-center justify-center inset-y-0 left-0 w-32 cursor-move md:group-hover:flex"},e.dragHandleProps),{},{children:(0,x.jsx)(j.Z,{sx:{color:"text.disabled"},size:20,children:"heroicons-solid:menu"})})),(0,x.jsx)(K.Z,{className:"min-w-40 -ml-10 mr-8",children:(0,x.jsx)(U.Z,{sx:{color:t.completed?"secondary.main":"text.disabled"},onClick:function(e){e.preventDefault(),e.stopPropagation(),r((0,S.xJ)((0,E.Z)((0,E.Z)({},t),{},{completed:!t.completed})))},children:(0,x.jsx)(j.Z,{children:"heroicons-outline:check-circle"})})}),(0,x.jsx)(J.Z,{classes:{root:"m-0",primary:"truncate"},primary:t.title}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsxs)("div",{children:[0===t.priority&&(0,x.jsx)(j.Z,{className:"text-green icon-size-16 mx-12",children:"heroicons-outline:arrow-narrow-down"}),2===t.priority&&(0,x.jsx)(j.Z,{className:"text-red icon-size-16 mx-12",children:"heroicons-outline:arrow-narrow-up"})]}),t.dueDate&&(0,x.jsx)(m.Z,{className:"text-12 whitespace-nowrap",color:"text.secondary",children:(0,W.Z)(new Date(t.dueDate),"LLL dd")})]})]})),(0,x.jsx)(B.Z,{})]})}})};var Y=function(e){var t=e.data,n=e.index;return(0,x.jsx)(R._l,{draggableId:t.id,index:n,type:"list",children:function(e,n){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(H.ZP,(0,E.Z)((0,E.Z)({className:"px-40 py-12 group",sx:{bgcolor:"background.default"},button:!0,component:g.Z,to:"/apps/tasks/".concat(t.id),ref:e.innerRef},e.draggableProps),{},{children:[(0,x.jsx)("div",(0,E.Z)((0,E.Z)({className:"md:hidden absolute flex items-center justify-center inset-y-0 left-0 w-32 cursor-move md:group-hover:flex"},e.dragHandleProps),{},{children:(0,x.jsx)(j.Z,{sx:{color:"text.disabled"},size:20,children:"heroicons-solid:menu"})})),(0,x.jsx)(J.Z,{classes:{root:"m-0",primary:"font-semibold text-16 truncate"},primary:t.title})]})),(0,x.jsx)(B.Z,{})]})}})};var q=function(e){var t=(0,c.I0)(),n=(0,c.v9)(D);return n?0===n.length?(0,x.jsx)("div",{className:"flex flex-1 items-center justify-center h-full",children:(0,x.jsx)(m.Z,{color:"text.secondary",variant:"h5",children:"There are no tasks!"})}):(0,x.jsx)(L.Z,{className:"w-full m-0 p-0",children:(0,x.jsx)(R.Z5,{onDragEnd:function(e){e.destination&&e.destination.index!==e.source.index&&t(A({arr:n,startIndex:e.source.index,endIndex:e.destination.index}))},children:(0,x.jsx)(R.bK,{droppableId:"list",type:"list",direction:"vertical",children:function(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{ref:e.innerRef,children:n.map((function(e,t){return"task"===e.type?(0,x.jsx)(V,{data:e,index:t},e.id):"section"===e.type?(0,x.jsx)(Y,{index:t,data:e},e.id):null}))}),e.placeholder]})}})})}):null},G=n(9038),Q=n(53706),X=(0,G.UY)({tags:Q.ZP,tasks:T,task:S.ZP}),$=(0,d.ZP)(s.Z)((function(e){return{"& .FusePageSimple-header":{backgroundColor:e.theme.palette.background.paper}}}));var ee=(0,a.Z)("tasksApp",X)((function(e){var t=(0,c.I0)(),n=(0,i.useRef)(null),s=(0,o.UO)(),a=(0,i.useState)(!1),d=(0,r.Z)(a,2),p=d[0],m=d[1],h=(0,u.Z)((function(e){return e.breakpoints.down("lg")}));return(0,l.KW)((function(){t(P()),t((0,Q.NJ)())}),[t]),(0,i.useEffect)((function(){m(Boolean(s.id))}),[s]),(0,x.jsx)($,{header:(0,x.jsx)(_,{pageLayout:n}),content:(0,x.jsx)(q,{}),ref:n,rightSidebarContent:(0,x.jsx)(f,{}),rightSidebarOpen:p,rightSidebarOnClose:function(){return m(!1)},rightSidebarWidth:640,scroll:h?"normal":"content"})}))}}]);