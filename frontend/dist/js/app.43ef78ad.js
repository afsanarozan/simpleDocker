(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],u=0,m=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08e9":function(t,e,a){"use strict";var r=a("6fd9"),i=a.n(r);i.a},"0aa1":function(t,e,a){"use strict";var r=a("3b97"),i=a.n(r);i.a},"1a41":function(t,e,a){},"3b97":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],s={name:"App"},o=s,c=a("2877"),l=Object(c["a"])(o,i,n,!1,null,null,null),d=l.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("b-navbar",{attrs:{toggleable:"lg col-md-8 food",type:"light",variant:"white"}},[r("b-icon",{staticClass:"h3 mt-2",staticStyle:{color:"black"},attrs:{icon:"menu-button-wide"}}),r("div",{staticClass:"col-8 text-center"},[r("navbar-brand",{staticClass:"text-center",staticStyle:{"font-family":"Airbnb Cereal App"},attrs:{href:"#"}},[t._v("Food Items")])],1),r("b-navbar-nav",[r("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("form",{on:{click:t.searchProduct}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),r("b-nav-item-dropdown",{attrs:{text:"",right:""}},[r("b-dropdown-item",{on:{click:function(e){return t.filterProduct("id")}}},[t._v("id")]),r("b-dropdown-item",{on:{click:function(e){return t.filterProduct("name")}}},[t._v("Berdasarkan Nama")]),r("b-dropdown-item",{on:{click:function(e){return t.filterProduct("latest")}}},[t._v("Terbaru")]),r("b-dropdown-item",{on:{click:function(e){return t.filterProduct("price")}}},[t._v("price")])],1)],1)],1)],1),r("b-navbar",{attrs:{toggleable:"lg col-md-4 cart justify-content-center head-cart",variant:"faded",type:"light"}},[r("b-navbar-brand",{staticClass:"text-cart"},[t._v("Cart"),r("span",{staticClass:"lingkaran"},[t._v(t._s(t.cart.length))])])],1)],1)]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-1 bg-white",staticStyle:{background:"#FFFFFF","box-shadow":"0px 4px 10px rgba(0, 0, 0, 0.25)",position:"relative"}},[r("div",{staticStyle:{"font-size":"4em"}},[r("router-link",{attrs:{to:"/history"}},[r("b-icon",{staticClass:"h1 ml-4",staticStyle:{color:"black"},attrs:{icon:"clipboard-check"}})],1),r("b-icon",{staticClass:"h1 ml-4 ikon",staticStyle:{color:"black"},attrs:{icon:"cart-plus"}}),r("b-icon",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-add",modifiers:{"modal-add":!0}}],staticClass:"h1 ml-4 ikon",staticStyle:{color:"green",outline:"none",cursor:"pointer"},attrs:{icon:"plus"}})],1),r("modalAdd",{attrs:{getProduct:t.getProduct}})],1),r("div",{staticClass:"place col-md-7 d-flex"},t._l(t.data,(function(e){return r("div",{key:e.id,staticClass:"cont"},[r("div",{on:{click:function(a){return t.addCart(e)}}},[r("Items",{attrs:{names:e.name,price:e.price,images:t.showImage(e.images)}})],1),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-edit",modifiers:{"modal-edit":!0}}],attrs:{variant:"success"},on:{click:function(a){t.itemId=e.id}}},[t._v("Edit")]),r("b-button",{attrs:{variant:"info ml-2"},on:{click:function(a){return t.deleteProduct(e.id)}}},[t._v("Delete")])],1)})),0),r("div",{staticClass:"col-md-4",staticStyle:{background:"#FFFFFF",border:"1px solid #CECECE","font-family":"Airbnb Cereal App"}},[r("b-navbar",{attrs:{toggleable:"lg col-md-4 justify-content-center head-cart2",variant:"faded",type:"light"}},[r("b-navbar-brand",{staticClass:"text-cart2",staticStyle:{color:"white"}},[t._v("Cart"),r("span",{staticClass:"lingkaran2"},[t._v(t._s(t.cart.length))])])],1),0===t.cart.length?r("div",[r("img",{staticClass:"empty-img",attrs:{src:a("727e"),alt:"food-and-restaurant"}}),r("p",{staticClass:"text-center"},[t._v("Your cart is empty")]),r("p",{staticClass:"text-center"},[t._v("Please add some items from the menu")])]):t._e(),t._l(t.cart,(function(e){return r("div",{key:e.id},[r("b-img",{staticStyle:{width:"7em","margin-left":"10px"},attrs:{left:"",src:t.showImage(e.images),alt:"Left image"}}),r("h5",{staticClass:"name",staticStyle:{"margin-left":"130px","margin-top":"20px"}},[t._v(t._s(e.name))]),r("h6",{staticStyle:{"margin-left":"130px"}},[t._v(t._s(e.price))]),r("div",{staticClass:"mt-4",staticStyle:{"margin-top":"0px"}},[r("b-button-group",{staticStyle:{"margin-top":"-30px","margin-left":"8px"},attrs:{size:"sm"}},[r("b-button",{staticClass:"btn minus",on:{click:function(a){return t.minus(e)}}},[t._v("-")]),r("div",{staticClass:"box-count"},[t._v("1")]),r("b-button",{staticClass:"btn plus",on:{click:function(a){return t.plus(e)}}},[t._v("+")])],1)],1)],1)})),t.cart.length>0?r("div",[r("h5",[t._v("Total")]),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-checkout",modifiers:{"modal-checkout":!0}}],staticStyle:{"margin-top":"20px"},attrs:{block:"",variant:"info"}},[t._v("CheckOut")]),r("b-button",{attrs:{block:"",variant:"danger"},on:{click:t.clear}},[t._v("Cancel")])],1):t._e()],2)]),r("modalEdit",{attrs:{id:t.itemId,getProduct:t.getProduct}}),r("b-modal",{attrs:{id:"modal-checkout","hide-footer":"","hide-header":""},on:{show:function(e){return t.onCheckout()},hidden:function(e){return t.offCheckout()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h4",[t._v("Checkout")]),r("p",[t._v("Cashier : Afsana Rozan Naufal")])]),r("div",{staticClass:"col-6"},[r("p",{staticStyle:{"text-align":"right"}},[t._v("Receipt no: 01123434 ")])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h6",[t._v("Espresso")])]),r("div",{staticClass:"col-6 right"},[r("h6",[t._v(" Rp : 10.000")])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("h6",[t._v("Ppn 10%")])]),r("div",{staticClass:"col-6 right"},[r("h6")])]),r("br"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 right"},[r("h6")])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h6",[t._v("Payment: Cash")])])]),r("br"),r("b-button",{attrs:{block:"",variant:"primary"}},[t._v(" Print ")]),r("h6",{staticStyle:{"text-align":"center","margin-top":"10px"}},[t._v("Or")]),r("b-button",{attrs:{block:"",variant:"danger"}},[t._v("Send Mail")])],1)],1)},p=[],f=(a("99af"),a("ac1f"),a("841c"),a("96cf"),a("1da1")),h=a("bc3a"),v=a.n(h),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"modal",attrs:{id:"modal-edit",title:"Edit Item","ok-title":"Update"},on:{show:t.showProduct,ok:t.editProduct}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.editProduct(e)}}},[a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.id,label:"id","label-for":"id","label-cols":"3","invalid-feedback":"Name is required"}},[a("b-form-input",{attrs:{id:"id",state:t.id,required:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}})],1),a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.nameState,label:"Name","label-for":"name-input","label-cols":"3","invalid-feedback":"Name is required"}},[a("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.imageState,label:"Image","label-for":"image-input","label-cols":"3","invalid-feedback":"Image is required"}},[t.image?t._e():a("b-form-file",{attrs:{id:"image-input",state:t.imageState,placeholder:"Choose a image or drop it here...","drop-placeholder":"Drop file here...",required:""},on:{change:t.onFileChange}}),t.image?a("img",{attrs:{src:t.image}}):t._e(),t.image?a("button",{staticClass:"btn btn-danger",on:{click:t.removeImage}},[t._v(" Remove image ")]):t._e()],1),a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.priceState,label:"Price","label-for":"price-input","label-cols":"3","invalid-feedback":"Price is required"}},[a("b-form-input",{attrs:{id:"price-input",state:t.priceState,required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1)])],1)},b=[],C=(a("b0c0"),{name:"Modal-Edit",data:function(){return{nameState:null,imageState:null,priceState:null,name:null,image:null,price:null,attachment:null,submittedNames:[],options:null,config:{headers:{"Content-Type":"multipart/form-data",access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlX3Rva2VuIjoiYWNjZXNzIiwidXVpZCI6ImQ4OTg1YzY2LTA2MGItNDdiZC1iNzJkLWRmMWE0YmU0NDcwOCIsImlhdCI6MTYwMDEzMTM0MiwiZXhwIjoxNjAwMTM0OTQyfQ.aCTcYb3cOEcNNaCKqkN584gf1qCXu6_qJDdzNSUtwPY"}}}},props:{id:{required:!0},getProduct:{type:Function,required:!1}},mounted:function(){},methods:{editProduct:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.checkFormValidity()){t.next=3;break}return t.abrupt("return");case 3:return e=new FormData,e.append("id",this.id),e.append("name",this.name),e.append("image",this.attachment),e.append("price",this.price),t.next=10,v.a.put("".concat("http://localhost:2000","/api/product"),e,this.config);case 10:a=t.sent,this.product=a.data.data,alert("Data Diedit"),this.getProduct(),this.$nextTick((function(){r.$bvModal.hide("modal-prevent-closing")})),t.next=20;break;case 17:t.prev=17,t.t0=t["catch"](0),console.error(t.t0);case 20:case"end":return t.stop()}}),t,this,[[0,17]])})));function e(){return t.apply(this,arguments)}return e}(),checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,this.imageState=t,this.priceState=t,t},showImage:function(t){return"".concat("http://localhost:2000","/public/upload/").concat(t)},showProduct:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("".concat("http://localhost:2000","/api/product/").concat(this.id),this.config);case 3:e=t.sent,this.name=e.data.data.name,this.image=this.showImage(e.data.data.image),this.price=e.data.data.price,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.attachment=e[0],this.createImage(e[0]))},createImage:function(t){var e=this,a=new FileReader;a.onload=function(t){e.image=t.target.result},a.readAsDataURL(t)},removeImage:function(){this.image=""}}}),_=C,y=(a("fb81"),Object(c["a"])(_,g,b,!1,null,"116d7f7c",null)),w=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{ref:"modal",attrs:{id:"modal-add",title:"Add Item","ok-title":"Add","hide-footer":""},on:{ok:t.addProduct}},[a("form",{ref:"form",on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.addProduct(e)}}},[a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.nameState,label:"Name","label-for":"name-input","label-cols":"3","invalid-feedback":"Name is required"}},[a("b-form-input",{attrs:{id:"name-input",state:t.nameState,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.imageState,label:"Image","label-for":"image-input","label-cols":"3","invalid-feedback":"Image is required"}},[t.image?t._e():a("b-form-file",{attrs:{id:"image-input",state:t.imageState,placeholder:"Choose a image or drop it here...","drop-placeholder":"Drop file here...",required:""},on:{change:t.onFileChange}}),t.image?a("img",{attrs:{src:t.image}}):t._e(),t.image?a("button",{staticClass:"btn btn-danger",on:{click:t.removeImage}},[t._v(" Remove image ")]):t._e()],1),a("b-form-group",{staticStyle:{"font-weight":"bold"},attrs:{state:t.priceState,label:"Price","label-for":"price-input","label-cols":"3","invalid-feedback":"Price is required"}},[a("b-form-input",{attrs:{id:"price-input",state:t.priceState,min:"0",required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),a("button",{staticClass:"btn btn-primary"},[t._v("add")])],1)])],1)},x=[],S={name:"Modal-Add",props:{getProduct:{type:Function,required:!1}},data:function(){return{nameState:null,imageState:null,priceState:null,name:null,image:null,price:null,attachment:null,submittedNames:[],options:null,config:{headers:{"Content-Type":"multipart/form-data",access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlX3Rva2VuIjoiYWNjZXNzIiwidXVpZCI6ImQ4OTg1YzY2LTA2MGItNDdiZC1iNzJkLWRmMWE0YmU0NDcwOCIsImlhdCI6MTYwMDEzMTM0MiwiZXhwIjoxNjAwMTM0OTQyfQ.aCTcYb3cOEcNNaCKqkN584gf1qCXu6_qJDdzNSUtwPY"}}}},mounted:function(){},methods:{addProduct:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.checkFormValidity()){t.next=3;break}return t.abrupt("return");case 3:return e=new FormData,e.append("name",this.name),e.append("image",this.attachment),e.append("price",this.price),t.next=9,v.a.post("".concat("http://localhost:2000","/api/product"),e,this.config);case 9:a=t.sent,this.data=a.data.data,alert("Data Ditambahkan"),this.getProduct(),this.$nextTick((function(){r.$bvModal.hide("modal-prevent-closing")})),t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),console.error(t.t0);case 19:case"end":return t.stop()}}),t,this,[[0,16]])})));function e(){return t.apply(this,arguments)}return e}(),checkFormValidity:function(){var t=this.$refs.form.checkValidity();return this.nameState=t,this.imageState=t,this.priceState=t,t},resetModal:function(){this.name="",this.image=null,this.price="",this.nameState=null,this.imageState=null,this.priceState=null},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.attachment=e[0],this.createImage(e[0]))},createImage:function(t){var e=this,a=new FileReader;a.onload=function(t){e.image=t.target.result},a.readAsDataURL(t)},removeImage:function(){this.image=""}}},I=S,P=(a("8c25"),Object(c["a"])(I,k,x,!1,null,"3ccbf1c7",null)),N=P.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mt-5",staticStyle:{width:"15rem",cursor:"pointer",border:"none"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.images,alt:t.names}}),a("h2",{staticClass:"name"},[t._v(t._s(t.names))]),a("h3",{staticClass:"price"},[t._v(t._s(t.price)+" ")])])])},j=[],E=(a("a9e3"),{name:"Items",props:{id:{type:Number,required:!1},names:{type:String,required:!0},price:{type:String,required:!0},images:{type:String,required:!0}}}),F=E,R=(a("95ba"),Object(c["a"])(F,O,j,!1,null,"178af70b",null)),T=R.exports,M={name:"home",components:{Items:T,modalAdd:N,modalEdit:w},data:function(){return{btnPlus:!0,data:[],search:"",cart:[],max:""}},mounted:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getProduct();case 1:case"end":return e.stop()}}),e)})))()},methods:{addCart:function(t){this.cart.push(t)},getProduct:function(){var t=this;v.a.get("".concat("http://localhost:2000","/api/product"),{headers:{token:localStorage.getItem("token")}}).then((function(e){console.log(e),t.data=e.data})).catch((function(e){console.log(e),t.data=[]}))},filterProduct:function(t){var e,a=this;"id"==t?e="/api/product/id/filter?order=id":"price"==t?e="/api/product/id/filter?order=price":"name"==t?e="/api/product/id/filter?order=name":"latest"==t&&(e="/api/product/id/filter?order=latest"),v.a.get("http://localhost:2000"+e,{headers:{token:localStorage.getItem("token")}}).then((function(t){console.log("from filter"),console.log(t),a.data=t.data})).catch((function(t){console.log(t),a.data=[]}))},deleteProduct:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("".concat("http://localhost:2000","/api/product/").concat(e),this.config);case 3:alert("Data Dihapus"),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.error(t.t0);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}(),searchProduct:function(){var t=this;v.a.get("".concat("http://localhost:2000","/api/product/id/search?name=").concat(this.search,"&sensitive=true"),{headers:{token:localStorage.getItem("token")}}).then((function(e){console.log("from search "),t.data=e.data})).catch((function(e){console.log(e),t.data=[]}))},showImage:function(t){return"".concat("http://localhost:2000","/").concat(t)},clear:function(){this.cart=[]}},computed:{amount:function(){return function(t){return t.amount}}}},q=M,D=(a("08e9"),Object(c["a"])(q,m,p,!1,null,null,null)),$=D.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"container col-md-10"},[t._m(2),t._m(3),a("table",{staticClass:"table mt-3"},[t._m(4),t._l(t.data,(function(e){return a("tbody",{key:e.invoice},[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.invoice))]),a("td",[t._v(t._s(e.cashier))]),a("td",[t._v(t._s(e.date))]),a("td",[t._v(t._s(e.amount))])])])}))],2)])])])},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar  navbar-light food"},[a("div",{staticClass:"container-fluid"},[a("span",{staticStyle:{"font-size":"2em",position:"absolute",left:"20px",cursor:"pointer"}},[a("i",{staticClass:"fas fa-bars"})]),a("a",{attrs:{href:""}}),a("a",{staticClass:"navbar-brand font-weight-bold font-food text-center",attrs:{href:"#"}},[t._v("History")]),a("a",{attrs:{href:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-1 bg-white",staticStyle:{background:"#FFFFFF","box-shadow":"0px 4px 10px rgba(0, 0, 0, 0.25)"}},[a("img",{staticClass:"leftbar",staticStyle:{position:"absolute",left:"30%",top:"32px",cursor:"pointer"},attrs:{src:"img/clipboard.png",alt:"",srcset:""}}),a("img",{staticClass:"mt-2 leftbar",staticStyle:{position:"absolute",left:"30%",top:"131px",cursor:"pointer"},attrs:{src:"img/fork.png",alt:""}}),a("span",{staticStyle:{"font-size":"2em",color:"green",position:"absolute",left:"40%",top:"232px",cursor:"pointer"}},[a("a",{attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[a("i",{staticClass:"fa fa-plus leftbar"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4 mt-3"},[a("div",{staticClass:"bg-danger"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Today Income")]),a("h4",[t._v("Rp : 1.000.000")]),a("p",{staticClass:"card-text"},[t._v("+2% Yesterday")])])])]),a("div",{staticClass:"col-sm-4 mt-3"},[a("div",{staticClass:"bg-primary"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("Orders")]),a("h4",[t._v("3.270")]),a("p",{staticClass:"card-text"},[t._v("+last week")])])])]),a("div",{staticClass:"col-sm-4 mt-3"},[a("div",{staticClass:"bg-success"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v("This Year Income")]),a("h4",[t._v("Rp : 100.000.000.000")]),a("p",{staticClass:"card-text"},[t._v("+10% Last Year")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 mt-3"},[a("div",{staticStyle:{"background-color":"white"}},[a("div",{staticClass:"card-body"},[a("h3",[t._v("Revenue")]),a("canvas",{attrs:{id:"myChart"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("INVOICE")]),a("th",{attrs:{scope:"col"}},[t._v("CASHIER")]),a("th",{attrs:{scope:"col"}},[t._v("DATE")]),a("th",{attrs:{scope:"col"}},[t._v("AMOUNT")])])])}],z=(a("f9e3"),a("2dd8"),{name:"history",data:function(){return{data:[]}},mounted:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("http://localhost:2000/history");case 2:a=e.sent,t.data=a.data;case 4:case"end":return e.stop()}}),e)})))()}}),J=z,X=Object(c["a"])(J,A,Y,!1,null,"07c74c39",null),U=X.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("marquee",[t._v("Selamat Datang Di Tongkrongin Aja")]),a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex justify-content-center h-100"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h3",[t._v("Sign In")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[a("div",{staticClass:"input-group form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"username"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"input-group form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(0),t._m(1)])]),t._m(2),t._m(3)])])])],1)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row align-items-center remember"},[a("input",{attrs:{type:"checkbox"}}),t._v("Remember Me ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn float-right login_btn",attrs:{type:"submit",value:"Login"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center links"},[t._v(" Don't have an account?"),a("a",{attrs:{href:"#"}},[t._v("Sign Up")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center"},[a("a",{attrs:{href:"#"}},[t._v("Forgot your password?")])])}],Z={name:"login",data:function(){return{name:"",password:"",wrongCred:!1}},methods:{loginUser:function(){var t=this;v.a.post("".concat("http://localhost:2000","/auth"),{name:this.name,password:this.password}).then((function(e){console.log(e.data.result[0].msg),"Token created, login success"==e.data.result[0].msg?(localStorage.setItem("token",e.data.result[0].token),localStorage.setItem("token",e.data.result[0].refreshToken),alert("Login Berhasil"),t.$router.push({name:"home"})):alert(e.data.message)}))}}},Q=Z,W=(a("0aa1"),Object(c["a"])(Q,V,L,!1,null,null,null)),B=W.exports;r["default"].use(u["a"]);var G=[{path:"/home",name:"home",component:$},{path:"/",name:"login",component:B},{path:"/history",name:"history",component:U}],H=new u["a"]({mode:"history",routes:G}),K=H,tt=a("5f5b"),et=a("b1e0");r["default"].config.productionTip=!1,r["default"].use(tt["a"]),r["default"].use(et["a"]),new r["default"]({router:K,render:function(t){return t(d)}}).$mount("#app")},"5d9a":function(t,e,a){},"6fd9":function(t,e,a){},"70ef":function(t,e,a){},"727e":function(t,e,a){t.exports=a.p+"img/food-and-restaurant.b80446fe.png"},"8c25":function(t,e,a){"use strict";var r=a("70ef"),i=a.n(r);i.a},"95ba":function(t,e,a){"use strict";var r=a("1a41"),i=a.n(r);i.a},fb81:function(t,e,a){"use strict";var r=a("5d9a"),i=a.n(r);i.a}});
//# sourceMappingURL=app.43ef78ad.js.map