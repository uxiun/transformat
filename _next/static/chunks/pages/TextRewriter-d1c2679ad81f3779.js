(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{9958:function(e,t,o){"use strict";var r=o(4039);t.Z=void 0;var n=r(o(7714)),l=o(1527),s=(0,n.default)((0,l.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"Launch");t.Z=s},6652:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TextRewriter",function(){return o(6517)}])},6155:function(e,t,o){"use strict";o.r(t);var r=o(1527),n=o(1155),l=o(4752),s=o(5009),i=o(9569),a=o(3922),d=o(3009),c=o(5497),u=o(6069),p=o(4418),m=o(959),f=o(2462),x=o(2302),h=o(8138);let j=()=>{let[e,t]=(0,m.useState)({alreadyExist:"",operation:""}),[o]=(0,p.KO)(n.rz),[j,g]=(0,p.KO)(n.kG),w=e=>(0,n.QF)(o)(e),[O,Z]=(0,p.KO)(n.J5),[b,R]=(0,p.KO)(n.e2),[K,_]=(0,p.KO)(n.jl),[y,S]=(0,p.KO)(n.Cf),[E,k]=(0,p.KO)(n.D6),[N,z]=(0,p.KO)(n.ag),[C]=(0,p.KO)(n.pM),[V,M]=(0,m.useState)(O),{control:T,handleSubmit:J,formState:L}=(0,f.cI)({defaultValues:n.EF}),Q=(0,f.qo)({control:T}),B=(0,h.N)(C,Q),[F,H]=(0,p.KO)(n.R4),[I,A]=(0,m.useState)(!1),[P,q]=(0,m.useState)("add"),[X,D]=(0,m.useState)(n.P1);(0,m.useEffect)(()=>{var e,r,s,i,a;let d={from:null!==(e=B.from)&&void 0!==e?e:j.from,to:null!==(r=B.to)&&void 0!==r?r:j.to,ic:null!==(s=B.ic)&&void 0!==s?s:j.ic,mw:null!==(i=B.mw)&&void 0!==i?i:j.mw,sc:null!==(a=B.sc)&&void 0!==a?a:j.sc};_(d),A(!!d.from.match(/.*[a-zA-Z].*/));let c=(0,n.z3)(F)(d);"string"==typeof c?(t(e=>({...e,alreadyExist:l.R.confirm.alreadyExist[o]})),q("update"),R({...d,to:c})):(t(e=>({...e,alreadyExist:""})),q("add"),R(d))},[B,O,F,o,j,_,R]);let Y=e=>{let{to:r,...s}=e,i=JSON.stringify(s),a=F.delete(i);F.set(i,r),a?(console.log("updated ",b),console.log("to",'"'.concat(r,'"')),t(t=>({...t,operation:l.R.tooltip.operation.update(e.from,b.to)(e.to)[o]})),S(e=>({from:e.from,to:e.to.map(e=>((0,x.SK)(e.n,b.to).forEach(t=>e.index.delete(t)),(0,x.P)(e)(E,r)))}))):(console.log("added:",e),t(t=>({...t,operation:l.R.tooltip.operation.add(e.from,e.to)[o]})),S(t=>(0,n.VU)(E,t)(e))),z(e=>(e.set(i,E),new Map([...e.entries()]))),k(e=>e+1);let d=Array.from(F),c=new Map(d);H(c);let u=d.map(e=>(0,n.bA)(e));Z(u),M(u)},G=e=>{let{to:r,...s}=e,i=JSON.stringify(s),a=F.delete(i);a?(console.log("deleted:",n.e2),t(t=>({...t,operation:l.R.tooltip.operation.delete(e.from,e.to)[o]})),z(e=>(e.delete(i),new Map([...e.entries()])))):(console.log("failed to delete"),t(e=>({...e,operation:l.R.tooltip.fail("delete")[o]})));let d=Array.from(F),c=new Map(d);H(c);let u=d.map(e=>(0,n.bA)(e));Z(u),M(u)},U=function(e){return(0,r.jsx)(s.Z,{control:(0,r.jsx)(f.Qr,{name:e,control:T,render:t=>{let{field:o}=t;return(0,r.jsx)(i.Z,{...o,checked:!!o.value,disabled:"mw"==e?void 0:!I})}}),label:(0,n.QF)(o)(e)})},W=e=>{var t,o,r,l,s;let i={from:null!==(t=B.from)&&void 0!==t?t:j.from,to:null!==(o=B.to)&&void 0!==o?o:j.to,ic:null!==(r=B.ic)&&void 0!==r?r:j.ic,mw:null!==(l=B.mw)&&void 0!==l?l:j.mw,sc:null!==(s=B.sc)&&void 0!==s?s:j.sc};D(t=>({...n.P1,[e]:!0})),"add"==e?Y(i):"delete"==e&&G(i)},$=function(e){return(0,r.jsx)(a.Z,{arrow:!0,open:!!X[e],onClose:()=>D(t=>({...t,[e]:!1})),disableHoverListener:!0,placement:"top",title:"add"==e?"update"==P?l.R.tooltip.operation.update(b.from,b.to)(K.to)[o]:l.R.tooltip.operation.add(b.from,b.to)[o]:l.R.tooltip.operation.delete(b.from,b.to)[o],children:(0,r.jsx)(d.Z,{onClick:t=>W(e),children:"add"==e?l.R[P][o]:l.R.delete[o]})})};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{component:"form",onSubmit:J(Y),children:[(0,r.jsx)(c.Z,{component:"div",children:[U("ic"),U("sc"),U("mw")]}),(0,r.jsx)(f.Qr,{control:T,name:"from",rules:{required:l.R.form.rules.required[o]},render:e=>{let{field:t}=e;return(0,r.jsx)(u.Z,{...t,label:w("from"),error:!!L.errors.from,helperText:L.errors.from&&L.errors.from.message||!L.isValid&&l.R.form.helperText.invalid[o]})}}),(0,r.jsx)(f.Qr,{control:T,name:"to",render:e=>{let{field:t}=e;return(0,r.jsx)(u.Z,{...t,label:w("to"),error:!!L.errors.to,helperText:L.errors.to&&L.errors.to.message||!L.isValid&&"invalid"})}}),(0,r.jsx)(d.Z,{type:"submit",sx:{display:"none"},children:l.R.add[o]}),[$("add"),$("delete")]]}),(0,r.jsx)(v,{...e})]})},v=e=>(0,r.jsx)(c.Z,{className:"messages",children:Object.entries(e).map(e=>{let[t,o]=e;return(0,r.jsx)("div",{children:o},t)})});t.default=j},6517:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return c}});var r=o(1527),n=o(3221),l=o(6155),s=o(708),i=o(29),a=o.n(i),d=o(531);function c(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h1",{children:[(0,r.jsx)(a(),{href:"/",children:".."})," / JSON formatter for ",(0,r.jsx)("a",{href:"https://chrome.google.com/webstore/detail/text-rewriter/abmchgifbehnkekmmfmkkgdbhcphmeoi",children:"Text Rewriter Extension"})]}),(0,r.jsx)(d.default,{}),(0,r.jsx)(l.default,{}),(0,r.jsx)(n.default,{}),(0,r.jsx)(s.default,{})]})}},531:function(e,t,o){"use strict";o.r(t);var r=o(1527),n=o(1155),l=o(4752),s=o(2806),i=o(5497),a=o(6069),d=o(3009),c=o(4418),u=o(959),p=o(5356),m=o(9223),f=o(2462),x=o(6365),h=o.n(x);let j=()=>{let[e,t]=(0,u.useState)(!0),[o,x]=(0,c.KO)(n.rz);console.info("InfoComponent(), lang=",o);let{control:j,handleSubmit:v,formState:g,getValues:w}=(0,f.cI)({defaultValues:{lang:o}});(0,f.qo)({control:j});let[O,Z]=(0,u.useState)(o),b=[...Object.entries(l.R.form.languages)].map(e=>{let[t,o]=e;return t}),R=e=>{};return(0,r.jsxs)("div",{className:h().flex,children:[(0,r.jsx)("form",{onSubmit:v(R),children:(0,r.jsx)(s.Z,{value:O,options:b,sx:{width:200},onChange:(e,t)=>{Z(null!=t?t:n.X9),x(t)},renderOption:(e,t)=>(0,r.jsx)(i.Z,{component:"li",...e,children:"".concat(t," ").concat(l.R.form.languages[t])}),renderInput:e=>(0,r.jsx)(a.Z,{...e,label:l.R.language[o]})})}),(0,r.jsx)("div",{children:(0,r.jsx)(d.Z,{onClick:()=>t(!e),startIcon:e?(0,r.jsx)(p.Z,{}):(0,r.jsx)(m.Z,{}),children:l.R.infobutton[o]})}),(0,r.jsxs)("div",{children:[e?[...Object.entries(l.R.info)].map((e,t)=>(0,r.jsx)("p",{children:e[1][o]},t)):""," "]})]})};t.default=j},708:function(e,t,o){"use strict";o.r(t);var r=o(1527),n=o(9958),l=o(1155),s=o(4752),i=o(8833),a=o(3922),d=o(3009),c=o(9544),u=o(5497),p=o(6069),m=o(4418),f=o(959),x=o(3694),h=o.n(x);let j=()=>{let[e]=(0,m.KO)(l.rz),[t,o]=(0,m.KO)(l.J5),[x,j]=(0,m.KO)(l.R4),[v,g]=(0,m.KO)(l.D6),[w,O]=(0,m.KO)(l.Cf),[Z,b]=(0,m.KO)(l.ag),[R,K]=(0,f.useState)({parseError:""}),[_,y]=(0,f.useState)((0,l.B9)(t)),[S,E]=(0,f.useState)({copy:!1,append:!1,initialize:!1});(0,f.useEffect)(()=>{let e=performance.now();y((0,l.B9)(t));let o=performance.now();console.log("sort and output of ".concat(t.length," entries took ").concat(o-e,"ms")),K(e=>({...e,parseError:""}))},[t]);let k=e=>{y(e.target.value)},N=e=>()=>{"copy"==e?(0,i.vQ)(_):z(e)(),E(t=>({...t,[e]:!0}))},z=t=>()=>{try{let e=JSON.parse(_);if(console.log(e),"initialize"==t){let{entries:t,dedupedMap:r}=(0,l.xp)(e);console.log("imported entries:",t),o(t),j(r),b(e=>new Map(t.map((e,t)=>[(0,l.L0)(e),t]))),O(e=>(0,l.oz)(0,l.pZ)(t)),g(t.length)}else{let{entries:t,dedupedMap:r}=(0,l.mY)(x)(e);console.log("imported entries:",t),j(r),o(t),[...Z.entries()];let n=t.map((e,t)=>[(0,l.L0)(e),v+t]),s=new Map(n),i=[...Z.entries()],a=i.filter(e=>{let[t,o]=e;return void 0!==s.get(t)}).map(e=>{let[t,o]=e;return o});b(e=>new Map([...i,...n])),O(e=>({from:e.from.map(e=>(0,l.Ko)(a)(e)),to:e.to.map(e=>(0,l.Ko)(a)(e))})),g(e=>e+t.length)}}catch(t){K(t=>({...t,parseError:s.R.error.parse[e]}))}};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(c.Z,{variant:"h4",children:["JSON(",t.length,")"]}),(0,r.jsxs)("div",{className:h().spacedButton,children:[["copy","append","initialize"].map(t=>(0,r.jsx)(a.Z,{arrow:!0,open:S[t],onClose:()=>E(e=>({...e,[t]:!1})),disableHoverListener:!0,placement:"top",title:"".concat(t,"!"),children:(0,r.jsx)(d.Z,{variant:"contained",sx:{marginRight:1},onClick:N(t),children:s.R.output.buttons[t][e]})})),(0,r.jsx)(u.Z,{component:"a",target:"_blank",href:"https://workflowy.com/s/text-rewriter-source/b0QLzBCudzhzTVHo",children:(0,r.jsx)(d.Z,{endIcon:(0,r.jsx)(n.Z,{}),children:s.R.example[e]})})]}),(0,r.jsx)("div",{}),(0,r.jsx)("div",{className:"messages",children:Object.entries(R).map(e=>{let[t,o]=e;return(0,r.jsx)("div",{children:o},t)})}),(0,r.jsx)(p.Z,{fullWidth:!0,multiline:!0,value:_,sx:{maxHeight:500,overflowY:"scroll",fontFamily:"monospace"},onChange:k})]})};t.default=j},6365:function(e){e.exports={flex:"info_flex__37y6C"}},3694:function(e){e.exports={spacedButton:"output_spacedButton__9V_Zm"}}},function(e){e.O(0,[422,462,418,776,694,616,587,29,628,219,774,888,179],function(){return e(e.s=6652)}),_N_E=e.O()}]);