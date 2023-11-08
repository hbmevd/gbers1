"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[5375],{44269:function(e,n,t){t.d(n,{Z:function(){return k}});var o=t(29439),i=t(98655),r=t(73428),s=t(65280),l=t(5297),a=t(83061),c=t(47313),d=t(17551),m=t(9506),p=t(1413),u=t(45987),h=t(1168),f=t(10223),x=t(30164),j=t(16132),Z=t(54097),b=t(19860),T=t(17592),v=t(70499),g=t(46417),y=["children","name"];function w(e){var n=e.children,t=e.document,o=(0,b.Z)();c.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var i=c.useMemo((function(){return(0,x.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[f.Z]:[]})}),[t,o.direction]),r=c.useCallback((function(){return t.defaultView}),[t]);return(0,g.jsx)(Z.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===o.direction?[f.Z]:[],children:(0,g.jsxs)(j.C,{value:i,children:[(0,g.jsx)(v.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),c.cloneElement(n,{window:r})]})})}var B=(0,T.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function N(e){var n,t=e.children,i=e.name,r=(0,u.Z)(e,y),s="".concat(i," demo"),l=c.useRef(null),a=c.useReducer((function(){return!0}),!1),d=(0,o.Z)(a,2),m=d[0],f=d[1];c.useEffect((function(){var e=l.current.contentDocument;null==e||"complete"!==e.readyState||m||f()}),[m]);var x=null===(n=l.current)||void 0===n?void 0:n.contentDocument;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(B,(0,p.Z)({onLoad:f,ref:l,title:s},r)),!1!==m?h.createPortal((0,g.jsx)(w,{document:x,children:t}),x.body):null]})}var C=c.memo(N),A=t(56993);function R(e){var n=(0,c.useState)(e.currentTabIndex),t=(0,o.Z)(n,2),p=t[0],u=t[1],h=e.component,f=e.raw,x=e.iframe,j=e.className,Z=e.name;return(0,g.jsxs)(r.Z,{className:(0,a.default)(j,"shadow"),sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,g.jsx)(m.Z,{sx:{backgroundColor:function(e){return(0,d._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,g.jsxs)(l.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){u(n)},textColor:"secondary",indicatorColor:"secondary",children:[h&&(0,g.jsx)(s.Z,{classes:{root:"min-w-64"},icon:(0,g.jsx)(A.Z,{children:"heroicons-outline:eye"})}),f&&(0,g.jsx)(s.Z,{classes:{root:"min-w-64"},icon:(0,g.jsx)(A.Z,{children:"heroicons-outline:code"})})]})}),(0,g.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,g.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:h&&(x?(0,g.jsx)(C,{name:Z,children:(0,g.jsx)(h,{})}):(0,g.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,g.jsx)(h,{})}))}),(0,g.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:(0,c.useMemo)((function(){return f&&1===p?(0,g.jsx)("div",{className:"flex flex-1",children:(0,g.jsx)(i.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:f.default})}):null}),[f,p])})]})]})}R.defaultProps={name:"",currentTabIndex:0};var k=R},52496:function(e,n,t){t.d(n,{Z:function(){return a}});t(47313);var o=t(51997),i=t(24193),r=t(47131),s=t(49709),l=t(46417);function a(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(s.Z,{title:"Delete",children:(0,l.jsx)(r.Z,{children:(0,l.jsx)(o.Z,{})})}),(0,l.jsx)(s.Z,{describeChild:!0,title:"Does not add if it already exists.",children:(0,l.jsx)(i.Z,{children:"Add"})})]})}},77511:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(47313),i=t(9506),r=t(49709),s=t(46417);function l(){var e=o.useRef({x:0,y:0}),n=o.useRef(null),t=o.useRef(null);return(0,s.jsx)(r.Z,{title:"Add",placement:"top",arrow:!0,PopperProps:{popperRef:n,anchorEl:{getBoundingClientRect:function(){return new DOMRect(e.current.x,t.current.getBoundingClientRect().y,0,0)}}},children:(0,s.jsx)(i.Z,{ref:t,onMouseMove:function(t){e.current={x:t.clientX,y:t.clientY},null!=n.current&&n.current.update()},sx:{bgcolor:"primary.main",color:"primary.contrastText",p:2},children:"Hover"})})}},69279:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var o=t(24193),i=t(49709),r=t(46417);function s(){return(0,r.jsx)(i.Z,{title:"Add",arrow:!0,children:(0,r.jsx)(o.Z,{children:"Arrow"})})}},56095:function(e,n,t){t.d(n,{Z:function(){return l}});t(47313);var o=t(51997),i=t(47131),r=t(49709),s=t(46417);function l(){return(0,s.jsx)(r.Z,{title:"Delete",children:(0,s.jsx)(i.Z,{children:(0,s.jsx)(o.Z,{})})})}},57181:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(29439),i=t(47313),r=t(24193),s=t(49709),l=t(46417);function a(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],a=n[1];return(0,l.jsx)(s.Z,{open:t,onClose:function(){a(!1)},onOpen:function(){a(!0)},title:"Add",children:(0,l.jsx)(r.Z,{children:"Controlled"})})}},82695:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(4942),i=t(1413),r=t(45987),s=t(47313),l=t(17592),a=t(24193),c=t(49709),d=t(78041),m=t(61113),p=t(46417),u=["className"],h=["className"],f=["className"],x=(0,l.ZP)((function(e){var n=e.className,t=(0,r.Z)(e,u);return(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({},t),{},{classes:{popper:n}}))}))((function(e){var n=e.theme;return(0,o.Z)({},"& .".concat(d.Z.tooltip),{backgroundColor:n.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:n.shadows[1],fontSize:11})})),j=(0,l.ZP)((function(e){var n=e.className,t=(0,r.Z)(e,h);return(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({},t),{},{arrow:!0,classes:{popper:n}}))}))((function(e){var n,t=e.theme;return n={},(0,o.Z)(n,"& .".concat(d.Z.arrow),{color:t.palette.common.black}),(0,o.Z)(n,"& .".concat(d.Z.tooltip),{backgroundColor:t.palette.common.black}),n})),Z=(0,l.ZP)((function(e){var n=e.className,t=(0,r.Z)(e,f);return(0,p.jsx)(c.Z,(0,i.Z)((0,i.Z)({},t),{},{classes:{popper:n}}))}))((function(e){var n=e.theme;return(0,o.Z)({},"& .".concat(d.Z.tooltip),{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:n.typography.pxToRem(12),border:"1px solid #dadde9"})}));function b(){return(0,p.jsxs)("div",{children:[(0,p.jsx)(x,{title:"Add",children:(0,p.jsx)(a.Z,{children:"Light"})}),(0,p.jsx)(j,{title:"Add",children:(0,p.jsx)(a.Z,{children:"Bootstrap"})}),(0,p.jsx)(Z,{title:(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(m.Z,{color:"inherit",children:"Tooltip with HTML"}),(0,p.jsx)("em",{children:"And here's"})," ",(0,p.jsx)("b",{children:"some"})," ",(0,p.jsx)("u",{children:"amazing content"}),"."," ","It's very engaging. Right?"]}),children:(0,p.jsx)(a.Z,{children:"HTML"})})]})}},39450:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var o=t(24193),i=t(49709),r=t(46417);function s(){return(0,r.jsx)(i.Z,{title:"Add",enterDelay:500,leaveDelay:200,children:(0,r.jsx)(o.Z,{children:"[500ms, 200ms]"})})}},12216:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var o=t(24193),i=t(49709),r=t(46417);function s(){return(0,r.jsx)(i.Z,{title:"You don't have permission to do this",children:(0,r.jsx)("span",{children:(0,r.jsx)(o.Z,{disabled:!0,children:"A Disabled Button"})})})}},96812:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var o=t(9506),i=t(49709),r=t(46417);function s(){return(0,r.jsx)(i.Z,{title:"You don't have permission to do this",followCursor:!0,children:(0,r.jsx)(o.Z,{sx:{bgcolor:"text.disabled",color:"background.paper",p:2},children:"Disabled Action"})})}},82095:function(e,n,t){t.d(n,{Z:function(){return s}});t(47313);var o=t(24193),i=t(49709),r=t(46417);function s(){return(0,r.jsx)(i.Z,{title:"Add",disableInteractive:!0,children:(0,r.jsx)(o.Z,{children:"Not interactive"})})}},10152:function(e,n,t){t.d(n,{Z:function(){return a}});t(47313);var o=t(9506),i=t(9019),r=t(24193),s=t(49709),l=t(46417);function a(){return(0,l.jsxs)(o.Z,{sx:{width:500},children:[(0,l.jsx)(i.ZP,{container:!0,justifyContent:"center",children:(0,l.jsxs)(i.ZP,{item:!0,children:[(0,l.jsx)(s.Z,{title:"Add",placement:"top-start",children:(0,l.jsx)(r.Z,{children:"top-start"})}),(0,l.jsx)(s.Z,{title:"Add",placement:"top",children:(0,l.jsx)(r.Z,{children:"top"})}),(0,l.jsx)(s.Z,{title:"Add",placement:"top-end",children:(0,l.jsx)(r.Z,{children:"top-end"})})]})}),(0,l.jsxs)(i.ZP,{container:!0,justifyContent:"center",children:[(0,l.jsxs)(i.ZP,{item:!0,xs:6,children:[(0,l.jsx)(s.Z,{title:"Add",placement:"left-start",children:(0,l.jsx)(r.Z,{children:"left-start"})}),(0,l.jsx)("br",{}),(0,l.jsx)(s.Z,{title:"Add",placement:"left",children:(0,l.jsx)(r.Z,{children:"left"})}),(0,l.jsx)("br",{}),(0,l.jsx)(s.Z,{title:"Add",placement:"left-end",children:(0,l.jsx)(r.Z,{children:"left-end"})})]}),(0,l.jsxs)(i.ZP,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[(0,l.jsx)(i.ZP,{item:!0,children:(0,l.jsx)(s.Z,{title:"Add",placement:"right-start",children:(0,l.jsx)(r.Z,{children:"right-start"})})}),(0,l.jsx)(i.ZP,{item:!0,children:(0,l.jsx)(s.Z,{title:"Add",placement:"right",children:(0,l.jsx)(r.Z,{children:"right"})})}),(0,l.jsx)(i.ZP,{item:!0,children:(0,l.jsx)(s.Z,{title:"Add",placement:"right-end",children:(0,l.jsx)(r.Z,{children:"right-end"})})})]})]}),(0,l.jsx)(i.ZP,{container:!0,justifyContent:"center",children:(0,l.jsxs)(i.ZP,{item:!0,children:[(0,l.jsx)(s.Z,{title:"Add",placement:"bottom-start",children:(0,l.jsx)(r.Z,{children:"bottom-start"})}),(0,l.jsx)(s.Z,{title:"Add",placement:"bottom",children:(0,l.jsx)(r.Z,{children:"bottom"})}),(0,l.jsx)(s.Z,{title:"Add",placement:"bottom-end",children:(0,l.jsx)(r.Z,{children:"bottom-end"})})]})})]})}},81084:function(e,n,t){t.d(n,{Z:function(){return a}});t(47313);var o=t(24193),i=t(49709),r=t(32530),s=t(57632),l=t(46417);function a(){return(0,l.jsxs)("div",{children:[(0,l.jsx)(i.Z,{title:"Add",children:(0,l.jsx)(o.Z,{children:"Grow"})}),(0,l.jsx)(i.Z,{TransitionComponent:r.Z,TransitionProps:{timeout:600},title:"Add",children:(0,l.jsx)(o.Z,{children:"Fade"})}),(0,l.jsx)(i.Z,{TransitionComponent:s.Z,title:"Add",children:(0,l.jsx)(o.Z,{children:"Zoom"})})]})}},76259:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(29439),i=t(47313),r=t(9019),s=t(24193),l=t(49709),a=t(31685),c=t(46417);function d(){var e=i.useState(!1),n=(0,o.Z)(e,2),t=n[0],d=n[1],m=function(){d(!1)};return(0,c.jsx)("div",{children:(0,c.jsxs)(r.ZP,{container:!0,justifyContent:"center",children:[(0,c.jsx)(r.ZP,{item:!0,children:(0,c.jsx)(l.Z,{disableFocusListener:!0,title:"Add",children:(0,c.jsx)(s.Z,{children:"Hover or touch"})})}),(0,c.jsx)(r.ZP,{item:!0,children:(0,c.jsx)(l.Z,{disableHoverListener:!0,title:"Add",children:(0,c.jsx)(s.Z,{children:"Focus or touch"})})}),(0,c.jsx)(r.ZP,{item:!0,children:(0,c.jsx)(l.Z,{disableFocusListener:!0,disableTouchListener:!0,title:"Add",children:(0,c.jsx)(s.Z,{children:"Hover"})})}),(0,c.jsx)(r.ZP,{item:!0,children:(0,c.jsx)(a.Z,{onClickAway:m,children:(0,c.jsx)("div",{children:(0,c.jsx)(l.Z,{PopperProps:{disablePortal:!0},onClose:m,open:t,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Add",children:(0,c.jsx)(s.Z,{onClick:function(){d(!0)},children:"Click"})})})})})]})})}},67288:function(e,n,t){t.d(n,{Z:function(){return x}});var o=t(4942),i=t(1413),r=t(45987),s=(t(47313),t(17592)),l=t(24193),a=t(49709),c=t(78041),d=t(46417),m=["className"],p=["className"],u=(0,s.ZP)((function(e){var n=e.className,t=(0,r.Z)(e,m);return(0,d.jsx)(a.Z,(0,i.Z)((0,i.Z)({},t),{},{classes:{popper:n}}))}))((0,o.Z)({},"& .".concat(c.Z.tooltip),{maxWidth:500})),h=(0,s.ZP)((function(e){var n=e.className,t=(0,r.Z)(e,p);return(0,d.jsx)(a.Z,(0,i.Z)((0,i.Z)({},t),{},{classes:{popper:n}}))}))((0,o.Z)({},"& .".concat(c.Z.tooltip),{maxWidth:"none"})),f="\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n";function x(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(a.Z,{title:f,children:(0,d.jsx)(l.Z,{sx:{m:1},children:"Default Width [300px]"})}),(0,d.jsx)(u,{title:f,children:(0,d.jsx)(l.Z,{sx:{m:1},children:"Custom Width [500px]"})}),(0,d.jsx)(h,{title:f,children:(0,d.jsx)(l.Z,{sx:{m:1},children:"No wrapping"})})]})}},85375:function(e,n,t){t.r(n);var o=t(44269),i=t(98655),r=t(56993),s=t(24193),l=t(61113),a=t(46417);n.default=function(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,a.jsx)(s.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/tooltips",target:"_blank",role:"button",startIcon:(0,a.jsx)(r.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,a.jsx)(l.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Tooltip"}),(0,a.jsx)(l.Z,{className:"description",children:"Tooltips display informative text when users hover over, focus on, or tap an element."}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:"When activated, Tooltips display a text label identifying an element, such as a description of its function."}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic tooltip"}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"BasicTooltip.js",className:"my-24",iframe:!1,component:t(56095).Z,raw:t(37059)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Positioned tooltips"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The ",(0,a.jsx)("code",{children:"Tooltip"})," has 12 ",(0,a.jsx)("strong",{children:"placement"})," choices. They don't have directional arrows; instead, they rely on motion emanating from the source to convey direction."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"PositionedTooltips.js",className:"my-24",iframe:!1,component:t(10152).Z,raw:t(77688)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the"," ",(0,a.jsx)("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"CustomizedTooltips.js",className:"my-24",iframe:!1,component:t(82695).Z,raw:t(29435)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Arrow tooltips"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["You can use the ",(0,a.jsx)("code",{children:"arrow"})," prop to give your tooltip an arrow indicating which element it refers to."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"ArrowTooltips.js",className:"my-24",iframe:!1,component:t(69279).Z,raw:t(61651)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Custom child element"}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:"The tooltip needs to apply DOM event listeners to its child element. If the child is a custom React element, you need to make sure that it spreads its props to the underlying DOM element."}),(0,a.jsx)(i.Z,{component:"pre",className:"language-jsx",children:' \nconst MyComponent = React.forwardRef(function MyComponent(props, ref) {\n  //  Spread the props to the underlying DOM element.\n  return (\n    <div {...props} ref={ref}>\n      Bin\n    </div>\n  );\n});\n\n// ...\n\n<Tooltip title="Delete">\n  <MyComponent />\n</Tooltip>;\n'}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["You can find a similar concept in the"," ",(0,a.jsx)("a",{href:"/material-ui/guides/composition/#wrapping-components",children:"wrapping components"})," ","guide."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:"If using a class component as a child, you'll also need to ensure that the ref is forwarded to the underlying DOM element. (A ref to the class component itself will not work.)"}),(0,a.jsx)(i.Z,{component:"pre",className:"language-jsx",children:' \nclass MyComponent extends React.Component {\n  render() {\n    const { innerRef, ...props } = this.props;\n    //  Spread the props to the underlying DOM element.\n    return (\n      <div {...props} ref={innerRef}>\n        Bin\n      </div>\n    );\n  }\n}\n\n// Wrap MyComponent to forward the ref as expected by Tooltip\nconst WrappedMyComponent = React.forwardRef(function WrappedMyComponent(props, ref) {\n  return <MyComponent {...props} innerRef={ref} />;\n});\n\n// ...\n\n<Tooltip title="Delete">\n  <WrappedMyComponent />\n</Tooltip>;\n'}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Triggers"}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:"You can define the types of events that cause a tooltip to show."}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The touch action requires a long press due to the ",(0,a.jsx)("code",{children:"enterTouchDelay"})," prop being set to ",(0,a.jsx)("code",{children:"700"}),"ms by default."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"TriggersTooltips.js",className:"my-24",iframe:!1,component:t(76259).Z,raw:t(62135)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled tooltips"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["You can use the ",(0,a.jsx)("code",{children:"open"}),", ",(0,a.jsx)("code",{children:"onOpen"})," and ",(0,a.jsx)("code",{children:"onClose"})," props to control the behavior of the tooltip."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"ControlledTooltips.js",className:"my-24",iframe:!1,component:t(57181).Z,raw:t(57048)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Variable width"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The ",(0,a.jsx)("code",{children:"Tooltip"})," wraps long text by default to make it readable."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"VariableWidth.js",className:"my-24",iframe:!1,component:t(67288).Z,raw:t(46499)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Interactive"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["Tooltips are interactive by default (to pass"," ",(0,a.jsx)("a",{href:"https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus",children:"WCAG 2.1 success criterion 1.4.13"}),"). It won't close when the user hovers over the tooltip before the"," ",(0,a.jsx)("code",{children:"leaveDelay"})," is expired. You can disable this behavior (thus failing the success criterion which is required to reach level AA) by passing ",(0,a.jsx)("code",{children:"disableInteractive"}),"."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"NonInteractiveTooltips.js",className:"my-24",iframe:!1,component:t(82095).Z,raw:t(93911)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Disabled elements"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["By default disabled elements like ",(0,a.jsx)("code",{children:"<button>"})," do not trigger user interactions so a ",(0,a.jsx)("code",{children:"Tooltip"})," will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element, such as a ",(0,a.jsx)("code",{children:"span"}),"."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:":::warning In order to work with Safari, you need at least one display block or flex item below the tooltip wrapper. :::"}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"DisabledTooltips.js",className:"my-24",iframe:!1,component:t(12216).Z,raw:t(31489)})}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:[":::warning If you're not wrapping a MUI component that inherits from"," ",(0,a.jsx)("code",{children:"ButtonBase"}),", for instance, a native ",(0,a.jsx)("code",{children:"<button>"})," element, you should also add the CSS property ",(0,a.jsx)("em",{children:"pointer-events: none;"})," to your element when disabled: :::"]}),(0,a.jsx)(i.Z,{component:"pre",className:"language-jsx",children:" \n<Tooltip title=\"You don't have permission to do this\">\n  <span>\n    <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>\n      A disabled button\n    </button>\n  </span>\n</Tooltip>\n"}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Transitions"}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:"Use a different transition."}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"TransitionsTooltips.js",className:"my-24",iframe:!1,component:t(81084).Z,raw:t(33068)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Follow cursor"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["You can enable the tooltip to follow the cursor by setting"," ",(0,a.jsx)("code",{children:"followCursor={true}"}),"."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"FollowCursorTooltips.js",className:"my-24",iframe:!1,component:t(96812).Z,raw:t(870)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Virtual element"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["In the event you need to implement a custom placement, you can use the ",(0,a.jsx)("code",{children:"anchorEl"})," ","prop: The value of the ",(0,a.jsx)("code",{children:"anchorEl"})," prop can be a reference to a fake DOM element. You need to create an object shaped like the"," ",(0,a.jsx)("a",{href:"https://popper.js.org/docs/v2/virtual-elements/",children:(0,a.jsx)("code",{children:"VirtualElement"})}),"."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"AnchorElTooltips.js",className:"my-24",iframe:!1,component:t(77511).Z,raw:t(69406)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Showing and hiding"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the ",(0,a.jsx)("code",{children:"enterDelay"})," and ",(0,a.jsx)("code",{children:"leaveDelay"})," props, as shown in the Controlled Tooltips demo above."]}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the ",(0,a.jsx)("code",{children:"disableTouchListener"})," ","prop."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"DelayTooltips.js",className:"my-24",iframe:!1,component:t(39450).Z,raw:t(91065)})}),(0,a.jsx)(l.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["(WAI-ARIA:"," ",(0,a.jsx)("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/"}),")"]}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["By default, the tooltip only labels its child element. This is notably different from"," ",(0,a.jsx)("code",{children:"title"})," which can either label ",(0,a.jsx)("strong",{children:"or"})," describe its child depending on whether the child already has a label. For example, in:"]}),(0,a.jsx)(i.Z,{component:"pre",className:"language-html",children:' \n<button title="some more information">A button</button>\n'}),(0,a.jsxs)(l.Z,{className:"mb-40",component:"div",children:["the ",(0,a.jsx)("code",{children:"title"})," acts as an accessible description. If you want the tooltip to act as an accessible description you can pass ",(0,a.jsx)("code",{children:"describeChild"}),". Note that you shouldn't use ",(0,a.jsx)("code",{children:"describeChild"})," if the tooltip provides the only visual label. Otherwise, the child would have no accessible name and the tooltip would violate"," ",(0,a.jsx)("a",{href:"https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html",children:"success criterion 2.5.3 in WCAG 2.1"}),"."]}),(0,a.jsx)(l.Z,{className:"mb-40",component:"div",children:(0,a.jsx)(o.Z,{name:"AccessibilityTooltips.js",className:"my-24",iframe:!1,component:t(52496).Z,raw:t(63644)})})]})}},51997:function(e,n,t){var o=t(64836);n.Z=void 0;var i=o(t(45045)),r=t(46417),s=(0,i.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");n.Z=s},57632:function(e,n,t){var o=t(87462),i=t(63366),r=t(47313),s=t(62242),l=t(19860),a=t(70265),c=t(86983),d=t(46417),m=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],p={entering:{transform:"none"},entered:{transform:"none"}},u=r.forwardRef((function(e,n){var t=(0,l.Z)(),u={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},h=e.addEndListener,f=e.appear,x=void 0===f||f,j=e.children,Z=e.easing,b=e.in,T=e.onEnter,v=e.onEntered,g=e.onEntering,y=e.onExit,w=e.onExited,B=e.onExiting,N=e.style,C=e.timeout,A=void 0===C?u:C,R=e.TransitionComponent,k=void 0===R?s.ZP:R,D=(0,i.Z)(e,m),P=r.useRef(null),G=(0,c.Z)(P,j.ref,n),I=function(e){return function(n){if(e){var t=P.current;void 0===n?e(t):e(t,n)}}},M=I(g),E=I((function(e,n){(0,a.n)(e);var o=(0,a.C)({style:N,timeout:A,easing:Z},{mode:"enter"});e.style.webkitTransition=t.transitions.create("transform",o),e.style.transition=t.transitions.create("transform",o),T&&T(e,n)})),L=I(v),W=I(B),S=I((function(e){var n=(0,a.C)({style:N,timeout:A,easing:Z},{mode:"exit"});e.style.webkitTransition=t.transitions.create("transform",n),e.style.transition=t.transitions.create("transform",n),y&&y(e)})),O=I(w);return(0,d.jsx)(k,(0,o.Z)({appear:x,in:b,nodeRef:P,onEnter:E,onEntered:L,onEntering:M,onExit:S,onExited:O,onExiting:W,addEndListener:function(e){h&&h(P.current,e)},timeout:A},D,{children:function(e,n){return r.cloneElement(j,(0,o.Z)({style:(0,o.Z)({transform:"scale(0)",visibility:"exited"!==e||b?void 0:"hidden"},p[e],N,j.props.style),ref:G},n))}}))}));n.Z=u},63644:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport DeleteIcon from '@mui/icons-material/Delete';\nimport Button from '@mui/material/Button';\nimport IconButton from '@mui/material/IconButton';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function AccessibilityTooltips() {\n  return (\n    <div>\n      <Tooltip title=\"Delete\">\n        <IconButton>\n          <DeleteIcon />\n        </IconButton>\n      </Tooltip>\n      <Tooltip describeChild title=\"Does not add if it already exists.\">\n        <Button>Add</Button>\n      </Tooltip>\n    </div>\n  );\n}\n"},69406:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function AnchorElTooltips() {\n  const positionRef = React.useRef({\n    x: 0,\n    y: 0,\n  });\n  const popperRef = React.useRef(null);\n  const areaRef = React.useRef(null);\n\n  const handleMouseMove = (event) => {\n    positionRef.current = { x: event.clientX, y: event.clientY };\n\n    if (popperRef.current != null) {\n      popperRef.current.update();\n    }\n  };\n\n  return (\n    <Tooltip\n      title=\"Add\"\n      placement=\"top\"\n      arrow\n      PopperProps={{\n        popperRef,\n        anchorEl: {\n          getBoundingClientRect: () => {\n            return new DOMRect(\n              positionRef.current.x,\n              areaRef.current.getBoundingClientRect().y,\n              0,\n              0,\n            );\n          },\n        },\n      }}\n    >\n      <Box\n        ref={areaRef}\n        onMouseMove={handleMouseMove}\n        sx={{\n          bgcolor: 'primary.main',\n          color: 'primary.contrastText',\n          p: 2,\n        }}\n      >\n        Hover\n      </Box>\n    </Tooltip>\n  );\n}\n"},61651:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function ArrowTooltips() {\n  return (\n    <Tooltip title=\"Add\" arrow>\n      <Button>Arrow</Button>\n    </Tooltip>\n  );\n}\n"},37059:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport DeleteIcon from '@mui/icons-material/Delete';\nimport IconButton from '@mui/material/IconButton';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function BasicTooltip() {\n  return (\n    <Tooltip title=\"Delete\">\n      <IconButton>\n        <DeleteIcon />\n      </IconButton>\n    </Tooltip>\n  );\n}\n"},57048:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function ControlledTooltips() {\n  const [open, setOpen] = React.useState(false);\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  return (\n    <Tooltip open={open} onClose={handleClose} onOpen={handleOpen} title=\"Add\">\n      <Button>Controlled</Button>\n    </Tooltip>\n  );\n}\n"},29435:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Button from '@mui/material/Button';\nimport Tooltip, { tooltipClasses } from '@mui/material/Tooltip';\nimport Typography from '@mui/material/Typography';\n\nconst LightTooltip = styled(({ className, ...props }) => (\n  <Tooltip {...props} classes={{ popper: className }} />\n))(({ theme }) => ({\n  [`& .${tooltipClasses.tooltip}`]: {\n    backgroundColor: theme.palette.common.white,\n    color: 'rgba(0, 0, 0, 0.87)',\n    boxShadow: theme.shadows[1],\n    fontSize: 11,\n  },\n}));\n\nconst BootstrapTooltip = styled(({ className, ...props }) => (\n  <Tooltip {...props} arrow classes={{ popper: className }} />\n))(({ theme }) => ({\n  [`& .${tooltipClasses.arrow}`]: {\n    color: theme.palette.common.black,\n  },\n  [`& .${tooltipClasses.tooltip}`]: {\n    backgroundColor: theme.palette.common.black,\n  },\n}));\n\nconst HtmlTooltip = styled(({ className, ...props }) => (\n  <Tooltip {...props} classes={{ popper: className }} />\n))(({ theme }) => ({\n  [`& .${tooltipClasses.tooltip}`]: {\n    backgroundColor: '#f5f5f9',\n    color: 'rgba(0, 0, 0, 0.87)',\n    maxWidth: 220,\n    fontSize: theme.typography.pxToRem(12),\n    border: '1px solid #dadde9',\n  },\n}));\n\nexport default function CustomizedTooltips() {\n  return (\n    <div>\n      <LightTooltip title=\"Add\">\n        <Button>Light</Button>\n      </LightTooltip>\n      <BootstrapTooltip title=\"Add\">\n        <Button>Bootstrap</Button>\n      </BootstrapTooltip>\n      <HtmlTooltip\n        title={\n          <React.Fragment>\n            <Typography color=\"inherit\">Tooltip with HTML</Typography>\n            <em>{\"And here's\"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}\n            {\"It's very engaging. Right?\"}\n          </React.Fragment>\n        }\n      >\n        <Button>HTML</Button>\n      </HtmlTooltip>\n    </div>\n  );\n}\n"},91065:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function DelayTooltips() {\n  return (\n    <Tooltip title=\"Add\" enterDelay={500} leaveDelay={200}>\n      <Button>[500ms, 200ms]</Button>\n    </Tooltip>\n  );\n}\n"},31489:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function DisabledTooltips() {\n  return (\n    <Tooltip title=\"You don't have permission to do this\">\n      <span>\n        <Button disabled>A Disabled Button</Button>\n      </span>\n    </Tooltip>\n  );\n}\n"},870:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function FollowCursorTooltips() {\n  return (\n    <Tooltip title=\"You don't have permission to do this\" followCursor>\n      <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>\n        Disabled Action\n      </Box>\n    </Tooltip>\n  );\n}\n"},93911:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\n\nexport default function NotInteractiveTooltips() {\n  return (\n    <Tooltip title=\"Add\" disableInteractive>\n      <Button>Not interactive</Button>\n    </Tooltip>\n  );\n}\n"},77688:function(e,n,t){t.r(n),n.default='import * as React from \'react\';\nimport Box from \'@mui/material/Box\';\nimport Grid from \'@mui/material/Grid\';\nimport Button from \'@mui/material/Button\';\nimport Tooltip from \'@mui/material/Tooltip\';\n\nexport default function PositionedTooltips() {\n  return (\n    <Box sx={{ width: 500 }}>\n      <Grid container justifyContent="center">\n        <Grid item>\n          <Tooltip title="Add" placement="top-start">\n            <Button>top-start</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="top">\n            <Button>top</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="top-end">\n            <Button>top-end</Button>\n          </Tooltip>\n        </Grid>\n      </Grid>\n      <Grid container justifyContent="center">\n        <Grid item xs={6}>\n          <Tooltip title="Add" placement="left-start">\n            <Button>left-start</Button>\n          </Tooltip>\n          <br />\n          <Tooltip title="Add" placement="left">\n            <Button>left</Button>\n          </Tooltip>\n          <br />\n          <Tooltip title="Add" placement="left-end">\n            <Button>left-end</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item container xs={6} alignItems="flex-end" direction="column">\n          <Grid item>\n            <Tooltip title="Add" placement="right-start">\n              <Button>right-start</Button>\n            </Tooltip>\n          </Grid>\n          <Grid item>\n            <Tooltip title="Add" placement="right">\n              <Button>right</Button>\n            </Tooltip>\n          </Grid>\n          <Grid item>\n            <Tooltip title="Add" placement="right-end">\n              <Button>right-end</Button>\n            </Tooltip>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid container justifyContent="center">\n        <Grid item>\n          <Tooltip title="Add" placement="bottom-start">\n            <Button>bottom-start</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="bottom">\n            <Button>bottom</Button>\n          </Tooltip>\n          <Tooltip title="Add" placement="bottom-end">\n            <Button>bottom-end</Button>\n          </Tooltip>\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'},33068:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\nimport Fade from '@mui/material/Fade';\nimport Zoom from '@mui/material/Zoom';\n\nexport default function TransitionsTooltips() {\n  return (\n    <div>\n      <Tooltip title=\"Add\">\n        <Button>Grow</Button>\n      </Tooltip>\n      <Tooltip\n        TransitionComponent={Fade}\n        TransitionProps={{ timeout: 600 }}\n        title=\"Add\"\n      >\n        <Button>Fade</Button>\n      </Tooltip>\n      <Tooltip TransitionComponent={Zoom} title=\"Add\">\n        <Button>Zoom</Button>\n      </Tooltip>\n    </div>\n  );\n}\n"},62135:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport Grid from '@mui/material/Grid';\nimport Button from '@mui/material/Button';\nimport Tooltip from '@mui/material/Tooltip';\nimport ClickAwayListener from '@mui/material/ClickAwayListener';\n\nexport default function TriggersTooltips() {\n  const [open, setOpen] = React.useState(false);\n\n  const handleTooltipClose = () => {\n    setOpen(false);\n  };\n\n  const handleTooltipOpen = () => {\n    setOpen(true);\n  };\n\n  return (\n    <div>\n      <Grid container justifyContent=\"center\">\n        <Grid item>\n          <Tooltip disableFocusListener title=\"Add\">\n            <Button>Hover or touch</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <Tooltip disableHoverListener title=\"Add\">\n            <Button>Focus or touch</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <Tooltip disableFocusListener disableTouchListener title=\"Add\">\n            <Button>Hover</Button>\n          </Tooltip>\n        </Grid>\n        <Grid item>\n          <ClickAwayListener onClickAway={handleTooltipClose}>\n            <div>\n              <Tooltip\n                PopperProps={{\n                  disablePortal: true,\n                }}\n                onClose={handleTooltipClose}\n                open={open}\n                disableFocusListener\n                disableHoverListener\n                disableTouchListener\n                title=\"Add\"\n              >\n                <Button onClick={handleTooltipOpen}>Click</Button>\n              </Tooltip>\n            </div>\n          </ClickAwayListener>\n        </Grid>\n      </Grid>\n    </div>\n  );\n}\n"},46499:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Button from '@mui/material/Button';\nimport Tooltip, { tooltipClasses } from '@mui/material/Tooltip';\n\nconst CustomWidthTooltip = styled(({ className, ...props }) => (\n  <Tooltip {...props} classes={{ popper: className }} />\n))({\n  [`& .${tooltipClasses.tooltip}`]: {\n    maxWidth: 500,\n  },\n});\n\nconst NoMaxWidthTooltip = styled(({ className, ...props }) => (\n  <Tooltip {...props} classes={{ popper: className }} />\n))({\n  [`& .${tooltipClasses.tooltip}`]: {\n    maxWidth: 'none',\n  },\n});\n\nconst longText = `\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n`;\n\nexport default function VariableWidth() {\n  return (\n    <div>\n      <Tooltip title={longText}>\n        <Button sx={{ m: 1 }}>Default Width [300px]</Button>\n      </Tooltip>\n      <CustomWidthTooltip title={longText}>\n        <Button sx={{ m: 1 }}>Custom Width [500px]</Button>\n      </CustomWidthTooltip>\n      <NoMaxWidthTooltip title={longText}>\n        <Button sx={{ m: 1 }}>No wrapping</Button>\n      </NoMaxWidthTooltip>\n    </div>\n  );\n}\n"}}]);