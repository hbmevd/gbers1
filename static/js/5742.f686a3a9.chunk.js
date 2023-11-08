"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[5742],{6604:function(t,e,r){r.d(e,{S:function(){return d}});var n=r(74165),a=r(15861),s=r(15671),c=r(43144),o=r(4942),u=r(43414),i=r(35867),p=r(59331),d=function(){function t(e,r,c){var d=this;(0,s.Z)(this,t),(0,o.Z)(this,"transfer",(0,i.c)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.erc721.transfer.prepare(e,r));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),(0,o.Z)(this,"setApprovalForAll",(0,i.c)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d.erc721.setApprovalForAll.prepare(e,r));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),(0,o.Z)(this,"setApprovalForToken",(0,i.c)(function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=i.T,t.t1=d.contractWrapper,t.next=4,(0,u.aM)(e);case 4:return t.t2=t.sent,t.t3=r,t.t4=[t.t2,t.t3],t.t5={contractWrapper:t.t1,method:"approve",args:t.t4},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t5));case 9:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),this.contractWrapper=e,this.storage=r,this.erc721=new p.h(this.contractWrapper,this.storage,c),this._chainId=c}return(0,c.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.address}},{key:"getAll",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.getAll(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getOwned",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return t.next=3,(0,u.aM)(e);case 3:e=t.sent;case 4:return t.abrupt("return",this.erc721.getOwned(e,r));case 5:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getOwnedTokenIds",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return t.next=3,(0,u.aM)(e);case 3:e=t.sent;case 4:return t.abrupt("return",this.erc721.getOwnedTokenIds(e));case 5:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"totalSupply",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.totalCirculatingSupply());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.get(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"ownerOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.ownerOf(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balanceOf(e));case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"balance",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.balance());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isApproved",value:function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.erc721.isApproved(e,r));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()}]),t}()},13157:function(t,e,r){r.d(e,{h:function(){return c}});var n=r(74165),a=r(15861),s=r(43414);function c(t,e,r){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function t(e,a,c){var o,u,i,p,d,f;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.getProvider(),t.next=3,Promise.resolve().then(r.t.bind(r,49242,19));case 3:return u=t.sent.default,i=new s.cr(o,a,u,{},e.storage),t.next=7,e.getSignerAddress();case 7:return p=t.sent,d=e.address,t.next=11,i.read("allowance",[p,d]);case 11:return f=t.sent,t.abrupt("return",f.gte(c));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},35770:function(t,e,r){r.d(e,{a:function(){return x},g:function(){return b},h:function(){return h},i:function(){return f},m:function(){return w},v:function(){return k}});var n=r(74165),a=r(29439),s=r(15861),c=r(39707),o=r(19560),u=r(17389),i=r(48103),p=r(43414),d=r(84546);function f(t,e,r,n,a){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,n.Z)().mark((function t(e,s,o,u,p){var d,f,l,h,v,k,w,Z,x,b,g,y;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.e(5025).then(r.t.bind(r,25025,19));case 3:return d=t.sent.default,f=new c.CH(o,d,e),t.next=7,Promise.all([f.supportsInterface(i.I),f.supportsInterface(i.a)]);case 7:if(l=t.sent,h=(0,a.Z)(l,2),v=h[0],k=h[1],!v){t.next=32;break}return t.next=14,Promise.resolve().then(r.t.bind(r,70332,19));case 14:return Z=t.sent.default,x=new c.CH(o,Z,e),t.next=18,x.isApprovedForAll(p,s);case 18:if(!t.sent){t.next=21;break}return t.abrupt("return",!0);case 21:return t.prev=21,t.next=24,x.getApproved(u);case 24:b=t.sent,t.next=29;break;case 27:t.prev=27,t.t0=t.catch(21);case 29:return t.abrupt("return",(null===(w=b)||void 0===w?void 0:w.toLowerCase())===s.toLowerCase());case 32:if(!k){t.next=42;break}return t.next=35,Promise.resolve().then(r.t.bind(r,8455,19));case 35:return g=t.sent.default,y=new c.CH(o,g,e),t.next=39,y.isApprovedForAll(p,s);case 39:return t.abrupt("return",t.sent);case 42:return console.error("Contract does not implement ERC 1155 or ERC 721."),t.abrupt("return",!1);case 44:t.next=50;break;case 46:return t.prev=46,t.t1=t.catch(0),console.error("Failed to check if token is approved",t.t1),t.abrupt("return",!1);case 50:case"end":return t.stop()}}),t,null,[[0,46],[21,27]])})))).apply(this,arguments)}function h(t,e,r,n,a){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,n.Z)().mark((function t(e,s,c,o,u){var d,f,l,h,v,k,w,Z,x,b;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(5025).then(r.t.bind(r,25025,19));case 2:return d=t.sent.default,f=new p.cr(e.getSignerOrProvider(),c,d,e.options,e.storage),t.next=6,Promise.all([f.read("supportsInterface",[i.I]),f.read("supportsInterface",[i.a])]);case 6:if(l=t.sent,h=(0,a.Z)(l,2),v=h[0],k=h[1],!v){t.next=29;break}return t.next=13,Promise.resolve().then(r.t.bind(r,70332,19));case 13:return w=t.sent.default,Z=new p.cr(e.getSignerOrProvider(),c,w,e.options,e.storage),t.next=17,Z.read("isApprovedForAll",[u,s]);case 17:if(t.sent){t.next=27;break}return t.next=21,Z.read("getApproved",[o]);case 21:if(t.t0=t.sent.toLowerCase(),t.t1=s.toLowerCase(),t.t0===t.t1){t.next=27;break}return t.next=27,Z.sendTransaction("setApprovalForAll",[s,!0]);case 27:case 40:t.next=43;break;case 29:if(!k){t.next=42;break}return t.next=32,Promise.resolve().then(r.t.bind(r,8455,19));case 32:return x=t.sent.default,b=new p.cr(e.getSignerOrProvider(),c,x,e.options,e.storage),t.next=36,b.read("isApprovedForAll",[u,s]);case 36:if(t.sent){t.next=40;break}return t.next=40,b.sendTransaction("setApprovalForAll",[s,!0]);case 42:throw Error("Contract must implement ERC 1155 or ERC 721.");case 43:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){if((0,u.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,u.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,u.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,u.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,u.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,u.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type)(0,u.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}function w(t,e,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,s.Z)((0,n.Z)().mark((function t(e,r,a){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a.quantityDesired,t.t1=a.pricePerToken,t.t2=a.currency,t.t3=a.offeror,t.t4=a.quantityWanted,t.next=7,(0,d.a)(e,a.currency,a.quantityWanted.mul(a.pricePerToken));case 7:return t.t5=t.sent,t.t6=r,t.abrupt("return",{quantity:t.t0,pricePerToken:t.t1,currencyContractAddress:t.t2,buyerAddress:t.t3,quantityDesired:t.t4,currencyValue:t.t5,listingId:t.t6});case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e,r){return r=o.O$.from(r),t=o.O$.from(t),e=o.O$.from(e),!t.eq(o.O$.from(0))&&e.sub(t).mul(p.dv).div(t).gte(r)}function b(t,e,r){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)((0,n.Z)().mark((function t(e,r,a){var s;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(s=[];r-e>i.D;)s.push(a(e,e+i.D-1)),e+=i.D;return s.push(a(e,r-1)),t.next=5,Promise.all(s);case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},25742:function(t,e,r){r.r(e),r.d(e,{Multiwrap:function(){return W}});var n=r(37762),a=r(74165),s=r(29439),c=r(15861),o=r(15671),u=r(43144),i=r(97326),p=r(60136),d=r(29388),f=r(4942),l=r(18383),h=r(84546),v=r(13157),k=r(88034),w=r(43414),Z=r(35770),x=r(48103),b=r(35867),g=r(53792),y=r(70640),m=r(70304),A=r(6604),W=(r(64166),r(79955),r(87962),r(60862),r(89806),function(t){(0,p.Z)(r,t);var e=(0,d.Z)(r);function r(t,n,u){var p;(0,o.Z)(this,r);var d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},l=arguments.length>4?arguments[4]:void 0,v=arguments.length>5?arguments[5]:void 0,k=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new w.cr(t,n,l,d,u);return p=e.call(this,k,u,v),(0,f.Z)((0,i.Z)(p),"wrap",(0,b.c)(function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e,r,n){var c,o,u,i,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Promise,t.t1=(0,x.b)(r,p.storage),t.t2=p.toTokenStructList(e),t.t3=w.aM,!n){t.next=8;break}t.t4=n,t.next=11;break;case 8:return t.next=10,p.contractWrapper.getSignerAddress();case 10:t.t4=t.sent;case 11:return t.t5=t.t4,t.t6=(0,t.t3)(t.t5),t.t7=[t.t1,t.t2,t.t6],t.next=16,t.t0.all.call(t.t0,t.t7);case 16:return c=t.sent,o=(0,s.Z)(c,3),u=o[0],i=o[1],d=o[2],t.abrupt("return",b.T.fromContractWrapper({contractWrapper:p.contractWrapper,method:"wrap",args:[i,u,d],parse:function(t){var e=p.contractWrapper.parseLogs("TokensWrapped",null===t||void 0===t?void 0:t.logs);if(0===e.length)throw new Error("TokensWrapped event not found");var r=e[0].args.tokenIdOfWrappedToken;return{id:r,receipt:t,data:function(){return p.get(r)}}}}));case 22:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}())),(0,f.Z)((0,i.Z)(p),"unwrap",(0,b.c)(function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e,r){var n;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=w.aM,!r){t.next=5;break}t.t1=r,t.next=8;break;case 5:return t.next=7,p.contractWrapper.getSignerAddress();case 7:t.t1=t.sent;case 8:return t.t2=t.t1,t.next=11,(0,t.t0)(t.t2);case 11:return n=t.sent,t.abrupt("return",b.T.fromContractWrapper({contractWrapper:p.contractWrapper,method:"unwrap",args:[e,n]}));case 13:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),p.abi=w.bj.parse(l||[]),p.metadata=new g.C(p.contractWrapper,w.dz,p.storage),p.app=new g.b(p.contractWrapper,p.metadata,p.storage),p.roles=new m.C(p.contractWrapper,r.contractRoles),p.encoder=new h.C(p.contractWrapper),p.estimator=new g.G(p.contractWrapper),p.events=new g.a(p.contractWrapper),p.royalties=new y.C(p.contractWrapper,p.metadata),p.owner=new y.a(p.contractWrapper),p}return(0,u.Z)(r,[{key:"getWrappedContents",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e){var r,s,c,o,u,i,p,d;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.read("getWrappedContents",[e]);case 2:r=t.sent,s=[],c=[],o=[],u=(0,n.Z)(r),t.prev=7,u.s();case 9:if((i=u.n()).done){t.next=25;break}p=i.value,t.t0=p.tokenType,t.next=0===t.t0?14:1===t.t0?19:2===t.t0?21:23;break;case 14:return t.next=16,(0,h.f)(this.contractWrapper.getProvider(),p.assetContract);case 16:return d=t.sent,s.push({contractAddress:p.assetContract,quantity:l.formatUnits(p.totalAmount,d.decimals)}),t.abrupt("break",23);case 19:return c.push({contractAddress:p.assetContract,tokenId:p.tokenId}),t.abrupt("break",23);case 21:return o.push({contractAddress:p.assetContract,tokenId:p.tokenId,quantity:p.totalAmount.toString()}),t.abrupt("break",23);case 23:t.next=9;break;case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(7),u.e(t.t1);case 30:return t.prev=30,u.f(),t.finish(30);case 33:return t.abrupt("return",{erc20Tokens:s,erc721Tokens:c,erc1155Tokens:o});case 34:case"end":return t.stop()}}),t,this,[[7,27,30,33]])})));return function(e){return t.apply(this,arguments)}}()},{key:"toTokenStructList",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e){var r,s,c,o,u,i,p,d,f,l,h,w,x;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],s=this.contractWrapper.getProvider(),t.next=4,this.contractWrapper.getSignerAddress();case 4:if(c=t.sent,!e.erc20Tokens){t.next=30;break}o=(0,n.Z)(e.erc20Tokens),t.prev=7,o.s();case 9:if((u=o.n()).done){t.next=22;break}return i=u.value,t.next=13,(0,k.n)(s,i.quantity,i.contractAddress);case 13:return p=t.sent,t.next=16,(0,v.h)(this.contractWrapper,i.contractAddress,p);case 16:if(t.sent){t.next=19;break}throw new Error('ERC20 token with contract address "'.concat(i.contractAddress,'" does not have enough allowance to transfer.\n\nYou can set allowance to the multiwrap contract to transfer these tokens by running:\n\nawait sdk.getToken("').concat(i.contractAddress,'").setAllowance("').concat(this.getAddress(),'", ').concat(i.quantity,");\n\n"));case 19:r.push({assetContract:i.contractAddress,totalAmount:p,tokenId:0,tokenType:0});case 20:t.next=9;break;case 22:t.next=27;break;case 24:t.prev=24,t.t0=t.catch(7),o.e(t.t0);case 27:return t.prev=27,o.f(),t.finish(27);case 30:if(!e.erc721Tokens){t.next=52;break}d=(0,n.Z)(e.erc721Tokens),t.prev=32,d.s();case 34:if((f=d.n()).done){t.next=44;break}return l=f.value,t.next=38,(0,Z.i)(this.contractWrapper.getProvider(),this.getAddress(),l.contractAddress,l.tokenId,c);case 38:if(t.sent){t.next=41;break}throw new Error('ERC721 token "'.concat(l.tokenId,'" with contract address "').concat(l.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getNFTCollection("').concat(l.contractAddress,'").setApprovalForToken("').concat(this.getAddress(),'", ').concat(l.tokenId,");\n\n"));case 41:r.push({assetContract:l.contractAddress,totalAmount:0,tokenId:l.tokenId,tokenType:1});case 42:t.next=34;break;case 44:t.next=49;break;case 46:t.prev=46,t.t1=t.catch(32),d.e(t.t1);case 49:return t.prev=49,d.f(),t.finish(49);case 52:if(!e.erc1155Tokens){t.next=74;break}h=(0,n.Z)(e.erc1155Tokens),t.prev=54,h.s();case 56:if((w=h.n()).done){t.next=66;break}return x=w.value,t.next=60,(0,Z.i)(this.contractWrapper.getProvider(),this.getAddress(),x.contractAddress,x.tokenId,c);case 60:if(t.sent){t.next=63;break}throw new Error('ERC1155 token "'.concat(x.tokenId,'" with contract address "').concat(x.contractAddress,'" is not approved for transfer.\n\nYou can give approval the multiwrap contract to transfer this token by running:\n\nawait sdk.getEdition("').concat(x.contractAddress,'").setApprovalForAll("').concat(this.getAddress(),'", true);\n\n'));case 63:r.push({assetContract:x.contractAddress,totalAmount:x.quantity,tokenId:x.tokenId,tokenType:2});case 64:t.next=56;break;case 66:t.next=71;break;case 68:t.prev=68,t.t2=t.catch(54),h.e(t.t2);case 71:return t.prev=71,h.f(),t.finish(71);case 74:return t.abrupt("return",r);case 75:case"end":return t.stop()}}),t,this,[[7,24,27,30],[32,46,49,52],[54,68,71,74]])})));return function(e){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e,r,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e,r,n){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,n));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()}]),r}(A.S));(0,f.Z)(W,"contractRoles",w.dy)}}]);