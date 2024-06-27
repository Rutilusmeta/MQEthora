import{j as H,i as K,_ as E,bk as aa,m as h,bl as q,l as e,s as L,B as ta,bm as R,k as P,u as X,p as ea,bn as W,bo as D,n as w,bp as M,o as Y,a5 as S,bq as sa,aY as oa,a3 as U,X as T,br as na,bs as ia,bt as ra,aC as la,S as F,bu as ca,bv as da,bw as pa,bx as ua,by as _,bz as b,bA as ga,bB as xa,a6 as ba,bC as fa,ab as va,bD as ha,av as ya}from"./index-451a7b86.js";function ma(a){return H("MuiPagination",a)}K("MuiPagination",["root","ul","outlined","text"]);const Ca=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ja(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:n=1,defaultPage:g=1,disabled:p=!1,hideNextButton:f=!1,hidePrevButton:d=!1,onChange:v,page:$,showFirstButton:N=!1,showLastButton:B=!1,siblingCount:u=1}=a,i=E(a,Ca),[c,I]=aa({controlled:$,default:g,name:o,state:"page"}),k=(r,A)=>{$||I(A),v&&v(r,A)},m=(r,A)=>{const Q=A-r+1;return Array.from({length:Q},(Da,Z)=>r+Z)},z=m(1,Math.min(t,n)),y=m(Math.max(n-t+1,t+1),n),O=Math.max(Math.min(c-u,n-t-u*2-1),t+2),s=Math.min(Math.max(c+u,t+u*2+2),y.length>0?y[0]-2:n-1),l=[...N?["first"]:[],...d?[]:["previous"],...z,...O>t+2?["start-ellipsis"]:t+1<n-t?[t+1]:[],...m(O,s),...s<n-t-1?["end-ellipsis"]:n-t>t?[n-t]:[],...y,...f?[]:["next"],...B?["last"]:[]],C=r=>{switch(r){case"first":return 1;case"previous":return c-1;case"next":return c+1;case"last":return n;default:return null}},x=l.map(r=>typeof r=="number"?{onClick:A=>{k(A,r)},type:"page",page:r,selected:r===c,disabled:p,"aria-current":r===c?"true":void 0}:{onClick:A=>{k(A,C(r))},type:r,page:C(r),selected:!1,disabled:p||r.indexOf("ellipsis")===-1&&(r==="next"||r==="last"?c>=n:c<=1)});return h({items:x},i)}function Pa(a){return H("MuiPaginationItem",a)}const $a=K("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),j=$a,V=q(e.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),G=q(e.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),Ia=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],J=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${M(o.size)}`],o.variant==="text"&&t[`text${M(o.color)}`],o.variant==="outlined"&&t[`outlined${M(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},Na=a=>{const{classes:t,color:o,disabled:n,selected:g,size:p,shape:f,type:d,variant:v}=a,$={root:["root",`size${M(p)}`,v,f,o!=="standard"&&`${v}${M(o)}`,n&&"disabled",g&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[d]],icon:["icon"]};return Y($,Pa,t)},ka=L("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:J})(({theme:a,ownerState:t})=>h({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${j.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),za=L(ta,{name:"MuiPaginationItem",slot:"Root",overridesResolver:J})(({theme:a,ownerState:t})=>h({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${j.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${j.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${j.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:R(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${j.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selected} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${j.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>h({},t.variant==="text"&&{[`&.${j.selected}`]:h({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${j.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${j.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${j.selected}`]:h({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:R(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:R(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${j.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:R(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${j.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),Aa=L("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>h({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),Ba=P.forwardRef(function(t,o){const n=X({props:t,name:"MuiPaginationItem"}),{className:g,color:p="standard",component:f,components:d={},disabled:v=!1,page:$,selected:N=!1,shape:B="circular",size:u="medium",slots:i={},type:c="page",variant:I="text"}=n,k=E(n,Ia),m=h({},n,{color:p,disabled:v,selected:N,shape:B,size:u,type:c,variant:I}),z=ea(),y=Na(m),s=(z.direction==="rtl"?{previous:i.next||d.next||G,next:i.previous||d.previous||V,last:i.first||d.first||W,first:i.last||d.last||D}:{previous:i.previous||d.previous||V,next:i.next||d.next||G,first:i.first||d.first||W,last:i.last||d.last||D})[c];return c==="start-ellipsis"||c==="end-ellipsis"?e.jsx(ka,{ref:o,ownerState:m,className:w(y.root,g),children:"…"}):e.jsxs(za,h({ref:o,ownerState:m,component:f,disabled:v,className:w(y.root,g)},k,{children:[c==="page"&&$,s?e.jsx(Aa,{as:s,ownerState:m,className:y.icon}):null]}))}),Oa=Ba,Ra=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ua=a=>{const{classes:t,variant:o}=a;return Y({root:["root",o],ul:["ul"]},ma,t)},Ma=L("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),La=L("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function Ta(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const Sa=P.forwardRef(function(t,o){const n=X({props:t,name:"MuiPagination"}),{boundaryCount:g=1,className:p,color:f="standard",count:d=1,defaultPage:v=1,disabled:$=!1,getItemAriaLabel:N=Ta,hideNextButton:B=!1,hidePrevButton:u=!1,renderItem:i=x=>e.jsx(Oa,h({},x)),shape:c="circular",showFirstButton:I=!1,showLastButton:k=!1,siblingCount:m=1,size:z="medium",variant:y="text"}=n,O=E(n,Ra),{items:s}=ja(h({},n,{componentName:"Pagination"})),l=h({},n,{boundaryCount:g,color:f,count:d,defaultPage:v,disabled:$,getItemAriaLabel:N,hideNextButton:B,hidePrevButton:u,renderItem:i,shape:c,showFirstButton:I,showLastButton:k,siblingCount:m,size:z,variant:y}),C=Ua(l);return e.jsx(Ma,h({"aria-label":"pagination navigation",className:w(C.root,p),ownerState:l,ref:o},O,{children:e.jsx(La,{className:C.ul,ownerState:l,children:s.map((x,r)=>e.jsx("li",{children:i(h({},x,{color:f,"aria-label":N(x.type,x.page,x.selected),shape:c,size:z,variant:y}))},r))})}))}),_a=Sa,wa={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70vw",bgcolor:"background.paper",boxShadow:24,borderRadius:"10px",p:4};function Ea(a){var o;const t=a==null?void 0:a.application;if(t){const n=Object.keys(t);let g=!1;for(const p of n)if(((o=t[p])==null?void 0:o.admin)===!0){g=!0;break}return g}return!1}function Wa(){const a=S(s=>s.apps),t=S(s=>{var l;return(l=s.user.ACL)==null?void 0:l.ownerAccess}),[o,n]=P.useState(!1),[g,p]=P.useState([]),[f,d]=P.useState(),[v,$]=P.useState({modalOpen:!1,user:null}),[N,B]=P.useState(!1),u=S(s=>s.ACL.result.find(l=>l.appId===f));P.useEffect(()=>{B(Ea(u))},[u]);const[i,c]=P.useState(),I=async(s,l=10,C=0)=>{try{if(s){const x=await ha(s,l,C),{data:r}=x;return c({limit:r.limit,offset:r.offset,total:r.total}),r.items}}catch(x){console.log(x)}return[]};P.useEffect(()=>{t&&a.length>0&&(d(a[0]._id),I(a[0]._id).then(s=>{p(s)}))},[a,t]),P.useEffect(()=>{!t&&a.length>0&&(d(a[0]._id),I(a[0]._id).then(s=>{p(s)}))},[]),P.useEffect(()=>{console.log("Users mount")},[]);const k=s=>{d(s.target.value),I(s.target.value).then(l=>{p(l)})},m=(s,l)=>{let C=0;l-1>0&&(C=(l-1)*((i==null?void 0:i.limit)||10)),I(f||null,(i==null?void 0:i.limit)||10,C).then(x=>p(x))},z=s=>$({modalOpen:!0,user:s}),y=()=>$({modalOpen:!1,user:null}),O=s=>{const l=g,C=l.findIndex(x=>x._id===v.user._id);l[C]._id=s.result.userId,p(l)};return e.jsxs(sa,{component:oa,style:{margin:"0 auto"},children:[e.jsxs(U,{style:{display:"flex",alignItems:"center"},children:[e.jsx(T,{variant:"h6",style:{margin:"16px"},children:"Users"}),f&&t?e.jsxs(na,{variant:"standard",sx:{m:1,minWidth:120},children:[e.jsx(ia,{id:"demo-simple-select-label",children:"App"}),e.jsx(ra,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"App",value:f,onChange:k,children:a.map(s=>e.jsx(la,{value:s._id,children:s.appName},s._id))})]}):null,(t||(u==null?void 0:u.application.appUsers.create))&&e.jsx(F,{onClick:()=>n(!0),size:"large",children:e.jsx(ca,{fontSize:"large"})})]}),g.length===0&&e.jsxs(U,{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(da,{}),e.jsx(T,{style:{marginTop:"20px",marginBottom:"20px"},children:"Users not found."})]}),g.length>0&&e.jsxs(pa,{"aria-label":"simple table",children:[e.jsx(ua,{children:e.jsxs(_,{children:[e.jsx(b,{width:200,children:"App Id"}),e.jsx(b,{align:"right",children:"First Name"}),e.jsx(b,{align:"right",children:"Last Name"}),e.jsx(b,{align:"right",children:"User Name"}),e.jsx(b,{align:"right",children:"Email"}),e.jsx(b,{align:"right",children:"Attribution"}),e.jsx(b,{align:"right",children:"Actions"})]})}),e.jsxs(ga,{children:[g.map(s=>e.jsxs(_,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(b,{component:"th",scope:"row",children:s.appId}),e.jsx(b,{align:"right",children:s.firstName}),e.jsx(b,{align:"right",children:s.lastName}),e.jsx(b,{align:"right",children:s.username?s.username:"-"}),e.jsx(b,{align:"right",children:s.email?s.email:"-"}),e.jsx(b,{align:"right",children:s.registrationChannelType?s.registrationChannelType:"-"}),e.jsx(b,{align:"right",children:e.jsxs(U,{sx:{width:"200px"},children:[(u==null?void 0:u.application.appUsers.update)&&e.jsx(T,{children:"Edit"}),N&&e.jsx(T,{style:{cursor:"pointer",textDecoration:"underline"},onClick:()=>z(s),children:"Edit ACL"})]})})]},s._id)),(i==null?void 0:i.total)&&e.jsx(_,{children:e.jsx(b,{colSpan:6,children:e.jsx(_a,{onChange:m,count:Math.ceil(i.total/i.limit)})})})]})]}),e.jsx(xa,{open:o,setUsers:p,setOpen:n,appId:f}),e.jsx(ba,{open:v.modalOpen,onClose:y,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(U,{sx:wa,children:[e.jsx(fa,{updateData:O,user:v.user}),e.jsx(F,{onClick:y,sx:{position:"absolute",top:0,right:0,color:"black"},children:e.jsx(va,{fontSize:"large"})})]})})]})}function Va(){return e.jsx(ya,{maxWidth:"xl",style:{height:"calc(100vh - 68px)"},children:e.jsx(U,{style:{marginTop:"20px"},children:e.jsx(Wa,{})})})}export{Va as default};
