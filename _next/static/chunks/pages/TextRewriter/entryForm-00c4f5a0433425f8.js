(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[632],{5805:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TextRewriter/entryForm",function(){return o(6155)}])},6155:function(e,t,o){"use strict";o.r(t);var r=o(1527),l=o(1155),n=o(4752),i=o(5009),a=o(9569),s=o(3922),d=o(3009),u=o(5497),c=o(6069),m=o(4418),f=o(959),p=o(2462),x=o(2302),v=o(8138);let w=()=>{let[e,t]=(0,f.useState)({alreadyExist:"",operation:""}),[o]=(0,m.KO)(l.rz),[w,j]=(0,m.KO)(l.kG),O=e=>(0,l.QF)(o)(e),[R,g]=(0,m.KO)(l.J5),[E,b]=(0,m.KO)(l.e2),[y,_]=(0,m.KO)(l.jl),[K,Z]=(0,m.KO)(l.Cf),[N,S]=(0,m.KO)(l.D6),[T,k]=(0,m.KO)(l.ag),[A]=(0,m.KO)(l.pM),[C,F]=(0,f.useState)(R),{control:M,handleSubmit:P,formState:Q}=(0,p.cI)({defaultValues:l.EF}),V=(0,p.qo)({control:M}),q=(0,v.N)(A,V),[z,J]=(0,m.KO)(l.R4),[X,D]=(0,f.useState)(!1),[G,H]=(0,f.useState)("add"),[I,L]=(0,f.useState)(l.P1);(0,f.useEffect)(()=>{var e,r,i,a,s;let d={from:null!==(e=q.from)&&void 0!==e?e:w.from,to:null!==(r=q.to)&&void 0!==r?r:w.to,ic:null!==(i=q.ic)&&void 0!==i?i:w.ic,mw:null!==(a=q.mw)&&void 0!==a?a:w.mw,sc:null!==(s=q.sc)&&void 0!==s?s:w.sc};_(d),D(!!d.from.match(/.*[a-zA-Z].*/));let u=(0,l.z3)(z)(d);"string"==typeof u?(t(e=>({...e,alreadyExist:n.R.confirm.alreadyExist[o]})),H("update"),b({...d,to:u})):(t(e=>({...e,alreadyExist:""})),H("add"),b(d))},[q,R,z,o,w,_,b]);let U=e=>{let{to:r,...i}=e,a=JSON.stringify(i),s=z.delete(a);z.set(a,r),s?(console.log("updated ",E),console.log("to",'"'.concat(r,'"')),t(t=>({...t,operation:n.R.tooltip.operation.update(e.from,E.to)(e.to)[o]})),Z(e=>({from:e.from,to:e.to.map(e=>((0,x.SK)(e.n,E.to).forEach(t=>e.index.delete(t)),(0,x.P)(e)(N,r)))}))):(console.log("added:",e),t(t=>({...t,operation:n.R.tooltip.operation.add(e.from,e.to)[o]})),Z(t=>(0,l.VU)(N,t)(e))),k(e=>(e.set(a,N),new Map([...e.entries()]))),S(e=>e+1);let d=Array.from(z),u=new Map(d);J(u);let c=d.map(e=>(0,l.bA)(e));g(c),F(c)},B=e=>{let{to:r,...i}=e,a=JSON.stringify(i),s=z.delete(a);s?(console.log("deleted:",l.e2),t(t=>({...t,operation:n.R.tooltip.operation.delete(e.from,e.to)[o]})),k(e=>(e.delete(a),new Map([...e.entries()])))):(console.log("failed to delete"),t(e=>({...e,operation:n.R.tooltip.fail("delete")[o]})));let d=Array.from(z),u=new Map(d);J(u);let c=d.map(e=>(0,l.bA)(e));g(c),F(c)},W=function(e){return(0,r.jsx)(i.Z,{control:(0,r.jsx)(p.Qr,{name:e,control:M,render:t=>{let{field:o}=t;return(0,r.jsx)(a.Z,{...o,checked:!!o.value,disabled:"mw"==e?void 0:!X})}}),label:(0,l.QF)(o)(e)})},Y=e=>{var t,o,r,n,i;let a={from:null!==(t=q.from)&&void 0!==t?t:w.from,to:null!==(o=q.to)&&void 0!==o?o:w.to,ic:null!==(r=q.ic)&&void 0!==r?r:w.ic,mw:null!==(n=q.mw)&&void 0!==n?n:w.mw,sc:null!==(i=q.sc)&&void 0!==i?i:w.sc};L(t=>({...l.P1,[e]:!0})),"add"==e?U(a):"delete"==e&&B(a)},$=function(e){return(0,r.jsx)(s.Z,{arrow:!0,open:!!I[e],onClose:()=>L(t=>({...t,[e]:!1})),disableHoverListener:!0,placement:"top",title:"add"==e?"update"==G?n.R.tooltip.operation.update(E.from,E.to)(y.to)[o]:n.R.tooltip.operation.add(E.from,E.to)[o]:n.R.tooltip.operation.delete(E.from,E.to)[o],children:(0,r.jsx)(d.Z,{onClick:t=>Y(e),children:"add"==e?n.R[G][o]:n.R.delete[o]})})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.Z,{component:"form",onSubmit:P(U),children:[(0,r.jsx)(u.Z,{component:"div",children:[W("ic"),W("sc"),W("mw")]}),(0,r.jsx)(p.Qr,{control:M,name:"from",rules:{required:n.R.form.rules.required[o]},render:e=>{let{field:t}=e;return(0,r.jsx)(c.Z,{...t,label:O("from"),error:!!Q.errors.from,helperText:Q.errors.from&&Q.errors.from.message||!Q.isValid&&n.R.form.helperText.invalid[o]})}}),(0,r.jsx)(p.Qr,{control:M,name:"to",render:e=>{let{field:t}=e;return(0,r.jsx)(c.Z,{...t,label:O("to"),error:!!Q.errors.to,helperText:Q.errors.to&&Q.errors.to.message||!Q.isValid&&"invalid"})}}),(0,r.jsx)(d.Z,{type:"submit",sx:{display:"none"},children:n.R.add[o]}),[$("add"),$("delete")]]}),(0,r.jsx)(h,{...e})]})},h=e=>(0,r.jsx)(u.Z,{className:"messages",children:Object.entries(e).map(e=>{let[t,o]=e;return(0,r.jsx)("div",{children:o},t)})});t.default=w},8138:function(e,t,o){"use strict";o.d(t,{N:function(){return l}});var r=o(959);let l=(e,t)=>{let[o,l]=(0,r.useState)(t);return(0,r.useEffect)(()=>{let o=setTimeout(()=>l(t),e);return()=>clearTimeout(o)},[t,e]),o}}},function(e){e.O(0,[422,462,418,776,694,616,628,774,888,179],function(){return e(e.s=5805)}),_N_E=e.O()}]);