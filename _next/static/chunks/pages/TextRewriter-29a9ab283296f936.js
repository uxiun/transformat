(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{6652:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TextRewriter",function(){return o(6517)}])},6155:function(e,t,o){"use strict";o.r(t);var r=o(1527),l=o(1155),n=o(4752),i=o(1479),a=o(3426),s=o(9530),d=o(6726),c=o(6499),m=o(3964),p=o(6063),u=o(959),f=o(4091),h=o(2202);let x=()=>{let[e,t]=(0,u.useState)({alreadyExist:"",operation:""}),[o]=(0,p.KO)(l.rz),[x,v]=(0,p.KO)(l.kG),g=e=>(0,l.QF)(o)(e),[w,O]=(0,p.KO)(l.J5),[b,K]=(0,p.KO)(l.e2),[R,y]=(0,p.KO)(l.jl),[E,S]=(0,p.KO)(l.Cf),[Z,k]=(0,p.KO)(l.D6),[N,_]=(0,p.KO)(l.ag),[C,z]=(0,u.useState)(w),{control:J,handleSubmit:M,formState:T}=(0,f.cI)({defaultValues:l.EF}),F=(0,f.qo)({control:J}),[Q,A]=(0,p.KO)(l.R4),[P,L]=(0,u.useState)(!1),[V,q]=(0,u.useState)("add"),[H,B]=(0,u.useState)(l.P1);(0,u.useEffect)(()=>{var e,r,i,a,s;let d={from:null!==(e=F.from)&&void 0!==e?e:x.from,to:null!==(r=F.to)&&void 0!==r?r:x.to,ic:null!==(i=F.ic)&&void 0!==i?i:x.ic,mw:null!==(a=F.mw)&&void 0!==a?a:x.mw,sc:null!==(s=F.sc)&&void 0!==s?s:x.sc};y(d),L(!!d.from.match(/.*[a-zA-Z].*/));let c=(0,l.z3)(Q)(d);"string"==typeof c?(t(e=>({...e,alreadyExist:n.R.confirm.alreadyExist[o]})),q("update"),K({...d,to:c})):(t(e=>({...e,alreadyExist:""})),q("add"),K(d))},[F,w]);let D=e=>{let{to:r,...i}=e,a=JSON.stringify(i),s=Q.delete(a);Q.set(a,r),s?(console.log("updated ",b),console.log("to",'"'.concat(r,'"')),t(t=>({...t,operation:n.R.tooltip.operation.update(e.from,b.to)(e.to)[o]})),S(e=>({from:e.from,to:e.to.map(e=>((0,h.SK)(e.n,b.to).forEach(t=>e.index.delete(t)),(0,h.P)(e)(Z,r)))}))):(console.log("added:",e),t(t=>({...t,operation:n.R.tooltip.operation.add(e.from,e.to)[o]})),S(t=>(0,l.VU)(Z,t)(e))),_(e=>(e.set(a,Z),new Map([...e.entries()]))),k(e=>e+1);let d=Array.from(Q),c=new Map(d);A(c);let m=d.map(e=>(0,l.bA)(e));O(m),z(m)},X=e=>{let{to:r,...i}=e,a=JSON.stringify(i),s=Q.delete(a);s?(console.log("deleted:",l.e2),t(t=>({...t,operation:n.R.tooltip.operation.delete(e.from,e.to)[o]})),_(e=>(e.delete(a),new Map([...e.entries()])))):(console.log("failed to delete"),t(e=>({...e,operation:n.R.tooltip.fail("delete")[o]})));let d=Array.from(Q),c=new Map(d);A(c);let m=d.map(e=>(0,l.bA)(e));O(m),z(m)},Y=function(e){return(0,r.jsx)(i.Z,{control:(0,r.jsx)(f.Qr,{name:e,control:J,render:t=>{let{field:o}=t;return(0,r.jsx)(a.Z,{...o,checked:!!o.value,disabled:"mw"==e?void 0:!P})}}),label:(0,l.QF)("en")(e)})},G=e=>{var t,o,r,n,i;let a={from:null!==(t=F.from)&&void 0!==t?t:x.from,to:null!==(o=F.to)&&void 0!==o?o:x.to,ic:null!==(r=F.ic)&&void 0!==r?r:x.ic,mw:null!==(n=F.mw)&&void 0!==n?n:x.mw,sc:null!==(i=F.sc)&&void 0!==i?i:x.sc};B(t=>({...l.P1,[e]:!0})),"add"==e?D(a):"delete"==e&&X(a)},I=function(e){return(0,r.jsx)(s.Z,{arrow:!0,open:!!H[e],onClose:()=>B(t=>({...t,[e]:!1})),disableHoverListener:!0,placement:"top",title:"add"==e?"update"==V?n.R.tooltip.operation.update(b.from,b.to)(R.to)[o]:n.R.tooltip.operation.add(b.from,b.to)[o]:n.R.tooltip.operation.delete(b.from,b.to)[o],children:(0,r.jsx)(d.Z,{onClick:t=>G(e),children:"add"==e?n.R[V][o]:n.R.delete[o]})})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{component:"form",onSubmit:M(D),children:[(0,r.jsx)(c.Z,{component:"div",children:[Y("ic"),Y("sc"),Y("mw")]}),(0,r.jsx)(f.Qr,{control:J,name:"from",rules:{required:n.R.form.rules.required[o]},render:e=>{let{field:t}=e;return(0,r.jsx)(m.Z,{...t,label:g("from"),error:!!T.errors.from,helperText:T.errors.from&&T.errors.from.message||!T.isValid&&n.R.form.helperText.invalid[o]})}}),(0,r.jsx)(f.Qr,{control:J,name:"to",render:e=>{let{field:t}=e;return(0,r.jsx)(m.Z,{...t,label:g("to"),error:!!T.errors.to,helperText:T.errors.to&&T.errors.to.message||!T.isValid&&"invalid"})}}),(0,r.jsx)(d.Z,{type:"submit",sx:{display:"none"},children:n.R.add[o]}),[I("add"),I("delete")]]}),(0,r.jsx)(j,{...e})]})},j=e=>(0,r.jsx)(c.Z,{className:"messages",children:Object.entries(e).map(e=>{let[t,o]=e;return(0,r.jsx)("div",{children:o},t)})});t.default=x},6517:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return d}});var r=o(1527),l=o(5264),n=o(6155),i=o(708),a=o(29),s=o.n(a);function d(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)(s(),{href:"/",children:".."})," / JSON formatter for ",(0,r.jsx)("a",{href:"https://chrome.google.com/webstore/detail/text-rewriter/abmchgifbehnkekmmfmkkgdbhcphmeoi",children:"Text Rewriter Extension"})]}),(0,r.jsx)(n.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(i.default,{})]})}},708:function(e,t,o){"use strict";o.r(t);var r=o(1527),l=o(1155),n=o(4752),i=o(8833),a=o(9530),s=o(6726),d=o(3964),c=o(6063),m=o(959);let p=()=>{let[e]=(0,c.KO)(l.rz),[t,o]=(0,c.KO)(l.J5),[p,u]=(0,c.KO)(l.R4),[f,h]=(0,c.KO)(l.D6),[x,j]=(0,c.KO)(l.Cf),[v,g]=(0,c.KO)(l.ag),[w,O]=(0,m.useState)({parseError:""}),[b,K]=(0,m.useState)((0,l.B9)(t)),[R,y]=(0,m.useState)({copy:!1,append:!1,initialize:!1});(0,m.useEffect)(()=>{let e=performance.now();K((0,l.B9)(t));let o=performance.now();console.log("sort and output of ".concat(t.length," entries took ").concat(o-e,"ms")),O(e=>({...e,parseError:""}))},[t]);let E=e=>{K(e.target.value)},S=e=>()=>{"copy"==e?(0,i.vQ)(b):Z(e)(),y(t=>({...t,[e]:!0}))},Z=t=>()=>{try{let e=JSON.parse(b);if(console.log(e),"initialize"==t){let{entries:t,dedupedMap:r}=(0,l.xp)(e);console.log("imported entries:",t),o(t),u(r),g(e=>new Map(t.map((e,t)=>[(0,l.L0)(e),t]))),j(e=>(0,l.oz)(0,l.pZ)(t)),h(t.length)}else{let{entries:t,dedupedMap:r}=(0,l.mY)(p)(e);console.log("imported entries:",t),u(r),o(t),[...v.entries()];let n=t.map((e,t)=>[(0,l.L0)(e),f+t]),i=new Map(n),a=[...v.entries()],s=a.filter(e=>{let[t,o]=e;return void 0!==i.get(t)}).map(e=>{let[t,o]=e;return o});g(e=>new Map([...a,...n])),j(e=>({from:e.from.map(e=>(0,l.Ko)(s)(e)),to:e.to.map(e=>(0,l.Ko)(s)(e))})),h(e=>e+t.length)}}catch(t){O(t=>({...t,parseError:n.R.error.parse[e]}))}};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h3",{children:["JSON(",t.length,")"]}),(0,r.jsx)("div",{children:(t.length,"")}),(0,r.jsx)("div",{className:"buttons",children:["copy","append","initialize"].map(e=>(0,r.jsx)(a.Z,{arrow:!0,open:R[e],onClose:()=>y(t=>({...t,[e]:!1})),disableHoverListener:!0,placement:"top",title:"".concat(e,"!"),children:(0,r.jsx)(s.Z,{variant:"contained",onClick:S(e),children:"copy"==e?e:"import (".concat(e,")")})}))}),(0,r.jsx)("div",{className:"messages",children:Object.entries(w).map(e=>{let[t,o]=e;return(0,r.jsx)("div",{children:o},t)})}),(0,r.jsx)(d.Z,{fullWidth:!0,multiline:!0,value:b,sx:{maxHeight:500,overflowY:"scroll",fontFamily:"monospace"},onChange:E})]})};t.default=p}},function(e){e.O(0,[964,786,166,490,29,628,264,774,888,179],function(){return e(e.s=6652)}),_N_E=e.O()}]);