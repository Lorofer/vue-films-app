(function(){"use strict";var A={3021:function(A,t,e){var n=e(5130),i=e(6768);const r=A=>((0,i.Qi)("data-v-5773e174"),A=A(),(0,i.jt)(),A),a={class:"header"},s=r((()=>(0,i.Lk)("input",null,null,-1))),o=r((()=>(0,i.Lk)("span",{class:"avatar"},null,-1))),l=[s,o];function c(A,t){return(0,i.uX)(),(0,i.CE)("section",a,l)}var u=e(1241);const m={},h=(0,u.A)(m,[["render",c],["__scopeId","data-v-5773e174"]]);var d=h,p={__name:"App",setup(A){return(A,t)=>{const e=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(d),(0,i.bF)(e,null,{default:(0,i.k6)((({Component:A})=>[((0,i.uX)(),(0,i.Wv)((0,i.$y)(A)))])),_:1})],64)}}};const k=p;var v=k,M=e(1387);const f={class:"collections"};function g(A,t,e,n,r,a){const s=(0,i.g2)("CollectionCard"),o=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("nav",f,[(0,i.bF)(o,{to:"all-movies"},{default:(0,i.k6)((()=>[(0,i.bF)(s,{nameOfCollection:"Все фильмы",description:"Найти подходящий фильм с помощью фильтров"})])),_:1}),(0,i.Lk)("div",{onClick:t[0]||(t[0]=(...A)=>a.a&&a.a(...A))},[(0,i.bF)(s,{nameOfCollection:"Топ фильмов",description:"Лушие фильмы по разным рейтингам"})]),(0,i.Lk)("div",{onClick:t[1]||(t[1]=(...A)=>a.a&&a.a(...A))},[(0,i.bF)(s,{nameOfCollection:"Рандомный фильм",description:"Поможет определиться с выбором"})])])}var Y=e(4232),y=e.p+"img/all-films.7fdda286.png";const w=A=>((0,i.Qi)("data-v-03a02518"),A=A(),(0,i.jt)(),A),b={class:"card-container"},L=w((()=>(0,i.Lk)("img",{src:y,alt:""},null,-1)));function D(A,t,e,n,r,a){return(0,i.uX)(),(0,i.CE)("div",b,[L,(0,i.Lk)("h2",null,(0,Y.v_)(e.nameOfCollection),1),(0,i.Lk)("p",null,(0,Y.v_)(e.description),1)])}var G={props:{nameOfCollection:String,description:String}};const T=(0,u.A)(G,[["render",D],["__scopeId","data-v-03a02518"]]);var Z=T,x={components:{CollectionCard:Z},methods:{a(){alert("Этот раздел еще в разработке")}}};const P=(0,u.A)(x,[["render",g],["__scopeId","data-v-18d9345e"]]);var C=P;const B={class:"all-movies"};function W(A,t,e,n,r,a){const s=(0,i.g2)("Filters"),o=(0,i.g2)("AllMoviesSection");return(0,i.uX)(),(0,i.CE)("div",B,[(0,i.bF)(s,{id:"filters",currentPage:this.currentPage,onTheUrlHasBeenCreated:a.setTheURL},null,8,["currentPage","onTheUrlHasBeenCreated"]),((0,i.uX)(),(0,i.Wv)(i.PR,null,[(0,i.bF)(o,{id:"all-movies",url:this.url,onCurrentPage:a.setTheCurrentPage,onForth:a.setTheCurrentPage,onBack:a.setTheCurrentPage},null,8,["url","onCurrentPage","onForth","onBack"])],1024))])}const I=A=>((0,i.Qi)("data-v-7d933ef8"),A=A(),(0,i.jt)(),A),E={id:"filters"},F={action:""},R=I((()=>(0,i.Lk)("label",null,[(0,i.Lk)("p",null,"Рейтинг:")],-1))),N={class:"rating-inputs-container"};function Q(A,t,e,r,a,s){const o=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("section",E,[(0,i.Lk)("form",F,[(0,i.Lk)("div",null,[R,(0,i.Lk)("div",N,[(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=A=>a.minRating=A),placeholder:"От",name:"min-rating",type:"number",min:"1",max:"10",step:"0.1"},null,512),[[n.Jo,a.minRating]]),(0,i.bo)((0,i.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=A=>a.maxRating=A),placeholder:"До",name:"max-rating",type:"number",min:"1",max:"10",step:"0.1"},null,512),[[n.Jo,a.maxRating]])])]),(0,i.Lk)("div",null,[(0,i.Lk)("button",{class:"search",type:"button",onClick:t[2]||(t[2]=(...A)=>s.createURL&&s.createURL(...A))},"найти")])]),(0,i.bF)(o,{class:"back",to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)("вернуться на главную")])),_:1})])}e(4603),e(7566),e(8721);var j={props:{currentPage:Number},data(){return{minRating:void 0,maxRating:void 0}},mounted(){window.addEventListener("scroll",this.setFiltersHeight),this.setFiltersHeight()},watch:{currentPage(){this.createURL()}},methods:{getTop(){const A=document.querySelector(".header"),t=A.getBoundingClientRect().top,e=40;return t+A.offsetHeight>e?t+A.offsetHeight:e},setFiltersHeight(){const A=document.getElementById("filters"),t=40,e=document.documentElement.clientHeight;A.style.height=e-t-this.getTop()+"px",A.style.top=`${this.getTop()}px`},createURL(){const A=new URL("https://api.kinopoisk.dev/v1.4/movie"),t={page:this.currentPage,limit:50,notNullFields:["name","premiere.russia","poster.url"],sortField:"rating.kp",sortType:-1,type:["movie","cartoon"],"rating.kp":`${this.minRating||1}-${this.maxRating||10}`,"genres.name":["!документальный","!короткометражка","!музыка","!игра","!новости","!концерт","!реальное ТВ","!мюзикл"]};for(let e of Object.entries(t))if(Array.isArray(e[1]))for(let t of e[1])A.searchParams.append(e[0],t);else A.searchParams.set(e[0],e[1].toString());this.$emit("theUrlHasBeenCreated",A.toString())}},unmounted(){window.removeEventListener("scroll",this.setFiltersHeight)}};const z=(0,u.A)(j,[["render",Q],["__scopeId","data-v-7d933ef8"]]);var S=z;const J={class:"film-card"},O={class:"poster-container"},U={class:"poster-body"},V={class:"rating-container"},X={class:"rating"},q=["src"],K={class:"year"};function H(A,t,e,n,r,a){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.Wv)(s,{class:"film-link",to:"film/"+this.film.id},{default:(0,i.k6)((()=>[(0,i.Lk)("div",J,[(0,i.Lk)("div",O,[(0,i.Lk)("div",U,[(0,i.Lk)("div",V,[(0,i.Lk)("p",X,(0,Y.v_)(this.film.ageRating||0)+"+",1)]),(0,i.Lk)("img",{src:this.film.poster.previewUrl,alt:""},null,8,q)])]),(0,i.Lk)("h3",null,(0,Y.v_)(this.film.name),1),(0,i.Lk)("p",K,(0,Y.v_)(this.film.year),1)])])),_:1},8,["to"])}var _={props:{film:Object}};const $=(0,u.A)(_,[["render",H],["__scopeId","data-v-53003c84"]]);var AA=$;const tA={id:"all-movies"},eA={id:"all-movies-container"};function nA(A,t,e,n,r,a){const s=(0,i.g2)("FilmCard"),o=(0,i.g2)("Pagination");return(0,i.uX)(),(0,i.CE)("section",tA,[(0,i.Lk)("div",eA,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(this.films,(A=>((0,i.uX)(),(0,i.Wv)(s,{class:"film-card",key:A.id,film:A},null,8,["film"])))),128))]),(0,i.bF)(o,{currentPage:this.currentPage,onForth:t[0]||(t[0]=A=>this.$emit("forth",A)),onBack:t[1]||(t[1]=A=>this.$emit("back",A))},null,8,["currentPage"])])}var iA="data:image/png;base64,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";const rA=A=>((0,i.Qi)("data-v-bc8da954"),A=A(),(0,i.jt)(),A),aA={id:"pagination"},sA={class:"buttons-container"},oA=rA((()=>(0,i.Lk)("img",{src:iA,alt:""},null,-1))),lA=[oA],cA=rA((()=>(0,i.Lk)("img",{src:iA,alt:""},null,-1))),uA=[cA];function mA(A,t,e,n,r,a){return(0,i.uX)(),(0,i.CE)("nav",aA,[(0,i.Lk)("div",sA,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=A=>this.$emit("back",this.currentPage-1||1))},lA),(0,i.Lk)("button",{onClick:t[1]||(t[1]=A=>this.$emit("forth",this.currentPage+1))},uA)])])}var hA={props:{currentPage:Number}};const dA=(0,u.A)(hA,[["render",mA],["__scopeId","data-v-bc8da954"]]);var pA=dA,kA={components:{FilmCard:AA,Pagination:pA},data(){return{films:[],totalPage:0,currentPage:1,currentUrl:String}},props:{url:String},created(){this.$emit("currentPage",this.currentPage)},watch:{url(A){this.currentUrl=A},currentUrl(A){this.getFilms(this.currentPage)}},methods:{getFilms(A){this.currentPage!==A&&(window.location.href="#top",this.currentPage=A);const t={method:"GET",headers:{accept:"application/json","X-API-KEY":"SNX0QDE-0GFME71-NNKQD9V-SERWYTV"}};fetch(this.currentUrl,t).then((A=>A.json())).then((A=>{this.films=A.docs,this.$emit("filmsReceived",this.films)})).catch((A=>console.error(A)))}}};const vA=(0,u.A)(kA,[["render",nA],["__scopeId","data-v-28398a58"]]);var MA=vA,fA={components:{FilmCard:AA,Filters:S,AllMoviesSection:MA},data(){return{currentPage:Number,url:String}},methods:{setTheURL(A){this.url=A},setTheCurrentPage(A){this.currentPage=A}}};const gA=(0,u.A)(fA,[["render",W],["__scopeId","data-v-6167545c"]]);var YA=gA;function yA(A,t){return null}const wA={},bA=(0,u.A)(wA,[["render",yA]]);var LA=bA;const DA={class:"film-container"},GA=["src"],TA={class:"film-data-container"},ZA={class:"main-data"},xA={key:0},PA={key:1},CA={key:2,class:"rating"},BA={class:"description-container"},WA={key:0},IA={class:"additional-data"},EA={key:0};function FA(A,t,e,n,r,a){const s=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("section",DA,[(0,i.Lk)("img",{src:this.film.poster?.previewUrl,alt:"",class:"poster"},null,8,GA),(0,i.Lk)("div",TA,[(0,i.Lk)("div",ZA,[this.film.name?((0,i.uX)(),(0,i.CE)("h1",xA,(0,Y.v_)(this.film.name),1)):(0,i.Q3)("",!0),this.film.year?((0,i.uX)(),(0,i.CE)("p",PA,"("+(0,Y.v_)(this.film.year)+")",1)):(0,i.Q3)("",!0),this.film.rating?((0,i.uX)(),(0,i.CE)("p",CA,(0,Y.v_)(this.film.rating?.kp.toFixed(1)),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",BA,[this.film.description?((0,i.uX)(),(0,i.CE)("p",WA,(0,Y.v_)(this.film.description),1)):(0,i.Q3)("",!0)]),(0,i.Lk)("div",IA,[this.film.genres?((0,i.uX)(),(0,i.CE)("p",EA,[(0,i.eW)("Жанры: "),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(this.film.genres,(A=>((0,i.uX)(),(0,i.CE)("span",{key:A.name},(0,Y.v_)(A.name+" "),1)))),128))])):(0,i.Q3)("",!0)]),(0,i.bF)(s,{class:"back",to:"/all-movies"},{default:(0,i.k6)((()=>[(0,i.eW)("назад")])),_:1})])])}var RA={props:{id:String},data(){return{film:{}}},mounted(){this.getFilm(this.id)},methods:{getFilm(A){let t=`https://api.kinopoisk.dev/v1.4/movie/${A}`;const e={method:"GET",headers:{accept:"application/json","X-API-KEY":"SNX0QDE-0GFME71-NNKQD9V-SERWYTV"}};fetch(t,e).then((A=>A.json())).then((A=>{this.film=A})).catch((A=>console.error(A)))}}};const NA=(0,u.A)(RA,[["render",FA],["__scopeId","data-v-590029e2"]]);var QA=NA;const jA=[{path:"/",name:"MainPage",component:C},{path:"/all-movies",name:"AllMovies",component:YA},{path:"/top-movies",name:"TopMovies",component:LA},{path:"/film/:id",name:"Film",component:QA,props:!0}],zA=(0,M.aE)({history:(0,M.LA)("/vue-films-app/"),routes:jA});var SA=zA,JA=e(782),OA=(0,JA.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.Ef)(v).use(OA).use(SA).mount("#app")}},t={};function e(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return A[n].call(r.exports,r,r.exports,e),r.exports}e.m=A,function(){var A=[];e.O=function(t,n,i,r){if(!n){var a=1/0;for(c=0;c<A.length;c++){n=A[c][0],i=A[c][1],r=A[c][2];for(var s=!0,o=0;o<n.length;o++)(!1&r||a>=r)&&Object.keys(e.O).every((function(A){return e.O[A](n[o])}))?n.splice(o--,1):(s=!1,r<a&&(a=r));if(s){A.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=A.length;c>0&&A[c-1][2]>r;c--)A[c]=A[c-1];A[c]=[n,i,r]}}(),function(){e.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return e.d(t,{a:t}),t}}(),function(){e.d=function(A,t){for(var n in t)e.o(t,n)&&!e.o(A,n)&&Object.defineProperty(A,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)}}(),function(){e.p="/vue-films-app/"}(),function(){var A={524:0};e.O.j=function(t){return 0===A[t]};var t=function(t,n){var i,r,a=n[0],s=n[1],o=n[2],l=0;if(a.some((function(t){return 0!==A[t]}))){for(i in s)e.o(s,i)&&(e.m[i]=s[i]);if(o)var c=o(e)}for(t&&t(n);l<a.length;l++)r=a[l],e.o(A,r)&&A[r]&&A[r][0](),A[r]=0;return e.O(c)},n=self["webpackChunkvue_films_app"]=self["webpackChunkvue_films_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(3021)}));n=e.O(n)})();
//# sourceMappingURL=app.1c9f2c1a.js.map