"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8217],{44269:function(n,e,o){o.d(e,{Z:function(){return S}});var t=o(29439),a=o(98655),i=o(73428),r=o(65280),l=o(5297),s=o(83061),d=o(47313),c=o(17551),m=o(9506),p=o(1413),h=o(45987),u=o(1168),x=o(10223),f=o(30164),b=o(16132),y=o(54097),j=o(19860),g=o(17592),v=o(70499),w=o(46417),Z=["children","name"];function k(n){var e=n.children,o=n.document,t=(0,j.Z)();d.useEffect((function(){o.body.dir=t.direction}),[o,t.direction]);var a=d.useMemo((function(){return(0,f.Z)({key:"iframe-demo-".concat(t.direction),prepend:!0,container:o.head,stylisPlugins:"rtl"===t.direction?[x.Z]:[]})}),[o,t.direction]),i=d.useCallback((function(){return o.defaultView}),[o]);return(0,w.jsx)(y.StyleSheetManager,{target:o.head,stylisPlugins:"rtl"===t.direction?[x.Z]:[],children:(0,w.jsxs)(b.C,{value:a,children:[(0,w.jsx)(v.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),d.cloneElement(e,{window:i})]})})}var T=(0,g.ZP)("iframe")((function(n){var e=n.theme;return{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:e.shadows[1]}}));function C(n){var e,o=n.children,a=n.name,i=(0,h.Z)(n,Z),r="".concat(a," demo"),l=d.useRef(null),s=d.useReducer((function(){return!0}),!1),c=(0,t.Z)(s,2),m=c[0],x=c[1];d.useEffect((function(){var n=l.current.contentDocument;null==n||"complete"!==n.readyState||m||x()}),[m]);var f=null===(e=l.current)||void 0===e?void 0:e.contentDocument;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(T,(0,p.Z)({onLoad:x,ref:l,title:r},i)),!1!==m?u.createPortal((0,w.jsx)(k,{document:f,children:o}),f.body):null]})}var M=d.memo(C),B=o(56993);function N(n){var e=(0,d.useState)(n.currentTabIndex),o=(0,t.Z)(e,2),p=o[0],h=o[1],u=n.component,x=n.raw,f=n.iframe,b=n.className,y=n.name;return(0,w.jsxs)(i.Z,{className:(0,s.default)(b,"shadow"),sx:{backgroundColor:function(n){return(0,c._j)(n.palette.background.paper,"light"===n.palette.mode?.01:.1)}},children:[(0,w.jsx)(m.Z,{sx:{backgroundColor:function(n){return(0,c._j)(n.palette.background.paper,"light"===n.palette.mode?.02:.2)}},children:(0,w.jsxs)(l.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(n,e){h(e)},textColor:"secondary",indicatorColor:"secondary",children:[u&&(0,w.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,w.jsx)(B.Z,{children:"heroicons-outline:eye"})}),x&&(0,w.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,w.jsx)(B.Z,{children:"heroicons-outline:code"})})]})}),(0,w.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,w.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:u&&(f?(0,w.jsx)(M,{name:y,children:(0,w.jsx)(u,{})}):(0,w.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,w.jsx)(u,{})}))}),(0,w.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:(0,d.useMemo)((function(){return x&&1===p?(0,w.jsx)("div",{className:"flex flex-1",children:(0,w.jsx)(a.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:x.default})}):null}),[x,p])})]})]})}N.defaultProps={name:"",currentTabIndex:0};var S=N},90608:function(n,e,o){o.d(e,{Z:function(){return m}});var t=o(29439),a=o(47313),i=o(9506),r=o(24193),l=o(61113),s=o(10387),d=o(46417),c={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function m(){var n=a.useState(!1),e=(0,t.Z)(n,2),o=e[0],m=e[1];return(0,d.jsxs)("div",{children:[(0,d.jsx)(r.Z,{onClick:function(){return m(!0)},children:"Open modal"}),(0,d.jsx)(s.Z,{open:o,onClose:function(){return m(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,d.jsxs)(i.Z,{sx:c,children:[(0,d.jsx)(l.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),(0,d.jsx)(l.Z,{id:"modal-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})}},84332:function(n,e,o){o.d(e,{Z:function(){return m}});var t=o(29439),a=o(47313),i=o(9506),r=o(10387),l=o(24193),s=o(61113),d=o(46417),c={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function m(){var n=a.useState(!1),e=(0,t.Z)(n,2),o=e[0],m=e[1];return(0,d.jsxs)("div",{children:[(0,d.jsx)(l.Z,{onClick:function(){return m(!0)},children:"Open modal"}),(0,d.jsx)(r.Z,{keepMounted:!0,open:o,onClose:function(){return m(!1)},"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:(0,d.jsxs)(i.Z,{sx:c,children:[(0,d.jsx)(s.Z,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),(0,d.jsx)(s.Z,{id:"keep-mounted-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})}},25252:function(n,e,o){o.d(e,{Z:function(){return p}});var t=o(1413),a=o(29439),i=o(47313),r=o(9506),l=o(10387),s=o(24193),d=o(46417),c={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,pt:2,px:4,pb:3};function m(){var n=i.useState(!1),e=(0,a.Z)(n,2),o=e[0],m=e[1],p=function(){m(!1)};return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(s.Z,{onClick:function(){m(!0)},children:"Open Child Modal"}),(0,d.jsx)(l.Z,{open:o,onClose:p,"aria-labelledby":"child-modal-title","aria-describedby":"child-modal-description",children:(0,d.jsxs)(r.Z,{sx:(0,t.Z)((0,t.Z)({},c),{},{width:200}),children:[(0,d.jsx)("h2",{id:"child-modal-title",children:"Text in a child modal"}),(0,d.jsx)("p",{id:"child-modal-description",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}),(0,d.jsx)(s.Z,{onClick:p,children:"Close Child Modal"})]})})]})}function p(){var n=i.useState(!1),e=(0,a.Z)(n,2),o=e[0],p=e[1];return(0,d.jsxs)("div",{children:[(0,d.jsx)(s.Z,{onClick:function(){p(!0)},children:"Open modal"}),(0,d.jsx)(l.Z,{open:o,onClose:function(){p(!1)},"aria-labelledby":"parent-modal-title","aria-describedby":"parent-modal-description",children:(0,d.jsxs)(r.Z,{sx:(0,t.Z)((0,t.Z)({},c),{},{width:400}),children:[(0,d.jsx)("h2",{id:"parent-modal-title",children:"Text in a modal"}),(0,d.jsx)("p",{id:"parent-modal-description",children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."}),(0,d.jsx)(m,{})]})})]})}},10586:function(n,e,o){o.d(e,{Z:function(){return s}});var t=o(47313),a=o(10387),i=o(61113),r=o(9506),l=o(46417);function s(){var n=t.useRef(null);return(0,l.jsx)(r.Z,{sx:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},ref:n,children:(0,l.jsx)(a.Z,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",sx:{display:"flex",p:1,alignItems:"center",justifyContent:"center"},container:function(){return n.current},children:(0,l.jsxs)(r.Z,{sx:{position:"relative",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:function(n){return n.shadows[5]},p:4},children:[(0,l.jsx)(i.Z,{id:"server-modal-title",variant:"h6",component:"h2",children:"Server-side modal"}),(0,l.jsx)(i.Z,{id:"server-modal-description",sx:{pt:2},children:"If you disable JavaScript, you will still see me."})]})})})}},70432:function(n,e,o){o.d(e,{Z:function(){return b}});var t=o(29439),a=o(1413),i=o(45987),r=o(47313),l=o(91554),s=o(9506),d=o(10387),c=o(24193),m=o(61113),p=o(59957),h=o(46417),u=["children","in","onClick","onEnter","onExited","ownerState"],x=r.forwardRef((function(n,e){var o=n.children,t=n.in,l=n.onClick,s=n.onEnter,d=n.onExited,c=(n.ownerState,(0,i.Z)(n,u)),m=(0,p.q_)({from:{opacity:0},to:{opacity:t?1:0},onStart:function(){t&&s&&s(null,!0)},onRest:function(){!t&&d&&d(null,!0)}});return(0,h.jsx)(p.q.div,(0,a.Z)((0,a.Z)({ref:e,style:m},c),{},{children:r.cloneElement(o,{onClick:l})}))})),f={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function b(){var n=r.useState(!1),e=(0,t.Z)(n,2),o=e[0],a=e[1];return(0,h.jsxs)("div",{children:[(0,h.jsx)(c.Z,{onClick:function(){return a(!0)},children:"Open modal"}),(0,h.jsx)(d.Z,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",open:o,onClose:function(){return a(!1)},closeAfterTransition:!0,slots:{backdrop:l.Z},slotProps:{backdrop:{TransitionComponent:x}},children:(0,h.jsx)(x,{in:o,children:(0,h.jsxs)(s.Z,{sx:f,children:[(0,h.jsx)(m.Z,{id:"spring-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),(0,h.jsx)(m.Z,{id:"spring-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})}},79760:function(n,e,o){o.d(e,{Z:function(){return h}});var t=o(29439),a=o(47313),i=o(91554),r=o(9506),l=o(10387),s=o(32530),d=o(24193),c=o(61113),m=o(46417),p={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function h(){var n=a.useState(!1),e=(0,t.Z)(n,2),o=e[0],h=e[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)(d.Z,{onClick:function(){return h(!0)},children:"Open modal"}),(0,m.jsx)(l.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:o,onClose:function(){return h(!1)},closeAfterTransition:!0,slots:{backdrop:i.Z},slotProps:{backdrop:{timeout:500}},children:(0,m.jsx)(s.Z,{in:o,children:(0,m.jsxs)(r.Z,{sx:p,children:[(0,m.jsx)(c.Z,{id:"transition-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),(0,m.jsx)(c.Z,{id:"transition-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})})]})}},8217:function(n,e,o){o.r(e);var t=o(44269),a=o(98655),i=o(56993),r=o(24193),l=o(61113),s=o(46417);e.default=function(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(r.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/modal",target:"_blank",role:"button",startIcon:(0,s.jsx)(i.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(l.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Modal"}),(0,s.jsx)(l.Z,{className:"description",children:"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The component renders its ",(0,s.jsx)("code",{children:"children"})," node in front of a backdrop component. The"," ",(0,s.jsx)("code",{children:"Modal"})," offers important features:"]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"\ud83d\udc84 Manages modal stacking when one-at-a-time just isn't enough."}),(0,s.jsx)("li",{children:"\ud83d\udd10 Creates a backdrop, for disabling interaction below the modal."}),(0,s.jsx)("li",{children:"\ud83d\udd10 It disables scrolling of the page content while open."}),(0,s.jsx)("li",{children:"\u267f\ufe0f It properly manages focus; moving to the modal content, and keeping it there until the modal is closed."}),(0,s.jsx)("li",{children:"\u267f\ufe0f Adds the appropriate ARIA roles automatically."})]}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:[':::info The term "modal" is sometimes used to mean "dialog", but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if'," ",(0,s.jsx)("a",{href:"https://en.wikipedia.org/wiki/Modal_window",children:"it blocks interaction with the rest of the application"}),". :::"]}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["If you are creating a modal dialog, you probably want to use the"," ",(0,s.jsx)("a",{href:"/material-ui/react-dialog/",children:"Dialog"})," component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:"]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/material-ui/react-dialog/",children:"Dialog"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/material-ui/react-drawer/",children:"Drawer"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/material-ui/react-menu/",children:"Menu"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"/material-ui/react-popover/",children:"Popover"})})]}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic modal"}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"BasicModal.js",className:"my-24",iframe:!1,component:o(90608).Z,raw:o(6124)})}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["Notice that you can disable the outline (often blue or gold) with the"," ",(0,s.jsx)("code",{children:"outline: 0"})," CSS property."]}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Nested modal"}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:"Modals can be nested, for example a select within a dialog, but stacking of more than two modals, or any two modals with a backdrop is discouraged."}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"NestedModal.js",className:"my-24",iframe:!1,component:o(25252).Z,raw:o(59269)})}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Transitions"}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:"The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Be a direct child descendent of the modal."}),(0,s.jsxs)("li",{children:["Have an ",(0,s.jsx)("code",{children:"in"})," prop. This corresponds to the open/close state."]}),(0,s.jsxs)("li",{children:["Call the ",(0,s.jsx)("code",{children:"onEnter"})," callback prop when the enter transition starts."]}),(0,s.jsxs)("li",{children:["Call the ",(0,s.jsx)("code",{children:"onExited"})," callback prop when the exit transition is completed. These two callbacks allow the modal to unmount the child content when closed and fully transitioned."]})]}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["Modal has built-in support for"," ",(0,s.jsx)("a",{href:"https://github.com/reactjs/react-transition-group",children:"react-transition-group"}),"."]}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"TransitionsModal.js",className:"my-24",iframe:!1,component:o(79760).Z,raw:o(79353)})}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["Alternatively, you can use ",(0,s.jsx)("a",{href:"https://github.com/pmndrs/react-spring",children:"react-spring"}),"."]}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"SpringModal.js",className:"my-24",iframe:!1,component:o(70432).Z,raw:o(65549)})}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Performance"}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The content of modal is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to change this default behavior by enabling the ",(0,s.jsx)("code",{children:"keepMounted"})," prop:"]}),(0,s.jsx)(a.Z,{component:"pre",className:"language-jsx",children:" \n<Modal keepMounted />\n"}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"KeepMountedModal.js",className:"my-24",iframe:!1,component:o(84332).Z,raw:o(90112)})}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:"As with any performance optimization, this is not a silver bullet. Be sure to identify bottlenecks first, and then try out these optimization strategies."}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Server-side modal"}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["React ",(0,s.jsx)("a",{href:"https://github.com/facebook/react/issues/13097",children:"doesn't support"})," the"," ",(0,s.jsx)("a",{href:"https://react.dev/reference/react-dom/createPortal",children:(0,s.jsx)("code",{children:"createPortal()"})})," ","API on the server. In order to display the modal, you need to disable the portal feature with the ",(0,s.jsx)("code",{children:"disablePortal"})," prop:"]}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(t.Z,{name:"ServerModal.js",className:"my-24",iframe:!1,component:o(10586).Z,raw:o(85107)})}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Limitations"}),(0,s.jsx)(l.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Focus trap"}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:"The modal moves the focus back to the body of the component if the focus tries to escape it."}),(0,s.jsx)(l.Z,{className:"mb-40",component:"div",children:"This is done for accessibility purposes. However, it might create issues. In the event the users need to interact with another part of the page, e.g. with a chatbot window, you can disable the behavior:"}),(0,s.jsx)(a.Z,{component:"pre",className:"language-jsx",children:" \n<Modal disableEnforceFocus />\n"}),(0,s.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",(0,s.jsx)("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/"}),")"]}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:[(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["Be sure to add ",(0,s.jsx)("code",{children:'aria-labelledby="id..."'}),", referencing the modal title, to the ",(0,s.jsx)("code",{children:"Modal"}),". Additionally, you may give a description of your modal with the"," ",(0,s.jsx)("code",{children:'aria-describedby="id..."'})," prop on the ",(0,s.jsx)("code",{children:"Modal"}),"."]}),(0,s.jsx)(a.Z,{component:"pre",className:"language-jsx",children:' \n<Modal aria-labelledby="modal-title" aria-describedby="modal-description">\n  <h2 id="modal-title">My Title</h2>\n  <Typography id="modal-description">My Description</Typography>\n</Modal>\n'})]}),(0,s.jsx)("li",{children:(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The"," ",(0,s.jsx)("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/",children:"WAI-ARIA authoring practices"})," ","can help you set the initial focus on the most relevant element, based on your modal content."]})}),(0,s.jsx)("li",{children:(0,s.jsxs)(l.Z,{className:"mb-40",component:"div",children:['Keep in mind that a "modal window" overlays on either the primary window or another modal window. Windows under a modal are ',(0,s.jsx)("strong",{children:"inert"}),". That is, users cannot interact with content outside an active modal window. This might create"," ",(0,s.jsx)("a",{href:"#focus-trap",children:"conflicting behaviors"}),"."]})})]})]})}},6124:function(n,e,o){o.r(e),e.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\nimport Modal from '@mui/material/Modal';\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function BasicModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"modal-modal-title\"\n        aria-describedby=\"modal-modal-description\"\n      >\n        <Box sx={style}>\n          <Typography id=\"modal-modal-title\" variant=\"h6\" component=\"h2\">\n            Text in a modal\n          </Typography>\n          <Typography id=\"modal-modal-description\" sx={{ mt: 2 }}>\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n          </Typography>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n"},90112:function(n,e,o){o.r(e),e.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Modal from '@mui/material/Modal';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function KeepMountedModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        keepMounted\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"keep-mounted-modal-title\"\n        aria-describedby=\"keep-mounted-modal-description\"\n      >\n        <Box sx={style}>\n          <Typography id=\"keep-mounted-modal-title\" variant=\"h6\" component=\"h2\">\n            Text in a modal\n          </Typography>\n          <Typography id=\"keep-mounted-modal-description\" sx={{ mt: 2 }}>\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n          </Typography>\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n"},59269:function(n,e,o){o.r(e),e.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Modal from '@mui/material/Modal';\nimport Button from '@mui/material/Button';\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  pt: 2,\n  px: 4,\n  pb: 3,\n};\n\nfunction ChildModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <React.Fragment>\n      <Button onClick={handleOpen}>Open Child Modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"child-modal-title\"\n        aria-describedby=\"child-modal-description\"\n      >\n        <Box sx={{ ...style, width: 200 }}>\n          <h2 id=\"child-modal-title\">Text in a child modal</h2>\n          <p id=\"child-modal-description\">\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit.\n          </p>\n          <Button onClick={handleClose}>Close Child Modal</Button>\n        </Box>\n      </Modal>\n    </React.Fragment>\n  );\n}\n\nexport default function NestedModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => {\n    setOpen(true);\n  };\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"parent-modal-title\"\n        aria-describedby=\"parent-modal-description\"\n      >\n        <Box sx={{ ...style, width: 400 }}>\n          <h2 id=\"parent-modal-title\">Text in a modal</h2>\n          <p id=\"parent-modal-description\">\n            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n          </p>\n          <ChildModal />\n        </Box>\n      </Modal>\n    </div>\n  );\n}\n"},85107:function(n,e,o){o.r(e),e.default="import * as React from 'react';\nimport Modal from '@mui/material/Modal';\nimport Typography from '@mui/material/Typography';\nimport Box from '@mui/material/Box';\n\nexport default function ServerModal() {\n  const rootRef = React.useRef(null);\n\n  return (\n    <Box\n      sx={{\n        height: 300,\n        flexGrow: 1,\n        minWidth: 300,\n        transform: 'translateZ(0)',\n        // The position fixed scoping doesn't work in IE11.\n        // Disable this demo to preserve the others.\n        '@media all and (-ms-high-contrast: none)': {\n          display: 'none',\n        },\n      }}\n      ref={rootRef}\n    >\n      <Modal\n        disablePortal\n        disableEnforceFocus\n        disableAutoFocus\n        open\n        aria-labelledby=\"server-modal-title\"\n        aria-describedby=\"server-modal-description\"\n        sx={{\n          display: 'flex',\n          p: 1,\n          alignItems: 'center',\n          justifyContent: 'center',\n        }}\n        container={() => rootRef.current}\n      >\n        <Box\n          sx={{\n            position: 'relative',\n            width: 400,\n            bgcolor: 'background.paper',\n            border: '2px solid #000',\n            boxShadow: (theme) => theme.shadows[5],\n            p: 4,\n          }}\n        >\n          <Typography id=\"server-modal-title\" variant=\"h6\" component=\"h2\">\n            Server-side modal\n          </Typography>\n          <Typography id=\"server-modal-description\" sx={{ pt: 2 }}>\n            If you disable JavaScript, you will still see me.\n          </Typography>\n        </Box>\n      </Modal>\n    </Box>\n  );\n}\n"},65549:function(n,e,o){o.r(e),e.default="import * as React from 'react';\nimport PropTypes from 'prop-types';\nimport Backdrop from '@mui/material/Backdrop';\nimport Box from '@mui/material/Box';\nimport Modal from '@mui/material/Modal';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\nimport { useSpring, animated } from '@react-spring/web';\n\nconst Fade = React.forwardRef(function Fade(props, ref) {\n  const {\n    children,\n    in: open,\n    onClick,\n    onEnter,\n    onExited,\n    ownerState,\n    ...other\n  } = props;\n  const style = useSpring({\n    from: { opacity: 0 },\n    to: { opacity: open ? 1 : 0 },\n    onStart: () => {\n      if (open && onEnter) {\n        onEnter(null, true);\n      }\n    },\n    onRest: () => {\n      if (!open && onExited) {\n        onExited(null, true);\n      }\n    },\n  });\n\n  return (\n    <animated.div ref={ref} style={style} {...other}>\n      {React.cloneElement(children, { onClick })}\n    </animated.div>\n  );\n});\n\nFade.propTypes = {\n  children: PropTypes.element.isRequired,\n  in: PropTypes.bool,\n  onClick: PropTypes.any,\n  onEnter: PropTypes.func,\n  onExited: PropTypes.func,\n  ownerState: PropTypes.any,\n};\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function SpringModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        aria-labelledby=\"spring-modal-title\"\n        aria-describedby=\"spring-modal-description\"\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        slots={{ backdrop: Backdrop }}\n        slotProps={{\n          backdrop: {\n            TransitionComponent: Fade,\n          },\n        }}\n      >\n        <Fade in={open}>\n          <Box sx={style}>\n            <Typography id=\"spring-modal-title\" variant=\"h6\" component=\"h2\">\n              Text in a modal\n            </Typography>\n            <Typography id=\"spring-modal-description\" sx={{ mt: 2 }}>\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n            </Typography>\n          </Box>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n"},79353:function(n,e,o){o.r(e),e.default="import * as React from 'react';\nimport Backdrop from '@mui/material/Backdrop';\nimport Box from '@mui/material/Box';\nimport Modal from '@mui/material/Modal';\nimport Fade from '@mui/material/Fade';\nimport Button from '@mui/material/Button';\nimport Typography from '@mui/material/Typography';\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  width: 400,\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4,\n};\n\nexport default function TransitionsModal() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <div>\n      <Button onClick={handleOpen}>Open modal</Button>\n      <Modal\n        aria-labelledby=\"transition-modal-title\"\n        aria-describedby=\"transition-modal-description\"\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        slots={{ backdrop: Backdrop }}\n        slotProps={{\n          backdrop: {\n            timeout: 500,\n          },\n        }}\n      >\n        <Fade in={open}>\n          <Box sx={style}>\n            <Typography id=\"transition-modal-title\" variant=\"h6\" component=\"h2\">\n              Text in a modal\n            </Typography>\n            <Typography id=\"transition-modal-description\" sx={{ mt: 2 }}>\n              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n            </Typography>\n          </Box>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n"}}]);