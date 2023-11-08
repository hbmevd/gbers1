"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9051],{99051:function(e,t,r){r.r(t),r.d(t,{EmbeddedWalletConnector:function(){return b}});var n=r(74165),a=r(15861),i=r(15671),u=r(43144),s=r(97326),c=r(60136),o=r(29388),h=r(95768),p=r(40744),f=r(28552),l=r(34526),d=r(35802),v=r(93207),w=r(23742),Z=(r(52134),new WeakMap),k=new WeakMap,b=function(e){(0,c.Z)(r,e);var t=(0,o.Z)(r);function r(e){var u;return(0,i.Z)(this,r),u=t.call(this),(0,p._)((0,s.Z)(u),"id",l.w.paper),(0,p._)((0,s.Z)(u),"name","Embedded Wallet"),(0,p._)((0,s.Z)(u),"ready",!0),(0,p._)((0,s.Z)(u),"user",null),(0,h._)((0,s.Z)(u),Z,{writable:!0,value:void 0}),(0,h._)((0,s.Z)(u),k,{writable:!0,value:void 0}),(0,p._)((0,s.Z)(u),"onAccountsChanged",function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=5;break}return e.next=3,u.onDisconnect();case 3:e.next=6;break;case 5:u.emit("change",{account:f.getAddress(t[0])});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(0,p._)((0,s.Z)(u),"onChainChanged",(function(e){var t=(0,v.n)(e),r=-1===u.options.chains.findIndex((function(e){return e.chainId===t}));u.emit("change",{chain:{id:t,unsupported:r}})})),(0,p._)((0,s.Z)(u),"onDisconnect",(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.emit("disconnect");case 1:case"end":return e.stop()}}),e)})))),u.options=e,u}return(0,u.Z)(r,[{key:"getEmbeddedWalletSDK",value:function(){return(0,h.b)(this,Z)||(0,h.a)(this,Z,new w.E({clientId:this.options.clientId,chain:"Ethereum",onAuthSuccess:this.options.onAuthSuccess})),(0,h.b)(this,Z)}},{key:"connect",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=9;break}return e.next=3,this.authenticate({strategy:"iframe"});case 3:if((r=e.sent).user){e.next=6;break}throw new Error("Error connecting User");case 6:this.user=r.user,e.next=14;break;case 9:if(t.authResult){e.next=11;break}throw new Error("Missing authData - call authenticate() first with your authentication strategy");case 11:if(t.authResult.user){e.next=13;break}throw new Error("Missing authData.user - call authenticate() first with your authentication strategy");case 13:this.user=t.authResult.user;case 14:return null!==t&&void 0!==t&&t.chainId&&this.switchChain(t.chainId),e.abrupt("return",this.getAddress());case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,h.b)(this,Z),e.next=3,null===t||void 0===t?void 0:t.auth.logout();case 3:(0,h.a)(this,k,void 0),(0,h.a)(this,Z,void 0),this.user=null;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAddress",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.user){e.next=2;break}throw new Error("Embedded Wallet is not connected");case 2:return e.abrupt("return",this.user.walletAddress);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isConnected",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getAddress();case 3:return t=e.sent,e.abrupt("return",!!t);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getProvider",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSigner();case 2:if((t=e.sent).provider){e.next=5;break}throw new Error("Provider not found");case 5:return e.abrupt("return",t.provider);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getSigner",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(0,h.b)(this,k)){e.next=2;break}return e.abrupt("return",(0,h.b)(this,k));case 2:return e.next=4,this.getUser();case 4:return t=e.sent,e.next=7,null===t||void 0===t?void 0:t.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""});case 7:if(r=e.sent){e.next=10;break}throw new Error("Signer not found");case 10:return(0,h.a)(this,k,r),e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isAuthorized",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"switchChain",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=this.options.chains.find((function(e){return e.chainId===t}))){e.next=3;break}throw new Error("Chain not configured");case 3:return e.next=5,null===(r=this.user)||void 0===r?void 0:r.wallet.setChain({chain:"Ethereum"});case 5:return e.t0=h.a,e.t1=this,e.t2=k,e.next=10,null===(a=this.user)||void 0===a?void 0:a.wallet.getEthersJsSigner({rpcEndpoint:i.rpc[0]||""});case 10:e.t3=e.sent,(0,e.t0)(e.t1,e.t2,e.t3),this.emit("change",{chain:{id:t,unsupported:!1}});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setupListeners",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"updateChains",value:function(e){this.options.chains=e}},{key:"getUser",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.user&&this.user.wallet&&this.user.wallet.getEthersJsSigner){e.next=10;break}return t=this.getEmbeddedWalletSDK(),e.next=4,t.getUser();case 4:r=e.sent,e.t0=r.status,e.next=e.t0===w.U.LOGGED_IN_WALLET_INITIALIZED?8:10;break;case 8:return this.user=r,e.abrupt("break",10);case 10:return e.abrupt("return",this.user);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEmail",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSigner();case 2:if(this.user){e.next=4;break}throw new Error("No user found, Embedded Wallet is not connected");case 4:return e.abrupt("return",this.user.authDetails.email);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRecoveryInformation",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSigner();case 2:if(this.user){e.next=4;break}throw new Error("No user found, Embedded Wallet is not connected");case 4:return e.abrupt("return",this.user.authDetails);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sendVerificationEmail",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,a=this.getEmbeddedWalletSDK(),e.abrupt("return",a.auth.sendEmailLoginOtp({email:r}));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"authenticate",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=this.getEmbeddedWalletSDK(),a=t.strategy,e.t0=a,e.next="email_verification"===e.t0?5:"google"===e.t0?8:"jwt"===e.t0?9:"iframe_email_verification"===e.t0?10:"iframe"===e.t0||void 0===e.t0?11:12;break;case 5:return e.next=7,r.auth.verifyEmailLoginOtp({email:t.email,otp:t.verificationCode,recoveryCode:t.recoveryCode});case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",r.auth.loginWithGoogle({closeOpenedWindow:t.closeOpenedWindow,openedWindow:t.openedWindow}));case 9:return e.abrupt("return",r.auth.loginWithCustomJwt({jwt:t.jwt,encryptionKey:t.encryptionKey}));case 10:return e.abrupt("return",r.auth.loginWithEmailOtp({email:t.email}));case 11:return e.abrupt("return",r.auth.loginWithModal());case 12:g(a);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(d.C);function g(e){throw new Error("Invalid param: "+e)}}}]);