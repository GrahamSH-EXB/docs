(window.webpackJsonp=window.webpackJsonp||[]).push([[35,36,37],{243:function(t,e,n){"use strict";var o=n(6),r=n(90)(6),c="findIndex",l=!0;c in[]&&Array(1)[c]((function(){l=!1})),o(o.P+o.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n(89)(c)},244:function(t,e,n){"use strict";n.r(e),e.default={render:function(t){return t(!1)}}},245:function(t,e,n){"use strict";n.r(e),e.default={render:function(t){return t(!1)}}},246:function(t,e,n){"use strict";n.r(e);n(30),n(243);var o={props:{toc:{type:Array,default:function(){return[]}}},data:function(){return{activeLink:"",exactActiveLink:"",sections:[]}},computed:{settings:function(){return this.$docus.settings}},beforeMount:function(){history.scrollRestoration="manual"},mounted:function(){var t=this;document.querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]").forEach((function(section){t.sections.push({level:section.tagName.replace(/h/i,""),id:section.getAttribute("id"),top:section.offsetTop})}));var e=window.location.hash.replace("#",""),n=this.sections.findIndex((function(section){return section.id===e}));if(e&&n>=0){var o=document.querySelector(location.hash).offsetTop-110;this.$nextTick().then((function(){scrollTo(0,o),t.setActive(n)}))}else this.onScroll();window.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll,!0)},methods:{onScroll:function(){var t=window.pageYOffset,e=window.innerHeight;if(0===t)this.setActive(0);else{if(t+e>=document.body.scrollHeight)return this.setActive(this.sections.length-1);for(var n=t+e/2,o=0,i=0;i<this.sections.length;i++)this.sections[i].top<=n&&(o=i);this.setActive(o)}},setActive:function(t){if(this.sections[t]&&(this.exactActiveLink=this.sections[t].id,this.activeLink=this.sections[t].id,"3"===this.sections[t].level)){for(var e=-1,i=0;i<t;i++)"2"===this.sections[i].level&&(e=i);e>=0&&(this.activeLink=this.sections[e].id)}}}},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"flex-none hidden w-64 pl-8 mr-8 xl:text-sm xl:block "},[n("PageTocTop"),t._v(" "),n("div",{staticClass:"flex flex-col justify-between overflow-y-auto sticky max-h-(screen-18) -mt-10 pt-10 pb-4 top-18"},[n("h5",{staticClass:"flex items-center mb-1"},[n("span",{staticClass:"text-sm font-semibold text-gray-900 dark:text-gray-100 "},[t._v(t._s(t.$t("toc.title")))])]),t._v(" "),n("ul",{staticClass:"overflow-x-hidden font-medium"},t._l(t.toc,(function(link){return n("li",{key:link.id,staticClass:"hover:text-gray-900 dark:hover:text-gray-100 ",class:{"text-primary-500 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-400":t.exactActiveLink===link.id||t.activeLink===link.id,"text-gray-700 dark:text-gray-200":!(t.exactActiveLink===link.id||t.activeLink===link.id)}},[n("a",{staticClass:"block py-1 transition-colors duration-100 transform scrollactive-item ",class:{"":2===link.depth,"border-l-2 border-gray-100 dark:border-gray-800 pl-3 text-gray-500 dark:text-gray-400":3===link.depth,"dark:border-primary-500 border-primary-500 text-primary-400":3===link.depth&&(t.exactActiveLink===link.id||t.activeLink===link.id)},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0),t._v(" "),n("PageTocBottom")],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageTocTop:n(244).default,PageTocBottom:n(245).default})}}]);