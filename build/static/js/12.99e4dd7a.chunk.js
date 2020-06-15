(this["webpackJsonpdata-maintenance"]=this["webpackJsonpdata-maintenance"]||[]).push([[12],{172:function(e,a,t){"use strict";var n=t(24),s=t(25),o=t(31),l=t(29),i=t(30),r=t(1),A=t.n(r),c=(t(180),function(e){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=!(!this.props.disabled||"boolean"!==typeof this.props.disabled),t=!(!this.props.readOnly||"boolean"!==typeof this.props.readOnly);return void 0!==this.props.value?A.a.createElement("input",{value:this.props.value,type:this.props.type,id:this.props.id,className:"input-style "+this.props.className,readOnly:t,disabled:a,onChange:function(a){e.props.onChange&&"function"===typeof e.props.onChange&&e.props.onChange(a,e.props.JsonName)},onClick:this.props.clickInput,onInput:this.props.onInput,placeholder:this.props.placeholder,onFocus:this.props.focus,onBlur:this.props.blur,multiple:this.props.multiple}):A.a.createElement("input",{type:this.props.type,id:this.props.id,className:"input-style "+this.props.className,disabled:a,onChange:function(a){e.props.onChange&&"function"===typeof e.props.onChange&&e.props.onChange(a,e.props.JsonName)},onClick:this.props.clickInput,onInput:this.props.onInput,placeholder:this.props.placeholder,onFocus:this.props.focus,onBlur:this.props.blur,multiple:this.props.multiple,defaultValue:this.props.defaultValue})}}]),a}(r.Component));c.defaultProps={onChange:function(){},onInput:function(){},clickInput:function(){},focus:function(){},blur:function(){},className:"",id:"",placeholder:"",type:"text",multiple:!1,disabled:!1,defaultValue:""},a.a=c},180:function(e,a,t){},240:function(e,a,t){},241:function(e,a,t){},337:function(e,a,t){"use strict";t.r(a);var n=t(54),s=t(24),o=t(25),l=t(31),i=t(29),r=t(57),A=t(30),c=t(1),p=t.n(c),u=t(32),d=(t(240),t(44)),m=(t(241),t(172)),h=function(e){return p.a.createElement("div",{className:"form-group "+e.className},p.a.createElement("label",{htmlFor:e.id,className:"form-label"}," ",e.label," "),p.a.createElement(m.a,Object.assign({id:e.id,className:e.className+"-input",focus:function(e){e.target.parentElement.classList.add("focused")},blur:function(e){var a=e.target.value,t=e.target.parentElement;""===a&&t.classList.remove("focused")},onChange:e.onChange},e)))};h.defaultProps={className:"",id:"",label:"",onChange:function(){}};var g=h,b=t(53),f=t(12),C=t(39),E=(t(19),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(i.a)(a).call(this,e))).state={username:"",password:"",submitted:!1},t.handleChange=t.handleChange.bind(Object(r.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(r.a)(t)),t}return Object(A.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){var a=e.target,t=a.id,s=a.value;console.log(t,s),this.setState(Object(n.a)({},t,s))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var a=this.state,t=a.username,n=a.password;t&&n&&this.props.login({username:t,password:n,grant_type:"password"})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=d.a.logo,a=d.a.login,t=this.props.isLoadingLogin,n=this.state,s=n.username,o=n.password,l=n.submitted;return p.a.createElement("div",{className:"loginContainer",style:{backgroundImage:a.bgColor}},p.a.createElement("div",{className:"login-box",style:{background:a.loginBg}},p.a.createElement("div",{className:"logo-container"},p.a.createElement("div",{className:"logo-container-inner"},p.a.createElement("img",{className:"logo-img",alt:"logo",src:f.a[e.img],srcSet:"".concat(f.a[e.img2x],", ").concat(f.a[e.img3x])}))),p.a.createElement("div",{className:"login-box-inner"},p.a.createElement("div",{className:"user-area"},p.a.createElement("div",{className:"user-input-area"},p.a.createElement(g,{className:"user-name",id:"username",label:"User Name",onChange:this.handleChange,value:s}),l&&!s&&p.a.createElement("div",{className:"help-block"},a.err.username)),p.a.createElement("div",{className:"password-area"},p.a.createElement(g,{className:"password-name",id:"password",label:"Password",type:"password",onChange:this.handleChange}),l&&!o&&p.a.createElement("div",{className:"help-block"},a.err.password)),p.a.createElement("div",{className:"submit-area"},p.a.createElement(b.a,{className:"submit-button",onClick:this.handleSubmit}," ",t?p.a.createElement(v,null):"LOGIN"," ")),p.a.createElement("div",{className:"forgot-pass"},p.a.createElement("button",{href:"#",className:"forgot-pass-link"},"Forgot Password?"))))))}}]),a}(p.a.Component)),v=function(){return p.a.createElement("img",{alt:"loader",src:"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="})};var w={login:C.b.login,logout:C.b.logout};a.default=Object(u.b)((function(e){var a=e.authentication;return{isLoggedIn:a.isLoggedIn,isLoadingLogin:a.isLoadingLogin}}),w)(E)}}]);
//# sourceMappingURL=12.99e4dd7a.chunk.js.map