(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(9),o=n.n(a),i=(n(30),n(7)),r=(n(36),n(5)),l=n(22),j=n.n(l),u=n(23),d=n.n(u),b=(n(39),n(4)),p=n(12),O=Object(p.b)({name:"personInfo",initialState:{isChosenPerson:!1,chosenUser:{id:0,name:"",status:"",dateStart:"",dateFinish:""}},reducers:{setIsChosenPerson:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{isChosenPerson:t.payload})},setChosenUser:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{chosenUser:t.payload})}}}),m=function(e){return e.isChosenPerson},h=function(e){return e.chosenUser},f=O.actions,x=f.setIsChosenPerson,_=f.setChosenUser,g=O.reducer,v=n(1),N=[{id:1,name:"\u0406\u0432\u0430\u043d\u043e\u0432 \u0406\u0432\u0430\u043d \u0406\u0432\u0430\u043d\u043e\u0432\u0438\u0447",status:"valid",dateStart:"10.08.2022",dateFinish:"09.08.2024"},{id:2,name:"\u041f\u0435\u0442\u0440\u043e\u0432 \u041f\u0435\u0442\u0440\u043e \u041f\u0435\u0442\u0440\u043e\u0432\u0438\u0447",status:"invalid",dateStart:"15.06.2020",dateFinish:"14.06.2022"},{id:3,name:"\u0421\u0438\u0434\u043e\u0440\u043e\u0432 \u0421\u0438\u0434\u043e\u0440 \u0421\u0438\u0434\u043e\u0440\u043e\u0432\u0438\u0447",status:"valid",dateStart:"06.07.2021",dateFinish:"05.07.2023"}],C=function(){var e=Object(c.useState)("\u0414\u043e\u0434\u0430\u0442\u0438"),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("Go to \u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430"),o=Object(r.a)(a,2),l=o[0],u=o[1],b=Object(c.useState)(!1),p=Object(r.a)(b,2),O=p[0],m=p[1],h=Object(i.b)(),f=Object(c.useCallback)((function(){"\u0414\u043e\u0434\u0430\u0442\u0438"===n?(s("\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"),u("Go to \u0413\u043e\u043b\u043e\u0432\u043d\u0430"),m(!0),h(x(!0))):(s("\u0414\u043e\u0434\u0430\u0442\u0438"),u("Go to \u0414\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u044f \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430"),m(!1),h(x(!1)),h(_({id:0,name:"",status:"",dateStart:"",dateFinish:""})))}),[n,l,O]),g=Object(c.useCallback)((function(e){var t=N.find((function(t){return t.id===e}));t&&h(_(t))}),[]),C=Object(c.useCallback)((function(e){var t=j.a.decode(e);if("SEQUENCE"!==t.typeName())throw new Error("\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0430 (\u043e\u0447\u0456\u043a\u0443\u0454\u0442\u044c\u0441\u044f SEQUENCE)");var n=t.sub[0];console.log(n),console.log(e)}),[]);return Object(v.jsxs)("div",{className:"ButtonsGroupe",children:[N.map((function(e){return Object(v.jsx)("button",{type:"button",title:"Go to \u041f\u0435\u0440\u0435\u0433\u043b\u044f\u0434 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443 ".concat(e.name.split(" ")[0]),className:d()("ButtonsGroupe__item",{"ButtonsGroupe__item-passive":O}),disabled:O,onClick:function(){return g(e.id)},children:e.name},e.id)})),Object(v.jsx)("button",{type:"button",title:l,className:"ButtonsGroupe__add",onClick:f,children:n}),Object(v.jsx)("input",{title:"add your file",type:"file",className:"ButtonsGroupe__file",accept:"multiple",onChange:function(e){return C(e.target.files)}})]})},y=n(14),D=n(13),S=n(24),z=n.n(S),k=(n(44),n(45),function(e){var t=e.image;return"string"!==typeof t.src?null:Object(v.jsx)("div",{className:"file-item",children:Object(v.jsx)("img",{alt:"img - ".concat(t.id),src:t.src,className:"file-img"})})}),w=function(e){var t=e.images;return Object(v.jsx)("section",{className:"file-list",children:t.map((function(e){return Object(v.jsx)(k,{image:e},"".concat(e.id,"-image"))}))})},F=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];console.log(n);var a=Object(c.useCallback)((function(e){e.map((function(e){var t=new FileReader;return t.onload=function(e){s((function(t){var n;return[].concat(Object(y.a)(t),[{id:z()(),src:(null===(n=e.target)||void 0===n?void 0:n.result)||null}])}))},t.readAsDataURL(e),e}))}),[]),o=Object(D.a)({onDrop:a,accept:{"image/*":[".jpeg",".png"],"text/html":[".html",".htm"]}}),i=o.getRootProps,l=o.getInputProps,j=o.acceptedFiles,u=o.isDragActive,d=j.map((function(e){return Object(v.jsx)("li",{className:"DropzoneCopy__item",children:"".concat(e.path," - ").concat(e.size," bytes")},e.path)}));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"DropzoneCopy",children:Object(v.jsxs)("div",Object(b.a)(Object(b.a)({},i({className:"DropzoneCopy__zone"})),{},{children:[Object(v.jsx)("input",Object(b.a)({className:"DropzoneCopy__input"},l())),Object(v.jsxs)("div",{className:"DropzoneCopy__content",children:[u?Object(v.jsx)("p",{className:"DropzoneCopy__text",children:"Release to drop the files here"}):Object(v.jsx)("p",{className:"DropzoneCopy__text",children:"Drag\u2019n\u2019drop some files with images here, or click to select files"}),Object(v.jsx)("aside",{className:"DropzoneCopy__files",children:Object(v.jsx)("ul",{className:"DropzoneCopy__list",children:d})})]})]}))}),Object(v.jsx)(w,{images:n})]})},I=(n(48),function(){var e=Object(c.useCallback)((function(e){console.log(e)}),[]),t=Object(D.a)({onDrop:e}),n=t.getRootProps,s=t.getInputProps;return Object(v.jsxs)("section",{className:"Dropzone",children:[Object(v.jsxs)("div",Object(b.a)(Object(b.a)({},n({})),{},{children:[Object(v.jsx)("input",Object(b.a)({className:"Dropzone__input"},s())),Object(v.jsx)("div",{className:"Dropzone__text",children:"Drag and drop your images here."})]})),Object(v.jsx)("aside",{})]})}),E=(n(49),function(){var e=Object(i.c)(m),t=Object(i.c)(h),n=Object(c.useState)({id:0,name:"",status:"",dateStart:"",dateFinish:""}),s=Object(r.a)(n,2),a=s[0],o=s[1];return Object(c.useEffect)((function(){o(t)}),[t]),e?Object(v.jsx)(I,{}):Object(v.jsxs)("div",{className:"WindowInfo",children:[Object(v.jsx)("p",{className:"WindowInfo__text",children:0!==a.id&&"\u0421\u0442\u0430\u0442\u0443\u0441 \u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043a\u0430\u0442\u0443: ".concat(a.status)}),Object(v.jsx)("p",{className:"WindowInfo__text",children:0!==a.id&&"\u0414\u0430\u0442\u0430 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f: ".concat(a.dateStart)}),Object(v.jsx)("p",{className:"WindowInfo__text",children:0!==a.id&&"\u0414\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f \u0442\u0435\u0440\u043c\u0456\u043d\u0443 \u0434\u0456\u0457: ".concat(a.dateFinish)})]})}),G=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(C,{}),Object(v.jsx)(E,{}),Object(v.jsx)(F,{})]})},P=Object(p.a)({reducer:g});o.a.render(Object(v.jsx)(i.a,{store:P,children:Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(G,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2452ce5d.chunk.js.map