"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9641],{79641:function(e,n,l){l.r(n),l.d(n,{default:function(){return be}});var t=l(29439),i=l(4942),a=l(23132),r=l(47313),s=l(22408),o=l(58467),c=l(17592),d=l(53996),u=l(38768),m=l(1413),x=l(75590),f=l(80380),h=l(61113),p=l(53307),j=l(62563),Z=l(75908),b=l(24193),v=l(94469),g=l(4117),N=l(96467),y=l(47131),k=l(24631),C=l(9289),S=l(75627),w=l(21933),z=l(58970),E=l(52500),P=l(79489),W=l(82190),A=l.n(W),L=(l(85463),l(83061)),O=l(46417),M=(0,c.ZP)("div")({"& .rdw-dropdown-selectedtext":{color:"inherit"},"& .rdw-editor-toolbar":{borderWidth:"0 0 1px 0!important",margin:"0!important"},"& .rdw-editor-main":{padding:"8px 12px",height:"".concat(256,"px!important")}}),B=(0,r.forwardRef)((function(e,n){var l=(0,r.useState)(E.EditorState.createEmpty()),i=(0,t.Z)(l,2),a=i[0],s=i[1];return(0,O.jsx)(M,{className:(0,L.default)("rounded-4 border-1 overflow-hidden w-full",e.className),ref:n,children:(0,O.jsx)(P.Editor,{editorState:a,onEditorStateChange:function(n){return s(n),e.onChange(A()((0,E.convertToRaw)(n.getCurrentContent())))}})})})),I=l(56993),R=(0,c.ZP)("div")({fontSize:13,backgroundColor:"rgba(0, 0, 0, 0.08)",border:"1px solid rgba(0, 0, 0, 0.16)",paddingLeft:16,marginBottom:8,borderRadius:2,display:"flex",justifyContent:"space-between",alignItems:"center","& .filename":{fontWeight:600},"& .size":{marginLeft:8,fontWeight:300}});var T=function(e){return(0,O.jsxs)(R,{className:e.className,children:[(0,O.jsxs)("div",{className:"flex",children:[(0,O.jsx)(h.Z,{variant:"caption",className:"filename",children:e.fileName}),(0,O.jsxs)(h.Z,{variant:"caption",className:"size",children:["(",e.size,")"]})]}),(0,O.jsx)(y.Z,{size:"large",children:(0,O.jsx)(I.Z,{size:16,children:"heroicons-outline:x"})})]})},_=w.Ry().shape({to:w.Z_().required("You must enter an e-mail").email("You must enter a valid e-mail.")});var F=function(e){var n=e.className,l=(0,r.useState)(!1),i=(0,t.Z)(l,2),a=i[0],s=i[1],o=(0,S.cI)({mode:"onChange",defaultValues:{from:"johndoe@creapond.com",to:"",cc:"",bcc:"",subject:"",message:""},resolver:(0,j.X)(_)}),c=o.handleSubmit,d=o.formState,u=o.control,f=d.isValid,p=d.dirtyFields,w=d.errors,E=(0,x.$G)("mailboxApp").t;return(0,O.jsxs)("div",{className:(0,L.default)("",n),children:[(0,O.jsx)(b.Z,{variant:"contained",color:"secondary",className:"w-full",onClick:function(){s(!0)},startIcon:(0,O.jsx)(I.Z,{children:"heroicons-outline:plus"}),children:E("COMPOSE")}),(0,O.jsxs)(v.Z,{open:a,onClose:function(){s(!1)},"aria-labelledby":"form-dialog-title",scroll:"body",children:[(0,O.jsx)(Z.Z,{position:"static",color:"secondary",elevation:0,children:(0,O.jsx)(C.Z,{className:"flex w-full",children:(0,O.jsx)(h.Z,{variant:"subtitle1",color:"inherit",children:"New Message"})})}),(0,O.jsxs)("form",{noValidate:!0,onSubmit:c((function(e){console.info(e),s(!1)})),className:"flex flex-col",children:[(0,O.jsxs)(N.Z,{classes:{root:"p-16 pb-0 sm:p-32 sm:pb-0"},children:[(0,O.jsx)(S.Qr,{name:"from",control:u,render:function(e){var n=e.field;return(0,O.jsx)(k.Z,(0,m.Z)((0,m.Z)({},n),{},{className:"mt-8 mb-16",label:"From",id:"from",variant:"outlined",fullWidth:!0,inputProps:{readOnly:!0}}))}}),(0,O.jsx)(S.Qr,{name:"to",control:u,render:function(e){var n,l=e.field;return(0,O.jsx)(k.Z,(0,m.Z)((0,m.Z)({},l),{},{className:"mt-8 mb-16",label:"To",autoFocus:!0,id:"to",error:!!w.to,helperText:null===w||void 0===w||null===(n=w.to)||void 0===n?void 0:n.message,variant:"outlined",fullWidth:!0,required:!0}))}}),(0,O.jsx)(S.Qr,{name:"cc",control:u,render:function(e){var n=e.field;return(0,O.jsx)(k.Z,(0,m.Z)((0,m.Z)({},n),{},{className:"mt-8 mb-16",label:"Cc",id:"cc",variant:"outlined",fullWidth:!0}))}}),(0,O.jsx)(S.Qr,{name:"bcc",control:u,render:function(e){var n=e.field;return(0,O.jsx)(k.Z,(0,m.Z)((0,m.Z)({},n),{},{className:"mt-8 mb-16",label:"Bcc",id:"bcc",name:"bcc",variant:"outlined",fullWidth:!0}))}}),(0,O.jsx)(S.Qr,{name:"subject",control:u,render:function(e){var n=e.field;return(0,O.jsx)(k.Z,(0,m.Z)((0,m.Z)({},n),{},{className:"mt-8 mb-16",label:"Subject",id:"subject",name:"subject",variant:"outlined",fullWidth:!0}))}}),(0,O.jsx)(S.Qr,{className:"mt-8 mb-16",render:function(e){var n=e.field;return(0,O.jsx)(B,(0,m.Z)({},n))},name:"message",control:u}),(0,O.jsxs)("div",{className:"pt-8",children:[(0,O.jsx)(T,{fileName:"attachment-2.doc",size:"12 kb"}),(0,O.jsx)(T,{fileName:"attachment-1.jpg",size:"350 kb"})]})]}),(0,O.jsxs)(g.Z,{className:"flex flex-col sm:flex-row sm:items-center justify-between py-16 sm:py-24 px-24",children:[(0,O.jsxs)("div",{className:"-mx-8",children:[(0,O.jsx)(y.Z,{children:(0,O.jsx)(I.Z,{size:20,children:"heroicons-solid:paper-clip"})}),(0,O.jsx)(y.Z,{children:(0,O.jsx)(I.Z,{size:20,children:"heroicons-solid:link"})}),(0,O.jsx)(y.Z,{children:(0,O.jsx)(I.Z,{size:20,children:"heroicons-solid:emoji-happy"})}),(0,O.jsx)(y.Z,{children:(0,O.jsx)(I.Z,{size:20,children:"heroicons-solid:photograph"})})]}),(0,O.jsxs)("div",{className:"flex items-center space-x-8 mt-16 sm:mt-0",children:[(0,O.jsx)(b.Z,{className:"",variant:"outlined",color:"secondary",onClick:function(){s(!1)},children:"Discard"}),(0,O.jsx)(b.Z,{className:"",variant:"outlined",color:"secondary",children:"Save as draft"}),(0,O.jsx)(b.Z,{className:"",variant:"contained",color:"secondary",type:"submit",disabled:z.Z.isEmpty(p)||!f,children:"Send"})]})]})]})]})]})},U=l(81627),D=l(84884),Q=l(92577);var G=function(e){var n=(0,s.v9)(D.B5),l=(0,s.v9)(Q.ir),t=(0,s.v9)(U.mj),i=(0,x.$G)("mailboxApp").t;return(0,O.jsxs)(f.E.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1,transition:{delay:.4}},className:"flex-auto border-l-1",children:[(0,O.jsxs)("div",{className:"mb-24 mt-40 mx-24",children:[(0,O.jsx)(h.Z,{component:f.E.span,initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-4xl font-extrabold tracking-tight leading-none",children:"Mailbox"}),(0,O.jsx)(F,{className:"mt-32"})]}),(0,O.jsxs)("div",{className:"mb-24",children:[(0,O.jsx)(h.Z,{className:"px-28 py-10 uppercase text-12 font-600",color:"secondary.main",children:i("FOLDERS")}),(0,O.jsx)(p.Z,{navigation:n.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{type:"item",url:"/apps/mailbox/".concat(e.slug)})}))})]}),(0,O.jsxs)("div",{className:"mb-24",children:[(0,O.jsx)(h.Z,{className:"px-28 py-10 uppercase text-12 font-600",color:"secondary.main",children:i("FILTERS")}),(0,O.jsx)(p.Z,{navigation:t.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{type:"item",url:"/apps/mailbox/filter/".concat(e.slug)})}))})]}),(0,O.jsxs)("div",{className:"mb-24",children:[(0,O.jsx)(h.Z,{className:"px-28 py-10 uppercase text-12 font-600",color:"secondary.main",children:i("LABELS")}),(0,O.jsx)(p.Z,{navigation:l.map((function(e){return(0,m.Z)((0,m.Z)({},e),{},{type:"item",url:"/apps/mailbox/label/".concat(e.slug),icon:"heroicons-outline:tag",sx:{"& > .fuse-list-item-icon":{color:"".concat(e.color,"!important"),opacity:.6}}})}))})]})]})},$=l(9038),Y=l(31475),H=l(37678),V=(0,$.UY)({mails:H.ZP,mail:Y.ZP,folders:D.ZP,labels:Q.ZP,filters:U.ZP}),q=l(34814),K=l(48310),X=l(8139),J=l(69649),ee=l(63585),ne=l(44758),le=l(60194),te=l(5227),ie=l(89600),ae=(0,c.ZP)(le.ZP)((function(e){var n=e.theme,l=e.unread;e.selected;return(0,m.Z)((0,m.Z)({background:n.palette.background.default,borderBottom:"1px solid ".concat(n.palette.divider)},l&&{background:n.palette.background.paper}),{},{"&.selected":{"&::after":{content:'""',position:"absolute",top:0,left:0,display:"block",height:"100%",width:3,backgroundColor:n.palette.primary.main}}})})),re=(0,X.Z)((function(e){var n,l=(0,s.I0)(),t=(0,s.v9)(H._8),i=e.mail,a=t.length>0&&void 0!==t.find((function(n){return n===e.mail.id}));return(0,O.jsxs)(ae,{dense:!0,button:!0,component:te.Z,to:e.mail.id,selected:a,unread:e.mail.unread?1:0,className:"items-start py-20 px-0 md:px-8 relative w-full",activeClassName:"selected",children:[(0,O.jsx)(ne.Z,{tabIndex:-1,disableRipple:!0,checked:a,onChange:function(){return l((0,H.D3)(e.mail.id))},onClick:function(e){return e.stopPropagation()},size:"small"}),(0,O.jsxs)("div",{className:"flex flex-col flex-auto min-w-0",children:[(0,O.jsxs)("div",{className:"flex w-full space-x-6 items-center",children:[(0,O.jsx)(ee.Z,{sx:{backgroundColor:function(e){return e.palette.primary[500]}},alt:e.mail.from.name,src:null===(n=e.mail.from)||void 0===n?void 0:n.avatar,children:e.mail.from.contact}),(0,O.jsxs)("div",{className:"flex flex-col w-full min-w-0",children:[(0,O.jsxs)("div",{className:"flex items-center w-full",children:[(0,O.jsx)(h.Z,{className:"mr-8 font-semibold truncate",children:i.from.contact.split("<")[0].trim()}),i.important&&(0,O.jsx)(I.Z,{className:"mr-12 text-red-500 dark:text-red-600",size:16,children:"heroicons-solid:exclamation-circle"}),(0,O.jsx)(h.Z,{className:"ml-auto text-md text-right whitespace-nowrap",color:"text.secondary",children:(0,ie.Z)(new Date(i.date),"LLL dd")})]}),(0,O.jsxs)("div",{className:"flex items-center w-full mt-4",children:[(0,O.jsx)("span",{className:"leading-4 truncate",children:i.subject}),(i.attachments&&i.attachments.length>0||i.starred)&&(0,O.jsxs)("div",{className:"flex ml-auto pl-8",children:[(0,O.jsx)(I.Z,{className:"",size:16,children:"heroicons-solid:paper-clip"}),i.starred&&(0,O.jsx)(I.Z,{className:"flex justify-center ml-4 text-orange-500 dark:text-orange-400",size:16,children:"heroicons-solid:star"})]})]})]})]}),(0,O.jsx)(h.Z,{color:"text.secondary",className:"mt-8 leading-normal line-clamp-2",children:z.Z.truncate(e.mail.content.replace(/<(?:.|\n)*?>/gm,""),{length:180})})]})]})}));var se=(0,X.Z)((function(e){var n=(0,s.I0)(),l=(0,s.v9)(H.A8),i=(0,s.v9)(H.jS),a=(0,o.UO)(),c=(0,r.useState)(null),d=(0,t.Z)(c,2),u=d[0],m=d[1],p=(0,x.$G)("mailboxApp").t;return(0,J.KW)((function(){n((0,H.Y9)(a))}),[n,a]),(0,r.useEffect)((function(){l&&m(0===i.length?l:q.Z.filterArrayByString(l,i))}),[l,i]),u?0===u.length?(0,O.jsxs)(f.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center p-24",children:[(0,O.jsx)(I.Z,{className:"icon-size-128 mb-16",color:"disabled",size:24,children:"heroicons-outline:mail-open"}),(0,O.jsx)(h.Z,{className:"mt-16 text-2xl font-semibold tracking-tight",color:"text.secondary",children:p("NO_MESSAGES")})]}):(0,O.jsx)(K.Z,{className:"p-0 w-full",children:u.map((function(e){return(0,O.jsx)(re,{mail:e},e.id)}))}):null})),oe=l(85582),ce=l(49709),de=l(51405),ue=l(15743),me=l(41727),xe=l(49914),fe=l(57451);var he=function(){var e=(0,o.UO)(),n=(0,s.v9)((0,H.Qu)(e));return(0,O.jsx)(h.Z,{className:"font-semibold uppercase mx-8",children:n})};var pe=function(e){var n=e.onToggleLeftSidebar,l=(0,s.I0)(),a=(0,s.v9)(H.A8),o=(0,s.v9)(Q.ir),c=(0,s.v9)(D.B5),d=(0,s.v9)(H.jS),u=(0,x.$G)("mailboxApp").t,f=(0,s.v9)(H._8),h=(0,s.v9)(D.C$),p=(0,r.useState)({selectMenu:null,foldersMenu:null,labelsMenu:null}),j=(0,t.Z)(p,2),Z=j[0],b=j[1];function v(e,n){b((0,m.Z)((0,m.Z)({},n),{},(0,i.Z)({},n,e.currentTarget)))}function g(e,n){b((0,m.Z)((0,m.Z)({},n),{},(0,i.Z)({},n,null)))}return(0,O.jsxs)("div",{className:"sticky top-0 z-10",children:[(0,O.jsxs)(ue.Z,{sx:{backgroundColor:"background.default"},className:"flex flex-col sm:flex-row items-center w-full min-h-64 py-12 sm:py-0 space-x-8 px-8 border-b ",children:[(0,O.jsxs)("div",{className:"flex items-center",children:[(0,O.jsx)(fe.Z,{lgUp:!0,children:(0,O.jsx)(y.Z,{onClick:function(e){return n()},"aria-label":"open left sidebar",size:"small",children:(0,O.jsx)(I.Z,{children:"heroicons-outline:menu"})})}),(0,O.jsx)(he,{})]}),(0,O.jsx)(xe.Z,{className:"flex flex-1 items-center px-16 rounded-full",variant:"outlined",fullWidth:!0,placeholder:u("SEARCH_PLACEHOLDER"),value:d,onChange:function(e){return l((0,H.N_)(e))},startAdornment:(0,O.jsx)(me.Z,{position:"start",children:(0,O.jsx)(I.Z,{color:"disabled",children:"heroicons-solid:search"})}),inputProps:{"aria-label":"Search"},size:"small"})]}),(0,O.jsxs)(ue.Z,{className:"flex items-center w-full min-h-56 px-8 border-b space-x-8",sx:{backgroundColor:"background.paper"},children:[(0,O.jsx)(ne.Z,{onChange:function(e){return e.target.checked?l((0,H.Cw)()):l((0,H.fW)())},checked:f.length===Object.keys(a).length&&f.length>0,indeterminate:f.length!==Object.keys(a).length&&f.length>0,size:"small"}),(0,O.jsx)(y.Z,{className:"",size:"small","aria-label":"More","aria-owns":Z.select?"select-menu":null,"aria-haspopup":"true",onClick:function(e){return v(e,"select")},children:(0,O.jsx)(I.Z,{size:16,children:"heroicons-outline:chevron-down"})}),(0,O.jsxs)(oe.Z,{id:"select-menu",anchorEl:Z.select,open:Boolean(Z.select),onClose:function(e){return g(0,"select")},children:[(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.Cw)()),g(0,"select")},children:"All"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.fW)()),g(0,"select")},children:"None"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.vg)(["unread",!1])),g(0,"select")},children:"Read"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.vg)(["unread",!0])),g(0,"select")},children:"Unread"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.vg)(["starred",!0])),g(0,"select")},children:"Starred"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.vg)(["starred",!1])),g(0,"select")},children:"Unstarred"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.vg)(["important",!0])),g(0,"select")},children:"Important"}),(0,O.jsx)(de.Z,{onClick:function(e){l((0,H.vg)(["important",!1])),g(0,"select")},children:"Unimportant"})]}),f.length>0&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("div",{className:"border-r-1 h-32 w-1 mx-12 my-0"}),(0,O.jsx)(ce.Z,{title:"Delete",children:(0,O.jsx)(y.Z,{onClick:function(e){l((0,H.mc)({type:"folder",value:h,ids:f}))},"aria-label":"Delete",size:"small",children:(0,O.jsx)(I.Z,{children:"heroicons-outline:trash"})})}),(0,O.jsx)(ce.Z,{title:"Move to folder",children:(0,O.jsx)(y.Z,{"aria-label":"More","aria-owns":Z.folders?"folders-menu":null,"aria-haspopup":"true",onClick:function(e){return v(e,"folders")},size:"small",children:(0,O.jsx)(I.Z,{children:"heroicons-outline:folder"})})}),(0,O.jsx)(oe.Z,{id:"folders-menu",anchorEl:Z.folders,open:Boolean(Z.folders),onClose:function(e){return g(0,"folders")},children:c.length>0&&c.map((function(e){return(0,O.jsx)(de.Z,{onClick:function(n){l((0,H.mc)({type:"folder",value:e.id,ids:f})),g(0,"folders")},children:e.title},e.id)}))}),(0,O.jsx)(ce.Z,{title:"Add label",children:(0,O.jsx)(y.Z,{"aria-label":"label","aria-owns":Z.labels?"labels-menu":null,"aria-haspopup":"true",onClick:function(e){return v(e,"labels")},size:"small",children:(0,O.jsx)(I.Z,{children:"heroicons-outline:tag"})})}),(0,O.jsx)(oe.Z,{id:"labels-menu",anchorEl:Z.labels,open:Boolean(Z.labels),onClose:function(e){return g(0,"labels")},children:o.length>0&&o.map((function(e){return(0,O.jsx)(de.Z,{onClick:function(n){l((0,H.mc)({type:"label",value:e.id,ids:f})),g(0,"labels")},children:e.title},e.id)}))}),(0,O.jsx)(ce.Z,{title:"Mark as unread",children:(0,O.jsx)(y.Z,{onClick:function(e){l((0,H.mc)({type:"unread",value:!0,ids:f}))},"aria-label":"Mark as unread",size:"small",children:(0,O.jsx)(I.Z,{className:"",children:"heroicons-outline:mail"})})}),(0,O.jsx)(ce.Z,{title:"Set important",children:(0,O.jsx)(y.Z,{onClick:function(e){l((0,H.mc)({type:"important",value:!0,ids:f}))},"aria-label":"important",size:"small",children:(0,O.jsx)(I.Z,{className:"text-red-600 dark:text-red-500",children:"heroicons-outline:exclamation-circle"})})}),(0,O.jsx)(ce.Z,{title:"Set starred",children:(0,O.jsx)(y.Z,{onClick:function(e){l((0,H.mc)({type:"starred",value:!0,ids:f}))},"aria-label":"important",size:"small",children:(0,O.jsx)(I.Z,{className:"text-orange-500 dark:text-red-400",children:"heroicons-outline:star"})})})]})]})]})};var je=function(e){return(0,O.jsxs)("div",{className:"flex flex-col w-full",children:[(0,O.jsx)(pe,{onToggleLeftSidebar:e.onToggleLeftSidebar}),(0,O.jsx)(se,{})]})},Ze=(0,c.ZP)(d.Z)((function(e){var n=e.theme;return{"& .FusePageSimple-rightSidebar":(0,i.Z)({flex:"1"},n.breakpoints.down("lg"),{minWidth:"100%"}),"& .FusePageSimple-contentWrapper":(0,i.Z)({},n.breakpoints.up("lg"),{maxWidth:400})}}));var be=(0,a.Z)("mailboxApp",V)((function(e){var n=(0,s.I0)(),l=(0,u.Z)((function(e){return e.breakpoints.down("lg")})),i=(0,r.useState)(!l),a=(0,t.Z)(i,2),c=a[0],d=a[1],m=(0,r.useState)(!l),x=(0,t.Z)(m,2),f=x[0],h=x[1],p=(0,o.UO)().mailId,j=(0,o.TH)();return(0,r.useEffect)((function(){n((0,U.Zj)()),n((0,D.xh)()),n((0,Q.g7)())}),[n]),(0,r.useEffect)((function(){h(!l||Boolean(p))}),[p,l]),(0,r.useEffect)((function(){d(!l)}),[l]),(0,r.useEffect)((function(){l&&d(!1)}),[j,l]),(0,O.jsx)(Ze,{content:(0,O.jsx)(je,{onToggleLeftSidebar:function(){return d(!c)}}),leftSidebarContent:(0,O.jsx)(G,{}),leftSidebarOpen:c,leftSidebarOnClose:function(){return d(!1)},leftSidebarWidth:288,scroll:l?"normal":"content",rightSidebarContent:(0,O.jsx)(o.j3,{}),rightSidebarOpen:f,rightSidebarOnClose:function(){return h(!1)}})}))}}]);