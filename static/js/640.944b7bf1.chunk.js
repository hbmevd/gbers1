"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[640],{48103:function(t,r,e){e.d(r,{D:function(){return W},F:function(){return l},I:function(){return f},a:function(){return d},b:function(){return b},c:function(){return y},f:function(){return h},g:function(){return k},u:function(){return Z}});var n=e(29439),a=e(74165),c=e(1413),s=e(15861),u=e(56571),o=e(52009),i=e(19560),p=e(39707),f=function(){return o.arrayify("0x80ac58cd")}(),d=function(){return o.arrayify("0xd9b67a26")}(),l={name:"Failed to load NFT metadata"};function h(t,r,e){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,a.Z)().mark((function t(r,e,n){var s,p,f,d,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.startsWith("data:application/json;base64")||"undefined"===typeof Buffer){t.next=4;break}return s=e.split(",")[1],p=JSON.parse(Buffer.from(s,"base64").toString("utf-8")),t.abrupt("return",u.C.parse((0,c.Z)((0,c.Z)({},p),{},{id:i.O$.from(r).toString(),uri:e})));case 4:return f=e.replace("{id}",o.hexZeroPad(i.O$.from(r).toHexString(),32).slice(2)),t.prev=5,t.next=8,n.downloadJSON(f);case 8:d=t.sent,t.next=24;break;case 11:return t.prev=11,t.t0=t.catch(5),h=e.replace("{id}",i.O$.from(r).toString()),t.prev=14,t.next=17,n.downloadJSON(h);case 17:d=t.sent,t.next=24;break;case 20:t.prev=20,t.t1=t.catch(14),console.warn("failed to get token metadata: ".concat(JSON.stringify({tokenId:r.toString(),tokenUri:e})," -- falling back to default metadata")),d=l;case 24:return t.abrupt("return",u.C.parse((0,c.Z)((0,c.Z)({},d),{},{id:i.O$.from(r).toString(),uri:e})));case 25:case"end":return t.stop()}}),t,null,[[5,11],[14,20]])})))).apply(this,arguments)}function y(t,r,e,n){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,a.Z)().mark((function t(r,s,o,v){var y,x,b,m,Z,w,k,g,I,W,C;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(5025).then(e.t.bind(e,25025,19));case 2:return x=t.sent.default,b=new p.CH(r,x,s),t.next=6,Promise.all([b.supportsInterface(f),b.supportsInterface(d)]);case 6:if(m=t.sent,Z=(0,n.Z)(m,2),w=Z[0],k=Z[1],!w){t.next=20;break}return t.next=13,Promise.resolve().then(e.t.bind(e,34161,19));case 13:return g=t.sent.default,I=new p.CH(r,g,s),t.next=17,I.tokenURI(o);case 17:case 27:y=t.sent,t.next=31;break;case 20:if(!k){t.next=30;break}return t.next=23,Promise.resolve().then(e.t.bind(e,50266,19));case 23:return W=t.sent.default,C=new p.CH(r,W,s),t.next=27,C.uri(o);case 30:throw Error("Contract must implement ERC 1155 or ERC 721.");case 31:if(y){t.next=33;break}return t.abrupt("return",u.C.parse((0,c.Z)((0,c.Z)({},l),{},{id:i.O$.from(o).toString(),uri:""})));case 33:return t.abrupt("return",h(o,y,v));case 34:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t,r){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,a.Z)().mark((function t(r,e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"!==typeof r){t.next=4;break}return t.abrupt("return",r);case 4:return t.next=6,e.upload(u.a.parse(r));case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t,r,e,n){return w.apply(this,arguments)}function w(){return(w=(0,s.Z)((0,a.Z)().mark((function t(r,e,n,c){var s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!g(r)){t.next=4;break}return t.abrupt("return",r);case 4:if(!I(r)){t.next=11;break}return t.next=7,e.uploadBatch(r.map((function(t){return u.a.parse(t)})),{rewriteFileNames:{fileStartNumber:n||0},onProgress:null===c||void 0===c?void 0:c.onProgress});case 7:return s=t.sent,t.abrupt("return",s);case 11:throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)");case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){for(var r=t[0].substring(0,t[0].lastIndexOf("/")),e=0;e<t.length;e++){var n=t[e].substring(0,t[e].lastIndexOf("/"));if(r!==n)throw new Error("Can only create batches with the same base URI for every entry in the batch. Expected '".concat(r,"' but got '").concat(n,"'"))}return r.replace(/\/$/,"")+"/"}function g(t){return void 0===t.find((function(t){return"string"!==typeof t}))}function I(t){return void 0===t.find((function(t){return"object"!==typeof t}))}var W=100},70640:function(t,r,e){e.d(r,{C:function(){return W},D:function(){return C},a:function(){return _},c:function(){return R}});var n=e(93433),a=e(29439),c=e(74165),s=e(1413),u=e(15861),o=e(15671),i=e(43144),p=e(4942),f=e(53792),d=e(35867),l=e(43414),h=e(84546),v=e(91953),y=e(46684),x=e(86388),b=e(52009),m=e(19560),Z=e(39707),w=e(56571),k=e(48103),g=e(43378),I=e(88034),W=function(){function t(r,e){var n=this;(0,o.Z)(this,t),(0,p.Z)(this,"featureName",l.d1.name),(0,p.Z)(this,"setDefaultRoyaltyInfo",(0,d.c)(function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r){var e,a,u,o,i;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.metadata.get();case 2:return e=t.sent,t.next=5,n.metadata.parseInputMetadata((0,s.Z)((0,s.Z)({},e),r));case 5:return a=t.sent,t.next=8,n.metadata._parseAndUploadMetadata(a);case 8:if(u=t.sent,!(0,f.h)("setContractURI",n.contractWrapper)){t.next=15;break}return o=new h.C(n.contractWrapper),i=[o.encode("setDefaultRoyaltyInfo",[a.fee_recipient,a.seller_fee_basis_points]),o.encode("setContractURI",[u])],t.abrupt("return",d.T.fromContractWrapper({contractWrapper:n.contractWrapper,method:"multicall",args:[i],parse:function(t){return{receipt:t,data:function(){return n.getDefaultRoyaltyInfo()}}}}));case 15:throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.");case 16:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,p.Z)(this,"setTokenRoyaltyInfo",(0,d.c)(function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r,e){var a;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=l.bD.parse(e),t.abrupt("return",d.T.fromContractWrapper({contractWrapper:n.contractWrapper,method:"setRoyaltyInfoForToken",args:[r,a.fee_recipient,a.seller_fee_basis_points],parse:function(t){return{receipt:t,data:function(){return n.getDefaultRoyaltyInfo()}}}}));case 2:case"end":return t.stop()}}),t)})));return function(r,e){return t.apply(this,arguments)}}())),this.contractWrapper=r,this.metadata=e}return(0,i.Z)(t,[{key:"getDefaultRoyaltyInfo",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(){var r,e,n,s;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.read("getDefaultRoyaltyInfo",[]);case 2:return r=t.sent,e=(0,a.Z)(r,2),n=e[0],s=e[1],t.abrupt("return",l.bD.parseAsync({fee_recipient:n,seller_fee_basis_points:s}));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTokenRoyaltyInfo",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r){var e,n,s,u;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.read("getRoyaltyInfoForToken",[r]);case 2:return e=t.sent,n=(0,a.Z)(e,2),s=n[0],u=n[1],t.abrupt("return",l.bD.parseAsync({fee_recipient:s,seller_fee_basis_points:u}));case 7:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),t}(),C=function(){function t(r,e,n,a){var s=this;(0,o.Z)(this,t),(0,p.Z)(this,"createDelayedRevealBatch",(0,d.c)(function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r,e,n,a){var u,o,i,p,f,l,h,b,m,Z,g;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}throw new Error("Password is required");case 2:return t.next=4,s.storage.uploadBatch([w.a.parse(r)],{rewriteFileNames:{fileStartNumber:0}});case 4:return u=t.sent,o=(0,k.g)(u),t.next=8,s.nextTokenIdToMintFn();case 8:return i=t.sent,t.next=11,s.storage.uploadBatch(e.map((function(t){return w.a.parse(t)})),{onProgress:null===a||void 0===a?void 0:a.onProgress,rewriteFileNames:{fileStartNumber:i.toNumber()}});case 11:return p=t.sent,f=(0,k.g)(p),t.next=15,s.contractWrapper.read("getBaseURICount",[]);case 15:return l=t.sent,t.next=18,s.hashDelayRevealPassword(l,n);case 18:return h=t.sent,t.next=21,s.contractWrapper.read("encryptDecrypt",[v.Y0(f),h]);case 21:return b=t.sent,t.next=24,s.isLegacyContract();case 24:if(!t.sent){t.next=29;break}m=b,t.next=34;break;case 29:return t.next=31,s.contractWrapper.getChainID();case 31:Z=t.sent,g=y.keccak256(["bytes","bytes","uint256"],[v.Y0(f),h,Z]),m=x.$.encode(["bytes","bytes32"],[b,g]);case 34:return t.abrupt("return",d.T.fromContractWrapper({contractWrapper:s.contractWrapper,method:"lazyMint",args:[p.length,o.endsWith("/")?o:"".concat(o,"/"),m],parse:function(t){for(var r=s.contractWrapper.parseLogs("TokensLazyMinted",null===t||void 0===t?void 0:t.logs),e=r[0].args.startTokenId,n=r[0].args.endTokenId,a=[],c=e;c.lte(n);c=c.add(1))a.push({id:c,receipt:t});return a}}));case 35:case"end":return t.stop()}}),t)})));return function(r,e,n,a){return t.apply(this,arguments)}}())),(0,p.Z)(this,"reveal",(0,d.c)(function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r,e){var n,a;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}throw new Error("Password is required");case 2:return t.next=4,s.hashDelayRevealPassword(r,e);case 4:return n=t.sent,t.prev=5,t.next=8,s.contractWrapper.callStatic().reveal(r,n);case 8:if((a=t.sent).includes("://")&&a.endsWith("/")){t.next=11;break}throw new Error("invalid password");case 11:t.next=16;break;case 13:throw t.prev=13,t.t0=t.catch(5),new Error("invalid password");case 16:return t.abrupt("return",d.T.fromContractWrapper({contractWrapper:s.contractWrapper,method:"reveal",args:[r,n]}));case 17:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(r,e){return t.apply(this,arguments)}}())),this.featureName=n,this.nextTokenIdToMintFn=a,this.contractWrapper=r,this.storage=e}return(0,i.Z)(t,[{key:"getBatchesToReveal",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(){var r,e,a,s,u,o,i,p,d=this;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.read("getBaseURICount",[]);case 2:if(!(r=t.sent).isZero()){t.next=5;break}return t.abrupt("return",[]);case 5:return e=Array.from(Array(r.toNumber()).keys()),t.next=8,Promise.all(e.map((function(t){if((0,f.h)("getBatchIdAtIndex",d.contractWrapper))return d.contractWrapper.read("getBatchIdAtIndex",[t]);if((0,f.h)("baseURIIndices",d.contractWrapper))return d.contractWrapper.read("baseURIIndices",[t]);throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.")})));case 8:return a=t.sent,s=a.slice(0,a.length-1),t.next=12,Promise.all(Array.from([0].concat((0,n.Z)(s))).map((function(t){return d.getNftMetadata(t.toString())})));case 12:return u=t.sent,t.next=15,this.isLegacyContract();case 15:return o=t.sent,t.next=18,Promise.all(Array.from((0,n.Z)(a)).map((function(t){return o?d.getLegacyEncryptedData(t):d.contractWrapper.read("encryptedData",[t])})));case 18:return i=t.sent,p=i.map((function(t){return b.hexDataLength(t)>0?o?t:x.$.decode(["bytes","bytes32"],t)[0]:t})),t.abrupt("return",u.map((function(t,r){return{batchId:m.O$.from(r),batchUri:t.uri,placeholderMetadata:t}})).filter((function(t,r){return b.hexDataLength(p[r])>0})));case 21:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"hashDelayRevealPassword",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r,e){var n,a;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.getChainID();case 2:return n=t.sent,a=this.contractWrapper.address,t.abrupt("return",y.keccak256(["string","uint256","uint256","address"],[e,n,r,a]));case 5:case"end":return t.stop()}}),t,this)})));return function(r,e){return t.apply(this,arguments)}}()},{key:"getNftMetadata",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,k.c)(this.contractWrapper.address,this.contractWrapper.getProvider(),r,this.storage));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()},{key:"isLegacyContract",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(){var r;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,f.h)("contractVersion",this.contractWrapper)){t.next=11;break}return t.prev=1,t.next=4,this.contractWrapper.read("contractVersion",[]);case 4:return r=t.sent,t.abrupt("return",r<=2);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",!1);case 11:return t.abrupt("return",!1);case 12:case"end":return t.stop()}}),t,this,[[1,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"getLegacyEncryptedData",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r){var n,a,s;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8839).then(e.t.bind(e,98839,19));case 2:return n=t.sent.default,a=new Z.CH(this.contractWrapper.address,n,this.contractWrapper.getProvider()),t.next=6,a.functions.encryptedBaseURI(r);case 6:if(!((s=t.sent).length>0)){t.next=11;break}return t.abrupt("return",s[0]);case 11:return t.abrupt("return","0x");case 12:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}()}]),t}();function R(t,r,e,n,a){return D.apply(this,arguments)}function D(){return(D=(0,u.Z)((0,c.Z)().mark((function t(r,e,n,a,s){var u,o,i,p;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u={},o=a||l.aV,t.next=4,(0,I.n)(r.getProvider(),e,o);case 4:if(i=t.sent,!(p=i.mul(n)).gt(0)){t.next=14;break}if(o!==l.aV){t.next=11;break}u={value:p},t.next=14;break;case 11:if(o===l.aV||!s){t.next=14;break}return t.next=14,(0,g.a)(r,o,p,n,0);case 14:return t.abrupt("return",u);case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var _=function(){function t(r){var e=this;(0,o.Z)(this,t),(0,p.Z)(this,"featureName",l.d2.name),(0,p.Z)(this,"set",(0,d.c)(function(){var t=(0,u.Z)((0,c.Z)().mark((function t(r){var n;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,l.aM)(r);case 2:return n=t.sent,t.abrupt("return",d.T.fromContractWrapper({contractWrapper:e.contractWrapper,method:"setOwner",args:[n]}));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),this.contractWrapper=r}return(0,i.Z)(t,[{key:"get",value:function(){var t=(0,u.Z)((0,c.Z)().mark((function t(){return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.read("owner",[]));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}()}}]);