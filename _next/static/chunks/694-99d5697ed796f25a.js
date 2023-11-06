"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{3922:function(e,t,r){r.d(t,{Z:function(){return N}});var o=r(3727),n=r(7605),i=r(959),a=r(5341),p=r(5917),l=r(4460),u=r(2648),s=r(9164),c=r(474),m=r(4476),h=r(3245),d=r(3596),g=r(4612),f=r(2942),v=r(6857),y=r(725),Z=r(6634),b=r(75),T=r(4030),w=r(5093);function x(e){return(0,w.Z)("MuiTooltip",e)}let R=(0,T.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);var M=r(1527);let P=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"],k=e=>{let{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,a={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${(0,h.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,p.Z)(a,x,t)},B=(0,s.ZP)(g.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>(0,n.Z)({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${R.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${R.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${R.arrow}`]:(0,n.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${R.arrow}`]:(0,n.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),C=(0,s.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,h.Z)(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>(0,n.Z)({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:(0,u.Fq)(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Math.round(1e5*(16/14))/1e5}em`,fontWeight:e.typography.fontWeightRegular},{[`.${R.popper}[data-popper-placement*="left"] &`]:(0,n.Z)({transformOrigin:"right center"},t.isRtl?(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${R.popper}[data-popper-placement*="right"] &`]:(0,n.Z)({transformOrigin:"left center"},t.isRtl?(0,n.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,n.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${R.popper}[data-popper-placement*="top"] &`]:(0,n.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${R.popper}[data-popper-placement*="bottom"] &`]:(0,n.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),E=(0,s.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:(0,u.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})),O=!1,S=null,$={x:0,y:0};function L(e,t){return r=>{t&&t(r),e(r)}}let W=i.forwardRef(function(e,t){var r,p,u,s,h,T,w,x,R,W,N,A,F,I,j,z,D,U,_;let q=(0,m.Z)({props:e,name:"MuiTooltip"}),{arrow:H=!1,children:J,components:V={},componentsProps:X={},describeChild:Y=!1,disableFocusListener:G=!1,disableHoverListener:K=!1,disableInteractive:Q=!1,disableTouchListener:ee=!1,enterDelay:et=100,enterNextDelay:er=0,enterTouchDelay:eo=700,followCursor:en=!1,id:ei,leaveDelay:ea=0,leaveTouchDelay:ep=1500,onClose:el,onOpen:eu,open:es,placement:ec="bottom",PopperComponent:em,PopperProps:eh={},slotProps:ed={},slots:eg={},title:ef,TransitionComponent:ev=d.Z,TransitionProps:ey}=q,eZ=(0,o.Z)(q,P),eb=i.isValidElement(J)?J:(0,M.jsx)("span",{children:J}),eT=(0,c.Z)(),ew="rtl"===eT.direction,[ex,eR]=i.useState(),[eM,eP]=i.useState(null),ek=i.useRef(!1),eB=Q||en,eC=i.useRef(),eE=i.useRef(),eO=i.useRef(),eS=i.useRef(),[e$,eL]=(0,b.Z)({controlled:es,default:!1,name:"Tooltip",state:"open"}),eW=e$,eN=(0,y.Z)(ei),eA=i.useRef(),eF=i.useCallback(()=>{void 0!==eA.current&&(document.body.style.WebkitUserSelect=eA.current,eA.current=void 0),clearTimeout(eS.current)},[]);i.useEffect(()=>()=>{clearTimeout(eC.current),clearTimeout(eE.current),clearTimeout(eO.current),eF()},[eF]);let eI=e=>{clearTimeout(S),O=!0,eL(!0),eu&&!eW&&eu(e)},ej=(0,f.Z)(e=>{clearTimeout(S),S=setTimeout(()=>{O=!1},800+ea),eL(!1),el&&eW&&el(e),clearTimeout(eC.current),eC.current=setTimeout(()=>{ek.current=!1},eT.transitions.duration.shortest)}),ez=e=>{ek.current&&"touchstart"!==e.type||(ex&&ex.removeAttribute("title"),clearTimeout(eE.current),clearTimeout(eO.current),et||O&&er?eE.current=setTimeout(()=>{eI(e)},O?er:et):eI(e))},eD=e=>{clearTimeout(eE.current),clearTimeout(eO.current),eO.current=setTimeout(()=>{ej(e)},ea)},{isFocusVisibleRef:eU,onBlur:e_,onFocus:eq,ref:eH}=(0,Z.Z)(),[,eJ]=i.useState(!1),eV=e=>{e_(e),!1===eU.current&&(eJ(!1),eD(e))},eX=e=>{ex||eR(e.currentTarget),eq(e),!0===eU.current&&(eJ(!0),ez(e))},eY=e=>{ek.current=!0;let t=eb.props;t.onTouchStart&&t.onTouchStart(e)},eG=e=>{eY(e),clearTimeout(eO.current),clearTimeout(eC.current),eF(),eA.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",eS.current=setTimeout(()=>{document.body.style.WebkitUserSelect=eA.current,ez(e)},eo)},eK=e=>{eb.props.onTouchEnd&&eb.props.onTouchEnd(e),eF(),clearTimeout(eO.current),eO.current=setTimeout(()=>{ej(e)},ep)};i.useEffect(()=>{if(eW)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){("Escape"===e.key||"Esc"===e.key)&&ej(e)}},[ej,eW]);let eQ=(0,v.Z)(eb.ref,eH,eR,t);ef||0===ef||(eW=!1);let e0=i.useRef(),e1=e=>{let t=eb.props;t.onMouseMove&&t.onMouseMove(e),$={x:e.clientX,y:e.clientY},e0.current&&e0.current.update()},e4={},e7="string"==typeof ef;Y?(e4.title=eW||!e7||K?null:ef,e4["aria-describedby"]=eW?eN:null):(e4["aria-label"]=e7?ef:null,e4["aria-labelledby"]=eW&&!e7?eN:null);let e2=(0,n.Z)({},e4,eZ,eb.props,{className:(0,a.Z)(eZ.className,eb.props.className),onTouchStart:eY,ref:eQ},en?{onMouseMove:e1}:{}),e5={};ee||(e2.onTouchStart=eG,e2.onTouchEnd=eK),K||(e2.onMouseOver=L(ez,e2.onMouseOver),e2.onMouseLeave=L(eD,e2.onMouseLeave),eB||(e5.onMouseOver=ez,e5.onMouseLeave=eD)),G||(e2.onFocus=L(eX,e2.onFocus),e2.onBlur=L(eV,e2.onBlur),eB||(e5.onFocus=eX,e5.onBlur=eV));let e6=i.useMemo(()=>{var e;let t=[{name:"arrow",enabled:!!eM,options:{element:eM,padding:4}}];return null!=(e=eh.popperOptions)&&e.modifiers&&(t=t.concat(eh.popperOptions.modifiers)),(0,n.Z)({},eh.popperOptions,{modifiers:t})},[eM,eh]),e3=(0,n.Z)({},q,{isRtl:ew,arrow:H,disableInteractive:eB,placement:ec,PopperComponentProp:em,touch:ek.current}),e9=k(e3),e8=null!=(r=null!=(p=eg.popper)?p:V.Popper)?r:B,te=null!=(u=null!=(s=null!=(h=eg.transition)?h:V.Transition)?s:ev)?u:d.Z,tt=null!=(T=null!=(w=eg.tooltip)?w:V.Tooltip)?T:C,tr=null!=(x=null!=(R=eg.arrow)?R:V.Arrow)?x:E,to=(0,l.$)(e8,(0,n.Z)({},eh,null!=(W=ed.popper)?W:X.popper,{className:(0,a.Z)(e9.popper,null==eh?void 0:eh.className,null==(N=null!=(A=ed.popper)?A:X.popper)?void 0:N.className)}),e3),tn=(0,l.$)(te,(0,n.Z)({},ey,null!=(F=ed.transition)?F:X.transition),e3),ti=(0,l.$)(tt,(0,n.Z)({},null!=(I=ed.tooltip)?I:X.tooltip,{className:(0,a.Z)(e9.tooltip,null==(j=null!=(z=ed.tooltip)?z:X.tooltip)?void 0:j.className)}),e3),ta=(0,l.$)(tr,(0,n.Z)({},null!=(D=ed.arrow)?D:X.arrow,{className:(0,a.Z)(e9.arrow,null==(U=null!=(_=ed.arrow)?_:X.arrow)?void 0:U.className)}),e3);return(0,M.jsxs)(i.Fragment,{children:[i.cloneElement(eb,e2),(0,M.jsx)(e8,(0,n.Z)({as:null!=em?em:g.Z,placement:ec,anchorEl:en?{getBoundingClientRect:()=>({top:$.y,left:$.x,right:$.x,bottom:$.y,width:0,height:0})}:ex,popperRef:e0,open:!!ex&&eW,id:eN,transition:!0},e5,to,{popperOptions:e6,children:({TransitionProps:e})=>(0,M.jsx)(te,(0,n.Z)({timeout:eT.transitions.duration.shorter},e,tn,{children:(0,M.jsxs)(tt,(0,n.Z)({},ti,{children:[ef,H?(0,M.jsx)(tr,(0,n.Z)({},ta,{ref:eP})):null]}))}))}))]})});var N=W},9544:function(e,t,r){r.d(t,{Z:function(){return x}});var o=r(3727),n=r(7605),i=r(959),a=r(5341),p=r(6397),l=r(5917),u=r(9164),s=r(4476),c=r(3245),m=r(4030),h=r(5093);function d(e){return(0,h.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(1527);let f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=e=>{let{align:t,gutterBottom:r,noWrap:o,paragraph:n,variant:i,classes:a}=e,p={root:["root",i,"inherit"!==e.align&&`align${(0,c.Z)(t)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,l.Z)(p,d,a)},y=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,c.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},T=e=>b[e]||e,w=i.forwardRef(function(e,t){let r=(0,s.Z)({props:e,name:"MuiTypography"}),i=T(r.color),l=(0,p.Z)((0,n.Z)({},r,{color:i})),{align:u="inherit",className:c,component:m,gutterBottom:h=!1,noWrap:d=!1,paragraph:b=!1,variant:w="body1",variantMapping:x=Z}=l,R=(0,o.Z)(l,f),M=(0,n.Z)({},l,{align:u,color:i,className:c,component:m,gutterBottom:h,noWrap:d,paragraph:b,variant:w,variantMapping:x}),P=m||(b?"p":x[w]||Z[w])||"span",k=v(M);return(0,g.jsx)(y,(0,n.Z)({as:P,ref:t,ownerState:M,className:(0,a.Z)(k.root,c)},R))});var x=w}}]);