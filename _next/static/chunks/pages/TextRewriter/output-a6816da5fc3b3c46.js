(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1259:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/TextRewriter/output",function(){return t(708)}])},708:function(e,r,t){"use strict";t.r(r);var n=t(1527),i=t(1933),o=t(4752),a=t(8833),s=t(9768),c=t(5706),u=t(4106),l=t(6834),f=t(959);let d=()=>{let[e]=(0,l.KO)(i.rz),[r,t]=(0,l.KO)(i.J5),[d,p]=(0,l.KO)(i.R4),[m,h]=(0,f.useState)({parseError:""}),[g,j]=(0,f.useState)((0,i.B9)(r)),[w,v]=(0,f.useState)({copy:!1,append:!1,initialize:!1});(0,f.useEffect)(()=>{j((0,i.B9)(r)),h(e=>({...e,parseError:""}))},[r]);let x=e=>{j(e.target.value)},y=e=>()=>{"copy"==e?(0,a.vQ)(g):N(e)(),v(r=>({...r,[e]:!0}))},N=r=>()=>{try{let e=JSON.parse(g);if(console.log(e),"initialize"==r){let{entries:r,dedupedMap:n}=(0,i.xp)(e);console.log("imported entries:",r),t(r),p(n)}else{let{entries:r,dedupedMap:n}=(0,i.mY)(d)(e);console.log("imported entries:",r),p(n),t(r)}}catch(r){h(r=>({...r,parseError:o.R.error.parse[e]}))}};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("h3",{children:["JSON(",r.length,")"]}),(0,n.jsx)("div",{children:(r.length,"")}),(0,n.jsx)("div",{className:"buttons",children:["copy","append","initialize"].map(e=>(0,n.jsx)(s.Z,{arrow:!0,open:w[e],onClose:()=>v(r=>({...r,[e]:!1})),disableHoverListener:!0,placement:"top",title:"".concat(e,"!"),children:(0,n.jsx)(c.Z,{onClick:y(e),children:"copy"==e?e:"import (".concat(e,")")})}))}),(0,n.jsx)("div",{className:"messages",children:Object.entries(m).map(e=>{let[r,t]=e;return(0,n.jsx)("div",{children:t},r)})}),(0,n.jsx)(u.Z,{fullWidth:!0,multiline:!0,value:g,sx:{maxHeight:500,overflowY:"scroll",fontFamily:"monospace"},onChange:x})]})};r.default=d},1933:function(e,r,t){"use strict";t.d(r,{B9:function(){return m},EF:function(){return u},J5:function(){return c},QF:function(){return a},R4:function(){return f},bA:function(){return p},kG:function(){return l},mY:function(){return h},rz:function(){return s},xp:function(){return g},z3:function(){return d}});var n=t(4477),i=t(8833);let o={from:{en:"from",ja:"置換対象"},ic:{en:"ignore case",ja:"大文字小文字を無視する"},mw:{en:"match word",ja:"単語のみ"},sc:{en:"smart case",ja:"賢い大小文字"},to:{en:"to",ja:"置換結果"}},a=e=>r=>o[r][e],s=(0,n.cn)("ja"),c=(0,n.cn)([]),u={from:"",ic:!1,mw:!1,sc:!1,to:""},l=(0,n.cn)(u),f=(0,n.cn)(new Map),d=e=>r=>{let{to:t,...n}=r,i=JSON.stringify(n),o=e.get(i);return o},p=e=>{let[r,t]=e;return{...JSON.parse(r),to:t}},m=e=>JSON.stringify(e.sort((e,r)=>(0,i.Kr)(e,r)([e=>-e.from.length,e=>(0,i.fL)(e.from),e=>{let{to:r,from:t,...n}=e;return(0,i.fL)(JSON.stringify(n))}]))),h=e=>r=>{let t=new Map([...e,...r.map(e=>{let{to:r,...t}=e,n=JSON.stringify(t);return[n,r]})]),n=Array.from(t),i=n.map(e=>p(e));return{entries:i,dedupedMap:t}},g=e=>{let r=new Map(e.map(e=>{let{to:r,...t}=e,n=JSON.stringify(t);return[n,r]})),t=Array.from(r),n=t.map(e=>p(e));return{entries:n,dedupedMap:r}}},4752:function(e,r,t){"use strict";t.d(r,{R:function(){return n}});let n={add:{en:"add",ja:"追加"},confirm:{alreadyExist:{en:"same entry already exists, which will be overloaded.",ja:"同じ条件の組がもうあるので、上書きされます。"}},error:{parse:{en:"couldn't parsed as JSON",ja:"解析不能"}}}},8833:function(e,r,t){"use strict";var n;t.d(r,{Kr:function(){return o},fL:function(){return a},vQ:function(){return s}});let i=e=>r=>t=>n=>{let o=e.shift();return o?(()=>{let a=r(o);return t(a)?a:i(e)(r)(t)(n)})():n},o=(e,r)=>t=>i(t)(t=>t(e)-t(r))(e=>0!=e)(0),a=e=>[...e].reduce((e,r)=>e+(null!==(n=r.codePointAt(0))&&void 0!==n?n:0),0),s=async e=>{await t.g.navigator.clipboard.writeText(e)}}},function(e){e.O(0,[106,107,768,774,888,179],function(){return e(e.s=1259)}),_N_E=e.O()}]);