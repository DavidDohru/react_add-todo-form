(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{21:function(e,t,a){e.exports=a(31)},27:function(e,t,a){},28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),o=a.n(r),s=a(1),c=a(11),l=a(16),m=a(17),u=a(20),d=a(18),h=(a(13),a(10)),p=a(19),g=a(9),b=function(e){var t=e.titleLength,a=e.isChoosen,n=e.checkedLengthWord;return i.a.createElement("div",{className:"card__container"},i.a.createElement(g.a.Text,{className:"warning1"},n&&"Enter the title!!! "),i.a.createElement(g.a.Text,{className:"warning2"},a&&"Choose the name!!! "),i.a.createElement(g.a.Text,{className:"warning3"},30===t&&"Max lenght is 30 !!!"))},y=(a(27),a(28),a(6)),f=(a.n(y).a.array.isRequired,function(e){var t=e.todos;return i.a.createElement("div",{className:"list"},t.map((function(e){return i.a.createElement(g.a,{border:"dark",bg:"info",className:"list__item",key:e.id},i.a.createElement("div",{key:e.id},e.title),i.a.createElement("span",null,"Status:",e.copmpleted?" done":" in process"),i.a.createElement("div",null,e.name))})))}),v=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],C=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={checkedLengthWord:!1,isChoosen:!1,newTodos:Object(c.a)(v).map((function(e){return Object(s.a)(Object(s.a)({},e),{},{name:C.find((function(t){return t.id===e.userId})).name})})),dataFromInput:{title:"",name:"Choose name",id:v.length+1}},e.selectChange=function(t){var a=t.target;"Choose name"!==a.value&&e.setState((function(e){return Object(s.a)(Object(s.a)({},e),{},{dataFromInput:Object(s.a)(Object(s.a)({},e.dataFromInput),{},{name:a.value})})}))},e.submitIt=function(){e.setState((function(e){return{isChoosen:"Choose name"===e.dataFromInput.name&&!0,checkedLengthWord:0===e.dataFromInput.title.length&&!0}}));var t=e.state.dataFromInput,a=t.name,n=t.title;"Choose name"!==a&&n.length&&e.setState((function(e){return{newTodos:[].concat(Object(c.a)(e.newTodos),[e.dataFromInput]),dataFromInput:{title:"",name:"Choose name",id:e.dataFromInput.id+1}}}))},e.inputChange=function(t){var a=t.target;e.setState((function(e){return{dataFromInput:Object(s.a)(Object(s.a)({},e.dataFromInput),{},{title:a.value})}}))},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Add todo form"),i.a.createElement("p",null,i.a.createElement("span",null,"Users: "),C.length),i.a.createElement(f,{todos:this.state.newTodos}),i.a.createElement(h.a,{className:"form",onSubmit:function(e){return e.preventDefault()}},i.a.createElement("div",null,i.a.createElement(h.a.Control,{maxlength:"30",type:"text",placeholder:"Title (Max length : 30 characters)",onChange:this.inputChange,value:this.state.dataFromInput.title})),i.a.createElement(h.a.Select,{onChange:this.selectChange,value:this.state.dataFromInput.name},i.a.createElement("option",null,"Choose name"),C.map((function(e){return i.a.createElement("option",{key:e.id},e.name)}))),i.a.createElement("div",null,i.a.createElement(p.a,{onClick:this.submitIt,type:"submit",variant:"info",size:"md",className:"button"},"Attempt")),i.a.createElement(b,{checkedLengthWord:this.state.checkedLengthWord,isChoosen:this.state.isChoosen,titleLength:this.state.dataFromInput.title.length})))}}]),a}(i.a.PureComponent);o.a.render(i.a.createElement(w,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.de59df5e.chunk.js.map