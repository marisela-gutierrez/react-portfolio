(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,i){},12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/resume.98460bee.docx"},15:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),c=i(6),a=i.n(c),s=(i(11),i(2)),l=(i(12),i(0));var o=function(e){var t=e.sections,i=void 0===t?[]:t,n=e.setCurrentSection,r=e.currentSection;return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"flex-row",children:i.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)("span",{className:"mx-1 ".concat(r.name===e.name&&"navActive"),onClick:function(){n(e)},children:e.name})},e.name)}))})})};var u=function(e){var t=e.sections,i=void 0===t?[]:t,n=e.setCurrentSection,r=e.currentSection;return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Marisela Gutierrez"}),Object(l.jsx)(o,{sections:i,setCurrentSection:n,currentSection:r})]})},j=i.p+"static/media/My-picture.380cf821.jpg";var b=function(){return Object(l.jsxs)("section",{className:"about-me",id:"about",children:[Object(l.jsx)("img",{src:j,width:"400",height:"400"}),Object(l.jsxs)("p",{children:["Since finishing my undergraduate Marketing degree December 2019, I have excelled in my current sales role within the logistics industry, This experience has helped me better understand my strengths and goals, positioning me to redirect my career path to Web Development, where I believe my business education, previous experience, and demonstrated abilities will result in a successful career serving others and helping them achieve their goals.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Relatively new to Web Development and ready to take the next step in my career, leveraging my personal resilience and adaptability, ability to multi-task in a fast-paced environment, and commitment to continual learning and constant improvement. I enjoy problem-solving,learning programming languages, and being creative."]})]})};var d=function(e){var t=e.application,i=t.title,n=t.link,r=t.gitHub,c=t.type;return Object(l.jsxs)("section",{className:"applications",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:[i,":"]}),Object(l.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{type:"button",children:"View Project"})}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{type:"button",children:"GitHub"})})]}),Object(l.jsx)("a",{href:n,className:"application ".concat(c),target:"_blank",rel:"noreferrer"})]},i)},h=function(){var e=Object(n.useState)([{title:"Run Buddy",link:"https://marisela-gutierrez.github.io/run-buddy/",gitHub:"https://github.com/marisela-gutierrez/run-buddy",type:"run-buddy"},{title:"Horiseon",link:"https://marisela-gutierrez.github.io/Horiseon/",gitHub:"https://github.com/marisela-gutierrez/Horiseon",type:"horiseon"},{title:"Movie Fusion",link:"https://marisela-gutierrez.github.io/Movie-Fusion/",gitHub:"https://github.com/marisela-gutierrez/Movie-Fusion",type:"movie-fusion"},{title:"Petcation Station",link:"https://petcation-station.herokuapp.com/",gitHub:"https://github.com/marisela-gutierrez/petcation-station",type:"petcation"},{title:"Budget Tracker",link:"https://mg-budget-tracker.herokuapp.com/",gitHub:"https://github.com/marisela-gutierrez/budget-tracker",type:"budget-tracker"},{title:"Note Taker",link:"https://notetaker-mg.herokuapp.com/",gitHub:"https://github.com/marisela-gutierrez/note-taker",type:"note-taker"}]),t=Object(s.a)(e,1)[0];return Object(l.jsxs)("section",{id:"applications",children:[Object(l.jsx)("h2",{children:" Projects:"}),t.map((function(e){return Object(l.jsx)(d,{application:e},e.title)}))]})},m=i(3),g=i(5);var p=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),i=t[0],r=t[1],c=Object(n.useState)(""),a=Object(s.a)(c,2),o=a[0],u=a[1],j=i.name,b=i.email,d=i.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));o||(r(Object(g.a)(Object(g.a)({},i),{},Object(m.a)({},e.target.name,e.target.value))),console.log("Handle Form",i))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||console.log("Submit Form",i)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:j,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:d,onBlur:h})]}),o&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:o})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var O=function(){return Object(l.jsxs)("div",{className:"resume",children:[Object(l.jsx)("h1",{children:"Resume:"}),Object(l.jsxs)("p",{children:["Downdload my resume"," ",Object(l.jsx)("span",{children:Object(l.jsx)("a",{href:i(14).default,download:!0,children:"here."})})]}),Object(l.jsx)("h2",{children:"Proficiencies:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"*HTML"}),Object(l.jsx)("li",{children:"*CSS"}),Object(l.jsx)("li",{children:"*JavaScript"}),Object(l.jsx)("li",{children:"*JQuery"}),Object(l.jsx)("li",{children:"*Express"}),Object(l.jsx)("li",{children:"*Node"}),Object(l.jsx)("li",{children:"*MySQL"}),Object(l.jsx)("li",{children:"*React"}),Object(l.jsx)("li",{children:"*MangoDB, Mongoose"})]})]})};var x=function(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/marisela-gutierrez",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://linkedin.com/in/mariselagutierrez",target:"_blank",rel:"noreferrer",children:"LinkedIn"})})]})})};var f=function(){var e=Object(n.useState)([{name:"About Me"},{name:"Portfolio"},{name:"Contact Me"},{name:"Resume"}]),t=Object(s.a)(e,1)[0],i=Object(n.useState)(t[0]),r=Object(s.a)(i,2),c=r[0],a=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{sections:t,currentSection:c,setCurrentSection:a}),Object(l.jsxs)("main",{children:["About Me"===c.name&&Object(l.jsx)(b,{}),"Portfolio"===c.name&&Object(l.jsx)(h,{}),"Contact Me"===c.name&&Object(l.jsx)(p,{}),"Resume"===c.name&&Object(l.jsx)(O,{}),Object(l.jsx)(x,{})]})]})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,16)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),r(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.cea3a86f.chunk.js.map