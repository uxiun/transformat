(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{5805:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TextRewriter/entryForm",function(){return t(6155)}])},6155:function(r,e,t){"use strict";t.r(e);var n=t(1527),i=t(1933),o=t(4752),u=t(1021),s=t(4106),a=t(5706),l=t(6834),c=t(959),f=t(6887);let d=()=>{let[r,e]=(0,c.useState)({alreadyExist:""}),[t]=(0,l.KO)(i.rz),[d,p]=(0,l.KO)(i.kG),w=r=>(0,i.QF)(t)(r),[x,y]=(0,l.KO)(i.J5),[j,g]=(0,c.useState)(x),{control:h,handleSubmit:v,formState:E}=(0,f.cI)({defaultValues:i.EF}),O=(0,f.qo)({control:h}),[N,_]=(0,l.KO)(i.R4);(0,c.useEffect)(()=>{var r,n,u,s,a;let l={from:null!==(r=O.from)&&void 0!==r?r:d.from,to:null!==(n=O.to)&&void 0!==n?n:d.to,ic:null!==(u=O.ic)&&void 0!==u?u:d.ic,mw:null!==(s=O.mw)&&void 0!==s?s:d.mw,sc:null!==(a=O.sc)&&void 0!==a?a:d.sc},c=(0,i.z3)(N)(l);c?e(r=>({...r,alreadyExist:o.R.confirm.alreadyExist[t]})):e(r=>({...r,alreadyExist:""}))},[O]);let b=r=>{console.log("addEntry(), Entry=",r);let{to:e,...t}=r,n=JSON.stringify(t);N.set(n,e);let o=Array.from(N),u=new Map(o);_(u);let s=o.map(r=>(0,i.bA)(r));y(s),g(s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u.Z,{component:"form",onSubmit:v(b),children:[(0,n.jsx)(f.Qr,{control:h,name:"from",rules:{required:"input something"},render:r=>{let{field:e}=r;return(0,n.jsx)(s.Z,{...e,label:w("from"),error:!!E.errors.from,helperText:E.errors.from&&E.errors.from.message||!E.isValid&&"invalid"})}}),(0,n.jsx)(f.Qr,{control:h,name:"to",rules:{required:"input something"},render:r=>{let{field:e}=r;return(0,n.jsx)(s.Z,{...e,label:w("to"),error:!!E.errors.to,helperText:E.errors.to&&E.errors.to.message||!E.isValid&&"invalid"})}}),(0,n.jsx)(a.Z,{type:"submit",children:o.R.add[t]})]}),(0,n.jsx)(m,{...r})]})},m=r=>(0,n.jsx)(u.Z,{className:"messages",children:Object.entries(r).map(r=>{let[e,t]=r;return(0,n.jsx)("div",{children:t},e)})});e.default=d},1933:function(r,e,t){"use strict";t.d(e,{B9:function(){return x},EF:function(){return l},J5:function(){return a},QF:function(){return u},R4:function(){return f},bA:function(){return m},kG:function(){return c},mY:function(){return p},rz:function(){return s},xp:function(){return w},z3:function(){return d}});var n=t(4477),i=t(8833);let o={from:{en:"from",ja:"置換対象"},ic:{en:"ignore case",ja:"大文字小文字を無視する"},mw:{en:"match word",ja:"単語のみ"},sc:{en:"smart case",ja:"賢い大小文字"},to:{en:"to",ja:"置換結果"}},u=r=>e=>o[e][r],s=(0,n.cn)("ja"),a=(0,n.cn)([]),l={from:"",ic:!1,mw:!1,sc:!1,to:""},c=(0,n.cn)(l),f=(0,n.cn)(new Map),d=r=>e=>{let{to:t,...n}=e,i=JSON.stringify(n),o=r.get(i);return o},m=r=>{let[e,t]=r;return{...JSON.parse(e),to:t}},p=r=>e=>{let t=new Map([...r,...e.map(r=>{let{to:e,...t}=r,n=JSON.stringify(t);return[n,e]})]),n=Array.from(t),i=n.map(r=>m(r));return{entries:i,dedupedMap:t}},w=r=>{let e=new Map(r.map(r=>{let{to:e,...t}=r,n=JSON.stringify(t);return[n,e]})),t=Array.from(e),n=t.map(r=>m(r));return{entries:n,dedupedMap:e}},x=r=>JSON.stringify((0,i.KX)(r)(r=>r.from).reverse().sort((r,e)=>(0,i.Kr)(r,e)([r=>{let{to:e,from:t,...n}=r;return(0,i.fL)(JSON.stringify(n))}])))},4752:function(r,e,t){"use strict";t.d(e,{R:function(){return n}});let n={add:{en:"add",ja:"追加"},confirm:{alreadyExist:{en:"same entry already exists, which will be overloaded.",ja:"同じ条件の組がもうあるので、上書きされます。"}},error:{parse:{en:"couldn't parsed as JSON",ja:"解析不能"}}}},8833:function(r,e,t){"use strict";var n;t.d(e,{KX:function(){return l},Kr:function(){return o},fL:function(){return u},vQ:function(){return s}});let i=r=>e=>t=>n=>{let o=r.shift();return o?(()=>{let u=e(o);return t(u)?u:i(r)(e)(t)(n)})():n},o=(r,e)=>t=>i(t)(t=>t(r)-t(e))(r=>0!=r)(0),u=r=>[...r].reduce((r,e)=>r+(null!==(n=e.codePointAt(0))&&void 0!==n?n:0),0),s=async r=>{await t.g.navigator.clipboard.writeText(r)},a=(r,e)=>{let[t,n]=r,[i,o]=e;return[t,i].sort()[0]===t?-1:0},l=r=>e=>r.map((r,t)=>[e(r),t]).sort(a).map(e=>{let[t,n]=e;return r[n]})}},function(r){r.O(0,[106,194,107,774,888,179],function(){return r(r.s=5805)}),_N_E=r.O()}]);