(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(e,t,c){},36:function(e,t,c){},39:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(9),a=c.n(o),i=(c(30),c(7)),r=(c(36),c(6)),l=c(23),j=c.n(l),u=c(15),b=c.n(u),p=(c(39),c(4)),d=c(12),O=Object(d.b)({name:"personInfo",initialState:{isChosenPerson:!1},reducers:{setIsChosenPerson:function(e,t){return Object(p.a)(Object(p.a)({},e),{},{isChosenPerson:t.payload})}}}),m=function(e){return e.isChosenPerson},f=O.actions.setIsChosenPerson,h=O.reducer,x=c(1),_=function(){var e=Object(n.useState)("\u0414\u043e\u0434\u0430\u0442\u0438"),t=Object(r.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)("Go to \u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430"),a=Object(r.a)(o,2),l=a[0],u=a[1],p=Object(n.useState)(!1),d=Object(r.a)(p,2),O=d[0],m=d[1],h=Object(i.b)(),_=Object(n.useCallback)((function(){"\u0414\u043e\u0434\u0430\u0442\u0438"===c?(s("\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),u("Go to \u0413\u043e\u043b\u043e\u0432\u043d\u0430"),m(!0),h(f(!0))):(s("\u0414\u043e\u0434\u0430\u0442\u0438"),u("Go to \u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430"),m(!1),h(f(!1)))}),[c,l,O]),g=Object(n.useCallback)((function(){}),[]),v=Object(n.useCallback)((function(e){var t=j.a.decode(e);if("SEQUENCE"!==t.typeName())throw new Error("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430 (\u043e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f SEQUENCE)");var c=t.sub[0];console.log(c),console.log(e)}),[]);return Object(x.jsxs)("div",{className:"ButtonsGroupe",children:[Object(x.jsx)("button",{type:"button",title:"Go to \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443 \u0406\u0432\u0430\u043d\u043e\u0432",className:b()("ButtonsGroupe__item",{"ButtonsGroupe__item-passive":O}),disabled:O,children:"\u0406\u0432\u0430\u043d\u043e\u0432 \u0406\u0432\u0430\u043d \u0406\u0432\u0430\u043d\u043e\u0432\u0438\u0447"}),Object(x.jsx)("button",{type:"button",title:"Go to \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443 \u041f\u0435\u0442\u0440\u043e\u0432",className:b()("ButtonsGroupe__item",{"ButtonsGroupe__item-passive":O}),disabled:O,onClick:g,children:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041f\u0435\u0442\u0440\u043e \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447"}),Object(x.jsx)("button",{type:"button",title:"Go to \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443 \u0421\u0438\u0434\u043e\u0440\u043e\u0432",className:b()("ButtonsGroupe__item",{"ButtonsGroupe__item-passive":O}),disabled:O,children:"\u0421\u0438\u0434\u043e\u0440\u043e\u0432 \u0421\u0438\u0434\u043e\u0440 \u0421\u0438\u0434\u043e\u0440\u043e\u0432\u0438\u0447"}),Object(x.jsx)("button",{type:"button",title:l,className:"ButtonsGroupe__add",onClick:_,children:c}),Object(x.jsx)("input",{title:"add your file",type:"file",className:"ButtonsGroupe__file",accept:"multiple",onChange:function(e){return v(e.target.files)}})]})},g=c(14),v=c(13),N=c(24),C=c.n(N),y=(c(44),c(45),function(e){var t=e.image;return"string"!==typeof t.src?null:Object(x.jsx)("div",{className:"file-item",children:Object(x.jsx)("img",{alt:"img - ".concat(t.id),src:t.src,className:"file-img"})})}),D=function(e){var t=e.images;return Object(x.jsx)("section",{className:"file-list",children:t.map((function(e){return Object(x.jsx)(y,{image:e},"".concat(e.id,"-image"))}))})},G=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];console.log(c);var o=Object(n.useCallback)((function(e){e.map((function(e){var t=new FileReader;return t.onload=function(e){s((function(t){var c;return[].concat(Object(g.a)(t),[{id:C()(),src:(null===(c=e.target)||void 0===c?void 0:c.result)||null}])}))},t.readAsDataURL(e),e}))}),[]),a=Object(v.a)({onDrop:o,accept:{"image/*":[".jpeg",".png"],"text/html":[".html",".htm"]}}),i=a.getRootProps,l=a.getInputProps,j=a.acceptedFiles,u=a.isDragActive,b=j.map((function(e){return Object(x.jsx)("li",{className:"DropzoneCopy__item",children:"".concat(e.path," - ").concat(e.size," bytes")},e.path)}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"DropzoneCopy",children:Object(x.jsxs)("div",Object(p.a)(Object(p.a)({},i({className:"DropzoneCopy__zone"})),{},{children:[Object(x.jsx)("input",Object(p.a)({className:"DropzoneCopy__input"},l())),Object(x.jsxs)("div",{className:"DropzoneCopy__content",children:[u?Object(x.jsx)("p",{className:"DropzoneCopy__text",children:"Release to drop the files here"}):Object(x.jsx)("p",{className:"DropzoneCopy__text",children:"Drag\u2019n\u2019drop some files with images here, or click to select files"}),Object(x.jsx)("aside",{className:"DropzoneCopy__files",children:Object(x.jsx)("ul",{className:"DropzoneCopy__list",children:b})})]})]}))}),Object(x.jsx)(D,{images:c})]})},z=(c(48),function(){var e=Object(n.useCallback)((function(e){console.log(e)}),[]),t=Object(v.a)({onDrop:e}),c=t.getRootProps,s=t.getInputProps;return Object(x.jsxs)("section",{className:"Dropzone",children:[Object(x.jsxs)("div",Object(p.a)(Object(p.a)({},c({})),{},{children:[Object(x.jsx)("input",Object(p.a)({className:"Dropzone__input"},s())),Object(x.jsx)("div",{className:"Dropzone__text",children:"Drag and drop your images here."})]})),Object(x.jsx)("aside",{})]})}),k=(c(49),function(){return Object(i.c)(m)?Object(x.jsx)(z,{}):Object(x.jsx)("div",{className:"WindowInfo"})}),B=function(){return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(_,{}),Object(x.jsx)(k,{}),Object(x.jsx)(G,{})]})},P=Object(d.a)({reducer:h});a.a.render(Object(x.jsx)(i.a,{store:P,children:Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(B,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.3646c818.chunk.js.map