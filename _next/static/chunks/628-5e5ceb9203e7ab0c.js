"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[628],{1155:function(e,n,t){t.d(n,{mY:function(){return N},J5:function(){return m},R4:function(){return x},EF:function(){return v},pZ:function(){return g},P1:function(){return k},Ko:function(){return B},QF:function(){return p},ag:function(){return A},L0:function(){return _},zN:function(){return U},o4:function(){return z},z3:function(){return J},jl:function(){return M},xp:function(){return S},bA:function(){return b},e2:function(){return j},DH:function(){return Z},kG:function(){return y},D6:function(){return h},Cf:function(){return w},VU:function(){return P},oz:function(){return E},pM:function(){return f},B9:function(){return O},rz:function(){return s},XZ:function(){return R}});var r=t(5006),u=t(8833);let a=e=>n=>{var t,r,u,a,i,o;let l=(null!==(u=null===(t=n.entryComma)||void 0===t?void 0:t.before)&&void 0!==u?u:"")+","+(null!==(a=null===(r=n.entryComma)||void 0===r?void 0:r.after)&&void 0!==a?a:"");return"{"+Object.entries(e).reduce((e,t)=>{var r,u;return e+JSON.stringify(t[0])+(null!==(i=null===(r=n.propColon)||void 0===r?void 0:r.before)&&void 0!==i?i:"")+":"+(null!==(o=null===(u=n.propColon)||void 0===u?void 0:u.after)&&void 0!==o?o:"")+JSON.stringify(t[1])+l},"").slice(0,-l.length)+"}"},i=e=>({intersperse:n=>e.reduce((e,t)=>[...e,n,t],[]).slice(1)}),o={reduce:e=>e.reduce((e,n)=>e+n,""),intersperse_reduce:e=>n=>o.reduce(i(n).intersperse(e))};var l=t(2202),c=t(469);let f=(0,r.cn)(300),d={from:{en:"from",ja:"置換対象"},ic:{en:"ignore case",ja:"大文字小文字を無視する"},mw:{en:"match word",ja:"単語のみ"},sc:{en:"smart case",ja:"賢い大小文字"},to:{en:"to",ja:"置換結果"}},p=e=>n=>d[n][e],s=(0,r.cn)("ja"),m=(0,r.cn)([]),h=(0,r.cn)(0);(0,r.cn)(new Map);let g={from:[(0,l.hq)(1),(0,l.hq)(2)],to:[(0,l.hq)(1),(0,l.hq)(2)]},w=(0,r.cn)(g),v={from:"",ic:!1,mw:!1,sc:!1,to:""},M=(0,r.cn)(v),j=(0,r.cn)(v),y=(0,r.cn)(v),x=(0,r.cn)(new Map),J=e=>n=>{let{to:t,...r}=n,u=JSON.stringify(r),a=e.get(u);return a},b=e=>{let[n,t]=e;return{...JSON.parse(n),to:t}},N=e=>n=>{let t=new Map([...e,...n.map(e=>{let{to:n,...t}=e,r=JSON.stringify(t);return[r,n]})]),r=Array.from(t),u=r.map(e=>b(e));return{entries:u,dedupedMap:t}},S=e=>{let n=new Map(e.map(e=>{let{to:n,...t}=e,r=JSON.stringify(t);return[r,n]})),t=Array.from(n),r=t.map(e=>b(e));return{entries:r,dedupedMap:n}},C=e=>(e.mw?0:4)+(e.ic?2:0)+(e.sc?0:1)+0,O=e=>{var n,t;let r=[...(0,u.au)(e)(e=>e.from.length).entries()].map(e=>{let[r,a]=e;return[r,[...(0,u.au)(a)(e=>e.from).entries()].map(e=>{let[n,t]=e;return[n,t.sort((0,u.bW)(0,r)((e,n,t)=>C(e)-C(n)))]}).sort((0,u.bW)(0,r)((e,r,u)=>{let[a,i]=e,[o,l]=r;return(null!==(n=a.codePointAt(u))&&void 0!==n?n:0)-(null!==(t=o.codePointAt(u))&&void 0!==t?t:0)})).flatMap(e=>{let[n,t]=e;return t})]}).sort((e,n)=>{let[t,r]=e,[u,a]=n;return u-t}).flatMap(e=>{let[n,t]=e;return t}),i=o.intersperse_reduce(",\n")(r.map(e=>a(e)({propColon:{after:" "},entryComma:{after:" "}})));return"["+i+"]"},k={add:!1,delete:!1},A=(0,r.cn)(new Map),E=(e,n)=>t=>{let r=r=>n[r].map(n=>(0,l.UU)(e,n)(t.map(e=>e[r])));return{from:r("from"),to:r("to")}},L=(e,n)=>(t,r)=>n[t].map(n=>(0,l.P)(n)(e,r)),P=(e,n)=>t=>{let r=L(e,n);return{from:r("from",t.from),to:r("to",t.to)}},q=e=>{let{to:n,...t}=e;return t},_=e=>JSON.stringify(q(e)),U=(e,n)=>{let t=[...n.entries()].filter(n=>{let[t,r]=n;return e==r});return t.length>0?t[0][0]:void 0},z=(e,n)=>[...n.entries()].reduce((n,t)=>{let[r,u]=t;return["from","to"].reduce((n,t)=>{var a;return{...n,[t]:new Map([...n[t].entries(),[null!==(a=e.get(r))&&void 0!==a?a:-1,"to"===t?u.length:JSON.parse(r).from.length]].filter(e=>{let[n,t]=e;return n>=0}))}},n)},{from:new Map,to:new Map}),R=e=>(n,t,r)=>(u,a)=>n[u].map(n=>((0,l.SK)(n.n,t[u]).forEach(t=>{(0,c.L2)(n.index.get(t))(n=>(0,c.L2)(r.get(e))(e=>(n.delete(e),n),n),new Map)}),(0,c.L2)(a)(e=>{let{id:t,text:r}=e;return(0,l.P)(n)(t,r)},n))),Z=e=>n=>({n:n.n,index:new Map([...n.index.entries()].map(n=>{let[t,r]=n;return[t,e(r)]}))}),B=e=>n=>({n:n.n,index:new Map([...n.index.entries()].map(n=>{let[t,r]=n;return[t,new Map([...r.entries()].filter(n=>{let[t,r]=n;return!e.includes(t)}))]}))})},4752:function(e,n,t){t.d(n,{R:function(){return r}});let r={add:{en:"add",ja:"追加"},update:{en:"udpate",ja:"更新"},delete:{en:"delete",ja:"削除"},confirm:{alreadyExist:{en:"same entry already exists, which will be overloaded.",ja:"同じ条件の組がもうあるので、上書きされます。"}},error:{parse:{en:"couldn't parsed as JSON",ja:"解析不能"}},headerTitle:{list:{similar:{en:"similar",ja:"類似"}}},tooltip:{operation:{add:(e,n)=>({en:"added: ".concat(e," → ").concat(n),ja:"追加: ".concat(e," → ").concat(n)}),delete:(e,n)=>({en:"deleted: ".concat(e," → ").concat(n),ja:"削除: ".concat(e," → ").concat(n)}),update:(e,n)=>t=>({en:"updated: ".concat(e," → ").concat(n),ja:"更新: ".concat(e," → (").concat(n," > ").concat(t,")")})},fail:e=>({en:"failed to ".concat(r[e].en),ja:"".concat(r[e].ja,"に失敗しました")})},form:{rules:{required:{en:"input something",ja:"何か入力してください"},minlength:e=>({en:"input at least ".concat(e," characters"),ja:"最低".concat(e,"文字入力してください")})},helperText:{invalid:{en:"invalid",ja:"無効"}}},unit:{point:{en:"point",ja:"点"}},showPoint:{en:"show match point",ja:"一致度表示"},searchDelay:{label:{en:"search delay",ja:"検索遅延"},help:{en:"increase this if input lagged",ja:"入力がもたつくなら数値を大きく"}}}},4691:function(e,n,t){t.d(n,{Cc:function(){return r},IH:function(){return u}});let r=e=>(n,t)=>e.map(e=>n(e)?t(e):e),u=e=>[...e.entries()]},469:function(e,n,t){t.d(n,{JR:function(){return p},L2:function(){return i},Xx:function(){return o},ZZ:function(){return c},op:function(){return f},y2:function(){return d}});var r,u,a=t(8833);let i=e=>(n,t)=>void 0===e?t:n(e),o=e=>(n,t)=>e.reduce((e,r)=>l(n,t)(e,r),new Map),l=(e,n)=>(t,i)=>new Map([...(0,a.au)([t,i].flatMap(e=>[...e.entries()]))(e=>{let[n,t]=e;return n}).entries()].map(n=>{let[t,r]=n;return[t,f(r.map(e=>{let[n,t]=e;return t}))(e=>e.length<2,n=>[...n,e])]}).map(t=>{let[a,i]=t;return[a,n(null!==(r=i[0])&&void 0!==r?r:e,null!==(u=i[1])&&void 0!==u?u:e,a)]})),c=e=>p(o(e)(0,(e,n)=>e+n))(n=>f(e.length)(e=>0!=e,e=>n/e)),f=e=>(n,t)=>n(e)?t(e):e,d=(e,n)=>t=>e(t)?n:t,p=e=>n=>new Map([...e.entries()].map(t=>{let[r,u]=t;return[r,n(u,e)]}))},2202:function(e,n,t){t.d(n,{P:function(){return l},SK:function(){return o},UU:function(){return c},cV:function(){return p},hq:function(){return i},xJ:function(){return s}});var r=t(4691),u=t(469),a=t(8833);let i=e=>({n:e,index:new Map}),o=(e,n)=>[...Array(n.length).keys()].map(t=>n.slice(t,t+e)).filter(n=>n.length==e);console.log("segtameshi",o(1,"s"));let l=e=>(n,t)=>{let r=[...Array(t.length).keys()];return r.map(n=>t.slice(n,n+e.n)).filter(n=>n.length==e.n).reduce((t,r,a)=>(t.index.set(r,new Map((0,u.L2)(t.index.get(r))(e=>[...e.entries()].flatMap(e=>{let[t,r]=e;return t==n?[[t,[...r,a]]]:[[t,r],[n,[a]]]}),[[n,[a]]]))),{n:e.n,index:t.index}),e)},c=(e,n)=>t=>t.reduce((n,t,r)=>l(n)(e+r,t),n),f=(e,n)=>({n:e,m:(0,a.Bw)((0,r.IH)(o(e,n)))(e=>{let[n,t]=e;return t})(e=>{let[n,t]=e;return n})}),d=e=>n=>new Map([...n.entries()].map(n=>{let[t,r]=n;return[t,(1e3*+e.filter(e=>r.includes(e)).length+Math.min(r.length,e.length)/Math.max(r.length,e.length)*100)/e.length]})),p=e=>(n,t)=>new Map([...e.entries()].map(e=>{let[r,a]=e;return[r,(0,u.L2)(t.get(r))(e=>a-1+Math.min(e,n)/Math.max(e,n),a-1)]})),s=e=>n=>{var t;let r=[...f(e.n,n).m.entries()];return(0,u.JR)((0,u.Xx)(r.map((n,r,u)=>{let[a,i]=n;return d(i)(new Map([...null!==(t=e.index.get(a))&&void 0!==t?t:[].entries()]))}))(0,(e,n,t)=>e+n))(e=>(0,u.op)(r.length)(e=>0!=e,n=>e/n))}},8833:function(e,n,t){t.d(n,{Bw:function(){return a},au:function(){return u},bW:function(){return i},vQ:function(){return o}});let r=e=>n=>t=>u=>{let a=e.shift();return a?(()=>{let i=n(a);return t(i)?i:r(e)(n)(t)(u)})():u},u=e=>n=>{let t=new Map;return e.forEach(e=>{let r=n(e),u=t.get(r);u?t.set(r,[...u,e]):t.set(r,[e])}),t},a=e=>n=>t=>{let r=new Map;return e.forEach(e=>{let u=n(e),a=r.get(u);void 0!=a?r.set(u,[...a,t(e)]):r.set(u,[t(e)])}),r},i=(e,n)=>t=>(r,u)=>{if(!(e<n))return 0;{let a=t(r,u,e);return 0==a?i(e+1,n)(t)(r,u):a}},o=async e=>{await t.g.navigator.clipboard.writeText(e)}}}]);