(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{142:function(n,t,e){"use strict";e.d(t,"a",function(){return C}),e.d(t,"b",function(){return y}),e.d(t,"d",function(){return w}),e.d(t,"c",function(){return k});var r=e(12),o=(e(45),e(61),e(144),e(90),e(23)),c=(e(24),e(145)),_=e.n(c),l=e(146),d=e.n(l),f=e(143),v=e.n(f),h=e(147),m=e.n(h);function C(){return _.a.get("/2020/data/timetable.json").then(function(n){return{days:n.data.days}})}function y(){return _.a.get("/2020/data/event_info.json").then(function(n){return{conference:n.data.conference}})}function w(){return C().then(function(n){var t=n.days,e=new Map;return m()(t,function(n){return m()(n.timeslots,function(n){return n.events})}).filter(function(n){return!(!n||!n.topic)&&(!e.has(n.internal)&&(e.set(n.internal,!0),!0))}).sort(function(n,t){return n.display.localeCompare(t.display)})})}function k(n){return C().then(function(t){var e=t.days,map=new Map;return e.forEach(function(n){var t=n.day,e=n.date;n.timeslots.forEach(function(n){var c=n.startTime,_=n.endTime;n.events.forEach(function(n){n.topic&&map.set(function(n){if("object"!==Object(o.a)(n))return"";if("string"!=typeof n.internal)return n.replace(/[^_\W]+/g,"","").replace(" ","-").toLowerCase();var u=v.a.parse(n.internal);return d.a.basename(u.pathname)}(n),Object(r.a)({day:t,date:e,startTime:c,endTime:_},n))})})}),map.get(n)})}},151:function(n,t,e){},198:function(n,t,e){"use strict";var r=e(151);e.n(r).a},218:function(n,t,e){"use strict";e.r(t);var r=e(142),o={name:"Sponsors",head:{title:"Sponsors | Hong Kong Open Source Confernce 2020",meta:[{hid:"og:title",property:"og:title",content:"Sponsors Us | Hong Kong Open Source Conference 2020"},{hid:"description",name:"description",content:"HKOSCon depends on the industry’s sponsorship as the event is at minimum cost."}]},data:function(){return{sponsors:[],patrons:[]}},asyncData:function(){return Object(r.b)().then(function(data){return{sponsors:data.conference.sponsors,patrons:data.conference.patrons}})}},c=(e(198),e(17)),component=Object(c.a)(o,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("main",{staticClass:"section"},[e("div",{staticClass:"container sponsor__container"},[e("h1",{staticClass:"title is-3"},[n._v("\n      Sponsors\n    ")]),n._v(" "),n._l(n.sponsors,function(t){return e("div",{key:t.name,staticClass:"sponsor__container__tier"},[e("h2",{staticClass:"title is-4"},[n._v(n._s(t.name))]),n._v(" "),e("div",{staticClass:"sponsor__container__tier__sponsors"},n._l(t.sponsors,function(t){return e("div",{key:t.title,staticClass:"sponsor__container__tier__sponsor"},[e("div",{staticClass:"sponsor__container__tier__sponsor__logo"},[e("img",{attrs:{src:t.logo,alt:t.title}})]),n._v(" "),e("div",{staticClass:"sponsor__container__tier__sponsor__desc"},[e("h3",{staticClass:"title is-5"},[n._v(n._s(t.title))]),n._v(" "),t.description?e("div",{staticClass:"content-wrapper"},[e("details",[e("summary",[n._v("About")]),n._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:n._s(t.description)}})])]):n._e(),n._v(" "),e("div",{staticClass:"actions"},[e("ul",{staticClass:"links"},n._l(t.links,function(link,t){return e("li",{key:t},[e("a",{staticClass:"button is-link",attrs:{href:link.url}},[n._v(n._s(link.title))])])}),0)])])])}),0)])}),n._v(" "),n.patrons.length>0?e("div",{staticClass:"sponsor__container__tier"},[e("h2",{staticClass:"title is-3"},[n._v("Patrons")]),n._v(" "),e("div",{staticClass:"sponsor__container__tier__sponsors"},[e("div",{staticClass:"sponsor__container__tier__sponsor sponsor__container__tier__patron"},[e("ul",n._l(n.patrons,function(t){return e("li",{key:t},[n._v("\n              "+n._s(t)+"\n            ")])}),0)])])]):n._e()],2)])},[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=3940030ec50a3a0aae89.js.map