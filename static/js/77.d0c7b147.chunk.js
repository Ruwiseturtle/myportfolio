"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[77],{321:(e,s,a)=>{a.d(s,{A:()=>n});a(5043);var r=a(579);const n=()=>(0,r.jsx)("div",{className:"loader-container",children:(0,r.jsx)("div",{className:"spinner"})})},9077:(e,s,a)=>{a.r(s),a.d(s,{default:()=>q});var r=a(5043),n=a(3003),i=a(3216),o=a(5475);const l="SignUpForm_containerSignUp__+vjGi",t="SignUpForm_formInput__IenXC",d="SignUpForm_hasContent__KnxPm",m="SignUpForm_boxBtnSignIn__9+u4e",c="SignUpForm_buttonSignIn__Daypv",u="SignUpForm_errorMessage__YZUhD";var h=a(3892),p=a(899),g=a(3185),w=a(8195),x=a(8814),j=a(579);const v=()=>{const e=(0,n.wA)(),s=(0,h.Wx)({initialValues:{login:"",email:"",password:"",confirmPassword:""},validationSchema:p.Ik({login:p.Yj().min(2,"Name must be at least 2 characters").max(50,"Name must be less than 50 characters").required("Enter your login"),email:p.Yj().email("Invalid email address").required("Email is required"),password:p.Yj().min(8,"Password must be at least 8 characters").matches(/[A-Z]/,"Must contain at least one uppercase letter").matches(/[a-z]/,"Must contain at least one lowercase letter").matches(/[0-9]/,"Must contain at least one number").required("Password is required"),confirmPassword:p.Yj().oneOf([p.KR("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:(s,a)=>{let{resetForm:r}=a;!function(s){const{login:a,email:r,password:n}=s,i={login:a.trim(),email:r.trim(),password:n.trim()};e((0,g.C8)(i)),e((0,x.tW)(w.A.LogIn))}(s),r()}});return(0,j.jsxs)("form",{className:l,onSubmit:s.handleSubmit,children:[(0,j.jsxs)("div",{className:`${t} ${s.values.login?d:""}`,children:[(0,j.jsx)("input",{type:"text",id:"login",name:"login",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.login,required:!0}),(0,j.jsx)("label",{htmlFor:"login",children:"Login"}),s.touched.login&&s.errors.login&&(0,j.jsx)("p",{className:u,children:s.errors.login})]}),(0,j.jsxs)("div",{className:`${t} ${s.values.email?d:""}`,children:[(0,j.jsx)("input",{type:"email",id:"email",name:"email",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email,required:!0}),(0,j.jsx)("label",{htmlFor:"email",children:"Email"}),s.touched.email&&s.errors.email&&(0,j.jsx)("p",{className:u,children:s.errors.email})]}),(0,j.jsxs)("div",{className:`${t} ${s.values.password?d:""}`,children:[(0,j.jsx)("input",{type:"password",id:"password",name:"password",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.password,required:!0}),(0,j.jsx)("label",{htmlFor:"password",children:"Password"}),s.touched.password&&s.errors.password&&(0,j.jsx)("p",{className:u,children:s.errors.password})]}),(0,j.jsxs)("div",{className:`${t} ${s.values.confirmPassword?d:""}`,children:[(0,j.jsx)("input",{type:"password",id:"confirmPassword",name:"confirmPassword",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.confirmPassword,required:!0}),(0,j.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm password"}),s.touched.confirmPassword&&s.errors.confirmPassword&&(0,j.jsx)("p",{className:u,children:s.errors.confirmPassword})]}),(0,j.jsx)("div",{className:m,children:(0,j.jsx)("button",{className:c,type:"submit",children:"Sign Up"})})]})},_="SignInForm_containerSignIn__C5T5r",N="SignInForm_formInput__pgL5W",S="SignInForm_hasContent__AZ+NA",b="SignInForm_boxBtnSignIn__BBTY2",f="SignInForm_buttonSignIn__MShtb",I="SignInForm_errorMessage__mClZW",C="SignInForm_hrefToForgotPassword__3xe+V",F=()=>{const e=(0,n.wA)(),s=(0,h.Wx)({initialValues:{email:"",password:""},validationSchema:p.Ik({email:p.Yj().email("Invalid email address").required("Email is required"),password:p.Yj().min(8,"Password must be at least 8 characters").matches(/[A-Z]/,"Must contain at least one uppercase letter").matches(/[a-z]/,"Must contain at least one lowercase letter").matches(/[0-9]/,"Must contain at least one number").required("Password is required")}),onSubmit:(s,a)=>{let{resetForm:r}=a;!function(s){const a={email:s.email.trim(),password:s.password.trim()};e((0,g.eB)(a))}(s),r()}});return(0,j.jsxs)("form",{className:_,onSubmit:s.handleSubmit,children:[(0,j.jsxs)("div",{className:`${N} ${s.values.email?S:""}`,children:[(0,j.jsx)("input",{type:"email",id:"email",name:"email",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email,required:!0}),(0,j.jsx)("label",{htmlFor:"email",children:"Email"}),s.touched.email&&s.errors.email&&(0,j.jsx)("p",{className:I,children:s.errors.email})]}),(0,j.jsxs)("div",{className:`${N} ${s.values.password?S:""}`,children:[(0,j.jsx)("input",{type:"password",id:"password",name:"password",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.password,required:!0}),(0,j.jsx)("label",{htmlFor:"password",children:"Password"}),s.touched.password&&s.errors.password&&(0,j.jsx)("p",{className:I,children:s.errors.password})]}),(0,j.jsx)("div",{className:b,children:(0,j.jsx)("button",{className:f,type:"submit",children:"Sign In"})}),(0,j.jsx)("div",{className:C,children:(0,j.jsx)(o.N_,{to:"/reset-password",children:"Forgot your password?"})})]})};var P=a(7723),A=a(321);const q=()=>{const e=(0,n.d4)(P.hL),s=(0,n.d4)(P.Kc),a=(0,n.d4)(P.Di),l=(0,n.wA)(),t=(0,i.Zp)();return(0,r.useEffect)((()=>{s&&t("/UserPage")}),[e,a,s,t]),a?(0,j.jsx)("div",{className:"AuthorizationLoader",children:(0,j.jsx)(A.A,{})}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"authorizationContainerMain",children:(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{className:"info",children:"Authorization in the development process!!!"}),(0,j.jsxs)("div",{className:"authorizationContainer",children:[(0,j.jsxs)("div",{className:"tabs",children:[(0,j.jsx)(o.N_,{to:"SignIn",className:"tab "+(e===w.A.LogIn?"activeHref":""),onClick:()=>l((0,x.tW)(w.A.LogIn)),children:"SIGN IN"}),(0,j.jsx)(o.N_,{to:"SignUp",className:"tab "+(e===w.A.LogUp?"activeHref":""),onClick:()=>l((0,x.tW)(w.A.LogUp)),children:"SIGN UP"})]}),(0,j.jsxs)("div",{className:"content",children:[e===w.A.LogIn&&(0,j.jsx)(F,{}),e===w.A.LogUp&&(0,j.jsx)(v,{})]})]})]})})})}}}]);
//# sourceMappingURL=77.d0c7b147.chunk.js.map