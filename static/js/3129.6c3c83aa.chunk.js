"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3129],{73129:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(29439),s=t(47619),c=t(24193),a=t(19860),i=t(65280),l=t(5297),o=t(61113),d=t(23132),u=t(80380),m=t(47313),h=t(22408),x=t(58467),p=t(2135),f=t(69649),j=t(56993),Z=t(38768),g=t(88701),v=t(83168),N=t(73428),b=t(17592),y=t(93405),w=t(66835),A=t(57861),C=t(70941),P=t(23477),k=t(24076),T=t(46417),S=(0,b.ZP)("div")((function(e){var r=e.theme;return{"& table ":{"& th:first-of-type, & td:first-of-type":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}},"& .divider":{width:1,backgroundColor:r.palette.divider,height:144},"& .seller":{backgroundColor:r.palette.primary.dark,color:r.palette.getContrastText(r.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:r.palette.getContrastText(r.palette.primary.dark),opacity:.5}}}})),I=function(e){var r=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return(0,T.jsx)(S,{className:"grow shrink-0 p-0",children:e.order&&(0,T.jsx)(N.Z,{className:"w-xl mx-auto shadow-0",children:(0,T.jsxs)(y.Z,{className:"p-88 print:p-0",children:[(0,T.jsx)(o.Z,{color:"text.secondary",className:"mb-32",children:e.order.date}),(0,T.jsxs)("div",{className:"flex justify-between",children:[(0,T.jsxs)("div",{children:[(0,T.jsx)("table",{className:"mb-16",children:(0,T.jsx)("tbody",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{className:"pb-4",children:(0,T.jsx)(o.Z,{className:"font-light",variant:"h6",color:"text.secondary",children:"INVOICE"})}),(0,T.jsx)("td",{className:"pb-4 px-8",children:(0,T.jsx)(o.Z,{className:"font-light",variant:"h6",color:"inherit",children:e.order.reference})})]})})}),(0,T.jsx)(o.Z,{color:"text.secondary",children:"".concat(e.order.customer.firstName," ").concat(e.order.customer.lastName)}),e.order.customer.invoiceAddress.address&&(0,T.jsx)(o.Z,{color:"text.secondary",children:e.order.customer.invoiceAddress.address}),e.order.customer.phone&&(0,T.jsx)(o.Z,{color:"text.secondary",children:e.order.customer.phone}),e.order.customer.email&&(0,T.jsx)(o.Z,{color:"text.secondary",children:e.order.customer.email})]}),(0,T.jsxs)("div",{className:"seller flex items-center p-16",children:[(0,T.jsx)("img",{className:"w-80",src:"assets/images/logo/logo.svg",alt:"logo"}),(0,T.jsx)("div",{className:"divider mx-8 h-96"}),(0,T.jsxs)("div",{className:"px-8",children:[(0,T.jsx)(o.Z,{color:"inherit",children:"FUSE INC."}),(0,T.jsx)(o.Z,{color:"inherit",children:"2810 Country Club Road Cranford, NJ 07016"}),(0,T.jsx)(o.Z,{color:"inherit",children:"+66 123 455 87"}),(0,T.jsx)(o.Z,{color:"inherit",children:"hello@fuseinc.com"}),(0,T.jsx)(o.Z,{color:"inherit",children:"www.fuseinc.com"})]})]})]}),(0,T.jsxs)("div",{className:"mt-64",children:[(0,T.jsxs)(w.Z,{className:"simple",children:[(0,T.jsx)(P.Z,{children:(0,T.jsxs)(k.Z,{children:[(0,T.jsx)(C.Z,{children:"PRODUCT"}),(0,T.jsx)(C.Z,{children:"PRICE"}),(0,T.jsx)(C.Z,{align:"right",children:"QUANTITY"}),(0,T.jsx)(C.Z,{align:"right",children:"TOTAL"})]})}),(0,T.jsx)(A.Z,{children:e.order.products.map((function(e){return(0,T.jsxs)(k.Z,{children:[(0,T.jsx)(C.Z,{children:(0,T.jsx)(o.Z,{variant:"subtitle1",children:e.name})}),(0,T.jsx)(C.Z,{align:"right",children:r.format(e.price)}),(0,T.jsx)(C.Z,{align:"right",children:e.quantity}),(0,T.jsx)(C.Z,{align:"right",children:r.format(e.price*e.quantity)})]},e.id)}))})]}),(0,T.jsx)(w.Z,{className:"simple mt-32",children:(0,T.jsxs)(A.Z,{children:[(0,T.jsxs)(k.Z,{children:[(0,T.jsx)(C.Z,{children:(0,T.jsx)(o.Z,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:"SUBTOTAL"})}),(0,T.jsx)(C.Z,{align:"right",children:(0,T.jsx)(o.Z,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:r.format(e.order.subtotal)})})]}),(0,T.jsxs)(k.Z,{children:[(0,T.jsx)(C.Z,{children:(0,T.jsx)(o.Z,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:"TAX"})}),(0,T.jsx)(C.Z,{align:"right",children:(0,T.jsx)(o.Z,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:r.format(e.order.tax)})})]}),(0,T.jsxs)(k.Z,{children:[(0,T.jsx)(C.Z,{children:(0,T.jsx)(o.Z,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:"DISCOUNT"})}),(0,T.jsx)(C.Z,{align:"right",children:(0,T.jsx)(o.Z,{className:"font-normal",variant:"subtitle1",color:"text.secondary",children:r.format(e.order.discount)})})]}),(0,T.jsxs)(k.Z,{children:[(0,T.jsx)(C.Z,{children:(0,T.jsx)(o.Z,{className:"font-light",variant:"h4",color:"text.secondary",children:"TOTAL"})}),(0,T.jsx)(C.Z,{align:"right",children:(0,T.jsx)(o.Z,{className:"font-light",variant:"h4",color:"text.secondary",children:r.format(e.order.total)})})]})]})})]}),(0,T.jsxs)("div",{className:"mt-96",children:[(0,T.jsx)(o.Z,{className:"mb-24 print:mb-12",variant:"body1",children:"Please pay within 15 days. Thank you for your business."}),(0,T.jsxs)("div",{className:"flex",children:[(0,T.jsx)("div",{className:"shrink-0",children:(0,T.jsx)("img",{className:"w-32",src:"assets/images/logo/logo.svg",alt:"logo"})}),(0,T.jsx)(o.Z,{className:"font-normal mb-64 px-24",variant:"caption",color:"text.secondary",children:"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."})]})]})]})})})},O=(0,m.memo)(I),U=t(52769),R=t(41872),D=t(98492),E=t(63585),M=t(49709),F=t(6306),q=t(84697),z=t(57608);function L(e){return(0,T.jsx)(M.Z,{title:e.text,placement:"top",children:(0,T.jsx)(j.Z,{className:"text-red",children:"heroicons-outline:location-marker"})})}var H=function(){var e=(0,h.v9)(v.zT),r=(0,m.useState)("shipping"),t=(0,n.Z)(r,2),s=t[0],c=t[1];return(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"pb-48",children:[(0,T.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,T.jsx)(j.Z,{color:"action",children:"heroicons-outline:user-circle"}),(0,T.jsx)(o.Z,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Customer"})]}),(0,T.jsxs)("div",{className:"mb-24",children:[(0,T.jsx)("div",{className:"table-responsive mb-48",children:(0,T.jsxs)("table",{className:"simple",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Name"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Email"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Phone"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Company"})})]})}),(0,T.jsx)("tbody",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:(0,T.jsxs)("div",{className:"flex items-center",children:[(0,T.jsx)(E.Z,{src:e.customer.avatar}),(0,T.jsx)(o.Z,{className:"truncate mx-8",children:"".concat(e.customer.firstName," ").concat(e.customer.lastName)})]})}),(0,T.jsx)("td",{children:(0,T.jsx)(o.Z,{className:"truncate",children:e.customer.email})}),(0,T.jsx)("td",{children:(0,T.jsx)(o.Z,{className:"truncate",children:e.customer.phone})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.customer.company})})]})})]})}),(0,T.jsxs)(U.Z,{className:"border-0 shadow-0 overflow-hidden",expanded:"shipping"===s,onChange:function(){return c("shipping"!==s&&"shipping")},children:[(0,T.jsx)(D.Z,{expandIcon:(0,T.jsx)(F.Z,{}),classes:{root:"border border-solid rounded-16 mb-16"},children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Shipping Address"})}),(0,T.jsxs)(R.Z,{className:"flex flex-col md:flex-row -mx-8",children:[(0,T.jsx)(o.Z,{className:"w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16",children:e.customer.shippingAddress.address}),(0,T.jsx)("div",{className:"w-full h-320 rounded-16 overflow-hidden mx-8",children:(0,T.jsx)(q.ZP,{bootstrapURLKeys:{key:""},defaultZoom:15,defaultCenter:[e.customer.shippingAddress.lat,e.customer.shippingAddress.lng],children:(0,T.jsx)(L,{text:e.customer.shippingAddress.address,lat:e.customer.shippingAddress.lat,lng:e.customer.shippingAddress.lng})})})]})]}),(0,T.jsxs)(U.Z,{className:"shadow-0 border-0 overflow-hidden",expanded:"invoice"===s,onChange:function(){return c("invoice"!==s&&"invoice")},children:[(0,T.jsx)(D.Z,{expandIcon:(0,T.jsx)(F.Z,{}),classes:{root:"border border-solid rounded-16 mb-16"},children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Invoice Address"})}),(0,T.jsxs)(R.Z,{className:"flex flex-col md:flex-row -mx-8",children:[(0,T.jsx)(o.Z,{className:"w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16",children:e.customer.invoiceAddress.address}),(0,T.jsx)("div",{className:"w-full h-320 rounded-16 overflow-hidden mx-8",children:(0,T.jsx)(q.ZP,{bootstrapURLKeys:{key:""},defaultZoom:15,defaultCenter:[e.customer.invoiceAddress.lat,e.customer.invoiceAddress.lng],children:(0,T.jsx)(L,{text:e.customer.invoiceAddress.address,lat:e.customer.invoiceAddress.lat,lng:e.customer.invoiceAddress.lng})})})]})]})]})]}),(0,T.jsxs)("div",{className:"pb-48",children:[(0,T.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,T.jsx)(j.Z,{color:"action",children:"heroicons-outline:clock"}),(0,T.jsx)(o.Z,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Order Status"})]}),(0,T.jsx)("div",{className:"table-responsive",children:(0,T.jsxs)("table",{className:"simple",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Status"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Updated On"})})]})}),(0,T.jsx)("tbody",{children:e.status.map((function(e){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:(0,T.jsx)(z.Z,{name:e.name})}),(0,T.jsx)("td",{children:e.date})]},e.id)}))})]})})]}),(0,T.jsxs)("div",{className:"pb-48",children:[(0,T.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,T.jsx)(j.Z,{color:"action",children:"heroicons-outline:currency-dollar"}),(0,T.jsx)(o.Z,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Payment"})]}),(0,T.jsx)("div",{className:"table-responsive",children:(0,T.jsxs)("table",{className:"simple",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"TransactionID"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Payment Method"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Amount"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Date"})})]})}),(0,T.jsx)("tbody",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.payment.transactionId})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.payment.method})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.payment.amount})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.payment.date})})]})})]})})]}),(0,T.jsxs)("div",{className:"pb-48",children:[(0,T.jsxs)("div",{className:"pb-16 flex items-center",children:[(0,T.jsx)(j.Z,{color:"action",children:"heroicons-outline:truck"}),(0,T.jsx)(o.Z,{className:"h2 mx-12 font-medium",color:"text.secondary",children:"Shipping"})]}),(0,T.jsx)("div",{className:"table-responsive",children:(0,T.jsxs)("table",{className:"simple",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Tracking Code"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Carrier"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Weight"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Fee"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Date"})})]})}),(0,T.jsx)("tbody",{children:e.shippingDetails.map((function(e){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.tracking})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.carrier})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.weight})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.fee})}),(0,T.jsx)("td",{children:(0,T.jsx)("span",{className:"truncate",children:e.date})})]},e.date)}))})]})})]})]})};var B=function(){var e=(0,h.v9)(v.zT);return(0,T.jsx)("div",{className:"table-responsive",children:(0,T.jsxs)("table",{className:"simple",children:[(0,T.jsx)("thead",{children:(0,T.jsxs)("tr",{children:[(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"ID"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Image"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Name"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Price"})}),(0,T.jsx)("th",{children:(0,T.jsx)(o.Z,{className:"font-semibold",children:"Quantity"})})]})}),(0,T.jsx)("tbody",{children:e.products.map((function(e){return(0,T.jsxs)("tr",{children:[(0,T.jsx)("td",{className:"w-64",children:e.id}),(0,T.jsx)("td",{className:"w-80",children:(0,T.jsx)("img",{className:"product-image",src:e.image,alt:"product"})}),(0,T.jsx)("td",{children:(0,T.jsx)(o.Z,{component:p.rU,to:"/apps/e-commerce/products/".concat(e.id),className:"truncate",style:{color:"inherit",textDecoration:"underline"},children:e.name})}),(0,T.jsx)("td",{className:"w-64 text-right",children:(0,T.jsxs)("span",{className:"truncate",children:["$",e.price]})}),(0,T.jsx)("td",{className:"w-64 text-right",children:(0,T.jsx)("span",{className:"truncate",children:e.quantity})})]},e.id)}))})]})})};var _=(0,d.Z)("eCommerceApp",g.Z)((function(e){var r=(0,h.I0)(),t=(0,h.v9)(v.zT),d=(0,a.Z)(),g=(0,Z.Z)((function(e){return e.breakpoints.down("lg")})),N=(0,x.UO)(),b=N.orderId,y=(0,m.useState)(0),w=(0,n.Z)(y,2),A=w[0],C=w[1],P=(0,m.useState)(!1),k=(0,n.Z)(P,2),S=k[0],I=k[1];return(0,f.KW)((function(){r((0,v.co)(b)).then((function(e){e.payload||I(!0)}))}),[r,N]),(0,m.useEffect)((function(){return function(){r((0,v.H8)()),I(!1)}}),[r]),S?(0,T.jsxs)(u.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},className:"flex flex-col flex-1 items-center justify-center h-full",children:[(0,T.jsx)(o.Z,{color:"text.secondary",variant:"h5",children:"There is no such order!"}),(0,T.jsx)(c.Z,{className:"mt-24",component:p.rU,variant:"outlined",to:"/apps/e-commerce/orders",color:"inherit",children:"Go to Orders Page"})]}):(0,T.jsx)(s.Z,{header:t&&(0,T.jsxs)("div",{className:"flex flex-1 flex-col items-center sm:items-start py-32 px-24 md:px-32",children:[(0,T.jsx)(u.E.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},children:(0,T.jsxs)(o.Z,{className:"flex items-center sm:mb-12",component:p.rU,role:"button",to:"/apps/e-commerce/orders",color:"inherit",children:[(0,T.jsx)(j.Z,{size:20,children:"ltr"===d.direction?"heroicons-outline:arrow-sm-left":"heroicons-outline:arrow-sm-right"}),(0,T.jsx)("span",{className:"mx-4 font-medium",children:"Orders"})]})}),(0,T.jsxs)(u.E.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1,transition:{delay:.3}},className:"flex flex-col items-center sm:items-start min-w-0 items-center sm:items-start",children:[(0,T.jsx)(o.Z,{className:"text-20 truncate font-semibold",children:"Order ".concat(t.reference)}),(0,T.jsx)(o.Z,{variant:"caption",className:"font-medium",children:"From ".concat(t.customer.firstName," ").concat(t.customer.lastName)})]})]}),content:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(l.Z,{value:A,onChange:function(e,r){C(r)},indicatorColor:"secondary",textColor:"secondary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64 border-b-1"},children:[(0,T.jsx)(i.Z,{className:"h-64",label:"Order Details"}),(0,T.jsx)(i.Z,{className:"h-64",label:"Products"}),(0,T.jsx)(i.Z,{className:"h-64",label:"Invoice"})]}),t&&(0,T.jsxs)("div",{className:"p-16 sm:p-24 max-w-3xl w-full",children:[0===A&&(0,T.jsx)(H,{}),1===A&&(0,T.jsx)(B,{}),2===A&&(0,T.jsx)(O,{order:t})]})]}),scroll:g?"normal":"content"})}))},57608:function(e,r,t){var n=t(58970),s=t(83061),c=t(46417),a=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];r.Z=function(e){return(0,c.jsx)("div",{className:(0,s.default)("inline text-12 font-semibold py-4 px-12 rounded-full truncate",n.Z.find(a,{name:e.name}).color),children:e.name})}},88701:function(e,r,t){var n=t(9038),s=t(83168),c=t(74604),a=t(40471),i=t(60397),l=(0,n.UY)({products:i.ZP,product:a.ZP,orders:c.ZP,order:s.ZP});r.Z=l},83168:function(e,r,t){t.d(r,{H8:function(){return m},co:function(){return o},zT:function(){return h}});var n,s=t(4942),c=t(74165),a=t(15861),i=t(80827),l=t(56573),o=(0,i.hg)("eCommerceApp/order/getOrder",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r){var t,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/api/ecommerce/orders/".concat(r));case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),d=(0,i.hg)("eCommerceApp/order/saveOrder",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r){var t,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.put("/api/ecommerce/orders",r);case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),u=(0,i.oM)({name:"eCommerceApp/order",initialState:null,reducers:{resetOrder:function(){return null}},extraReducers:(n={},(0,s.Z)(n,o.fulfilled,(function(e,r){return r.payload})),(0,s.Z)(n,d.fulfilled,(function(e,r){return r.payload})),n)}),m=u.actions.resetOrder,h=function(e){return e.eCommerceApp.order};r.ZP=u.reducer},74604:function(e,r,t){t.d(r,{AU:function(){return o},ny:function(){return h},uN:function(){return p},xn:function(){return f},zH:function(){return d}});var n,s=t(4942),c=t(74165),a=t(15861),i=t(80827),l=t(56573),o=(0,i.hg)("eCommerceApp/orders/getOrders",(0,a.Z)((0,c.Z)().mark((function e(){var r,t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/api/ecommerce/orders");case 2:return r=e.sent,e.next=5,r.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),d=(0,i.hg)("eCommerceApp/orders/removeOrders",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r,t){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.getState,e.next=3,l.Z.delete("/api/ecommerce/orders",{data:r});case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),u=(0,i.HF)({}),m=u.getSelectors((function(e){return e.eCommerceApp.orders})),h=m.selectAll,x=(m.selectById,(0,i.oM)({name:"eCommerceApp/orders",initialState:u.getInitialState({searchText:""}),reducers:{setOrdersSearchText:{reducer:function(e,r){e.searchText=r.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},(0,s.Z)(n,o.fulfilled,u.setAll),(0,s.Z)(n,d.fulfilled,(function(e,r){return u.removeMany(e,r.payload)})),n)})),p=x.actions.setOrdersSearchText,f=function(e){return e.eCommerceApp.orders.searchText};r.ZP=x.reducer},40471:function(e,r,t){t.d(r,{AC:function(){return p},Fn:function(){return j},gg:function(){return m},kh:function(){return u},ms:function(){return f},wv:function(){return d}});var n,s=t(4942),c=t(74165),a=t(15861),i=t(80827),l=t(56573),o=t(34814),d=(0,i.hg)("eCommerceApp/product/getProduct",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r){var t,n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/api/ecommerce/products/".concat(r));case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",void 0===n?null:n);case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),u=(0,i.hg)("eCommerceApp/product/removeProduct",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r,t){var n,s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,n=t.getState,s=n().eCommerceApp.product.id,e.next=4,l.Z.delete("/api/ecommerce/products/".concat(s));case 4:return e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),m=(0,i.hg)("eCommerceApp/product/saveProduct",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r,t){var n,s,a,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,n=t.getState,s=n().eCommerceApp.id,e.next=4,l.Z.put("/api/ecommerce/products/".concat(s),r);case 4:return a=e.sent,e.next=7,a.data;case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,i.oM)({name:"eCommerceApp/product",initialState:null,reducers:{resetProduct:function(){return null},newProduct:{reducer:function(e,r){return r.payload},prepare:function(e){return{payload:{id:o.Z.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0}}}}},extraReducers:(n={},(0,s.Z)(n,d.fulfilled,(function(e,r){return r.payload})),(0,s.Z)(n,m.fulfilled,(function(e,r){return r.payload})),(0,s.Z)(n,u.fulfilled,(function(e,r){return null})),n)}),x=h.actions,p=x.newProduct,f=x.resetProduct,j=function(e){return e.eCommerceApp.product};r.ZP=h.reducer},60397:function(e,r,t){t.d(r,{$0:function(){return d},Lm:function(){return f},Xp:function(){return o},c5:function(){return p},nR:function(){return h}});var n,s=t(4942),c=t(74165),a=t(15861),i=t(80827),l=t(56573),o=(0,i.hg)("eCommerceApp/products/getProducts",(0,a.Z)((0,c.Z)().mark((function e(){var r,t;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("/api/ecommerce/products");case 2:return r=e.sent,e.next=5,r.data;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})))),d=(0,i.hg)("eCommerceApp/products",function(){var e=(0,a.Z)((0,c.Z)().mark((function e(r,t){return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch,t.getState,e.next=3,l.Z.delete("/api/ecommerce/products",{data:r});case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),u=(0,i.HF)({}),m=u.getSelectors((function(e){return e.eCommerceApp.products})),h=m.selectAll,x=(m.selectById,(0,i.oM)({name:"eCommerceApp/products",initialState:u.getInitialState({searchText:""}),reducers:{setProductsSearchText:{reducer:function(e,r){e.searchText=r.payload},prepare:function(e){return{payload:e.target.value||""}}}},extraReducers:(n={},(0,s.Z)(n,o.fulfilled,u.setAll),(0,s.Z)(n,d.fulfilled,(function(e,r){return u.removeMany(e,r.payload)})),n)})),p=x.actions.setProductsSearchText,f=function(e){return e.eCommerceApp.products.searchText};r.ZP=x.reducer},6306:function(e,r,t){var n=t(64836);r.Z=void 0;var s=n(t(45045)),c=t(46417),a=(0,s.default)((0,c.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");r.Z=a}}]);