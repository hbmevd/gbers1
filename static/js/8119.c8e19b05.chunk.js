"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8119],{71018:function(r,t,e){e.d(t,{S:function(){return p}});var n=e(74165),a=e(15861),s=e(15671),c=e(43144),o=e(4942),u=e(35867),i=e(25923),p=function(){function r(t,e,c){var p=this;(0,s.Z)(this,r),(0,o.Z)(this,"transfer",(0,u.c)(function(){var r=p;return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,a,s){var c,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=o.length>3&&void 0!==o[3]?o[3]:[0],t.abrupt("return",r.erc1155.transfer.prepare(e,a,s,c));case 2:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}()}())),(0,o.Z)(this,"setApprovalForAll",(0,u.c)(function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",p.erc1155.setApprovalForAll.prepare(t,e));case 1:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,o.Z)(this,"airdrop",(0,u.c)(function(){var r=p;return function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,a,s){var c,o=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=o.length>3&&void 0!==o[3]?o[3]:[0],t.abrupt("return",r.erc1155.airdrop.prepare(e,a,s,c));case 2:case"end":return t.stop()}}),t)})));return function(r,e,n){return t.apply(this,arguments)}}()}())),this.contractWrapper=t,this.storage=e,this.erc1155=new i.e(this.contractWrapper,this.storage,c),this._chainId=c}return(0,c.Z)(r,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.address}},{key:"get",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.get(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalSupply(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.balanceOf(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()},{key:"balance",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.balance(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"isApproved",value:function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t,e){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.isApproved(t,e));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e){return r.apply(this,arguments)}}()}]),r}()},13157:function(r,t,e){e.d(t,{h:function(){return c}});var n=e(74165),a=e(15861),s=e(43414);function c(r,t,e){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function r(t,a,c){var o,u,i,p,d,f;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.getProvider(),r.next=3,Promise.resolve().then(e.t.bind(e,49242,19));case 3:return u=r.sent.default,i=new s.cr(o,a,u,{},t.storage),r.next=7,t.getSignerAddress();case 7:return p=r.sent,d=t.address,r.next=11,i.read("allowance",[p,d]);case 11:return f=r.sent,r.abrupt("return",f.gte(c));case 13:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},35770:function(r,t,e){e.d(t,{a:function(){return Z},g:function(){return b},h:function(){return h},i:function(){return f},m:function(){return w},v:function(){return k}});var n=e(74165),a=e(29439),s=e(15861),c=e(39707),o=e(19560),u=e(17389),i=e(48103),p=e(43414),d=e(84546);function f(r,t,e,n,a){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,n.Z)().mark((function r(t,s,o,u,p){var d,f,l,h,v,k,w,g,Z,b,m,x;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.e(5025).then(e.t.bind(e,25025,19));case 3:return d=r.sent.default,f=new c.CH(o,d,t),r.next=7,Promise.all([f.supportsInterface(i.I),f.supportsInterface(i.a)]);case 7:if(l=r.sent,h=(0,a.Z)(l,2),v=h[0],k=h[1],!v){r.next=32;break}return r.next=14,Promise.resolve().then(e.t.bind(e,70332,19));case 14:return g=r.sent.default,Z=new c.CH(o,g,t),r.next=18,Z.isApprovedForAll(p,s);case 18:if(!r.sent){r.next=21;break}return r.abrupt("return",!0);case 21:return r.prev=21,r.next=24,Z.getApproved(u);case 24:b=r.sent,r.next=29;break;case 27:r.prev=27,r.t0=r.catch(21);case 29:return r.abrupt("return",(null===(w=b)||void 0===w?void 0:w.toLowerCase())===s.toLowerCase());case 32:if(!k){r.next=42;break}return r.next=35,Promise.resolve().then(e.t.bind(e,8455,19));case 35:return m=r.sent.default,x=new c.CH(o,m,t),r.next=39,x.isApprovedForAll(p,s);case 39:return r.abrupt("return",r.sent);case 42:return console.error("Contract does not implement ERC 1155 or ERC 721."),r.abrupt("return",!1);case 44:r.next=50;break;case 46:return r.prev=46,r.t1=r.catch(0),console.error("Failed to check if token is approved",r.t1),r.abrupt("return",!1);case 50:case"end":return r.stop()}}),r,null,[[0,46],[21,27]])})))).apply(this,arguments)}function h(r,t,e,n,a){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,n.Z)().mark((function r(t,s,c,o,u){var d,f,l,h,v,k,w,g,Z,b;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(5025).then(e.t.bind(e,25025,19));case 2:return d=r.sent.default,f=new p.cr(t.getSignerOrProvider(),c,d,t.options,t.storage),r.next=6,Promise.all([f.read("supportsInterface",[i.I]),f.read("supportsInterface",[i.a])]);case 6:if(l=r.sent,h=(0,a.Z)(l,2),v=h[0],k=h[1],!v){r.next=29;break}return r.next=13,Promise.resolve().then(e.t.bind(e,70332,19));case 13:return w=r.sent.default,g=new p.cr(t.getSignerOrProvider(),c,w,t.options,t.storage),r.next=17,g.read("isApprovedForAll",[u,s]);case 17:if(r.sent){r.next=27;break}return r.next=21,g.read("getApproved",[o]);case 21:if(r.t0=r.sent.toLowerCase(),r.t1=s.toLowerCase(),r.t0===r.t1){r.next=27;break}return r.next=27,g.sendTransaction("setApprovalForAll",[s,!0]);case 27:case 40:r.next=43;break;case 29:if(!k){r.next=42;break}return r.next=32,Promise.resolve().then(e.t.bind(e,8455,19));case 32:return Z=r.sent.default,b=new p.cr(t.getSignerOrProvider(),c,Z,t.options,t.storage),r.next=36,b.read("isApprovedForAll",[u,s]);case 36:if(r.sent){r.next=40;break}return r.next=40,b.sendTransaction("setApprovalForAll",[s,!0]);case 42:throw Error("Contract must implement ERC 1155 or ERC 721.");case 43:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function k(r){if((0,u.Z)(void 0!==r.assetContractAddress&&null!==r.assetContractAddress,"Asset contract address is required"),(0,u.Z)(void 0!==r.buyoutPricePerToken&&null!==r.buyoutPricePerToken,"Buyout price is required"),(0,u.Z)(void 0!==r.listingDurationInSeconds&&null!==r.listingDurationInSeconds,"Listing duration is required"),(0,u.Z)(void 0!==r.startTimestamp&&null!==r.startTimestamp,"Start time is required"),(0,u.Z)(void 0!==r.tokenId&&null!==r.tokenId,"Token ID is required"),(0,u.Z)(void 0!==r.quantity&&null!==r.quantity,"Quantity is required"),"NewAuctionListing"===r.type)(0,u.Z)(void 0!==r.reservePricePerToken&&null!==r.reservePricePerToken,"Reserve price is required")}function w(r,t,e){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)((0,n.Z)().mark((function r(t,e,a){return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=a.quantityDesired,r.t1=a.pricePerToken,r.t2=a.currency,r.t3=a.offeror,r.t4=a.quantityWanted,r.next=7,(0,d.a)(t,a.currency,a.quantityWanted.mul(a.pricePerToken));case 7:return r.t5=r.sent,r.t6=e,r.abrupt("return",{quantity:r.t0,pricePerToken:r.t1,currencyContractAddress:r.t2,buyerAddress:r.t3,quantityDesired:r.t4,currencyValue:r.t5,listingId:r.t6});case 10:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function Z(r,t,e){return e=o.O$.from(e),r=o.O$.from(r),t=o.O$.from(t),!r.eq(o.O$.from(0))&&t.sub(r).mul(p.dv).div(r).gte(e)}function b(r,t,e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,n.Z)().mark((function r(t,e,a){var s;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(s=[];e-t>i.D;)s.push(a(t,t+i.D-1)),t+=i.D;return s.push(a(t,e-1)),r.next=5,Promise.all(s);case 5:return r.abrupt("return",r.sent);case 6:case"end":return r.stop()}}),r)})))).apply(this,arguments)}},18119:function(r,t,e){e.r(t),e.d(t,{Pack:function(){return j}});var n=e(29439),a=e(1413),s=e(97326),c=e(60136),o=e(29388),u=e(37762),i=e(74165),p=e(15861),d=e(15671),f=e(43144),l=e(4942),h=e(19560),v=e(18383),k=e(81895),w=e(84546),g=e(13157),Z=e(88034),b=e(43414),m=e(16433),x=e(53792),y=e(35770),A=e(48103),P=e(35867),W=e(91612),C=e(70640),R=e(70304),I=e(71018),O=e(27761),S=e(78426),T=e(56571),q=e(99094),L=function(){return q.z.object({contractAddress:b.b9})}(),E=function(){return L.extend({quantity:b.cw})}(),U=function(){return L.extend({tokenId:b.b6})}(),F=function(){return L.extend({tokenId:b.b6,quantity:b.b6})}(),D=function(){return E.omit({quantity:!0}).extend({quantityPerReward:b.cw})}(),$=U,N=function(){return F.omit({quantity:!0}).extend({quantityPerReward:b.b6})}(),_=function(){return D.extend({totalRewards:b.b6.default("1")})}(),z=$,V=function(){return N.extend({totalRewards:b.b6.default("1")})}(),H=function(){return q.z.object({erc20Rewards:q.z.array(_).default([]),erc721Rewards:q.z.array(z).default([]),erc1155Rewards:q.z.array(V).default([])})}(),M=function(){return H.extend({packMetadata:T.N,rewardsPerPack:b.b6.default("1"),openStartTime:m.R.default(new Date)})}(),Y=(e(64166),e(79955),e(87962),e(60862),e(89806),function(){function r(t,e,n,a,s){var c=this;(0,d.Z)(this,r),(0,l.Z)(this,"featureName",b.dA.name),(0,l.Z)(this,"open",(0,P.c)(function(){var r=c;return function(){var t=(0,p.Z)((0,i.Z)().mark((function t(e){var n,a,s=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2&&void 0!==s[2]?s[2]:5e5,t.abrupt("return",P.T.fromContractWrapper({contractWrapper:r.contractWrapper,method:"openPack",args:[e,n],overrides:{gasLimit:a},parse:function(t){var e=h.O$.from(0);try{e=r.contractWrapper.parseLogs("PackOpenRequested",null===t||void 0===t?void 0:t.logs)[0].args.requestId}catch(n){}return{receipt:t,id:e}}}));case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}())),(0,l.Z)(this,"claimRewards",(0,P.c)(function(){var r=c;return(0,p.Z)((0,i.Z)().mark((function t(){var e,n=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:5e5,t.abrupt("return",P.T.fromContractWrapper({contractWrapper:r.contractWrapper,method:"claimRewards",args:[],overrides:{gasLimit:e},parse:function(){var t=(0,p.Z)((0,i.Z)().mark((function t(e){var n,a;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=r.contractWrapper.parseLogs("PackOpened",null===e||void 0===e?void 0:e.logs)).length){t.next=3;break}throw new Error("PackOpened event not found");case 3:return a=n[0].args.rewardUnitsDistributed,t.next=6,r.parseRewards(a);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}));case 2:case"end":return t.stop()}}),t)})))}()));var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:new b.cr(t,e,O,a,n);this.contractWrapper=o,this.storage=n,this.chainId=s,this.events=new x.a(this.contractWrapper)}return(0,f.Z)(r,[{key:"onNetworkUpdated",value:function(r){this.contractWrapper.updateSignerOrProvider(r)}},{key:"getAddress",value:function(){return this.contractWrapper.address}},{key:"parseRewards",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e,n,a,s,c,o,p;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e=[],n=[],a=[],s=(0,u.Z)(t),r.prev=4,s.s();case 6:if((c=s.n()).done){r.next=22;break}o=c.value,r.t0=o.tokenType,r.next=0===r.t0?11:1===r.t0?16:2===r.t0?18:20;break;case 11:return r.next=13,(0,w.f)(this.contractWrapper.getProvider(),o.assetContract);case 13:return p=r.sent,e.push({contractAddress:o.assetContract,quantityPerReward:v.formatUnits(o.totalAmount,p.decimals).toString()}),r.abrupt("break",20);case 16:return n.push({contractAddress:o.assetContract,tokenId:o.tokenId.toString()}),r.abrupt("break",20);case 18:return a.push({contractAddress:o.assetContract,tokenId:o.tokenId.toString(),quantityPerReward:o.totalAmount.toString()}),r.abrupt("break",20);case 20:r.next=6;break;case 22:r.next=27;break;case 24:r.prev=24,r.t1=r.catch(4),s.e(r.t1);case 27:return r.prev=27,s.f(),r.finish(27);case 30:return r.abrupt("return",{erc20Rewards:e,erc721Rewards:n,erc1155Rewards:a});case 31:case"end":return r.stop()}}),r,this,[[4,24,27,30]])})));return function(t){return r.apply(this,arguments)}}()},{key:"addPackOpenEventListener",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e=this;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.events.addEventListener("PackOpened",function(){var r=(0,p.Z)((0,i.Z)().mark((function r(n){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.t0=t,r.t1=n.data.packId.toString(),r.t2=n.data.opener,r.next=5,e.parseRewards(n.data.rewardUnitsDistributed);case 5:r.t3=r.sent,(0,r.t0)(r.t1,r.t2,r.t3);case 7:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"canClaimRewards",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.t0=b.aM,r.t1=t,r.t1){r.next=6;break}return r.next=5,this.contractWrapper.getSignerAddress();case 5:r.t1=r.sent;case 6:return r.t2=r.t1,r.next=9,(0,r.t0)(r.t2);case 9:return e=r.sent,r.next=12,this.contractWrapper.read("canClaimRewards",[e]);case 12:return r.abrupt("return",r.sent);case 13:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"openAndClaim",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e,n,a,s,c,o=arguments;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:1,n=o.length>2&&void 0!==o[2]?o[2]:5e5,r.next=4,this.contractWrapper.sendTransaction("openPackAndClaimRewards",[t,e,n],{gasLimit:h.O$.from(5e5)});case 4:a=r.sent,s=h.O$.from(0);try{c=this.contractWrapper.parseLogs("PackOpenRequested",null===a||void 0===a?void 0:a.logs),s=c[0].args.requestId}catch(u){}return r.abrupt("return",{receipt:a,id:s});case 8:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getLinkBalance",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(){var t;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,49242,19));case 2:return t=r.sent.default,r.abrupt("return",this.getLinkContract(t).balanceOf(this.contractWrapper.address));case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"transferLink",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var n;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,49242,19));case 2:return n=r.sent.default,r.next=5,this.getLinkContract(n).transfer(this.contractWrapper.address,t);case 5:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getLinkContract",value:function(r){var t=b.aY[this.chainId];if(!t)throw new Error("No LINK token address found for chainId ".concat(this.chainId));var e=new b.cr(this.contractWrapper.getSignerOrProvider(),t,r,this.contractWrapper.options,this.storage);return new S.f(e,this.storage,this.chainId)}}]),r}()),j=function(r){(0,c.Z)(e,r);var t=(0,o.Z)(e);function e(r,c,o){var f;(0,d.Z)(this,e);var h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},k=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,Z=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new b.cr(r,c,k,h.gasless&&"openzeppelin"in h.gasless?(0,a.Z)((0,a.Z)({},h),{},{gasless:(0,a.Z)((0,a.Z)({},h.gasless),{},{openzeppelin:(0,a.Z)((0,a.Z)({},h.gasless.openzeppelin),{},{useEOAForwarder:!0})})}):h,o);return f=t.call(this,Z,o,g),(0,l.Z)((0,s.Z)(f),"create",(0,P.c)(function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f.contractWrapper.getSignerAddress();case 2:return e=r.sent,r.abrupt("return",f.createTo.prepare(e,t));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}())),(0,l.Z)((0,s.Z)(f),"addPackContents",(0,P.c)(function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t,e){var a,s,c,o,u,p,d;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([f.contractWrapper.getSignerAddress(),H.parseAsync(e)]);case 2:return a=r.sent,s=(0,n.Z)(a,2),c=s[0],o=s[1],r.next=8,f.toPackContentArgs(o);case 8:return u=r.sent,p=u.contents,d=u.numOfRewardUnits,r.abrupt("return",P.T.fromContractWrapper({contractWrapper:f.contractWrapper,method:"addPackContents",args:[t,p,d,c],parse:function(r){var t=f.contractWrapper.parseLogs("PackUpdated",null===r||void 0===r?void 0:r.logs);if(0===t.length)throw new Error("PackUpdated event not found");var e=t[0].args.packId;return{id:e,receipt:r,data:function(){return f.erc1155.get(e)}}}}));case 12:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,l.Z)((0,s.Z)(f),"createTo",(0,P.c)(function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t,e){var a,s,c,o,u,p,d,l,h,v,k,w;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all([(0,A.b)(e.packMetadata,f.storage),M.parseAsync(e),(0,b.aM)(t)]);case 2:return a=r.sent,s=(0,n.Z)(a,3),c=s[0],o=s[1],u=s[2],p=o.erc20Rewards,d=o.erc721Rewards,l=o.erc1155Rewards,h={erc20Rewards:p,erc721Rewards:d,erc1155Rewards:l},r.next=11,f.toPackContentArgs(h);case 11:return v=r.sent,k=v.contents,w=v.numOfRewardUnits,r.abrupt("return",P.T.fromContractWrapper({contractWrapper:f.contractWrapper,method:"createPack",args:[k,w,c,o.openStartTime,o.rewardsPerPack,u],parse:function(r){var t=f.contractWrapper.parseLogs("PackCreated",null===r||void 0===r?void 0:r.logs);if(0===t.length)throw new Error("PackCreated event not found");var e=t[0].args.packId;return{id:e,receipt:r,data:function(){return f.erc1155.get(e)}}}}));case 15:case"end":return r.stop()}}),r)})));return function(t,e){return r.apply(this,arguments)}}())),(0,l.Z)((0,s.Z)(f),"open",(0,P.c)(function(){var r=(0,s.Z)(f);return function(){var t=(0,p.Z)((0,i.Z)().mark((function t(e){var n,a,s=arguments;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:1,a=s.length>2&&void 0!==s[2]?s[2]:5e5,!r._vrf){t.next=4;break}throw new Error("This contract is using Chainlink VRF, use `contract.vrf.open()` or `contract.vrf.openAndClaim()` instead");case 4:return t.abrupt("return",P.T.fromContractWrapper({contractWrapper:r.contractWrapper,method:"openPack",args:[e,n],overrides:{gasLimit:a},parse:function(){var t=(0,p.Z)((0,i.Z)().mark((function t(e){var n,a,s,c,o,p,d,f,l;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=r.contractWrapper.parseLogs("PackOpened",null===e||void 0===e?void 0:e.logs)).length){t.next=3;break}throw new Error("PackOpened event not found");case 3:a=n[0].args.rewardUnitsDistributed,s=[],c=[],o=[],p=(0,u.Z)(a),t.prev=8,p.s();case 10:if((d=p.n()).done){t.next=26;break}f=d.value,t.t0=f.tokenType,t.next=0===t.t0?15:1===t.t0?20:2===t.t0?22:24;break;case 15:return t.next=17,(0,w.f)(r.contractWrapper.getProvider(),f.assetContract);case 17:return l=t.sent,s.push({contractAddress:f.assetContract,quantityPerReward:v.formatUnits(f.totalAmount,l.decimals).toString()}),t.abrupt("break",24);case 20:return c.push({contractAddress:f.assetContract,tokenId:f.tokenId.toString()}),t.abrupt("break",24);case 22:return o.push({contractAddress:f.assetContract,tokenId:f.tokenId.toString(),quantityPerReward:f.totalAmount.toString()}),t.abrupt("break",24);case 24:t.next=10;break;case 26:t.next=31;break;case 28:t.prev=28,t.t1=t.catch(8),p.e(t.t1);case 31:return t.prev=31,p.f(),t.finish(31);case 34:return t.abrupt("return",{erc20Rewards:s,erc721Rewards:c,erc1155Rewards:o});case 35:case"end":return t.stop()}}),t,null,[[8,28,31,34]])})));return function(r){return t.apply(this,arguments)}}()}));case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}())),f.abi=b.bj.parse(k||[]),f.metadata=new x.C(f.contractWrapper,b.c1,f.storage),f.app=new x.b(f.contractWrapper,f.metadata,f.storage),f.roles=new R.C(f.contractWrapper,e.contractRoles),f.royalties=new C.C(f.contractWrapper,f.metadata),f.encoder=new w.C(f.contractWrapper),f.estimator=new x.G(f.contractWrapper),f.events=new x.a(f.contractWrapper),f.interceptor=new W.C(f.contractWrapper),f.owner=new C.a(f.contractWrapper),f._vrf=f.detectVrf(),f}return(0,f.Z)(e,[{key:"vrf",get:function(){return(0,m.a)(this._vrf,b.dA)}},{key:"onNetworkUpdated",value:function(r){var t;this.contractWrapper.updateSignerOrProvider(r),null===(t=this._vrf)||void 0===t||t.onNetworkUpdated(r)}},{key:"getAddress",value:function(){return this.contractWrapper.address}},{key:"get",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.get(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getAll",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getAll(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getOwned",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.getOwned(t));case 1:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.erc1155.totalCount());case 1:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"isTransferRestricted",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(){var t;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.read("hasRole",[(0,b.H)("transfer"),k.d]);case 2:return t=r.sent,r.abrupt("return",!t);case 4:case"end":return r.stop()}}),r,this)})));return function(){return r.apply(this,arguments)}}()},{key:"getPackContents",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e,n,a,s,c,o,u,p,d,f,l,k;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.contractWrapper.read("getPackContents",[t]);case 2:e=r.sent,n=e.contents,a=e.perUnitAmounts,s=[],c=[],o=[],u=0;case 9:if(!(u<n.length)){r.next=29;break}p=n[u],d=a[u],r.t0=p.tokenType,r.next=0===r.t0?15:1===r.t0?22:2===r.t0?24:26;break;case 15:return r.next=17,(0,w.f)(this.contractWrapper.getProvider(),p.assetContract);case 17:return f=r.sent,l=v.formatUnits(d,f.decimals),k=v.formatUnits(h.O$.from(p.totalAmount).div(d),f.decimals),s.push({contractAddress:p.assetContract,quantityPerReward:l,totalRewards:k}),r.abrupt("break",26);case 22:return c.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString()}),r.abrupt("break",26);case 24:return o.push({contractAddress:p.assetContract,tokenId:p.tokenId.toString(),quantityPerReward:d.toString(),totalRewards:h.O$.from(p.totalAmount).div(d).toString()}),r.abrupt("break",26);case 26:u++,r.next=9;break;case 29:return r.abrupt("return",{erc20Rewards:s,erc721Rewards:c,erc1155Rewards:o});case 30:case"end":return r.stop()}}),r,this)})));return function(t){return r.apply(this,arguments)}}()},{key:"toPackContentArgs",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t){var e,n,a,s,c,o,p,d,f,l,v,k,w,b,m,x,A,P;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=[],n=[],a=t.erc20Rewards,s=t.erc721Rewards,c=t.erc1155Rewards,o=this.contractWrapper.getProvider(),r.next=6,this.contractWrapper.getSignerAddress();case 6:p=r.sent,d=(0,u.Z)(a),r.prev=8,d.s();case 10:if((f=d.n()).done){r.next=25;break}return l=f.value,r.next=14,(0,Z.n)(o,l.quantityPerReward,l.contractAddress);case 14:return v=r.sent,k=v.mul(l.totalRewards),r.next=18,(0,g.h)(this.contractWrapper,l.contractAddress,k);case 18:if(r.sent){r.next=21;break}throw new Error('ERC20 token with contract address "'.concat(l.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(l.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(k,");\n\n"));case 21:n.push(l.totalRewards),e.push({assetContract:l.contractAddress,tokenType:0,totalAmount:k,tokenId:0});case 23:r.next=10;break;case 25:r.next=30;break;case 27:r.prev=27,r.t0=r.catch(8),d.e(r.t0);case 30:return r.prev=30,d.f(),r.finish(30);case 33:w=(0,u.Z)(s),r.prev=34,w.s();case 36:if((b=w.n()).done){r.next=47;break}return m=b.value,r.next=40,(0,y.i)(this.contractWrapper.getProvider(),this.getAddress(),m.contractAddress,m.tokenId,p);case 40:if(r.sent){r.next=43;break}throw new Error('ERC721 token "'.concat(m.tokenId,'" with contract address "').concat(m.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(m.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(m.tokenId,");\n\n"));case 43:n.push("1"),e.push({assetContract:m.contractAddress,tokenType:1,totalAmount:1,tokenId:m.tokenId});case 45:r.next=36;break;case 47:r.next=52;break;case 49:r.prev=49,r.t1=r.catch(34),w.e(r.t1);case 52:return r.prev=52,w.f(),r.finish(52);case 55:x=(0,u.Z)(c),r.prev=56,x.s();case 58:if((A=x.n()).done){r.next=69;break}return P=A.value,r.next=62,(0,y.i)(this.contractWrapper.getProvider(),this.getAddress(),P.contractAddress,P.tokenId,p);case 62:if(r.sent){r.next=65;break}throw new Error('ERC1155 token "'.concat(P.tokenId,'" with contract address "').concat(P.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(P.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));case 65:n.push(P.totalRewards),e.push({assetContract:P.contractAddress,tokenType:2,totalAmount:h.O$.from(P.quantityPerReward).mul(h.O$.from(P.totalRewards)),tokenId:P.tokenId});case 67:r.next=58;break;case 69:r.next=74;break;case 71:r.prev=71,r.t2=r.catch(56),x.e(r.t2);case 74:return r.prev=74,x.f(),r.finish(74);case 77:return r.abrupt("return",{contents:e,numOfRewardUnits:n});case 78:case"end":return r.stop()}}),r,this,[[8,27,30,33],[34,49,52,55],[56,71,74,77]])})));return function(t){return r.apply(this,arguments)}}()},{key:"prepare",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t,e,n){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",P.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:n}));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"call",value:function(){var r=(0,p.Z)((0,i.Z)().mark((function r(t,e,n){return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",this.contractWrapper.call(t,e,n));case 1:case"end":return r.stop()}}),r,this)})));return function(t,e,n){return r.apply(this,arguments)}}()},{key:"detectVrf",value:function(){if((0,x.d)(this.contractWrapper,"PackVRF"))return new Y(this.contractWrapper.getSignerOrProvider(),this.contractWrapper.address,this.storage,this.contractWrapper.options,this.chainId)}}]),e}(I.S);(0,l.Z)(j,"contractRoles",b.dB)}}]);