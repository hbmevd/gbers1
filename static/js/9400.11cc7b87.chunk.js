"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[9400],{70304:function(e,r,t){t.d(r,{C:function(){return m}});var n=t(74165),a=t(29439),o=t(15861),u=t(15671),c=t(43144),s=t(4942),i=t(17389),p=t(43414),l=t(53792),f=t(35867),h=t(84546),m=function(){function e(r,t){var c=this;(0,u.Z)(this,e),(0,s.Z)(this,"featureName",p.d0.name),(0,s.Z)(this,"setAll",(0,f.c)(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,o,u,s,l,m,v;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new h.C(c.contractWrapper),o=Object.keys(r),(0,i.Z)(o.length,"you must provide at least one role to set"),(0,i.Z)(o.every((function(e){return c.roles.includes(e)})),"this contract does not support the given role"),e.next=6,c.getAll();case 6:u=e.sent,s=[],l=o.sort((function(e){return"admin"===e?1:-1})),m=(0,n.Z)().mark((function e(){var o,i,f,h,m,Z,d,k,w;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=l[v],e.next=3,Promise.all([Promise.all((null===(o=r[f])||void 0===o?void 0:o.map((function(e){return(0,p.aM)(e)})))||[]),Promise.all((null===(i=u[f])||void 0===i?void 0:i.map((function(e){return(0,p.aM)(e)})))||[])]);case 3:if(h=e.sent,m=(0,a.Z)(h,2),Z=m[0],d=m[1],k=Z.filter((function(e){return!d.includes(e)})),w=d.filter((function(e){return!Z.includes(e)})),k.length&&k.forEach((function(e){s.push(t.encode("grantRole",[(0,p.H)(f),e]))})),!w.length){e.next=15;break}return e.next=13,Promise.all(w.map((function(e){return c.getRevokeRoleFunctionName(e)})));case 13:e.sent.forEach((function(e,r){return s.push(t.encode(e,[(0,p.H)(f),w[r]]))}));case 15:case"end":return e.stop()}}),e)})),v=0;case 11:if(!(v<l.length)){e.next=16;break}return e.delegateYield(m(),"t0",13);case 13:v++,e.next=11;break;case 16:return e.abrupt("return",f.T.fromContractWrapper({contractWrapper:c.contractWrapper,method:"multicall",args:[s]}));case 17:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())),(0,s.Z)(this,"grant",(0,f.c)(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,i.Z)(c.roles.includes(r),'this contract does not support the "'.concat(r,'" role')),e.next=3,(0,p.aM)(t);case 3:return a=e.sent,e.abrupt("return",f.T.fromContractWrapper({contractWrapper:c.contractWrapper,method:"grantRole",args:[(0,p.H)(r),a]}));case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}())),(0,s.Z)(this,"revoke",(0,f.c)(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,i.Z)(c.roles.includes(r),'this contract does not support the "'.concat(r,'" role')),e.next=3,(0,p.aM)(t);case 3:return a=e.sent,e.next=6,c.getRevokeRoleFunctionName(a);case 6:return o=e.sent,e.abrupt("return",f.T.fromContractWrapper({contractWrapper:c.contractWrapper,method:o,args:[(0,p.H)(r),a]}));case 8:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}())),this.contractWrapper=r,this.roles=t}return(0,c.Z)(e,[{key:"getAll",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,t,o=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,i.Z)(this.roles.length,"this contract has no support for roles"),r={},t=Object.entries(this.roles),e.next=5,Promise.all(t.map((function(e){var r=(0,a.Z)(e,2)[1];return o.get(r)})));case 5:return e.sent.forEach((function(e,n){return r[t[n][1]]=e})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,a,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,i.Z)(this.roles.includes(r),'this contract does not support the "'.concat(r,'" role')),t=this.contractWrapper,!(0,l.h)("getRoleMemberCount",t)||!(0,l.h)("getRoleMember",t)){e.next=10;break}return a=(0,p.H)(r),e.next=6,t.read("getRoleMemberCount",[a]);case 6:return o=e.sent.toNumber(),e.next=9,Promise.all(Array.from(Array(o).keys()).map((function(e){return t.read("getRoleMember",[a,e])})));case 9:return e.abrupt("return",e.sent);case 10:throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.");case 11:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()},{key:"verify",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r,t){var u=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map(function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var o,c,s,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([u.get(r),(0,p.aM)(t)]);case 2:if(o=e.sent,c=(0,a.Z)(o,2),s=c[0],i=c[1],s.map((function(e){return e.toLowerCase()})).includes(i.toLowerCase())){e.next=8;break}throw new p.o(i,r);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},{key:"getRevokeRoleFunctionName",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(r){var t,o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(0,p.aM)(r),this.contractWrapper.getSignerAddress()]);case 2:if(t=e.sent,o=(0,a.Z)(t,2),u=o[0],o[1].toLowerCase()!==u.toLowerCase()){e.next=8;break}return e.abrupt("return","renounceRole");case 8:return e.abrupt("return","revokeRole");case 9:case"end":return e.stop()}}),e,this)})));return function(r){return e.apply(this,arguments)}}()}]),e}()}}]);