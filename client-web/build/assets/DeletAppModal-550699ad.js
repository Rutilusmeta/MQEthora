import{k as r,a5 as u,p as f,cb as x,l as a,al as h,aG as b,am as g,bX as m,bY as j,Y as D,aM as A,cc as v}from"./index-451a7b86.js";function k(e){var s;const[n,l]=r.useState(!1),i=u(t=>t.deleteApp),d=f(),c=x(d.breakpoints.down("md")),p=()=>{var t;e.app&&((t=e.app)!=null&&t._id)&&(l(!0),v(e.app._id).then(()=>{var o;i((o=e.app)==null?void 0:o._id),e.setOpen(!1)}).finally(()=>l(!1)))};return a.jsx("div",{children:a.jsxs(h,{fullScreen:c,open:e.open,onClose:()=>e.setOpen(!1),"aria-labelledby":"responsive-dialog-title",children:[a.jsxs(b,{id:"responsive-dialog-title",children:["Are you sure want to remove application ",(s=e.app)==null?void 0:s.appName]}),a.jsx(g,{children:a.jsx(m,{children:"Your app clients(mobile, web) will not be able to send requests to Platform API after deleting the app"})}),a.jsxs(j,{children:[a.jsx(D,{disabled:n,variant:"contained",autoFocus:!0,onClick:()=>e.setOpen(!1),children:"Cancel"}),a.jsx(A,{variant:"contained",loading:n,color:"error",onClick:p,autoFocus:!0,children:"Delete"})]})]})})}export{k as default};
