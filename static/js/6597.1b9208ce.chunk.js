"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[6597],{44269:function(e,n,o){o.d(n,{Z:function(){return F}});var i=o(29439),t=o(98655),a=o(73428),r=o(65280),c=o(5297),l=o(83061),s=o(47313),m=o(17551),d=o(9506),p=o(1413),u=o(45987),h=o(1168),x=o(10223),f=o(30164),S=o(16132),j=o(54097),Z=o(19860),b=o(17592),v=o(70499),D=o(46417),g=["children","name"];function y(e){var n=e.children,o=e.document,i=(0,Z.Z)();s.useEffect((function(){o.body.dir=i.direction}),[o,i.direction]);var t=s.useMemo((function(){return(0,f.Z)({key:"iframe-demo-".concat(i.direction),prepend:!0,container:o.head,stylisPlugins:"rtl"===i.direction?[x.Z]:[]})}),[o,i.direction]),a=s.useCallback((function(){return o.defaultView}),[o]);return(0,D.jsx)(j.StyleSheetManager,{target:o.head,stylisPlugins:"rtl"===i.direction?[x.Z]:[],children:(0,D.jsxs)(S.C,{value:t,children:[(0,D.jsx)(v.Z,{styles:function(){return{html:{fontSize:"62.5%"}}}}),s.cloneElement(n,{window:a})]})})}var C=(0,b.ZP)("iframe")((function(e){var n=e.theme;return{backgroundColor:n.palette.background.default,flexGrow:1,height:400,border:0,boxShadow:n.shadows[1]}}));function I(e){var n,o=e.children,t=e.name,a=(0,u.Z)(e,g),r="".concat(t," demo"),c=s.useRef(null),l=s.useReducer((function(){return!0}),!1),m=(0,i.Z)(l,2),d=m[0],x=m[1];s.useEffect((function(){var e=c.current.contentDocument;null==e||"complete"!==e.readyState||d||x()}),[d]);var f=null===(n=c.current)||void 0===n?void 0:n.contentDocument;return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(C,(0,p.Z)({onLoad:x,ref:c,title:r},a)),!1!==d?h.createPortal((0,D.jsx)(y,{document:f,children:o}),f.body):null]})}var w=s.memo(I),N=o(56993);function P(e){var n=(0,s.useState)(e.currentTabIndex),o=(0,i.Z)(n,2),p=o[0],u=o[1],h=e.component,x=e.raw,f=e.iframe,S=e.className,j=e.name;return(0,D.jsxs)(a.Z,{className:(0,l.default)(S,"shadow"),sx:{backgroundColor:function(e){return(0,m._j)(e.palette.background.paper,"light"===e.palette.mode?.01:.1)}},children:[(0,D.jsx)(d.Z,{sx:{backgroundColor:function(e){return(0,m._j)(e.palette.background.paper,"light"===e.palette.mode?.02:.2)}},children:(0,D.jsxs)(c.Z,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,n){u(n)},textColor:"secondary",indicatorColor:"secondary",children:[h&&(0,D.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,D.jsx)(N.Z,{children:"heroicons-outline:eye"})}),x&&(0,D.jsx)(r.Z,{classes:{root:"min-w-64"},icon:(0,D.jsx)(N.Z,{children:"heroicons-outline:code"})})]})}),(0,D.jsxs)("div",{className:"flex justify-center max-w-full relative",children:[(0,D.jsx)("div",{className:0===p?"flex flex-1 max-w-full":"hidden",children:h&&(f?(0,D.jsx)(w,{name:j,children:(0,D.jsx)(h,{})}):(0,D.jsx)("div",{className:"p-24 flex flex-1 justify-center max-w-full",children:(0,D.jsx)(h,{})}))}),(0,D.jsx)("div",{className:1===p?"flex flex-1":"hidden",children:(0,s.useMemo)((function(){return x&&1===p?(0,D.jsx)("div",{className:"flex flex-1",children:(0,D.jsx)(t.Z,{component:"pre",className:"language-javascript w-full",sx:{borderRadius:"0!important"},children:x.default})}):null}),[x,p])})]})]})}P.defaultProps={name:"",currentTabIndex:0};var F=P},10854:function(e,n,o){o.d(n,{Z:function(){return u}});o(47313);var i=o(9506),t=o(60876),a=o(70246),r=o(11686),c=o(86426),l=o(83121),s=o(50324),m=o(46845),d=o(46417),p=[{icon:(0,d.jsx)(c.Z,{}),name:"Copy"},{icon:(0,d.jsx)(l.Z,{}),name:"Save"},{icon:(0,d.jsx)(s.Z,{}),name:"Print"},{icon:(0,d.jsx)(m.Z,{}),name:"Share"}];function u(){return(0,d.jsx)(i.Z,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:(0,d.jsx)(t.Z,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:(0,d.jsx)(a.Z,{}),children:p.map((function(e){return(0,d.jsx)(r.Z,{icon:e.icon,tooltipTitle:e.name},e.name)}))})})}},2445:function(e,n,o){o.d(n,{Z:function(){return x}});var i=o(29439),t=o(47313),a=o(9506),r=o(60876),c=o(70246),l=o(11686),s=o(86426),m=o(83121),d=o(50324),p=o(46845),u=o(46417),h=[{icon:(0,u.jsx)(s.Z,{}),name:"Copy"},{icon:(0,u.jsx)(m.Z,{}),name:"Save"},{icon:(0,u.jsx)(d.Z,{}),name:"Print"},{icon:(0,u.jsx)(p.Z,{}),name:"Share"}];function x(){var e=t.useState(!1),n=(0,i.Z)(e,2),o=n[0],s=n[1],m=function(){return s(!1)};return(0,u.jsx)(a.Z,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:(0,u.jsx)(r.Z,{ariaLabel:"SpeedDial controlled open example",sx:{position:"absolute",bottom:16,right:16},icon:(0,u.jsx)(c.Z,{}),onClose:m,onOpen:function(){return s(!0)},open:o,children:h.map((function(e){return(0,u.jsx)(l.Z,{icon:e.icon,tooltipTitle:e.name,onClick:m},e.name)}))})})}},11918:function(e,n,o){o.d(n,{Z:function(){return h}});o(47313);var i=o(9506),t=o(60876),a=o(70246),r=o(11686),c=o(86426),l=o(83121),s=o(50324),m=o(46845),d=o(65954),p=o(46417),u=[{icon:(0,p.jsx)(c.Z,{}),name:"Copy"},{icon:(0,p.jsx)(l.Z,{}),name:"Save"},{icon:(0,p.jsx)(s.Z,{}),name:"Print"},{icon:(0,p.jsx)(m.Z,{}),name:"Share"}];function h(){return(0,p.jsx)(i.Z,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:(0,p.jsx)(t.Z,{ariaLabel:"SpeedDial openIcon example",sx:{position:"absolute",bottom:16,right:16},icon:(0,p.jsx)(a.Z,{openIcon:(0,p.jsx)(d.Z,{})}),children:u.map((function(e){return(0,p.jsx)(r.Z,{icon:e.icon,tooltipTitle:e.name},e.name)}))})})}},26576:function(e,n,o){o.d(n,{Z:function(){return g}});var i=o(29439),t=o(47313),a=o(17592),r=o(9506),c=o(1550),l=o(83929),s=o(5178),m=o(31058),d=o(54299),p=o(67426),u=o(60876),h=o(70246),x=o(11686),f=o(86426),S=o(83121),j=o(50324),Z=o(46845),b=o(46417),v=(0,a.ZP)(u.Z)((function(e){var n=e.theme;return{position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:n.spacing(2),right:n.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:n.spacing(2),left:n.spacing(2)}}})),D=[{icon:(0,b.jsx)(f.Z,{}),name:"Copy"},{icon:(0,b.jsx)(S.Z,{}),name:"Save"},{icon:(0,b.jsx)(j.Z,{}),name:"Print"},{icon:(0,b.jsx)(Z.Z,{}),name:"Share"}];function g(){var e=t.useState("up"),n=(0,i.Z)(e,2),o=n[0],a=n[1],u=t.useState(!1),f=(0,i.Z)(u,2),S=f[0],j=f[1];return(0,b.jsxs)(r.Z,{sx:{transform:"translateZ(0px)",flexGrow:1},children:[(0,b.jsx)(l.Z,{control:(0,b.jsx)(p.Z,{checked:S,onChange:function(e){j(e.target.checked)},color:"primary"}),label:"Hidden"}),(0,b.jsxs)(c.Z,{component:"fieldset",sx:{mt:1,display:"flex"},children:[(0,b.jsx)(s.Z,{component:"legend",children:"Direction"}),(0,b.jsxs)(d.Z,{"aria-label":"direction",name:"direction",value:o,onChange:function(e){a(e.target.value)},row:!0,children:[(0,b.jsx)(l.Z,{value:"up",control:(0,b.jsx)(m.Z,{}),label:"Up"}),(0,b.jsx)(l.Z,{value:"right",control:(0,b.jsx)(m.Z,{}),label:"Right"}),(0,b.jsx)(l.Z,{value:"down",control:(0,b.jsx)(m.Z,{}),label:"Down"}),(0,b.jsx)(l.Z,{value:"left",control:(0,b.jsx)(m.Z,{}),label:"Left"})]})]}),(0,b.jsx)(r.Z,{sx:{position:"relative",mt:3,height:320},children:(0,b.jsx)(v,{ariaLabel:"SpeedDial playground example",hidden:S,icon:(0,b.jsx)(h.Z,{}),direction:o,children:D.map((function(e){return(0,b.jsx)(x.Z,{icon:e.icon,tooltipTitle:e.name},e.name)}))})})]})}},10934:function(e,n,o){o.d(n,{Z:function(){return f}});var i=o(29439),t=o(47313),a=o(9506),r=o(91554),c=o(60876),l=o(70246),s=o(11686),m=o(86426),d=o(83121),p=o(50324),u=o(46845),h=o(46417),x=[{icon:(0,h.jsx)(m.Z,{}),name:"Copy"},{icon:(0,h.jsx)(d.Z,{}),name:"Save"},{icon:(0,h.jsx)(p.Z,{}),name:"Print"},{icon:(0,h.jsx)(u.Z,{}),name:"Share"}];function f(){var e=t.useState(!1),n=(0,i.Z)(e,2),o=n[0],m=n[1],d=function(){return m(!1)};return(0,h.jsxs)(a.Z,{sx:{height:330,transform:"translateZ(0px)",flexGrow:1},children:[(0,h.jsx)(r.Z,{open:o}),(0,h.jsx)(c.Z,{ariaLabel:"SpeedDial tooltip example",sx:{position:"absolute",bottom:16,right:16},icon:(0,h.jsx)(l.Z,{}),onClose:d,onOpen:function(){return m(!0)},open:o,children:x.map((function(e){return(0,h.jsx)(s.Z,{icon:e.icon,tooltipTitle:e.name,tooltipOpen:!0,onClick:d},e.name)}))})]})}},86597:function(e,n,o){o.r(n);var i=o(44269),t=o(56993),a=o(24193),r=o(61113),c=o(46417);n.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"flex flex-1 grow-0 items-center justify-end",children:(0,c.jsx)(a.Z,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/speed-dial",target:"_blank",role:"button",startIcon:(0,c.jsx)(t.Z,{children:"heroicons-outline:external-link"}),children:"Reference"})}),(0,c.jsx)(r.Z,{className:"text-40 my-16 font-700",component:"h1",children:"Speed Dial"}),(0,c.jsx)(r.Z,{className:"description",children:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"If more than six actions are needed, something other than a FAB should be used to present them."}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Basic speed dial"}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"The floating action button can display related actions."}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(i.Z,{name:"BasicSpeedDial.js",className:"my-24",iframe:!1,component:o(10854).Z,raw:o(68827)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Playground"}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(i.Z,{name:"PlaygroundSpeedDial.js",className:"my-24",iframe:!1,component:o(26576).Z,raw:o(68525)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Controlled speed dial"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["The open state of the component can be controlled with the ",(0,c.jsx)("code",{children:"open"}),"/",(0,c.jsx)("code",{children:"onOpen"}),"/",(0,c.jsx)("code",{children:"onClose"})," props."]}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(i.Z,{name:"ControlledOpenSpeedDial.js",className:"my-24",iframe:!1,component:o(2445).Z,raw:o(15032)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Custom close icon"}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["You can provide an alternate icon for the closed and open states using the ",(0,c.jsx)("code",{children:"icon"})," ","and ",(0,c.jsx)("code",{children:"openIcon"})," props of the ",(0,c.jsx)("code",{children:"SpeedDialIcon"})," component."]}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(i.Z,{name:"OpenIconSpeedDial.js",className:"my-24",iframe:!1,component:o(11918).Z,raw:o(42422)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Persistent action tooltips"}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:"The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices."}),(0,c.jsxs)(r.Z,{className:"mb-40",component:"div",children:["It is enabled here across all devices for demo purposes, but in production it could use the"," ",(0,c.jsx)("code",{children:"isTouch"})," logic to conditionally set the prop."]}),(0,c.jsx)(r.Z,{className:"mb-40",component:"div",children:(0,c.jsx)(i.Z,{name:"SpeedDialTooltipOpen.js",className:"my-24",iframe:!1,component:o(10934).Z,raw:o(87891)})}),(0,c.jsx)(r.Z,{className:"text-32 mt-40 mb-10 font-700",component:"h2",children:"Accessibility"}),(0,c.jsx)(r.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),(0,c.jsx)(r.Z,{className:"text-16 mt-16 mb-10",component:"h4",children:"Required"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:["You should provide an ",(0,c.jsx)("code",{children:"ariaLabel"})," for the speed dial component."]}),(0,c.jsxs)("li",{children:["You should provide a ",(0,c.jsx)("code",{children:"tooltipTitle"})," for each speed dial action."]})]}),(0,c.jsx)(r.Z,{className:"text-16 mt-16 mb-10",component:"h4",children:"Provided"}),(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:["The Fab has ",(0,c.jsx)("code",{children:"aria-haspopup"}),", ",(0,c.jsx)("code",{children:"aria-expanded"})," and"," ",(0,c.jsx)("code",{children:"aria-controls"})," attributes."]}),(0,c.jsxs)("li",{children:["The speed dial actions container has ",(0,c.jsx)("code",{children:'role="menu"'})," and"," ",(0,c.jsx)("code",{children:"aria-orientation"})," set according to the direction."]}),(0,c.jsxs)("li",{children:["The speed dial actions have ",(0,c.jsx)("code",{children:'role="menuitem"'}),", and an"," ",(0,c.jsx)("code",{children:"aria-describedby"})," attribute that references the associated tooltip."]})]}),(0,c.jsx)(r.Z,{className:"text-20 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"The speed dial opens on focus."}),(0,c.jsx)("li",{children:"The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial open state."}),(0,c.jsx)("li",{children:"The cursor keys move focus to the next or previous speed dial action. (Note that any cursor direction can be used initially to open the speed dial. This enables the expected behavior for the actual or perceived orientation of the speed dial, for example for a screen reader user who perceives the speed dial as a drop-down menu.)"}),(0,c.jsx)("li",{children:"The Escape key closes the speed dial and, if a speed dial action was focused, returns focus to the Fab."})]})]})}},68827:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function BasicSpeedDial() {\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial basic example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},15032:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function ControlledOpenSpeedDial() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial controlled open example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n        onClose={handleClose}\n        onOpen={handleOpen}\n        open={open}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n            onClick={handleClose}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},42422:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\nimport EditIcon from '@mui/icons-material/Edit';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function OpenIconSpeedDial() {\n  return (\n    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <SpeedDial\n        ariaLabel=\"SpeedDial openIcon example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon openIcon={<EditIcon />} />}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"},68525:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport { styled } from '@mui/material/styles';\nimport Box from '@mui/material/Box';\nimport FormControl from '@mui/material/FormControl';\nimport FormControlLabel from '@mui/material/FormControlLabel';\nimport FormLabel from '@mui/material/FormLabel';\nimport Radio from '@mui/material/Radio';\nimport RadioGroup from '@mui/material/RadioGroup';\nimport Switch from '@mui/material/Switch';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({\n  position: 'absolute',\n  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {\n    bottom: theme.spacing(2),\n    right: theme.spacing(2),\n  },\n  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {\n    top: theme.spacing(2),\n    left: theme.spacing(2),\n  },\n}));\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function PlaygroundSpeedDial() {\n  const [direction, setDirection] = React.useState('up');\n  const [hidden, setHidden] = React.useState(false);\n\n  const handleDirectionChange = (event) => {\n    setDirection(event.target.value);\n  };\n\n  const handleHiddenChange = (event) => {\n    setHidden(event.target.checked);\n  };\n\n  return (\n    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <FormControlLabel\n        control={\n          <Switch checked={hidden} onChange={handleHiddenChange} color=\"primary\" />\n        }\n        label=\"Hidden\"\n      />\n      <FormControl component=\"fieldset\" sx={{ mt: 1, display: 'flex' }}>\n        <FormLabel component=\"legend\">Direction</FormLabel>\n        <RadioGroup\n          aria-label=\"direction\"\n          name=\"direction\"\n          value={direction}\n          onChange={handleDirectionChange}\n          row\n        >\n          <FormControlLabel value=\"up\" control={<Radio />} label=\"Up\" />\n          <FormControlLabel value=\"right\" control={<Radio />} label=\"Right\" />\n          <FormControlLabel value=\"down\" control={<Radio />} label=\"Down\" />\n          <FormControlLabel value=\"left\" control={<Radio />} label=\"Left\" />\n        </RadioGroup>\n      </FormControl>\n      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>\n        <StyledSpeedDial\n          ariaLabel=\"SpeedDial playground example\"\n          hidden={hidden}\n          icon={<SpeedDialIcon />}\n          direction={direction}\n        >\n          {actions.map((action) => (\n            <SpeedDialAction\n              key={action.name}\n              icon={action.icon}\n              tooltipTitle={action.name}\n            />\n          ))}\n        </StyledSpeedDial>\n      </Box>\n    </Box>\n  );\n}\n"},87891:function(e,n,o){o.r(n),n.default="import * as React from 'react';\nimport Box from '@mui/material/Box';\nimport Backdrop from '@mui/material/Backdrop';\nimport SpeedDial from '@mui/material/SpeedDial';\nimport SpeedDialIcon from '@mui/material/SpeedDialIcon';\nimport SpeedDialAction from '@mui/material/SpeedDialAction';\nimport FileCopyIcon from '@mui/icons-material/FileCopyOutlined';\nimport SaveIcon from '@mui/icons-material/Save';\nimport PrintIcon from '@mui/icons-material/Print';\nimport ShareIcon from '@mui/icons-material/Share';\n\nconst actions = [\n  { icon: <FileCopyIcon />, name: 'Copy' },\n  { icon: <SaveIcon />, name: 'Save' },\n  { icon: <PrintIcon />, name: 'Print' },\n  { icon: <ShareIcon />, name: 'Share' },\n];\n\nexport default function SpeedDialTooltipOpen() {\n  const [open, setOpen] = React.useState(false);\n  const handleOpen = () => setOpen(true);\n  const handleClose = () => setOpen(false);\n\n  return (\n    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>\n      <Backdrop open={open} />\n      <SpeedDial\n        ariaLabel=\"SpeedDial tooltip example\"\n        sx={{ position: 'absolute', bottom: 16, right: 16 }}\n        icon={<SpeedDialIcon />}\n        onClose={handleClose}\n        onOpen={handleOpen}\n        open={open}\n      >\n        {actions.map((action) => (\n          <SpeedDialAction\n            key={action.name}\n            icon={action.icon}\n            tooltipTitle={action.name}\n            tooltipOpen\n            onClick={handleClose}\n          />\n        ))}\n      </SpeedDial>\n    </Box>\n  );\n}\n"}}]);