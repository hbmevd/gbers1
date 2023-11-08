"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[144],{93207:function(t,n,e){function r(t){return"string"===typeof t?Number.parseInt(t,"0x"===t.trim().substring(0,2)?16:10):"bigint"===typeof t?Number(t):t}e.d(n,{n:function(){return r}})},10144:function(t,n,e){e.r(n),e.d(n,{SignerConnector:function(){return w}});var r=e(74165),i=e(15861),s=e(15671),a=e(43144),u=e(97326),c=e(60136),o=e(29388),h=e(40744),p=e(95768),f=e(35802),d=e(43414),v=e(93207),l=(e(52134),new WeakMap),Z=new WeakMap,w=function(t){(0,c.Z)(e,t);var n=(0,o.Z)(e);function e(t){var r;return(0,s.Z)(this,e),r=n.call(this),(0,p._)((0,u.Z)(r),l,{writable:!0,value:void 0}),(0,p._)((0,u.Z)(r),Z,{writable:!0,value:void 0}),(0,h._)((0,u.Z)(r),"onChainChanged",(function(t){var n=(0,v.n)(t),e=!r.options.chains.find((function(t){return t.chainId===n}));r.emit("change",{chain:{id:n,unsupported:e}})})),r.options=t,r}return(0,a.Z)(e,[{key:"connect",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var e,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.chainId&&this.switchChain(n.chainId),t.next=3,this.getSigner();case 3:return e=t.sent,t.next=6,e.getAddress();case 6:return i=t.sent,t.abrupt("return",i);case 8:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,p.a)(this,l,void 0),(0,p.a)(this,Z,void 0);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAddress",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getSigner();case 2:if(n=t.sent){t.next=5;break}throw new Error("No signer found");case 5:return t.next=7,n.getAddress();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isConnected",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getAddress();case 3:return n=t.sent,t.abrupt("return",!!n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"getProvider",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,p.b)(this,l)||(0,p.a)(this,l,(0,d.a_)(this.options.chain,{clientId:this.options.clientId,secretKey:this.options.secretKey})),t.abrupt("return",(0,p.b)(this,l));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getSigner",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,p.b)(this,Z)){t.next=5;break}return t.next=3,this.getProvider();case 3:n=t.sent,(0,p.a)(this,Z,k(this.options.signer,n));case 5:return t.abrupt("return",(0,p.b)(this,Z));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.options.chains.find((function(t){return t.chainId===n}))){t.next=3;break}throw new Error("Chain not found for chainId ".concat(n,", please add it to the chains property when creating this wallet"));case 3:(0,p.a)(this,l,(0,d.a_)(e,{clientId:this.options.clientId,secretKey:this.options.secretKey})),(0,p.a)(this,Z,k(this.options.signer,(0,p.b)(this,l))),this.onChainChanged(n);case 6:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"updateChains",value:function(t){this.options.chains=t}}]),e}(f.C);function k(t,n){return n?t.connect(n):t}}}]);