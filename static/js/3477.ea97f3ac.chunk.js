"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3477],{44269:function(e,n,t){t.d(n,{Z:function(){return N}});var o=t(29439),l=t(98655),a=t(73428),i=t(65280),r=t(5297),s=t(83061),c=t(47313),u=t(17551),m=t(9506),g=t(1413),d=t(45987),f=t(1168),h=t(10223),p=t(30164),x=t(16132),v=t(54097),b=t(19860),j=t(17592),Z=t(70499),T=t(46417),B=["children","name"];function w(e){var n=e.children,t=e.document,o=(0,b.Z)();c.useEffect((function(){t.body.dir=o.direction}),[t,o.direction]);var l=c.useMemo((function(){return(0,p.Z)({key:"iframe-demo-".concat(o.direction),prepend:!0,container:t.head,stylisPlugins:"rtl"===o.direction?[h.Z]:[]})}),[t,o.direction]),a=c.useCallback((function(){return t.defaultView}),[t]);return(0,T.jsx)(v.StyleSheetManager,{target:t.head,stylisPlugins:"rtl"===o.direction?[h.Z]:[],children:(0,T.jsxs)(x.C,{value:l,children:[(0,T.jsx)(Z.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),c.cloneElement(n,{window:a})]})})}var A=(0,j.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function F(e){var n,t=e.children,l=e.name,a=(0,d.Z)(e,B),i="".concat(l," demo"),r=c.useRef(null),s=c.useReducer((function(){return!0}),!1),u=(0,o.Z)(s,2),m=u[0],h=u[1];c.useEffect((function(){var e=r.current.contentDocument;null==e||"complete"!==e.readyState||m||h()}),[m]);var p=null===(n=r.current)||void 0===n?void 0:n.contentDocument;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(A,(0,g.Z)({onLoad:h,ref:r,title:i},a)),!1!==m?f.createPortal((0,T.jsx)(w,{document:p,children:t}),p.body):null]})}var I=c.memo(F),y=t(56993);function C(e){var n=(0,c.useState)(e.currentTabIndex),t=(0,o.Z)(n,2),g=t[0],d=t[1],f=e.component,h=e.raw,p=e.iframe,x=e.className,v=e.name;return(0,T.jsxs)(a.Z,{className:(0,s.default)(x,"shadow"),sx:{backgroundColor:function(e){return(0,u._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,T.jsx)(m.Z,{sx:{backgroundColor:function(e){return(0,u._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,T.jsxs)(r.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:g,onChange:function(e,n){d(n)},textColor:"secondary",indicatorColor:"secondary",children:[f&&(0,T.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,T.jsx)(y.Z,{children:"heroicons-outline:eye"})}),h&&(0,T.jsx)(i.Z,{classes:{root:"min-w-64"},icon:(0,T.jsx)(y.Z,{children:"heroicons-outline:code"})})]})}),(0,T.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,T.jsx)("div",{className:0===g?"flex flex-1 max-w-full":"hidden",children:f&&(p?(0,T.jsx)(I,{name:v,children:(0,T.jsx)(f,{})}):(0,T.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,T.jsx)(f,{})}))}),(0,T.jsx)("div",{className:1===g?"flex flex-1":"hidden",children:(0,c.useMemo)((function(){return h&&1===g?(0,T.jsx)("div",{className:"flex flex-1",children:(0,T.jsx)(l.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:h.default})}):null}),[h,g])})]})]})}C.defaultProps={name:"",currentTabIndex:0};var N=C},93649:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(29439),l=t(47313),a=t(3789),i=t(78770),r=t(46417);function s(){var e=l.useState("web"),n=(0,o.Z)(e,2),t=n[0],s=n[1];return(0,r.jsxs)(i.Z,{color:"primary",value:t,exclusive:!0,onChange:function(e,n){s(n)},"aria-label":"Platform",children:[(0,r.jsx)(a.Z,{value:"web",children:"Web"}),(0,r.jsx)(a.Z,{value:"android",children:"Android"}),(0,r.jsx)(a.Z,{value:"ios",children:"iOS"})]})}},75290:function(e,n,t){t.d(n,{Z:function(){return Z}});var o=t(29439),l=t(47313),a=t(17592),i=t(43111),r=t(3249),s=t(74231),c=t(74644),u=t(76384),m=t(80638),g=t(65242),d=t(92976),f=t(54406),h=t(19536),p=t(70501),x=t(3789),v=t(78770),b=t(46417),j=(0,a.ZP)(v.Z)((function(e){var n=e.theme;return{"& .MuiToggleButtonGroup-grouped":{margin:n.spacing(.5),border:0,"&.Mui-disabled":{border:0},"&:not(:first-of-type)":{borderRadius:n.shape.borderRadius},"&:first-of-type":{borderRadius:n.shape.borderRadius}}}}));function Z(){var e=l.useState("left"),n=(0,o.Z)(e,2),t=n[0],a=n[1],v=l.useState((function(){return["italic"]})),Z=(0,o.Z)(v,2),T=Z[0],B=Z[1];return(0,b.jsx)("div",{children:(0,b.jsxs)(p.Z,{elevation:0,sx:{display:"flex",border:function(e){return"1px solid ".concat(e.palette.divider)},flexWrap:"wrap"},children:[(0,b.jsxs)(j,{size:"small",value:t,exclusive:!0,onChange:function(e,n){a(n)},"aria-label":"text alignment",children:[(0,b.jsx)(x.Z,{value:"left","aria-label":"left aligned",children:(0,b.jsx)(i.Z,{})}),(0,b.jsx)(x.Z,{value:"center","aria-label":"centered",children:(0,b.jsx)(r.Z,{})}),(0,b.jsx)(x.Z,{value:"right","aria-label":"right aligned",children:(0,b.jsx)(s.Z,{})}),(0,b.jsx)(x.Z,{value:"justify","aria-label":"justified",disabled:!0,children:(0,b.jsx)(c.Z,{})})]}),(0,b.jsx)(h.Z,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),(0,b.jsxs)(j,{size:"small",value:T,onChange:function(e,n){B(n)},"aria-label":"text formatting",children:[(0,b.jsx)(x.Z,{value:"bold","aria-label":"bold",children:(0,b.jsx)(u.Z,{})}),(0,b.jsx)(x.Z,{value:"italic","aria-label":"italic",children:(0,b.jsx)(m.Z,{})}),(0,b.jsx)(x.Z,{value:"underlined","aria-label":"underlined",children:(0,b.jsx)(g.Z,{})}),(0,b.jsxs)(x.Z,{value:"color","aria-label":"color",disabled:!0,children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)(f.Z,{})]})]})]})})}},37698:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(29439),l=t(47313),a=t(68728),i=t(3789),r=t(46417);function s(){var e=l.useState(!1),n=(0,o.Z)(e,2),t=n[0],s=n[1];return(0,r.jsx)(i.Z,{value:"check",selected:t,onChange:function(){s(!t)},children:(0,r.jsx)(a.Z,{})})}},49724:function(e,n,t){t.d(n,{Z:function(){return h}});var o=t(29439),l=t(47313),a=t(43111),i=t(3249),r=t(74231),s=t(27196),c=t(31792),u=t(19857),m=t(42832),g=t(3789),d=t(78770),f=t(46417);function h(){var e=l.useState("left"),n=(0,o.Z)(e,2),t=n[0],h=n[1],p=l.useState((function(){return["phone"]})),x=(0,o.Z)(p,2),v=x[0],b=x[1];return(0,f.jsxs)(m.Z,{direction:"row",spacing:4,children:[(0,f.jsxs)(d.Z,{value:t,exclusive:!0,onChange:function(e,n){null!==n&&h(n)},"aria-label":"text alignment",children:[(0,f.jsx)(g.Z,{value:"left","aria-label":"left aligned",children:(0,f.jsx)(a.Z,{})}),(0,f.jsx)(g.Z,{value:"center","aria-label":"centered",children:(0,f.jsx)(i.Z,{})}),(0,f.jsx)(g.Z,{value:"right","aria-label":"right aligned",children:(0,f.jsx)(r.Z,{})})]}),(0,f.jsxs)(d.Z,{value:v,onChange:function(e,n){n.length&&b(n)},"aria-label":"device",children:[(0,f.jsx)(g.Z,{value:"laptop","aria-label":"laptop",children:(0,f.jsx)(s.Z,{})}),(0,f.jsx)(g.Z,{value:"tv","aria-label":"tv",children:(0,f.jsx)(c.Z,{})}),(0,f.jsx)(g.Z,{value:"phone","aria-label":"phone",children:(0,f.jsx)(u.Z,{})})]})]})}},15908:function(e,n,t){t.d(n,{Z:function(){return f}});var o=t(1413),l=t(29439),a=t(47313),i=t(43111),r=t(3249),s=t(74231),c=t(74644),u=t(42832),m=t(3789),g=t(78770),d=t(46417);function f(){var e=a.useState("left"),n=(0,l.Z)(e,2),t=n[0],f=n[1],h=[(0,d.jsx)(m.Z,{value:"left",children:(0,d.jsx)(i.Z,{})},"left"),(0,d.jsx)(m.Z,{value:"center",children:(0,d.jsx)(r.Z,{})},"center"),(0,d.jsx)(m.Z,{value:"right",children:(0,d.jsx)(s.Z,{})},"right"),(0,d.jsx)(m.Z,{value:"justify",children:(0,d.jsx)(c.Z,{})},"justify")],p={value:t,onChange:function(e,n){f(n)},exclusive:!0};return(0,d.jsxs)(u.Z,{spacing:2,alignItems:"center",children:[(0,d.jsx)(g.Z,(0,o.Z)((0,o.Z)({size:"small"},p),{},{"aria-label":"Small sizes",children:h})),(0,d.jsx)(g.Z,(0,o.Z)((0,o.Z)({},p),{},{"aria-label":"Medium sizes",children:h})),(0,d.jsx)(g.Z,(0,o.Z)((0,o.Z)({size:"large"},p),{},{"aria-label":"Large sizes",children:h}))]})}},5598:function(e,n,t){t.d(n,{Z:function(){return g}});var o=t(29439),l=t(47313),a=t(43111),i=t(3249),r=t(74231),s=t(74644),c=t(3789),u=t(78770),m=t(46417);function g(){var e=l.useState("left"),n=(0,o.Z)(e,2),t=n[0],g=n[1];return(0,m.jsxs)(u.Z,{value:t,exclusive:!0,onChange:function(e,n){g(n)},"aria-label":"text alignment",children:[(0,m.jsx)(c.Z,{value:"left","aria-label":"left aligned",children:(0,m.jsx)(a.Z,{})}),(0,m.jsx)(c.Z,{value:"center","aria-label":"centered",children:(0,m.jsx)(i.Z,{})}),(0,m.jsx)(c.Z,{value:"right","aria-label":"right aligned",children:(0,m.jsx)(r.Z,{})}),(0,m.jsx)(c.Z,{value:"justify","aria-label":"justified",disabled:!0,children:(0,m.jsx)(s.Z,{})})]})}},95358:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(29439),l=t(47313),a=t(76384),i=t(80638),r=t(65242),s=t(92976),c=t(54406),u=t(3789),m=t(78770),g=t(46417);function d(){var e=l.useState((function(){return["bold","italic"]})),n=(0,o.Z)(e,2),t=n[0],d=n[1];return(0,g.jsxs)(m.Z,{value:t,onChange:function(e,n){d(n)},"aria-label":"text formatting",children:[(0,g.jsx)(u.Z,{value:"bold","aria-label":"bold",children:(0,g.jsx)(a.Z,{})}),(0,g.jsx)(u.Z,{value:"italic","aria-label":"italic",children:(0,g.jsx)(i.Z,{})}),(0,g.jsx)(u.Z,{value:"underlined","aria-label":"underlined",children:(0,g.jsx)(r.Z,{})}),(0,g.jsxs)(u.Z,{value:"color","aria-label":"color",disabled:!0,children:[(0,g.jsx)(s.Z,{}),(0,g.jsx)(c.Z,{})]})]})}},20306:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(29439),l=t(47313),a=t(30961),i=t(76396),r=t(9883),s=t(3789),c=t(78770),u=t(46417);function m(){var e=l.useState("list"),n=(0,o.Z)(e,2),t=n[0],m=n[1];return(0,u.jsxs)(c.Z,{orientation:"vertical",value:t,exclusive:!0,onChange:function(e,n){m(n)},children:[(0,u.jsx)(s.Z,{value:"list","aria-label":"list",children:(0,u.jsx)(a.Z,{})}),(0,u.jsx)(s.Z,{value:"module","aria-label":"module",children:(0,u.jsx)(i.Z,{})}),(0,u.jsx)(s.Z,{value:"quilt","aria-label":"quilt",children:(0,u.jsx)(r.Z,{})})]})}},54915:function(e,n,t){t.r(n);var o=t(44269),l=t(98655),a=t(56993),i=t(24193),r=t(61113),s=t(46417);n.default=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,s.jsx)(i.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/toggle-button",target:"_blank",role:"button",startIcon:(0,s.jsx)(a.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,s.jsx)(r.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Toggle Button"}),(0,s.jsx)(r.Z,{className:"description",children:"A Toggle Button can be used to group related options."}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["To emphasize groups of related Toggle buttons, a group should share a common container. The"," ",(0,s.jsx)("code",{children:"ToggleButtonGroup"})," controls the selected state of its child buttons when given its own ",(0,s.jsx)("code",{children:"value"})," prop."]}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Exclusive selection"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:"With exclusive selection, selecting one option deselects any other."}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:"In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time."}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:[(0,s.jsx)("strong",{children:"Note"}),": Exclusive selection does not enforce that a button must be active. For that effect see ",(0,s.jsx)("a",{href:"#enforce-value-set",children:"enforce value set"}),"."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ToggleButtons.js",className:"my-24",iframe:!1,component:t(5598).Z,raw:t(65043)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Multiple selection"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:"Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected."}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ToggleButtonsMultiple.js",className:"my-24",iframe:!1,component:t(95358).Z,raw:t(60147)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Size"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["For larger or smaller buttons, use the ",(0,s.jsx)("code",{children:"size"})," prop."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ToggleButtonSizes.js",className:"my-24",iframe:!1,component:t(15908).Z,raw:t(39706)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Color"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ColorToggleButton.js",className:"my-24",iframe:!1,component:t(93649).Z,raw:t(36106)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Vertical buttons"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["The buttons can be stacked vertically with the ",(0,s.jsx)("code",{children:"orientation"}),' prop set to "vertical".']}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"VerticalToggleButtons.js",className:"my-24",iframe:!1,component:t(20306).Z,raw:t(47794)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Enforce value set"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:"If you want to enforce that at least one button must be active, you can adapt your handleChange function."}),(0,s.jsx)(l.Z,{component:"pre",className:"language-jsx",children:" \nconst handleAlignment = (event, newAlignment) => {\n  if (newAlignment !== null) {\n    setAlignment(newAlignment);\n  }\n};\n\nconst handleDevices = (event, newDevices) => {\n  if (newDevices.length) {\n    setDevices(newDevices);\n  }\n};\n"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"ToggleButtonNotEmpty.js",className:"my-24",iframe:!1,component:t(49724).Z,raw:t(38815)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Standalone toggle button"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"StandaloneToggleButton.js",className:"my-24",iframe:!1,component:t(37698).Z,raw:t(51673)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Customization"}),(0,s.jsxs)(r.Z,{className:"mb-40",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the"," ",(0,s.jsx)("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,s.jsx)(o.Z,{name:"CustomizedDividers.js",className:"my-24",iframe:!1,component:t(75290).Z,raw:t(72172)})}),(0,s.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,s.jsx)(r.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["ToggleButtonGroup has ",(0,s.jsx)("code",{children:'role="group"'}),". You should provide an accessible label with ",(0,s.jsx)("code",{children:'aria-label="label"'}),", ",(0,s.jsx)("code",{children:'aria-labelledby="id"'})," or"," ",(0,s.jsx)("code",{children:"<label>"}),"."]}),(0,s.jsxs)("li",{children:["ToggleButton sets ",(0,s.jsx)("code",{children:'aria-pressed="<bool>"'})," according to the button state. You should label each button with ",(0,s.jsx)("code",{children:"aria-label"}),"."]})]}),(0,s.jsx)(r.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),(0,s.jsx)(r.Z,{className:"mb-40",component:"div",children:"At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior follows standard keyboard semantics."})]})}},36106:function(e,n,t){t.r(n),n.default='import * as React from \'react\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';\n\nexport default function ColorToggleButton() {\n  const [alignment, setAlignment] = React.useState(\'web\');\n\n  const handleChange = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <ToggleButtonGroup\n      color="primary"\n      value={alignment}\n      exclusive\n      onChange={handleChange}\n      aria-label="Platform"\n    >\n      <ToggleButton value="web">Web</ToggleButton>\n      <ToggleButton value="android">Android</ToggleButton>\n      <ToggleButton value="ios">iOS</ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n'},72172:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';\nimport FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';\nimport FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';\nimport FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';\nimport FormatBoldIcon from '@mui/icons-material/FormatBold';\nimport FormatItalicIcon from '@mui/icons-material/FormatItalic';\nimport FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';\nimport FormatColorFillIcon from '@mui/icons-material/FormatColorFill';\nimport ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';\nimport Divider from '@mui/material/Divider';\nimport Paper from '@mui/material/Paper';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nconst StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({\n  '& .MuiToggleButtonGroup-grouped': {\n    margin: theme.spacing(0.5),\n    border: 0,\n    '&.Mui-disabled': {\n      border: 0,\n    },\n    '&:not(:first-of-type)': {\n      borderRadius: theme.shape.borderRadius,\n    },\n    '&:first-of-type': {\n      borderRadius: theme.shape.borderRadius,\n    },\n  },\n}));\n\nexport default function CustomizedDividers() {\n  const [alignment, setAlignment] = React.useState('left');\n  const [formats, setFormats] = React.useState(() => ['italic']);\n\n  const handleFormat = (event, newFormats) => {\n    setFormats(newFormats);\n  };\n\n  const handleAlignment = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <div>\n      <Paper\n        elevation={0}\n        sx={{\n          display: 'flex',\n          border: (theme) => `1px solid ${theme.palette.divider}`,\n          flexWrap: 'wrap',\n        }}\n      >\n        <StyledToggleButtonGroup\n          size=\"small\"\n          value={alignment}\n          exclusive\n          onChange={handleAlignment}\n          aria-label=\"text alignment\"\n        >\n          <ToggleButton value=\"left\" aria-label=\"left aligned\">\n            <FormatAlignLeftIcon />\n          </ToggleButton>\n          <ToggleButton value=\"center\" aria-label=\"centered\">\n            <FormatAlignCenterIcon />\n          </ToggleButton>\n          <ToggleButton value=\"right\" aria-label=\"right aligned\">\n            <FormatAlignRightIcon />\n          </ToggleButton>\n          <ToggleButton value=\"justify\" aria-label=\"justified\" disabled>\n            <FormatAlignJustifyIcon />\n          </ToggleButton>\n        </StyledToggleButtonGroup>\n        <Divider flexItem orientation=\"vertical\" sx={{ mx: 0.5, my: 1 }} />\n        <StyledToggleButtonGroup\n          size=\"small\"\n          value={formats}\n          onChange={handleFormat}\n          aria-label=\"text formatting\"\n        >\n          <ToggleButton value=\"bold\" aria-label=\"bold\">\n            <FormatBoldIcon />\n          </ToggleButton>\n          <ToggleButton value=\"italic\" aria-label=\"italic\">\n            <FormatItalicIcon />\n          </ToggleButton>\n          <ToggleButton value=\"underlined\" aria-label=\"underlined\">\n            <FormatUnderlinedIcon />\n          </ToggleButton>\n          <ToggleButton value=\"color\" aria-label=\"color\" disabled>\n            <FormatColorFillIcon />\n            <ArrowDropDownIcon />\n          </ToggleButton>\n        </StyledToggleButtonGroup>\n      </Paper>\n    </div>\n  );\n}\n"},51673:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport CheckIcon from '@mui/icons-material/Check';\nimport ToggleButton from '@mui/material/ToggleButton';\n\nexport default function StandaloneToggleButton() {\n  const [selected, setSelected] = React.useState(false);\n\n  return (\n    <ToggleButton\n      value=\"check\"\n      selected={selected}\n      onChange={() => {\n        setSelected(!selected);\n      }}\n    >\n      <CheckIcon />\n    </ToggleButton>\n  );\n}\n"},38815:function(e,n,t){t.r(n),n.default='import * as React from \'react\';\nimport FormatAlignLeftIcon from \'@mui/icons-material/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@mui/icons-material/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@mui/icons-material/FormatAlignRight\';\nimport LaptopIcon from \'@mui/icons-material/Laptop\';\nimport TvIcon from \'@mui/icons-material/Tv\';\nimport PhoneAndroidIcon from \'@mui/icons-material/PhoneAndroid\';\nimport Stack from \'@mui/material/Stack\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';\n\nexport default function ToggleButtonNotEmpty() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n  const [devices, setDevices] = React.useState(() => [\'phone\']);\n\n  const handleAlignment = (event, newAlignment) => {\n    if (newAlignment !== null) {\n      setAlignment(newAlignment);\n    }\n  };\n\n  const handleDevices = (event, newDevices) => {\n    if (newDevices.length) {\n      setDevices(newDevices);\n    }\n  };\n\n  return (\n    <Stack direction="row" spacing={4}>\n      <ToggleButtonGroup\n        value={alignment}\n        exclusive\n        onChange={handleAlignment}\n        aria-label="text alignment"\n      >\n        <ToggleButton value="left" aria-label="left aligned">\n          <FormatAlignLeftIcon />\n        </ToggleButton>\n        <ToggleButton value="center" aria-label="centered">\n          <FormatAlignCenterIcon />\n        </ToggleButton>\n        <ToggleButton value="right" aria-label="right aligned">\n          <FormatAlignRightIcon />\n        </ToggleButton>\n      </ToggleButtonGroup>\n\n      <ToggleButtonGroup\n        value={devices}\n        onChange={handleDevices}\n        aria-label="device"\n      >\n        <ToggleButton value="laptop" aria-label="laptop">\n          <LaptopIcon />\n        </ToggleButton>\n        <ToggleButton value="tv" aria-label="tv">\n          <TvIcon />\n        </ToggleButton>\n        <ToggleButton value="phone" aria-label="phone">\n          <PhoneAndroidIcon />\n        </ToggleButton>\n      </ToggleButtonGroup>\n    </Stack>\n  );\n}\n'},39706:function(e,n,t){t.r(n),n.default='import * as React from \'react\';\nimport FormatAlignLeftIcon from \'@mui/icons-material/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@mui/icons-material/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@mui/icons-material/FormatAlignRight\';\nimport FormatAlignJustifyIcon from \'@mui/icons-material/FormatAlignJustify\';\nimport Stack from \'@mui/material/Stack\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';\n\nexport default function ToggleButtonSizes() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n\n  const handleChange = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  const children = [\n    <ToggleButton value="left" key="left">\n      <FormatAlignLeftIcon />\n    </ToggleButton>,\n    <ToggleButton value="center" key="center">\n      <FormatAlignCenterIcon />\n    </ToggleButton>,\n    <ToggleButton value="right" key="right">\n      <FormatAlignRightIcon />\n    </ToggleButton>,\n    <ToggleButton value="justify" key="justify">\n      <FormatAlignJustifyIcon />\n    </ToggleButton>,\n  ];\n\n  const control = {\n    value: alignment,\n    onChange: handleChange,\n    exclusive: true,\n  };\n\n  return (\n    <Stack spacing={2} alignItems="center">\n      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">\n        {children}\n      </ToggleButtonGroup>\n      <ToggleButtonGroup {...control} aria-label="Medium sizes">\n        {children}\n      </ToggleButtonGroup>\n      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">\n        {children}\n      </ToggleButtonGroup>\n    </Stack>\n  );\n}\n'},65043:function(e,n,t){t.r(n),n.default='import * as React from \'react\';\nimport FormatAlignLeftIcon from \'@mui/icons-material/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@mui/icons-material/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@mui/icons-material/FormatAlignRight\';\nimport FormatAlignJustifyIcon from \'@mui/icons-material/FormatAlignJustify\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport ToggleButtonGroup from \'@mui/material/ToggleButtonGroup\';\n\nexport default function ToggleButtons() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n\n  const handleAlignment = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <ToggleButtonGroup\n      value={alignment}\n      exclusive\n      onChange={handleAlignment}\n      aria-label="text alignment"\n    >\n      <ToggleButton value="left" aria-label="left aligned">\n        <FormatAlignLeftIcon />\n      </ToggleButton>\n      <ToggleButton value="center" aria-label="centered">\n        <FormatAlignCenterIcon />\n      </ToggleButton>\n      <ToggleButton value="right" aria-label="right aligned">\n        <FormatAlignRightIcon />\n      </ToggleButton>\n      <ToggleButton value="justify" aria-label="justified" disabled>\n        <FormatAlignJustifyIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n'},60147:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport FormatBoldIcon from '@mui/icons-material/FormatBold';\nimport FormatItalicIcon from '@mui/icons-material/FormatItalic';\nimport FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';\nimport FormatColorFillIcon from '@mui/icons-material/FormatColorFill';\nimport ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nexport default function ToggleButtonsMultiple() {\n  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);\n\n  const handleFormat = (event, newFormats) => {\n    setFormats(newFormats);\n  };\n\n  return (\n    <ToggleButtonGroup\n      value={formats}\n      onChange={handleFormat}\n      aria-label=\"text formatting\"\n    >\n      <ToggleButton value=\"bold\" aria-label=\"bold\">\n        <FormatBoldIcon />\n      </ToggleButton>\n      <ToggleButton value=\"italic\" aria-label=\"italic\">\n        <FormatItalicIcon />\n      </ToggleButton>\n      <ToggleButton value=\"underlined\" aria-label=\"underlined\">\n        <FormatUnderlinedIcon />\n      </ToggleButton>\n      <ToggleButton value=\"color\" aria-label=\"color\" disabled>\n        <FormatColorFillIcon />\n        <ArrowDropDownIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"},47794:function(e,n,t){t.r(n),n.default="import * as React from 'react';\nimport ViewListIcon from '@mui/icons-material/ViewList';\nimport ViewModuleIcon from '@mui/icons-material/ViewModule';\nimport ViewQuiltIcon from '@mui/icons-material/ViewQuilt';\nimport ToggleButton from '@mui/material/ToggleButton';\nimport ToggleButtonGroup from '@mui/material/ToggleButtonGroup';\n\nexport default function VerticalToggleButtons() {\n  const [view, setView] = React.useState('list');\n\n  const handleChange = (event, nextView) => {\n    setView(nextView);\n  };\n\n  return (\n    <ToggleButtonGroup\n      orientation=\"vertical\"\n      value={view}\n      exclusive\n      onChange={handleChange}\n    >\n      <ToggleButton value=\"list\" aria-label=\"list\">\n        <ViewListIcon />\n      </ToggleButton>\n      <ToggleButton value=\"module\" aria-label=\"module\">\n        <ViewModuleIcon />\n      </ToggleButton>\n      <ToggleButton value=\"quilt\" aria-label=\"quilt\">\n        <ViewQuiltIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"}}]);