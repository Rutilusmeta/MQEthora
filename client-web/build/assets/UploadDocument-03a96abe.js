import{k as d,ai as x,aI as g,l as a,a3 as i,Y as m,c8 as y,an as b,a9 as p}from"./index-451a7b86.js";const N=({})=>{const[c,r]=d.useState(!1),s=d.useRef(null),{showSnackbar:u}=x(),[n,f]=d.useState({_id:"",createdAt:"",expiresAt:0,filename:"",isVisible:!0,location:"",locationPreview:"",mimetype:"",originalname:"",ownerKey:"",size:0,updatedAt:"",userId:""}),e=g({initialValues:{documentName:"",file:null},validate:o=>{const t={};return o.documentName||(t.documentName="Required"),n||(t.file="File required"),t},onSubmit:async o=>{r(!0);try{const t=n.location,l=await p().post("/docs",{documentName:o.documentName,files:[t]});u("success","Document uploaded successfully"),r(!1)}catch(t){console.log(t),u("error","Uploading failed"),r(!1)}}}),h=async o=>{r(!0),console.log(o);try{const t=new FormData;t.append("files",o.target.files[0]);const l=await p().post("/files",t);f(l.data.results[0]),e.setValues(l.data.results[0])}catch(t){console.log(t)}r(!1)};return a.jsx(i,{children:a.jsx(i,{sx:{width:"100%"},children:a.jsx(i,{sx:{width:"50%",typography:"body1",padding:1,margin:"auto"},children:a.jsxs("form",{style:{flex:"1"},onSubmit:e.handleSubmit,children:[a.jsxs(i,{style:{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:n.locationPreview?"end":"center",border:n.locationPreview?"none":"1px solid gray",borderRadius:"10px",height:"300px",backgroundImage:n.locationPreview?`url(${n.locationPreview})`:"none",backgroundSize:"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:[a.jsx("input",{onChange:h,ref:s,type:"file",style:{display:"none"}}),a.jsx(m,{disabled:c,id:"uploadFile",color:"secondary",variant:"contained",onClick:()=>{var o;return(o=s==null?void 0:s.current)==null?void 0:o.click()},children:"Upload File"})]}),e.touched.file&&e.errors.file&&a.jsx(y,{error:!0,children:e.errors.file}),a.jsx(b,{margin:"dense",inputProps:{autoComplete:"off"},label:"Document Name",name:"documentName",id:"documentName",type:"text",fullWidth:!0,variant:"standard",onChange:o=>{e.handleChange(o)},onBlur:e.handleBlur,error:e.touched.documentName&&!!e.errors.documentName,helperText:e.touched.documentName&&e.errors.documentName?e.errors.documentName:""}),a.jsx(i,{sx:{margin:2,display:"flex",justifyContent:"center"},children:a.jsx(m,{id:"submitUpload",disabled:c,type:"submit",variant:"contained",children:"Create"})})]})})})})};export{N as default};
