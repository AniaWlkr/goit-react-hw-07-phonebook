(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={container:"App_container__16xz_",headTitle:"App_headTitle__1eNzW",title:"App_title__1YcTA"}},18:function(t,e,n){t.exports={label:"ContactFilter_label__2Us6J",icon:"ContactFilter_icon__-aHW7",input:"ContactFilter_input__1RqJv"}},30:function(t,e,n){t.exports={ldsSpinner:"Loader_ldsSpinner__2uzs8"}},40:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),i=n(6),s=(n(39),n(40),n(12)),u=n(13),l=n(16),b=n(14),j=n(17),d=n.n(j),f=n(9),O=n.n(f),h=n(2),m=Object(h.b)("contacts/fetchContactsRequest"),p=Object(h.b)("contacts/fetchContactsSuccess"),_=Object(h.b)("contacts/fetchContactsError"),x=Object(h.b)("contacts/addContactRequest"),C=Object(h.b)("contacts/addContactSuccess"),v=Object(h.b)("contacts/addContactError"),g=Object(h.b)("contacts/deleteContactRequest"),N=Object(h.b)("contacts/deleteContactSuccess"),y=Object(h.b)("contacts/deleteContactError"),L=Object(h.b)("contacts/changeFilter");O.a.defaults.baseURL="http://localhost:3004";var F,S,k=function(t){return function(e){return e(x()),O.a.post("/contacts",t).then((function(t){var n=t.data;return e(C(n))})).catch((function(t){return e(v(t))}))}},A=function(t){return function(e){return e(g()),O.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(y(t))}))}},T=function(){return function(t){return t(m()),O.a.get("/contacts").then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(_(e))}))}},w=n(11),q=function(t){return t.contacts.filter},z={getLoading:function(t){return t.contacts.loading},getFilteredContacts:Object(w.a)([function(t){return t.contacts.items},q],(function(t,e){return e?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):t})),getFilter:q},R=n(3),D=n(7),J=n.n(D),Z=n(1),E=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(R.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number};t.props.addContact(n),t.setState({name:""}),t.setState({number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(Z.jsx)("div",{children:Object(Z.jsxs)("form",{onSubmit:this.handleSubmit,className:J.a.form,children:[Object(Z.jsxs)("label",{className:J.a.label,children:["Name",Object(Z.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,className:J.a.input})]}),Object(Z.jsxs)("label",{className:J.a.label,children:["Phone number",Object(Z.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,className:J.a.input})]}),Object(Z.jsxs)("button",{type:"submit",className:J.a.button,children:["Add contact"," ",Object(Z.jsx)("span",{role:"img","aria-label":"green check",className:J.a.icon,children:"\u2705"})]})]})})}}]),n}(c.Component),M=Object(i.b)(null,(function(t){return{addContact:function(e){return t(k(e))}}}))(E),B=n(8),K=n.n(B),P=n(18),U=n.n(P),Y=Object(i.b)((function(t){return{value:z.getFilter(t)}}),(function(t){return{handleChange:function(e){return t(L(e.target.value))}}}))((function(t){var e=t.value,n=t.handleChange;return Object(Z.jsx)("div",{children:Object(Z.jsxs)("label",{className:U.a.label,children:[Object(Z.jsx)("span",{role:"img","aria-label":"loupe icon",className:U.a.icon,children:"\ud83d\udd0e"}),"Find contacts by name",Object(Z.jsx)("input",{className:U.a.input,type:"text",name:"filter",value:e,onChange:n})]})})})),G=n(30),I=n.n(G),W=function(){return Object(Z.jsxs)("div",{className:I.a.ldsSpinner,children:[Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{})]})},H=Object(i.b)((function(t){return{contacts:z.getFilteredContacts(t),isLoadingContacts:z.getLoading(t)}}),(function(t){return{handleDelete:function(e){return t(A(e))}}}))((function(t){var e=t.contacts,n=t.handleDelete,c=t.isLoadingContacts;return Object(Z.jsxs)("div",{className:K.a.section,children:[Object(Z.jsx)(Y,{}),c&&Object(Z.jsx)(W,{}),e.length?Object(Z.jsx)("ul",{className:K.a.list,children:e.map((function(t){return Object(Z.jsxs)("li",{className:K.a.item,children:[t.name,": ",t.number,Object(Z.jsxs)("button",{type:"button",onClick:function(){return n(t.id)},className:K.a.button,children:["Delete"," ",Object(Z.jsx)("span",{role:"img","aria-label":"delete icon",children:"\u274c"})]})]},t.id)}))}):Object(Z.jsxs)("p",{className:K.a.notification,children:[Object(Z.jsx)("span",{role:"img","aria-label":"sad face icon",children:"\ud83d\ude14"})," ","No name in Phonebook"]})]})})),$=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(Z.jsxs)("div",{className:d.a.container,children:[Object(Z.jsx)("h1",{className:d.a.headTitle,children:"Phonebook"}),Object(Z.jsx)(M,{}),Object(Z.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(Z.jsx)(H,{})]})}}]),n}(c.Component),Q=Object(i.b)(null,(function(t){return{fetchContacts:function(){return t(T())}}}))($),V=n(15),X=n(5),tt=m,et=p,nt=_,ct=x,at=C,rt=v,ot=g,it=N,st=y,ut=L,lt=Object(h.c)([],(F={},Object(R.a)(F,et,(function(t,e){return e.payload})),Object(R.a)(F,at,(function(t,e){var n=e.payload;return t.find((function(t){return t.number===n.number}))?t:[].concat(Object(V.a)(t),[n])})),Object(R.a)(F,it,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),F)),bt=Object(h.c)("",Object(R.a)({},ut,(function(t,e){return e.payload}))),jt=Object(h.c)(!1,(S={},Object(R.a)(S,tt,(function(){return!0})),Object(R.a)(S,et,(function(){return!1})),Object(R.a)(S,nt,(function(){return!1})),Object(R.a)(S,ct,(function(){return!0})),Object(R.a)(S,at,(function(){return!1})),Object(R.a)(S,rt,(function(){return!1})),Object(R.a)(S,ot,(function(){return!0})),Object(R.a)(S,it,(function(){return!1})),Object(R.a)(S,st,(function(){return!1})),S)),dt=Object(X.b)({items:lt,filter:bt,loading:jt}),ft=Object(V.a)(Object(h.d)({})),Ot=Object(h.a)({reducer:{contacts:dt},middleware:ft,devTools:!1});o.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(i.a,{store:Ot,children:Object(Z.jsx)(Q,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",icon:"ContactForm_icon__1TiGo",button:"ContactForm_button__1MLZK"}},8:function(t,e,n){t.exports={section:"ContactList_section__3fuU2",button:"ContactList_button__1RuFy",input:"ContactList_input__3YLqK",list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",notification:"ContactList_notification__3Is9a"}}},[[60,1,2]]]);
//# sourceMappingURL=main.efdbaa6f.chunk.js.map