"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{4813:function(e,t,r){var l=r(4039);t.Z=void 0;var o=l(r(7714)),a=r(1527),n=(0,o.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=n},6813:function(e,t,r){var l=r(4039);t.Z=void 0;var o=l(r(7714)),a=r(1527),n=(0,o.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.Z=n},3221:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var l=r(1527),o=r(959),a=r(1155),n=r(5497),s=r(9544),i=r(5009),d=r(9569),c=r(3957),u=r(4813),m=r(6813),h=r(257),f=r(7635),x=r(2302),p=r(469),j=r(4752);let v=(e,t)=>r=>{let l=Math.abs(r).toString().split(".");l.length<2&&l.push("");let o=t+1,a=l.map(e=>{let t=e.slice(0,o);return o-=t.length,t});if(o>0)return r;{let t=(0,p.y2)(e=>0==e,l[0].length-a[0].length)(-a[1].length)+1,o=parseInt("".concat(a[0]).concat(a[1]))/10,n=Math[e](r<0?-o:o);return Math.pow(10,t)*n}},Z=(e,t)=>r=>{let l=v(e,t)(r),o=Math.abs(l).toString().split("").reduce((e,r)=>{let{seisu:l,shosu:o,atshosu:a}=e;return a?{seisu:l,shosu:l.length+o.length<t?o+r:o,atshosu:a}:"."==r?{seisu:l,shosu:o,atshosu:!0}:{seisu:l+r,shosu:o,atshosu:a}},{seisu:"",shosu:"",atshosu:!1});return(l<0?"-":"")+o.seisu+(0,p.op)(o.shosu)(e=>e.length>0,e=>".".concat(e))};var b=r(3104);let g={similarForm:{padding:[1,2]}},y=()=>{let[e]=(0,h.KO)(a.Se);return(0,l.jsxs)("div",{className:"lists",children:[(0,l.jsx)(S,{limit:2}),(0,l.jsx)(w,{maxShowNumber:e.maxShowNumber})]})},S=e=>{let{limit:t}=e,[r]=(0,h.KO)(a.kG),[o,n]=(0,h.KO)(a.J5);return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"entries",children:o.slice(-t).reverse().map(e=>(0,l.jsx)("div",{children:JSON.stringify(e)},JSON.stringify(e)))})})},w=e=>{let[t]=(0,h.KO)(a.jl),[r]=(0,h.KO)(a.Cf),[c]=(0,h.KO)(a.ag),[u]=(0,h.KO)(a.R4),[m]=(0,h.KO)(a.rz),[f,v]=(0,o.useState)(!1),y=(0,a.o4)(c,u),S=(0,o.useCallback)(e=>(0,x.cV)((0,p.ZZ)(r[e].map(r=>{let l=(0,x.xJ)(r)(t[e]);return l})))(t[e].length,y[e]),[r,t,y]),w=(0,o.useMemo)(()=>{let t=S("from");return[...t.entries()].sort((e,t)=>t[1]-e[1]).slice(0,e.maxShowNumber)},[S,e.maxShowNumber]),N=(0,o.useMemo)(()=>{let t=S("to");return[...t.entries()].sort((e,t)=>t[1]-e[1]).slice(0,e.maxShowNumber)},[S,e.maxShowNumber]),z={from:w,to:N},K={display:"flex",alignItems:"center"},R=e=>function(){return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(s.Z,{variant:"h5",children:[(0,a.QF)(m)(e)," "]}),(0,l.jsx)(n.Z,{children:z[e].map((t,r)=>{let[s,i]=t,d=(0,a.zN)(s,c);return void 0===d?(0,l.jsxs)(n.Z,{children:["".concat(r,". ")," cannot get id"]}):(0,o.createElement)(n.Z,{...K,key:s,children:["".concat(r,". "),f?"".concat(Z("round",5)(i)):"",(0,p.L2)(u.get(null!=d?d:""))(t=>{let r={...JSON.parse(d),to:t};return(0,l.jsx)(O,{frozenAttr:[e],entry:r})},(0,l.jsx)(n.Z,{children:"stringified key not found"}))]})})})]})};return(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(n.Z,{sx:{display:"flex",...g.similarForm},children:[(0,l.jsx)(s.Z,{variant:"h4",children:j.R.headerTitle.list.similar[m]}),(0,l.jsxs)(n.Z,{sx:{display:"flex",paddingX:2},children:[(0,l.jsx)(i.Z,{control:(0,l.jsx)(d.Z,{checked:!!f,onChange:()=>v(e=>!e),value:"showPoint"}),label:j.R.showPoint[m]}),(0,l.jsx)(b.default,{})]})]}),(0,l.jsx)(n.Z,{children:[R("from")(),R("to")()]})]})},N=e=>{let{entry:t}=e;return(0,l.jsxs)(n.Z,{sx:{display:"flex"},children:[(0,l.jsx)(n.Z,{children:t.from}),(0,l.jsx)(s.Z,{sx:{opacity:.5},children:"→"}),(0,l.jsx)(n.Z,{children:t.to}),(0,l.jsx)(n.Z,{display:"flex",children:["ic","sc","mw"].map(e=>(0,l.jsx)(n.Z,{sx:{marginLeft:1,opacity:t[e]?1:.5},children:e},e))})]})},O=e=>{let{entry:t,frozenAttr:r}=e,[s,i]=(0,o.useState)(!1),[d]=(0,h.KO)(a.G_),[x,p]=(0,h.KO)(a.jl);return(0,l.jsxs)(n.Z,{display:"flex",alignItems:"center",children:[(0,l.jsx)(c.Z,{size:"small",onClick:()=>{i(e=>!e)},children:s?(0,l.jsx)(m.Z,{fontSize:"small"}):(0,l.jsx)(u.Z,{fontSize:"small"})}),s?(0,l.jsx)(f.default,{frozenAttr:r,defaultValues:t}):(0,l.jsx)(N,{entry:t})]})};var z=y},7635:function(e,t,r){r.r(t);var l=r(1527),o=r(1155),a=r(8138),n=r(4752),s=r(469),i=r(2302),d=r(5009),c=r(9569),u=r(3922),m=r(3009),h=r(5497),f=r(6069),x=r(257),p=r(959),j=r(4578);let v=e=>{let[t,r]=(0,p.useState)({alreadyExist:"",operation:""}),[v]=(0,x.KO)(o.rz),[b,g]=(0,x.KO)(o.kG),y=e=>(0,o.QF)(v)(e),[S,w]=(0,x.KO)(o.J5),[N,O]=(0,x.KO)(o.e2),[z,K]=(0,x.KO)(o.jl),[R,k]=(0,x.KO)(o.G_),[E,M]=(0,x.KO)(o.Cf),[C,V]=(0,x.KO)(o.D6),[A,F]=(0,x.KO)(o.ag),[J]=(0,x.KO)(o.Se),[Q,T]=(0,p.useState)(S),{control:L,handleSubmit:I,formState:_}=(0,j.cI)({defaultValues:e.defaultValues}),D=(0,j.qo)({control:L}),[P,q]=(0,x.KO)(o.R4),[G,H]=(0,p.useState)(!1),[B,X]=(0,p.useState)("add"),[U,W]=(0,p.useState)(o.P1),Y=(0,a.N)(J.delay,D);(0,p.useEffect)(()=>{var t,l,a,s,d;let c={from:null!==(t=Y.from)&&void 0!==t?t:b.from,to:null!==(l=Y.to)&&void 0!==l?l:b.to,ic:null!==(a=Y.ic)&&void 0!==a?a:b.ic,mw:null!==(s=Y.mw)&&void 0!==s?s:b.mw,sc:null!==(d=Y.sc)&&void 0!==d?d:b.sc},u=[...Object.entries(b)].map(t=>{var r;let[l,o]=t;return[l,e.frozenAttr.includes(l)?z[l]:null!==(r=Y[l])&&void 0!==r?r:b[l]]}),m=Object.fromEntries(u);["from","to"].forEach(t=>{!e.frozenAttr.includes(t)&&(0,i.lr)(m[t])&&(m[t]=R[t])}),K(m),H(!!c.from.match(/.*[a-zA-Z].*/));let h=(0,o.z3)(P)(c);"string"==typeof h?(r(e=>({...e,alreadyExist:n.R.confirm.alreadyExist[v]})),X("update"),O({...c,to:h})):(r(e=>({...e,alreadyExist:""})),X("add"),O(c))},[Y,S,P,v,b,K,O,R,e.frozenAttr,z]);let $=e=>{let{to:t,...l}=e,a=JSON.stringify(l),d=P.delete(a);P.set(a,t),d?(console.log("updated ",N),console.log("to",'"'.concat(t,'"')),r(t=>({...t,operation:n.R.tooltip.operation.update(e.from,N.to)(e.to)[v]})),console.log("atomEntryIdDedupedMap:",A),M(e=>(0,s.L2)(A.get(a))(r=>({from:e.from.map(e=>(0,o.DH)(e=>(e.delete(r),e))(e)),to:e.to.map(e=>(0,i.P)((0,o.Ko)([r])(e))(C,t))}),e))):(console.log("added:",e),r(t=>({...t,operation:n.R.tooltip.operation.add(e.from,e.to)[v]}))),M(t=>(0,o.VU)(C,t)(e)),F(e=>(e.set(a,C),new Map([...e.entries()]))),V(e=>e+1);let c=Array.from(P),u=new Map(c);q(u);let m=c.map(e=>(0,o.bA)(e));w(m),T(m)},ee=e=>{let{to:t,...l}=e,a=JSON.stringify(l),s=P.delete(a);s?(console.log("deleted:",o.e2),r(t=>({...t,operation:n.R.tooltip.operation.delete(e.from,e.to)[v]})),F(e=>(e.delete(a),new Map([...e.entries()]))),M(e=>{let t=(0,o.XZ)(a)(e,N,A);return{from:t("from"),to:t("to")}})):(console.log("failed to delete"),r(e=>({...e,operation:n.R.tooltip.fail("delete")[v]})));let i=Array.from(P),d=new Map(i);q(d);let c=i.map(e=>(0,o.bA)(e));w(c),T(c)},et=function(e){return(0,l.jsx)(d.Z,{control:(0,l.jsx)(j.Qr,{name:e,control:L,render:t=>{let{field:r}=t;return(0,l.jsx)(c.Z,{...r,size:"small",checked:!!r.value,disabled:"mw"==e?void 0:!G})}}),label:(0,o.QF)(v)(e)})},er=e=>{var t,r,l,a,n;let s={from:null!==(t=Y.from)&&void 0!==t?t:b.from,to:null!==(r=Y.to)&&void 0!==r?r:b.to,ic:null!==(l=Y.ic)&&void 0!==l?l:b.ic,mw:null!==(a=Y.mw)&&void 0!==a?a:b.mw,sc:null!==(n=Y.sc)&&void 0!==n?n:b.sc};W(t=>({...o.P1,[e]:!0})),"add"==e?$(s):"delete"==e&&ee(s)},el=function(e){return(0,l.jsx)(u.Z,{arrow:!0,open:!!U[e],onClose:()=>W(t=>({...t,[e]:!1})),disableHoverListener:!0,placement:"top",title:"add"==e?"update"==B?n.R.tooltip.operation.update(N.from,N.to)(z.to)[v]:n.R.tooltip.operation.add(N.from,N.to)[v]:n.R.tooltip.operation.delete(N.from,N.to)[v],children:(0,l.jsx)(m.Z,{variant:"contained",onClick:t=>er(e),children:"add"==e?n.R[B][v]:n.R.delete[v]})})};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.Z,{component:"form",onSubmit:I($),children:[(0,l.jsx)(h.Z,{component:"div",children:[et("ic"),et("sc"),et("mw")]}),(0,l.jsx)(j.Qr,{control:L,name:"from",rules:{required:n.R.form.rules.required[v]},render:e=>{let{field:t}=e;return(0,l.jsx)(f.Z,{...t,variant:"standard",size:"small",label:y("from"),error:!!_.errors.from,helperText:_.errors.from&&_.errors.from.message||!_.isValid&&n.R.form.helperText.invalid[v]})}}),(0,l.jsx)(j.Qr,{control:L,name:"to",render:e=>{let{field:t}=e;return(0,l.jsx)(f.Z,{...t,variant:"standard",size:"small",label:y("to"),error:!!_.errors.to,helperText:_.errors.to&&_.errors.to.message||!_.isValid&&"invalid"})}}),(0,l.jsx)(m.Z,{type:"submit",sx:{display:"none"},children:n.R.add[v]}),[el("add"),el("delete")]]}),(0,l.jsx)(Z,{...t})]})},Z=e=>(0,l.jsx)(h.Z,{className:"messages",children:Object.entries(e).map(e=>{let[t,r]=e;return(0,l.jsx)("div",{children:r},t)})});t.default=v},3104:function(e,t,r){r.r(t);var l=r(1527),o=r(1155),a=r(8138),n=r(4752),s=r(5497),i=r(6069),d=r(257),c=r(959),u=r(4578);let m=()=>{let[e,t]=(0,d.KO)(o.Se),[r]=(0,d.KO)(o.rz),{control:m,register:h}=(0,u.cI)({defaultValues:o.ce}),f=(0,a.N)(300,(0,u.qo)({control:m})),[x,p]=(0,c.useState)({delay:!1,maxShowNumber:!1});return(0,c.useEffect)(()=>{var r,l;let a=null!==(r=f.maxShowNumber)&&void 0!==r?r:o.ce.maxShowNumber;t({...e,delay:null!==(l=f.delay)&&void 0!==l?l:o.ce.delay,maxShowNumber:a})},[f,t,e]),(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(u.Qr,{control:m,name:"delay",render:e=>{let{field:t,fieldState:o}=e;return(0,l.jsx)(i.Z,{...t,type:"number",size:"small",sx:{width:120},label:n.R.searchConfig.searchDelay.label[r]+" [ms]",ref:h("delay").ref,onFocus:()=>p(e=>({...e,delay:!e.delay})),onBlur:()=>p(e=>({...e,delay:!e.delay})),helperText:x.delay&&n.R.searchConfig.searchDelay.help[r]})}}),(0,l.jsx)(u.Qr,{control:m,name:"maxShowNumber",rules:{min:0},render:e=>{let{field:t,fieldState:o}=e;return(0,l.jsx)(i.Z,{...t,type:"number",size:"small",sx:{width:120},label:n.R.searchConfig.maxNumberlabel[r],onFocus:()=>p(e=>({...e,maxShowNumber:!e.maxShowNumber})),onBlur:()=>p(e=>({...e,maxShowNumber:!e.maxShowNumber})),helperText:x.maxShowNumber&&n.R.searchConfig.maxNumberlabel[r]})}})]})};t.default=m},8138:function(e,t,r){r.d(t,{N:function(){return o}});var l=r(959);let o=(e,t)=>{let[r,o]=(0,l.useState)(t);return(0,l.useEffect)(()=>{let r=setTimeout(()=>o(t),e);return()=>clearTimeout(r)},[t,e]),r}}}]);