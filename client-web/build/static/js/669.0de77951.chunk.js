"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[669],{13669:function(e,r,n){n.r(r);var t=n(74165),i=n(15861),s=n(36459),a=(n(72791),n(50228)),c=n(4565),o=n(17205),l=n(59911),u=n(11210),d=n(69073),f=n(90580),x=n(52775),p=n(55705),h=n(88422),v=n(80184),m="/coin.png",b=function(e){var r={refLink:""};return e.refLink||(r.refLink="Link is required"),r};r.default=function(e){(0,s.Z)(e);var r=(0,u.K)((function(e){return e.user._id})),n=(0,u.K)((function(e){return e.user.walletAddress})),g=(0,u.K)((function(e){return e.setBalance})),y=(0,u.K)((function(e){return e.user.referrerId})),j=(0,x.D)().showSnackbar,k=(0,p.TA)({initialValues:{refLink:""},validate:b,onSubmit:function(){var e=(0,i.Z)((0,t.Z)().mark((function e(i,s){var a,c,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=i.refLink,c=s.setSubmitting,!y){e.next=5;break}return j("error","You already added your referral"),e.abrupt("return");case 5:if(a!==r){e.next=8;break}return j("error","You cannot be your referral"),e.abrupt("return");case 8:return c(!0),e.prev=9,e.next=12,(0,h.Vy)().post("/users/referral",{referrerId:a});case 12:return e.sent,e.next=15,(0,h.sb)(n);case 15:o=e.sent,g(o.data.balance),j("success","Referral successfully added"),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(9),j("error","Something went wrong");case 23:c(!1);case 24:case"end":return e.stop()}}),e,null,[[9,20]])})));return function(r,n){return e.apply(this,arguments)}}()});return(0,v.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",padding:"20px"},children:(0,v.jsxs)(a.Z,{children:[(0,v.jsx)(a.Z,{sx:{fontSize:50,display:"flex",justifyContent:"center",alignItems:"center"},children:(0,v.jsx)(d.Z,{color:"primary",fontSize:"inherit"})}),(0,v.jsxs)(c.Z,{sx:{justifyContent:"center",alignItems:"center",display:"flex"},children:["Gift friends 25",(0,v.jsx)("img",{alt:"",style:{width:"16px",height:"16px"},src:m}),"and receive 25",(0,v.jsx)("img",{alt:"",style:{width:"16px",height:"16px"},src:m}),". Send friends invite with your personal invitation code"]}),(0,v.jsx)(c.Z,{sx:{fontWeight:"bold",textAlign:"center",fontSize:"18px"},children:"Your invitation code"}),(0,v.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"},children:(0,v.jsx)(o.Z,{onClick:function(){navigator.clipboard.writeText(r),j("success","Link copied")},variant:"contained",startIcon:(0,v.jsx)(f.Z,{}),children:r})}),(0,v.jsx)(c.Z,{sx:{fontWeight:"bold",textAlign:"center",fontSize:"18px",margin:"10px 0"},children:"Or enter your referral code to earn coins."}),(0,v.jsxs)("form",{onSubmit:k.handleSubmit,style:{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,v.jsx)(l.Z,{margin:"dense",label:"Your referral code",name:"refLink",type:"text",fullWidth:!0,inputProps:{autoComplete:"off"},variant:"outlined",onChange:k.handleChange,value:k.values.refLink,error:!!k.touched.refLink&&!!k.errors.refLink}),(0,v.jsx)(o.Z,{disabled:k.isSubmitting,variant:"contained",type:"submit",children:"Earn coins"})]})]})})}},69073:function(e,r,n){var t=n(64836);r.Z=void 0;var i=t(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2H3zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3h2z"}),"PersonAddAlt");r.Z=a},90580:function(e,r,n){var t=n(64836);r.Z=void 0;var i=t(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"}),"Share");r.Z=a}}]);
//# sourceMappingURL=669.0de77951.chunk.js.map