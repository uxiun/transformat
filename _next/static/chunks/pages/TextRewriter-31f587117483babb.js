(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{6652:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TextRewriter",function(){return t(6517)}])},5713:function(e,r,t){"use strict";t.r(r);var n=t(1527),s=t(1933),i=t(6834);let l=()=>(0,n.jsx)("div",{className:"lists",children:(0,n.jsx)(o,{})}),o=()=>{let[e]=(0,i.KO)(s.kG),[r,t]=(0,i.KO)(s.J5);return(0,n.jsx)("div",{className:"entries",children:r.slice(0,10).reverse().map(e=>(0,n.jsx)("div",{children:JSON.stringify(e)},e.from+e.to))})};r.default=l},6155:function(e,r,t){"use strict";t.r(r);var n=t(1527),s=t(1933),i=t(4752),l=t(1021),o=t(4106),a=t(5706),c=t(6834),u=t(959),d=t(6887);let f=()=>{let[e,r]=(0,u.useState)({alreadyExist:""}),[t]=(0,c.KO)(s.rz),[f,h]=(0,c.KO)(s.kG),p=e=>(0,s.QF)(t)(e),[x,j]=(0,c.KO)(s.J5),[g,v]=(0,u.useState)(x),{control:w,handleSubmit:y,formState:O}=(0,d.cI)({defaultValues:s.EF}),b=(0,d.qo)({control:w}),[N,E]=(0,c.KO)(s.R4);(0,u.useEffect)(()=>{var e,n,l,o,a;let c={from:null!==(e=b.from)&&void 0!==e?e:f.from,to:null!==(n=b.to)&&void 0!==n?n:f.to,ic:null!==(l=b.ic)&&void 0!==l?l:f.ic,mw:null!==(o=b.mw)&&void 0!==o?o:f.mw,sc:null!==(a=b.sc)&&void 0!==a?a:f.sc},u=(0,s.z3)(N)(c);console.log("to",u),u?r(e=>({...e,alreadyExist:i.R.confirm.alreadyExist[t]})):(console.log("not already exist"),r(e=>({...e,alreadyExist:""})))},[b]);let S=e=>{console.log("addEntry(), Entry=",e);let{to:r,...t}=e,n=JSON.stringify(t);N.set(n,r);let i=Array.from(N),l=new Map(i);E(l);let o=i.map(e=>(0,s.bA)(e));j(o),v(o)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Z,{component:"form",onSubmit:y(S),children:[(0,n.jsx)(d.Qr,{control:w,name:"from",rules:{required:"input something"},render:e=>{let{field:r}=e;return(0,n.jsx)(o.Z,{...r,label:p("from"),error:!!O.errors.from,helperText:O.errors.from&&O.errors.from.message||!O.isValid&&"invalid"})}}),(0,n.jsx)(d.Qr,{control:w,name:"to",rules:{required:"input something"},render:e=>{let{field:r}=e;return(0,n.jsx)(o.Z,{...r,label:p("to"),error:!!O.errors.to,helperText:O.errors.to&&O.errors.to.message||!O.isValid&&"invalid"})}}),(0,n.jsx)(a.Z,{type:"submit",children:i.R.add[t]})]}),(0,n.jsx)(m,{...e})]})},m=e=>(0,n.jsx)(l.Z,{className:"messages",children:Object.entries(e).map(e=>{let[r,t]=e;return(0,n.jsx)("div",{children:t},r)})});r.default=f},6517:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(1527),s=t(5713),i=t(6155),l=t(708),o=t(29),a=t.n(o);function c(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("h1",{children:[(0,n.jsx)(a(),{href:"/",children:".."})," / JSON formatter for ",(0,n.jsx)("a",{href:"https://chrome.google.com/webstore/detail/text-rewriter/abmchgifbehnkekmmfmkkgdbhcphmeoi",children:"Text Rewriter Extension"})]}),(0,n.jsx)(i.default,{}),(0,n.jsx)(s.default,{}),(0,n.jsx)(l.default,{})]})}},708:function(e,r,t){"use strict";t.r(r);var n=t(1527),s=t(1933),i=t(4752),l=t(8833),o=t(9768),a=t(5706),c=t(4106),u=t(6834),d=t(959);let f=()=>{let[e]=(0,u.KO)(s.rz),[r,t]=(0,u.KO)(s.J5),[f,m]=(0,u.KO)(s.R4),[h,p]=(0,d.useState)({parseError:""}),[x,j]=(0,d.useState)((0,s.B9)(r)),[g,v]=(0,d.useState)(!1);(0,d.useEffect)(()=>{j((0,s.B9)(r)),p(e=>({...e,parseError:""}))},[r]);let w=e=>{j(e.target.value)},y=()=>{(0,l.vQ)(x),v(!0)},O=r=>()=>{try{let e=JSON.parse(x);if(console.log(e),"reset"==r)t((0,s.xp)(e));else{let{entries:r,dedupedMap:n}=(0,s.mY)(f)(e);m(n),t(r)}}catch(r){p(r=>({...r,parseError:i.R.error.parse[e]}))}};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:["JSON(",r.length,")"]}),(0,n.jsx)("div",{children:(r.length,"")}),(0,n.jsx)(o.Z,{arrow:!0,open:g,onClose:()=>v(!1),disableHoverListener:!0,placement:"left",title:"copied!",children:(0,n.jsx)(a.Z,{disabled:0===r.length,onClick:y,children:"copy"})}),(0,n.jsx)(o.Z,{arrow:!0,open:g,onClose:()=>v(!1),disableHoverListener:!0,placement:"left",title:"copied!",children:(0,n.jsx)(a.Z,{disabled:0===r.length,onClick:O("append"),children:"import(append)"})}),(0,n.jsx)(o.Z,{arrow:!0,open:g,onClose:()=>v(!1),disableHoverListener:!0,placement:"left",title:"copied!",children:(0,n.jsx)(a.Z,{disabled:0===r.length,onClick:O("reset"),children:"import(reset)"})}),(0,n.jsx)("div",{className:"messages",children:Object.entries(h).map(e=>{let[r,t]=e;return(0,n.jsx)("div",{children:t},r)})}),(0,n.jsx)(c.Z,{fullWidth:!0,multiline:!0,value:x,sx:{maxHeight:500,overflowY:"scroll",fontFamily:"monospace"},onChange:w})]})};r.default=f},1933:function(e,r,t){"use strict";t.d(r,{B9:function(){return h},EF:function(){return c},J5:function(){return a},QF:function(){return l},R4:function(){return d},bA:function(){return m},kG:function(){return u},mY:function(){return p},rz:function(){return o},xp:function(){return x},z3:function(){return f}});var n=t(4477),s=t(8833);let i={from:{en:"from",ja:"置換対象"},ic:{en:"ignore case",ja:"大文字小文字を無視する"},mw:{en:"match word",ja:"単語のみ"},sc:{en:"smart case",ja:"賢い大小文字"},to:{en:"to",ja:"置換結果"}},l=e=>r=>i[r][e],o=(0,n.cn)("ja"),a=(0,n.cn)([]),c={from:"",ic:!1,mw:!1,sc:!1,to:""},u=(0,n.cn)(c),d=(0,n.cn)(new Map),f=e=>r=>{let{to:t,...n}=r,s=JSON.stringify(n),i=e.get(s);return i},m=e=>{let[r,t]=e;return{...JSON.parse(r),to:t}},h=e=>JSON.stringify(e.sort((e,r)=>(0,s.Kr)(e,r)([e=>e.from.length,e=>(0,s.fL)(e.from),e=>{let{to:r,from:t,...n}=e;return(0,s.fL)(JSON.stringify(n))}]))),p=e=>r=>{let t=new Map([...e,...r.map(e=>{let{to:r,...t}=e,n=JSON.stringify(t);return[n,r]})]),n=Array.from(t),s=n.map(e=>m(e));return{entries:s,dedupedMap:t}},x=e=>{let r=new Map(e.map(e=>{let{to:r,...t}=e,n=JSON.stringify(t);return[n,r]})),t=Array.from(r);return t.map(e=>m(e))}},4752:function(e,r,t){"use strict";t.d(r,{R:function(){return n}});let n={add:{en:"add",ja:"追加"},confirm:{alreadyExist:{en:"same entry already exists, which will be overloaded.",ja:"同じ条件の組がもうあるので、上書きされます。"}},error:{parse:{en:"couldn't parsed as JSON",ja:"解析不能"}}}},8833:function(e,r,t){"use strict";var n;t.d(r,{Kr:function(){return i},fL:function(){return l},vQ:function(){return o}});let s=e=>r=>t=>n=>{let i=e.shift();return i?(()=>{let l=r(i);return t(l)?l:s(e)(r)(t)(n)})():n},i=(e,r)=>t=>s(t)(t=>t(e)-t(r))(e=>0!=e)(0),l=e=>[...e].reduce((e,r)=>e+(null!==(n=r.codePointAt(0))&&void 0!==n?n:0),0),o=async e=>{await t.g.navigator.clipboard.writeText(e)}}},function(e){e.O(0,[106,194,107,768,29,774,888,179],function(){return e(e.s=6652)}),_N_E=e.O()}]);