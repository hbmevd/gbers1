"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[2966],{91612:function(t,e,r){r.d(e,{C:function(){return s}});var n=r(15671),a=r(43144),s=function(){function t(e){(0,n.Z)(this,t),this.contractWrapper=e}return(0,a.Z)(t,[{key:"overrideNextTransaction",value:function(t){this.contractWrapper.withTransactionOverride(t)}}]),t}()},36597:function(t,e,r){r.r(e),r.d(e,{Split:function(){return w}});var n=r(29439),a=r(37762),s=r(74165),c=r(15861),i=r(15671),u=r(43144),p=r(4942),o=r(19560),h=r(39707),d=r(84546),l=r(43414),f=r(35867),v=r(53792),Z=r(91612),k=r(70304),w=(r(64166),r(79955),r(87962),function(){function t(e,r,n){var a=this;(0,i.Z)(this,t),(0,p.Z)(this,"withdraw",(0,f.c)(function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f.T,t.t1=a.contractWrapper,t.next=4,(0,l.aM)(e);case 4:return t.t2=t.sent,t.t3=[t.t2],t.t4={contractWrapper:t.t1,method:"release(address)",args:t.t3},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),(0,p.Z)(this,"withdrawToken",(0,f.c)(function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f.T,t.t1=a.contractWrapper,t.next=4,Promise.all([(0,l.aM)(r),(0,l.aM)(e)]);case 4:return t.t2=t.sent,t.t3={contractWrapper:t.t1,method:"release(address,address)",args:t.t2},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t3));case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}())),(0,p.Z)(this,"distribute",(0,f.c)((0,c.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.T.fromContractWrapper({contractWrapper:a.contractWrapper,method:"distribute()",args:[]}));case 1:case"end":return t.stop()}}),t)}))))),(0,p.Z)(this,"distributeToken",(0,f.c)(function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=f.T,t.t1=a.contractWrapper,t.next=4,(0,l.aM)(e);case 4:return t.t2=t.sent,t.t3=[t.t2],t.t4={contractWrapper:t.t1,method:"distribute(address)",args:t.t3},t.abrupt("return",t.t0.fromContractWrapper.call(t.t0,t.t4));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,w=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new l.cr(e,r,o,u,n);this._chainId=h,this.abi=l.bj.parse(o||[]),this.contractWrapper=w,this.storage=n,this.metadata=new v.C(this.contractWrapper,l.c5,this.storage),this.app=new v.b(this.contractWrapper,this.metadata,this.storage),this.roles=new k.C(this.contractWrapper,t.contractRoles),this.encoder=new d.C(this.contractWrapper),this.estimator=new v.G(this.contractWrapper),this.events=new v.a(this.contractWrapper),this.interceptor=new Z.C(this.contractWrapper)}return(0,u.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.address}},{key:"getAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,r,n,a;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],r=o.O$.from(0),t.next=4,this.contractWrapper.read("payeeCount",[]);case 4:n=t.sent;case 5:if(!r.lt(n)){t.next=27;break}return t.prev=6,t.next=9,this.contractWrapper.read("payee",[r]);case 9:return a=t.sent,t.t0=e,t.next=13,this.getRecipientSplitPercentage(a);case 13:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),r=r.add(1),t.next=25;break;case 18:if(t.prev=18,t.t2=t.catch(6),!("method"in t.t2)||!t.t2.method.toLowerCase().includes("payee(uint256)")){t.next=24;break}return t.abrupt("break",27);case 24:throw t.t2;case 25:t.next=5;break;case 27:return t.abrupt("return",e);case 28:case"end":return t.stop()}}),t,this,[[6,18]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var e,r,n,c,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllRecipients();case 2:e=t.sent,r={},n=(0,a.Z)(e),t.prev=5,n.s();case 7:if((c=n.n()).done){t.next=14;break}return i=c.value,t.next=11,this.balanceOf(i.address);case 11:r[i.address]=t.sent;case 12:t.next=7;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),n.e(t.t0);case 19:return t.prev=19,n.f(),t.finish(19);case 22:return t.abrupt("return",r);case 23:case"end":return t.stop()}}),t,this,[[5,16,19,22]])})));return function(){return t.apply(this,arguments)}}()},{key:"balanceOfTokenAllRecipients",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,c,i,u,p,o,h,d;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,l.aM)(e),this.getAllRecipients()]);case 2:r=t.sent,c=(0,n.Z)(r,2),i=c[0],u=c[1],p={},o=(0,a.Z)(u),t.prev=8,o.s();case 10:if((h=o.n()).done){t.next=17;break}return d=h.value,t.next=14,this.balanceOfToken(d.address,i);case 14:p[d.address]=t.sent;case 15:t.next=10;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),o.e(t.t0);case 22:return t.prev=22,o.f(),t.finish(22);case 25:return t.abrupt("return",p);case 26:case"end":return t.stop()}}),t,this,[[8,19,22,25]])})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOf",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,a,c,i,u,p;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,l.aM)(e),this.contractWrapper.getProvider().getBalance(this.getAddress()),this.contractWrapper.read("totalReleased",[])]);case 2:return r=t.sent,a=(0,n.Z)(r,3),c=a[0],i=a[1],u=a[2],p=i.add(u),t.t0=this,t.t1=c,t.t2=p,t.next=13,this.contractWrapper.read("released",[c]);case 13:return t.t3=t.sent,t.abrupt("return",t.t0._pendingPayment.call(t.t0,t.t1,t.t2,t.t3));case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"balanceOfToken",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,a){var c,i,u,p,o,f,v,Z,k,w,b,m,x;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,l.aM)(a),(0,l.aM)(e)]);case 2:return c=t.sent,i=(0,n.Z)(c,2),u=i[0],p=i[1],t.next=8,Promise.resolve().then(r.t.bind(r,49242,19));case 8:return o=t.sent.default,f=new h.CH(u,o,this.contractWrapper.getProvider()),t.next=12,Promise.all([f.balanceOf(this.getAddress()),this.contractWrapper.read("totalReleased",[u]),this.contractWrapper.read("released",[u,p])]);case 12:return v=t.sent,Z=(0,n.Z)(v,3),k=Z[0],w=Z[1],b=Z[2],m=k.add(w),t.next=20,this._pendingPayment(p,m,b);case 20:return x=t.sent,t.next=23,(0,d.a)(this.contractWrapper.getProvider(),u,x);case 23:return t.abrupt("return",t.sent);case 24:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}()},{key:"getRecipientSplitPercentage",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e){var r,a,c,i,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,l.aM)(e),this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[e])]);case 2:return r=t.sent,a=(0,n.Z)(r,3),c=a[0],i=a[1],u=a[2],t.abrupt("return",{address:c,splitPercentage:u.mul(o.O$.from(1e7)).div(i).toNumber()/1e5});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"_pendingPayment",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,a){var c,i,u,p,o,h;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([(0,l.aM)(e),this.contractWrapper.read("totalShares",[])]);case 2:return c=t.sent,i=(0,n.Z)(c,2),u=i[0],p=i[1],t.t0=r,t.next=9,this.contractWrapper.read("shares",[u]);case 9:return t.t1=t.sent,o=t.t0.mul.call(t.t0,t.t1),h=o.div(p),t.abrupt("return",h.sub(a));case 13:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"prepare",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:n}));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"call",value:function(){var t=(0,c.Z)((0,s.Z)().mark((function t(e,r,n){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.call(e,r,n));case 1:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()}]),t}());(0,p.Z)(w,"contractRoles",l.dC)}}]);