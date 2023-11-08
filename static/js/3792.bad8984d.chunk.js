"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[3792],{53792:function(t,r,e){e.d(r,{C:function(){return b},G:function(){return g},a:function(){return Z},b:function(){return W},d:function(){return m},h:function(){return k}});var n=e(29439),a=e(37762),c=e(93433),s=e(1413),o=e(74165),u=e(15861),i=e(15671),p=e(43144),f=e(4942),h=e(43414),v=e(35867),d=e(18383),l=e(26646);function m(t,r){return(0,h.aj)(h.bj.parse(t.abi),r)}function k(t,r){return t in r.readContract.functions}var b=function(){function t(r,e,n){var a=this;(0,i.Z)(this,t),(0,f.Z)(this,"featureName",h.c_.name),(0,f.Z)(this,"set",(0,v.c)(function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r){var e,n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._parseAndUploadMetadata(r);case 2:if(e=t.sent,n=a.contractWrapper,!a.supportsContractMetadata(n)){t.next=8;break}return t.abrupt("return",v.T.fromContractWrapper({contractWrapper:a.contractWrapper,method:"setContractURI",args:[e],parse:function(t){return{receipt:t,data:a.get}}}));case 8:throw new h.x(h.c_);case 9:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,f.Z)(this,"update",(0,v.c)(function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a.set,t.t1=s.Z,t.t2=s.Z,t.t3={},t.next=6,a.get();case 6:return t.t4=t.sent,t.t5=(0,t.t2)(t.t3,t.t4),t.t6=r,t.t7=(0,t.t1)(t.t5,t.t6),t.next=12,t.t0.prepare.call(t.t0,t.t7);case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.schema=e,this.storage=n}return(0,p.Z)(t,[{key:"parseOutputMetadata",value:function(t){return this.schema.output.parseAsync(t)}},{key:"parseInputMetadata",value:function(t){return this.schema.input.parseAsync(t)}},{key:"get",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(){var r,e,n,a,c,s,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.supportsContractMetadata(this.contractWrapper)){t.next=8;break}return t.next=3,this.contractWrapper.read("contractURI",[]);case 3:if(!(e=t.sent)||!e.includes("://")){t.next=8;break}return t.next=7,this.storage.downloadJSON(e);case 7:r=t.sent;case 8:if(r){t.next=42;break}if(t.prev=9,t.prev=10,!k("name",this.contractWrapper)){t.next=15;break}return t.next=14,this.contractWrapper.read("name",[]);case 14:c=t.sent;case 15:t.next=19;break;case 17:t.prev=17,t.t0=t.catch(10);case 19:if(t.prev=19,!k("symbol",this.contractWrapper)){t.next=24;break}return t.next=23,this.contractWrapper.read("symbol",[]);case 23:s=t.sent;case 24:t.next=28;break;case 26:t.prev=26,t.t1=t.catch(19);case 28:return t.prev=28,t.next=31,(0,h.J)(this.contractWrapper.address,this.contractWrapper.getProvider(),this.storage,this.contractWrapper.options);case 31:u=t.sent,t.next=36;break;case 34:t.prev=34,t.t2=t.catch(28);case 36:r={name:c||(null===(n=u)||void 0===n?void 0:n.name),symbol:s,description:null===(a=u)||void 0===a?void 0:a.info.title},t.next=42;break;case 39:throw t.prev=39,t.t3=t.catch(9),new Error("Could not fetch contract metadata");case 42:return t.abrupt("return",this.parseOutputMetadata(r));case 43:case"end":return t.stop()}}),t,this,[[9,39],[10,17],[19,26],[28,34]])})));return function(){return t.apply(this,arguments)}}()},{key:"_parseAndUploadMetadata",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r){var e;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.parseInputMetadata(r);case 2:return e=t.sent,t.abrupt("return",this.storage.upload(e));case 4:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"supportsContractMetadata",value:function(t){return m(t,"ContractMetadata")}}]),t}(),Z=function(){function t(r){(0,i.Z)(this,t),this.contractWrapper=r}return(0,p.Z)(t,[{key:"addTransactionListener",value:function(t){this.contractWrapper.addListener(h.aZ.Transaction,t)}},{key:"removeTransactionListener",value:function(t){this.contractWrapper.off(h.aZ.Transaction,t)}},{key:"addEventListener",value:function(t,r){var e=this,n=this.contractWrapper.readContract.interface.getEvent(t),a={address:this.contractWrapper.address,topics:[this.contractWrapper.readContract.interface.getEventTopic(n)]},c=function(t){var n=e.contractWrapper.readContract.interface.parseLog(t);r(e.toContractEvent(n.eventFragment,n.args,t))};return this.contractWrapper.getProvider().on(a,c),function(){e.contractWrapper.getProvider().off(a,c)}}},{key:"listenToAllEvents",value:function(t){var r=this,e={address:this.contractWrapper.address},n=function(e){try{var n=r.contractWrapper.readContract.interface.parseLog(e);t(r.toContractEvent(n.eventFragment,n.args,e))}catch(a){console.error("Could not parse event:",e,a)}};return this.contractWrapper.getProvider().on(e,n),function(){r.contractWrapper.getProvider().off(e,n)}}},{key:"removeEventListener",value:function(t,r){var e=this.contractWrapper.readContract.interface.getEvent(t);this.contractWrapper.readContract.off(e.name,r)}},{key:"removeAllListeners",value:function(){this.contractWrapper.readContract.removeAllListeners();var t={address:this.contractWrapper.address};this.contractWrapper.getProvider().removeAllListeners(t)}},{key:"getAllEvents",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(){var r,e,n,a=arguments;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:{fromBlock:0,toBlock:"latest",order:"desc"},t.next=3,this.contractWrapper.readContract.queryFilter({},r.fromBlock,r.toBlock);case 3:return e=t.sent,n=e.sort((function(t,e){return"desc"===r.order?e.blockNumber-t.blockNumber:t.blockNumber-e.blockNumber})),t.abrupt("return",this.parseEvents(n));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getEvents",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r){var e,n,a,s,u,i,p,f=arguments;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{fromBlock:0,toBlock:"latest",order:"desc"},a=this.contractWrapper.readContract.interface.getEvent(r),s=n.filters?a.inputs.map((function(t){return n.filters[t.name]})):[],u=(e=this.contractWrapper.readContract.filters)[a.name].apply(e,(0,c.Z)(s)),t.next=6,this.contractWrapper.readContract.queryFilter(u,n.fromBlock,n.toBlock);case 6:return i=t.sent,p=i.sort((function(t,r){return"desc"===n.order?r.blockNumber-t.blockNumber:t.blockNumber-r.blockNumber})),t.abrupt("return",this.parseEvents(p));case 9:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"parseEvents",value:function(t){return t.map((function(t){var r=Object.fromEntries(Object.entries(t).filter((function(t){return"function"!==typeof t[1]&&"args"!==t[0]})));if(t.args){var e,c=Object.entries(t.args),s=c.slice(c.length/2,c.length),o={},u=(0,a.Z)(s);try{for(u.s();!(e=u.n()).done;){var i=(0,n.Z)(e.value,2),p=i[0],f=i[1];o[p]=f}}catch(h){u.e(h)}finally{u.f()}return{eventName:t.event||"",data:o,transaction:r}}return{eventName:t.event||"",data:{},transaction:r}}))}},{key:"toContractEvent",value:function(t,r,e){var n=Object.fromEntries(Object.entries(e).filter((function(t){return"function"!==typeof t[1]&&"args"!==t[0]}))),a={};return t.inputs.forEach((function(t,e){if(Array.isArray(r[e])){var n=t.components;if(n){var c=r[e];if("tuple[]"===t.type){for(var s=[],o=0;o<c.length;o++){for(var u=c[o],i={},p=0;p<n.length;p++){i[n[p].name]=u[p]}s.push(i)}a[t.name]=s}else{for(var f={},h=0;h<n.length;h++){f[n[h].name]=c[h]}a[t.name]=f}}}else a[t.name]=r[e]})),{eventName:t.name,data:a,transaction:n}}}]),t}(),g=function(){function t(r){(0,i.Z)(this,t),this.contractWrapper=r}return(0,p.Z)(t,[{key:"gasCostOf",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r,e){var a,c,s,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([this.contractWrapper.getProvider().getGasPrice(),this.contractWrapper.estimateGas(r,e)]);case 2:return a=t.sent,c=(0,n.Z)(a,2),s=c[0],u=c[1],t.abrupt("return",d.formatEther(u.mul(s)));case 7:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"gasLimitOf",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r,e){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.estimateGas(r,e));case 1:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"currentGasPriceInGwei",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(){var r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.getProvider().getGasPrice();case 2:return r=t.sent,t.abrupt("return",d.formatUnits(r,"gwei"));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),W=function(){function t(r,e,n){var a=this;(0,i.Z)(this,t),(0,f.Z)(this,"featureName",h.c$.name),(0,f.Z)(this,"set",(0,v.c)(function(){var t=(0,u.Z)((0,o.Z)().mark((function t(r){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m(a.contractWrapper,"AppURI")){t.next=2;break}return t.abrupt("return",v.T.fromContractWrapper({contractWrapper:a.contractWrapper,method:"setAppURI",args:[r]}));case 2:return t.next=4,a.metadata.update.prepare({app_uri:r});case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.metadata=e,this.storage=n}return(0,p.Z)(t,[{key:"get",value:function(){var t=(0,u.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!m(this.contractWrapper,"AppURI")){t.next=4;break}return t.next=3,this.contractWrapper.read("appURI",[]);case 3:return t.abrupt("return",t.sent);case 4:return t.t0=l.ov,t.next=7,this.metadata.get();case 7:if(t.t1=t.sent.app_uri,t.t1){t.next=10;break}t.t1="";case 10:return t.t2=t.t1,t.t3=this.storage.getGatewayUrls(),t.abrupt("return",(0,t.t0)(t.t2,t.t3));case 13:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}()}}]);