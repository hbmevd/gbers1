"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[8173],{43121:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(15671),i=n(43144),a=n(60136),c=n(29388),s=n(20710),o=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(e){var i;(0,r.Z)(this,n);var a=e.chains,c=void 0===a?s.gL9:a,o=e.options;return(i=t.call(this)).chains=c,i.options=o,i}return(0,i.Z)(n,[{key:"getBlockExplorerUrls",value:function(e){var t,n,r=null!==(t=null===(n=e.explorers)||void 0===n?void 0:n.map((function(e){return e.url})))&&void 0!==t?t:[];return r.length>0?r:void 0}},{key:"isChainUnsupported",value:function(e){return!this.chains.some((function(t){return t.chainId===e}))}},{key:"updateChains",value:function(e){this.chains=e}}]),n}(n(52134).Z)},65423:function(e,t,n){n.d(t,{A:function(){return f},C:function(){return v},P:function(){return d},R:function(){return l},S:function(){return m},U:function(){return Z},a:function(){return p}});var r=n(97326),i=n(43144),a=n(15671),c=n(60136),s=n(29388),o=n(98737),u=n(40744),h=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e,r){var i;(0,a.Z)(this,n);var c=r.cause,s=r.code,o=r.data;if(!Number.isInteger(s))throw new Error('"code" must be an integer.');if(!e||"string"!==typeof e)throw new Error('"message" must be a nonempty string.');return(i=t.call(this,"".concat(e,". Cause: ").concat(JSON.stringify(c)))).cause=c,i.code=s,i.data=o,i}return(0,i.Z)(n)}((0,o.Z)(Error)),d=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e,r){(0,a.Z)(this,n);var i=r.cause,c=r.code,s=r.data;if(!(Number.isInteger(c)&&c>=1e3&&c<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');return t.call(this,e,{cause:i,code:c,data:s})}return(0,i.Z)(n)}(h),f=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,a.Z)(this,n),e=t.apply(this,arguments),(0,u._)((0,r.Z)(e),"name","AddChainError"),(0,u._)((0,r.Z)(e),"message","Error adding chain"),e}return(0,i.Z)(n)}((0,o.Z)(Error)),v=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;(0,a.Z)(this,n);var c=e.chainId,s=e.connectorId;return i=t.call(this,'Chain "'.concat(c,'" not configured for connector "').concat(s,'".')),(0,u._)((0,r.Z)(i),"name","ChainNotConfigured"),i}return(0,i.Z)(n)}((0,o.Z)(Error)),p=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,a.Z)(this,n),e=t.apply(this,arguments),(0,u._)((0,r.Z)(e),"name","ConnectorNotFoundError"),(0,u._)((0,r.Z)(e),"message","Connector not found"),e}return(0,i.Z)(n)}((0,o.Z)(Error)),l=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,a.Z)(this,n),i=t.call(this,"Resource unavailable",{cause:e,code:-32002}),(0,u._)((0,r.Z)(i),"name","ResourceUnavailable"),i}return(0,i.Z)(n)}(h),m=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,a.Z)(this,n),i=t.call(this,"Error switching chain",{cause:e,code:4902}),(0,u._)((0,r.Z)(i),"name","SwitchChainError"),i}return(0,i.Z)(n)}(d),Z=function(e){(0,c.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,a.Z)(this,n),i=t.call(this,"User rejected request",{cause:e,code:4001}),(0,u._)((0,r.Z)(i),"name","UserRejectedRequestError"),i}return(0,i.Z)(n)}(d)},93207:function(e,t,n){function r(e){return"string"===typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"===typeof e?Number(e):e}n.d(t,{n:function(){return r}})},17692:function(e,t,n){n.d(t,{g:function(){return a},i:function(){return i}});var r=n(20710);function i(e){var t=new URL(e).hostname;return t.endsWith(".thirdweb.com")||"localhost"===t||"0.0.0.0"===t}function a(e){return(0,r.OZ$)(e).map((function(e){try{var t=new URL(e);return t.hostname.endsWith(".thirdweb.com")&&(t.pathname="",t.search=""),t.toString()}catch(n){return e}}))}},48173:function(e,t,n){n.r(t),n.d(t,{FrameConnector:function(){return b}});var r=n(29439),i=n(74165),a=n(15861),c=n(1413),s=n(15671),o=n(43144),u=n(97326),h=n(60136),d=n(29388),f=n(95768),v=n(40744),p=n(28552),l=n(64249),m=n(52009),Z=n(17692),w=n(43121),g=n(93207),k=n(65423),x=(n(52134),new WeakMap),b=function(e){(0,h.Z)(w,e);var t=(0,d.Z)(w);function w(e){var n;(0,s.Z)(this,w);var r=e.chains,i=e.options,a=e.connectorStorage,o=(0,c.Z)({shimDisconnect:!0},i);return n=t.call(this,{chains:r,options:o}),(0,v._)((0,u.Z)(n),"id","frame"),(0,v._)((0,u.Z)(n),"name","Frame"),(0,v._)((0,u.Z)(n),"ready",!0),(0,v._)((0,u.Z)(n),"shimDisconnectKey","".concat(n.id,".shimDisconnect")),(0,f._)((0,u.Z)(n),x,{writable:!0,value:void 0}),(0,v._)((0,u.Z)(n),"onAccountsChanged",(function(e){0===e.length?n.emit("disconnect"):n.emit("change",{account:p.getAddress(e[0])})})),(0,v._)((0,u.Z)(n),"onChainChanged",(function(e){var t=(0,g.n)(e),r=n.isChainUnsupported(t);n.emit("change",{chain:{id:t,unsupported:r}})})),(0,v._)((0,u.Z)(n),"onDisconnect",(function(){n.emit("disconnect"),n.options.shimDisconnect&&n.connectorStorage.removeItem(n.shimDisconnectKey)})),n.connectorStorage=a,n}return(0,o.Z)(w,[{key:"connect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getProvider();case 3:if(n=e.sent){e.next=6;break}throw new k.a;case 6:return this.setupListeners(),this.emit("message",{type:"connecting"}),e.next=10,n.request({method:"eth_requestAccounts"});case 10:return r=e.sent,a=p.getAddress(r[0]),e.next=14,this.getChainId();case 14:if(c=e.sent,s=this.isChainUnsupported(c),null===t||void 0===t||!t.chainId||c===(null===t||void 0===t?void 0:t.chainId)){e.next=22;break}return e.next=19,this.switchChain(null===t||void 0===t?void 0:t.chainId);case 19:o=e.sent,c=o.chainId,s=this.isChainUnsupported(c);case 22:return this.options.shimDisconnect&&this.connectorStorage.setItem(this.shimDisconnectKey,"true"),e.abrupt("return",{account:a,provider:n,chain:{id:c,unsupported:s}});case 26:if(e.prev=26,e.t0=e.catch(0),!this.isUserRejectedRequestError(e.t0)){e.next=30;break}throw new k.U(e.t0);case 30:if(-32002!==e.t0.code){e.next=32;break}throw new k.R(e.t0);case 32:throw e.t0;case 33:case"end":return e.stop()}}),e,this,[[0,26]])})));return function(t){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(null!==(t=e.sent)&&void 0!==t&&t.removeListener){e.next=5;break}return e.abrupt("return");case 5:t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.isInjected()||t.close(),this.options.shimDisconnect&&this.connectorStorage.removeItem(this.shimDisconnectKey);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAccount",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(t=e.sent){e.next=5;break}throw new k.a;case 5:return e.next=7,t.request({method:"eth_accounts"});case 7:return n=e.sent,e.abrupt("return",p.getAddress(n[0]));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getChainId",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(t=e.sent){e.next=5;break}throw new k.a;case 5:return e.next=7,t.request({method:"eth_chainId"});case 7:return n=e.sent,e.abrupt("return",(0,g.n)(n));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getProvider",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=f.a,e.t1=this,e.t2=x,!this.isInjected()){e.next=7;break}e.t3=this.injectedProvider(),e.next=10;break;case 7:return e.next=9,this.createProvider();case 9:e.t3=e.sent;case 10:return e.t4=e.t3,(0,e.t0)(e.t1,e.t2,e.t4),e.abrupt("return",(0,f.b)(this,x));case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSigner",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t,n,a,c,s,o=arguments;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(o.length>0&&void 0!==o[0]?o[0]:{}).chainId,e.next=3,Promise.all([this.getProvider(),this.getAccount()]);case 3:return n=e.sent,a=(0,r.Z)(n,2),c=a[0],s=a[1],e.abrupt("return",new l.Q(c,t).getSigner(s));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.options.shimDisconnect||this.connectorStorage.getItem(this.shimDisconnectKey)){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,this.getProvider();case 5:if(e.sent){e.next=8;break}throw new k.a;case 8:return e.next=10,this.getAccount();case 10:return t=e.sent,e.abrupt("return",!!t);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:if(n=e.sent){e.next=5;break}throw new k.a;case 5:return r=m.hexValue(t),e.prev=6,e.next=9,Promise.all([n.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise((function(e){return s.on("change",(function(n){var r=n.chain;(null===r||void 0===r?void 0:r.id)===t&&e()}))}))]);case 9:return e.abrupt("return",null!==(a=this.chains.find((function(e){return e.chainId===t})))&&void 0!==a?a:{chainId:t,name:"Chain ".concat(r),slug:"".concat(r),nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0});case 12:if(e.prev=12,e.t0=e.catch(6),c=this.chains.find((function(e){return e.chainId===t}))){e.next=17;break}throw new k.C({chainId:t,connectorId:this.id});case 17:if(4902!==e.t0.code){e.next=34;break}return e.prev=18,e.next=21,n.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:c.name,nativeCurrency:c.nativeCurrency,rpcUrls:(0,Z.g)(c),blockExplorerUrls:this.getBlockExplorerUrls(c)}]});case 21:return e.next=23,this.getChainId();case 23:if(e.sent===t){e.next=26;break}throw new k.U(new Error("User rejected switch after adding network."));case 26:return e.abrupt("return",c);case 29:if(e.prev=29,e.t1=e.catch(18),!this.isUserRejectedRequestError(e.t1)){e.next=33;break}throw new k.U(e.t1);case 33:throw new k.A(e.t1.message);case 34:if(!this.isUserRejectedRequestError(e.t0)){e.next=36;break}throw new k.U(e.t0);case 36:throw new k.S(e.t0);case 37:case"end":return e.stop()}}),e,this,[[6,12],[18,29]])})));return function(t){return e.apply(this,arguments)}}()},{key:"watchAsset",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,r,a,c,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.address,r=t.decimals,a=void 0===r?18:r,c=t.image,s=t.symbol,e.next=3,this.getProvider();case 3:if(o=e.sent){e.next=6;break}throw new k.a;case 6:return e.abrupt("return",o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:n,decimals:a,image:c,symbol:s}}}));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProvider();case 2:(t=e.sent).on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUserRejectedRequestError",value:function(e){return 4001===e.code}},{key:"injectedProvider",value:function(){var e;return null===(e=window)||void 0===e?void 0:e.ethereum}},{key:"isInjected",value:function(){var e;return!(null===(e=this.injectedProvider())||void 0===e||!e.isFrame)}},{key:"createProvider",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8971).then(n.t.bind(n,8971,23));case 2:return t=e.sent.default,e.abrupt("return",t("frame"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),w}(w.W)}}]);